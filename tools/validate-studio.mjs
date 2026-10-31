#!/usr/bin/env node
// Checks this studio against the installed Maru CLI, then tries each capability
// on a throwaway copy of the project. It never signs in, publishes or uploads.
//
//   npm run studio:validate              static checks and capability walk
//   npm run studio:validate -- --static  only commands, flags, guides and links
//   npm run studio:validate -- --only <id,id>
//   npm run studio:validate -- --strict  exit 1 when anything failed
import { spawn, spawnSync } from "node:child_process"
import { cpSync, existsSync, mkdirSync, mkdtempSync, readFileSync, readdirSync, rmSync, statSync, symlinkSync, writeFileSync } from "node:fs"
import { tmpdir } from "node:os"
import { dirname, join, relative } from "node:path"
import { fileURLToPath } from "node:url"

const root = join(dirname(fileURLToPath(import.meta.url)), "..")
const args = process.argv.slice(2)
const staticOnly = args.includes("--static")
const strict = args.includes("--strict")
const onlyAt = args.indexOf("--only")
const only = onlyAt >= 0 ? new Set(args[onlyAt + 1].split(",")) : null
const maruBin = join(root, "node_modules/.bin/maru")
if (!existsSync(maruBin)) {
  console.error("maru is not installed here. Run your package manager's install first.")
  process.exit(2)
}
const env = { ...process.env, MARU_SILENT: "1", NO_COLOR: "1" }

function maruSync(argv, cwd = root, timeout = 60_000) {
  const r = spawnSync(maruBin, argv, { cwd, env, encoding: "utf8", timeout, stdio: ["ignore", "pipe", "pipe"] })
  return { code: r.status, out: `${r.stdout ?? ""}${r.stderr ?? ""}` }
}

// --- static checks ---------------------------------------------------------

function walkFiles(dir, out = []) {
  if (!existsSync(dir)) return out
  for (const name of readdirSync(dir)) {
    if (name === "node_modules" || name === ".git" || name === "build") continue
    const p = join(dir, name)
    if (statSync(p).isDirectory()) walkFiles(p, out)
    else if (p.endsWith(".md")) out.push(p)
  }
  return out
}

const docFiles = [
  ...["README.md", "AGENTS.md", "CLAUDE.md", "CONTRIBUTING.md", "UPGRADING.md"].map((f) => join(root, f)).filter(existsSync),
  ...walkFiles(join(root, ".claude")),
  ...walkFiles(join(root, "docs")),
  ...walkFiles(join(root, "design")),
]

const helpCache = new Map()
function help(path) {
  const key = path.join(" ")
  if (!helpCache.has(key)) helpCache.set(key, maruSync([...path, "--help"]))
  return helpCache.get(key)
}
function subcommands(text) {
  const names = new Set()
  let on = false
  for (const line of text.split("\n")) {
    if (/^[A-Z][A-Za-z -]*:$/.test(line)) on = /commands|operation groups/i.test(line)
    else if (on) {
      const m = line.match(/^ {2}([a-z][a-z0-9-]*)(?:\|([a-z-]+))?(?:\s|$)/)
      if (m) { names.add(m[1]); if (m[2]) names.add(m[2]) }
    }
  }
  return names
}

function checkInvocation(tokens) {
  const path = []
  let i = 0
  while (i < tokens.length && !tokens[i].startsWith("-")) {
    const subs = subcommands(help(path).out)
    if (subs.has(tokens[i])) { path.push(tokens[i]); i++ } else break
  }
  const nextToken = tokens[i]
  if (path.length === 0 && nextToken && /^[a-z]/.test(nextToken)) return { ok: false, why: `no command \`maru ${nextToken}\`` }
  const pathHelp = help(path)
  const subs = subcommands(pathHelp.out)
  if (subs.size > 0 && nextToken && /^[a-z]/.test(nextToken) && !/^Arguments:/m.test(pathHelp.out)) {
    return { ok: false, why: `\`maru ${path.join(" ")}\` has no \`${nextToken}\`` }
  }
  for (const t of tokens.slice(i)) {
    const flag = t.match(/^(--[a-z][a-z0-9-]*)/)
    if (flag && flag[1] !== "--help" && !pathHelp.out.includes(flag[1]) && !help([]).out.includes(flag[1])) {
      return { ok: false, why: `\`maru ${path.join(" ")}\` has no \`${flag[1]}\`` }
    }
  }
  return { ok: true, path, rest: tokens.slice(i) }
}

function extractInvocations(text) {
  const found = new Set()
  const spans = [...text.matchAll(/```[a-z]*\n([\s\S]*?)```/g)].map((m) => m[1]).concat([...text.matchAll(/`([^`\n]+)`/g)].map((m) => m[1]))
  for (const span of spans) {
    for (const line of span.split("\n")) {
      const m = line.match(/(?:^|\s|\()(?:npx )?maru ((?:[^\s#|&;)]+ ?)+)/)
      if (m) found.add(m[1].trim())
    }
  }
  return [...found]
}

function runStatic() {
  const problems = []
  const guides = new Set([...maruSync(["guide", "list"]).out.matchAll(/^- ([a-z0-9-]+):/gm)].map((m) => m[1]))
  const agents = new Set(readdirSync(join(root, ".claude/agents")).map((f) => f.replace(/\.md$/, "")))
  const skills = new Set(readdirSync(join(root, ".claude/skills")))
  let invocations = 0
  for (const file of docFiles) {
    const rel = relative(root, file)
    const text = readFileSync(file, "utf8")
    for (const inv of extractInvocations(text)) {
      const tokens = inv.split(/\s+/).filter((t) => !/^[<[]/.test(t) && !/[>\]]$/.test(t))
      if (tokens.length === 0) continue
      invocations++
      const r = checkInvocation(tokens)
      if (!r.ok) { problems.push({ file: rel, kind: "command", what: `maru ${inv}`, why: r.why }); continue }
      if (r.path.join(" ") === "guide read") {
        for (const g of r.rest.filter((t) => !t.startsWith("-") && t !== "X")) {
          if (!guides.has(g)) problems.push({ file: rel, kind: "guide", what: g, why: "not in `maru guide list`" })
        }
      }
    }
    if (rel.startsWith(".claude/")) {
      for (const m of text.matchAll(/`([a-z][a-z-]+)`/g)) {
        if (/(-director|-engineer|-designer|-specialist|-lead|-manager|-tester|-analyst|-librarian|-producer)$/.test(m[1]) && !agents.has(m[1])) {
          problems.push({ file: rel, kind: "agent", what: m[1], why: "no such agent" })
        }
      }
      for (const m of text.matchAll(/\.claude\/docs\/templates\/([a-z-]+\.md)/g)) {
        if (!existsSync(join(root, ".claude/docs/templates", m[1]))) problems.push({ file: rel, kind: "template", what: m[1], why: "no such template" })
      }
    }
    for (const m of text.matchAll(/`\/([a-z][a-z-]+)(?:[ `])/g)) {
      if (!skills.has(m[1]) && !["dev", "tmp", "mcp", "usr", "docs", "studio", "plugins"].includes(m[1])) problems.push({ file: rel, kind: "skill", what: `/${m[1]}`, why: "no such skill" })
    }
  }
  return { problems, invocations, files: docFiles.length }
}

// --- capability walk -------------------------------------------------------

const UNAVAILABLE = /not available|not installed|not served|not implemented|needs toolchain|does not ship|unavailable|cannot be unpublished/i

function run(cap, cwd) {
  return new Promise((resolve) => {
    const started = Date.now()
    const child = spawn(cap.bin === "tsc" ? join(root, "node_modules/.bin/tsc") : maruBin, cap.args, { cwd, env, stdio: ["ignore", "pipe", "pipe"], detached: true })
    let out = ""
    let done = false
    const finish = (code, timedOut = false) => {
      if (done) return
      done = true
      clearTimeout(timer)
      try { process.kill(-child.pid, "SIGTERM") } catch {}
      resolve({ code, out, ms: Date.now() - started, timedOut })
    }
    const timer = setTimeout(() => finish(null, true), (cap.timeoutSec ?? 120) * 1000)
    const onData = (d) => {
      out += d
      if (cap.until && new RegExp(cap.until).test(out)) finish(0)
    }
    child.stdout.on("data", onData)
    child.stderr.on("data", onData)
    child.on("close", (code) => finish(code))
    child.on("error", (e) => { out += String(e); finish(1) })
  })
}

function classify(cap, r) {
  if (r.timedOut) return "timeout"
  if (cap.okText && new RegExp(cap.okText).test(r.out)) return "pass"
  if (r.code === 0 && !(cap.failText && new RegExp(cap.failText).test(r.out))) return "pass"
  return UNAVAILABLE.test(r.out) ? "unavailable" : "fail"
}

function writeSineWav(path) {
  const rate = 48_000
  const frames = rate * 2
  const b = Buffer.alloc(44 + frames * 2)
  b.write("RIFF", 0); b.writeUInt32LE(36 + frames * 2, 4); b.write("WAVEfmt ", 8); b.writeUInt32LE(16, 16)
  b.writeUInt16LE(1, 20); b.writeUInt16LE(1, 22); b.writeUInt32LE(rate, 24); b.writeUInt32LE(rate * 2, 28)
  b.writeUInt16LE(2, 32); b.writeUInt16LE(16, 34); b.write("data", 36); b.writeUInt32LE(frames * 2, 40)
  for (let i = 0; i < frames; i++) b.writeInt16LE(Math.round(6000 * Math.sin((2 * Math.PI * 440 * i) / rate)), 44 + i * 2)
  writeFileSync(path, b)
}

function makeSandbox() {
  const dir = mkdtempSync(join(tmpdir(), "maru-studio-validate-"))
  for (const name of ["src", "package.json", "maru.config.json", "tsconfig.json", "pnpm-workspace.yaml", ".gitignore", ".maru"]) {
    if (existsSync(join(root, name))) cpSync(join(root, name), join(dir, name), { recursive: true, filter: (s) => !/\.maru\/(cache|reports|generated)/.test(s) })
  }
  symlinkSync(join(root, "node_modules"), join(dir, "node_modules"), "dir")
  writeSineWav(join(dir, "stimulus.wav"))
  return dir
}

async function runCapabilities() {
  const caps = JSON.parse(readFileSync(join(root, "tools/capabilities.json"), "utf8"))
  const results = []
  const sandbox = makeSandbox()
  try {
    for (const cap of caps.probes) {
      if (only && !only.has(cap.id)) continue
      let cwd = sandbox
      if (cap.fresh) {
        cwd = makeSandbox()
      }
      process.stdout.write(`  ${cap.id} ... `)
      if (cap.setup) await run({ args: cap.setup, timeoutSec: 120 }, cwd)
      const r = await run(cap, cwd)
      const status = classify(cap, r)
      console.log(`${status} (${(r.ms / 1000).toFixed(1)} s)`)
      const lastLines = r.out.split("\n").map((l) => l.trim()).filter(Boolean).slice(-3).join(" | ").replaceAll(`/private${cwd}`, "<project>").replaceAll(cwd, "<project>").replaceAll(root, "<project>").slice(0, 300)
      results.push({ ...cap, status, ms: r.ms, code: r.code, evidence: lastLines })
      if (cap.fresh) rmSync(cwd, { recursive: true, force: true })
    }
    for (const a of caps.absent) {
      if (only && !only.has(a.id)) continue
      const hits = []
      for (const path of a.searchIn) {
        if (new RegExp(a.terms, "i").test(help(path.split(" ")).out)) hits.push(path)
      }
      results.push({ ...a, args: [], status: hits.length ? "review" : "no-command", ms: 0, evidence: hits.length ? `Help for ${hits.join(", ")} now mentions it` : `No command mentions: ${a.terms.replaceAll("|", ", ")}` })
    }
  } finally {
    rmSync(sandbox, { recursive: true, force: true })
  }
  return results
}

// --- report ----------------------------------------------------------------

const version = maruSync(["--version"]).out.trim().split("\n").pop()
const stat = runStatic()
console.log(`Static: ${stat.invocations} command references in ${stat.files} files, ${stat.problems.length} problems`)
for (const p of stat.problems) console.log(`  ${p.kind}: ${p.what} (${p.file}): ${p.why}`)

let caps = []
if (!staticOnly) {
  console.log("Capabilities (throwaway copy; nothing is uploaded):")
  caps = await runCapabilities()
}

const counts = caps.reduce((m, c) => ((m[c.status] = (m[c.status] ?? 0) + 1), m), {})
const esc = (s) => String(s).replaceAll("|", "\\|")
const lines = [
  "# Studio validation report",
  "",
  `Generated by \`npm run studio:validate\` with maruaudio ${version} on ${process.platform}/${process.arch}, node ${process.version}. ${new Date().toISOString().slice(0, 10)}.`,
  "",
  "A pass means the command ran and reported success. It says nothing about how the module sounds.",
  "",
  `**Static:** ${stat.invocations} command references checked in ${stat.files} files, ${stat.problems.length} problems.`,
  "",
]
if (stat.problems.length) {
  lines.push("| Kind | Reference | File | Why |", "| --- | --- | --- | --- |", ...stat.problems.map((p) => `| ${p.kind} | \`${esc(p.what)}\` | ${p.file} | ${esc(p.why)} |`), "")
}
if (caps.length) {
  lines.push(`**Capabilities:** ${Object.entries(counts).map(([k, v]) => `${v} ${k}`).join(", ")}.`, "", "| Capability | Result | Task | Command | Evidence |", "| --- | --- | --- | --- | --- |")
  const order = { fail: 0, timeout: 1, unavailable: 2, "no-command": 3, review: 4, pass: 5 }
  for (const c of [...caps].sort((a, b) => order[a.status] - order[b.status])) {
    const command = c.args.length ? `\`${c.bin ?? "maru"} ${esc(c.args.join(" "))}\`` : "none"
    const task = c.gap ? `${c.gap}${c.status === "pass" ? " (may be fixed)" : ""}` : ""
    lines.push(`| ${c.label} | ${c.status} | ${task} | ${command} | ${esc(c.evidence)} |`)
  }
  lines.push("")
  const unlinked = caps.filter((c) => !c.gap && c.status !== "pass")
  if (unlinked.length) lines.push("**Not yet recorded:** " + unlinked.map((c) => c.id).join(", ") + ". Use `/studio-gap` for these.", "")
}
mkdirSync(join(root, "production/validation"), { recursive: true })
writeFileSync(join(root, "production/validation/report.md"), lines.join("\n"))
writeFileSync(join(root, "production/validation/report.json"), JSON.stringify({ version, platform: process.platform, static: stat, capabilities: caps.map(({ evidence, id, status, gap, ms }) => ({ id, status, gap, ms, evidence })) }, null, 2) + "\n")
console.log(`Report: production/validation/report.md ${caps.length ? JSON.stringify(counts) : ""}`)
const failed = stat.problems.length > 0 || caps.some((c) => c.status === "fail" || c.status === "timeout")
process.exit(strict && failed ? 1 : 0)
