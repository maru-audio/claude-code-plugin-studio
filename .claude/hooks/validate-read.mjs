// Refuses a whole-file read of a large design or production document and lists its headings.
import { readFileSync, statSync } from "node:fs"
import { config, deny, readInput, projectDir } from "./_lib.mjs"
const { tool_input: t = {} } = readInput()
const path = String(t.file_path ?? "")
const rel = path.replace(projectDir + "/", "")
const c = config()
if (c.features?.read_guard === false || t.offset || t.limit || !/^(design|docs\/architecture|production)\//.test(rel)) process.exit(0)
let size = 0
try { size = statSync(path).size } catch { process.exit(0) }
if (size <= (c.features?.read_guard_kb ?? 40) * 1024) process.exit(0)
const headings = readFileSync(path, "utf8").split("\n").flatMap((l, i) => (l.startsWith("#") ? [`${i + 1}: ${l}`] : []))
deny(`${rel} is ${Math.round(size / 1024)} KB. Read one section with offset and limit.\n${headings.join("\n")}`)
