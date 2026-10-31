import { existsSync, readdirSync, readFileSync } from "node:fs"
import { join } from "node:path"
import { merged, root } from "./_config.mjs"
const count = (d) => { try { return readdirSync(join(root, d)).filter((f) => !f.startsWith(".")).length } catch { return 0 } }
const c = merged()
let version = "not installed"
try { version = JSON.parse(readFileSync(join(root, "node_modules/maruaudio/package.json"), "utf8")).version } catch {}
const rows = { stage: c.project?.stage, rigor: c.modes?.rigor, automation: c.modes?.automation, targets: (c.targets ?? []).join(",") || "none", maruaudio: version,
  brief: existsSync(join(root, "design/brief.md")), sound_bible: existsSync(join(root, "design/sound-bible.md")), face_bible: existsSync(join(root, "design/face-bible.md")),
  pdd: count("design/pdd"), adr: count("docs/architecture"), stories: count("production/stories"), sprints: count("production/sprints"), bugs: count("production/bugs"),
  listening_reports: count("production/qa/listening"), validated: existsSync(join(root, "production/validation/report.md")) }
for (const [k, v] of Object.entries(rows)) console.log(`${k}: ${v}`)
