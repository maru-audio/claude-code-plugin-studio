// Warns when an audio or image file arrives with no rights entry in design/assets.md.
import { readFileSync } from "node:fs"
import { basename, join } from "node:path"
import { projectDir, readInput } from "./_lib.mjs"
const path = String(readInput().tool_input?.file_path ?? "")
if (!/\/assets\/.*\.(wav|aif+|flac|mp3|ogg|png|jpe?g|webp)$/i.test(path)) process.exit(0)
let rights = ""
try { rights = readFileSync(join(projectDir, "design/assets.md"), "utf8") } catch {}
if (!rights.includes(basename(path))) console.log(`Note: ${basename(path)} has no rights entry in design/assets.md. Unknown rights block release.`)
