import { readFileSync } from "node:fs"
import { join } from "node:path"
import { config, git, projectDir, has } from "./_lib.mjs"
const c = config()
let version = "not installed"
try { version = JSON.parse(readFileSync(join(projectDir, "node_modules/maruaudio/package.json"), "utf8")).version } catch {}
console.log("=== Claude Code Plugin Studio: session context ===")
console.log(`Branch: ${git("rev-parse", "--abbrev-ref", "HEAD") || "no commits yet"}`)
console.log(`Stage: ${c.project?.stage ?? "Concept"} · Rigor: ${c.modes?.rigor ?? "minimal"} · maruaudio: ${version}`)
if (/(claude-code-plugin-studio|maru-agentic-template|maru-plugin-studio)(\.git)?$/i.test(git("remote", "get-url", "origin"))) console.log("Warning: origin still points at the template, so a push would go there.")
const log = git("log", "--oneline", "-3")
if (log) console.log(`Recent commits:\n${log.replace(/^/gm, "  ")}`)
if (has("production/session-state/active.md")) console.log("Saved state: production/session-state/active.md")
console.log("New here? Run /start. Stuck? Run /help.")
