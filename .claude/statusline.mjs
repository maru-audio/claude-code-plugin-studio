import { readFileSync } from "node:fs"
import { join } from "node:path"
const dir = process.env.CLAUDE_PROJECT_DIR ?? process.cwd()
let c = {}
try { c = JSON.parse(readFileSync(join(dir, "studio.config.json"), "utf8")) } catch {}
console.log(`Maru Plugin Studio · ${c.project?.stage ?? "Concept"} · ${c.modes?.rigor ?? "minimal"}`)
