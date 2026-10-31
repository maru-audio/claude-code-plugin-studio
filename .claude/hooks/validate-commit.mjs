// Runs the fast module check before a commit that changes the module.
import { spawnSync } from "node:child_process"
import { deny, git, has, projectDir, readInput } from "./_lib.mjs"
const { tool_input: t = {} } = readInput()
if (!/\bgit\b[^|;&]*\bcommit\b/.test(String(t.command ?? ""))) process.exit(0)
const staged = git("diff", "--cached", "--name-only").split("\n")
if (!staged.some((f) => /^(src\/|maru\.config\.json|package\.json)/.test(f)) || !has("node_modules/.bin/maru")) process.exit(0)
const r = spawnSync("node_modules/.bin/maru", ["module", "check", ".", "--fast"], { cwd: projectDir, encoding: "utf8", env: { ...process.env, MARU_SILENT: "1" } })
if (r.status !== 0) deny(`Commit blocked: the fast module check failed.\n${(r.stdout + r.stderr).slice(-1500)}`)
