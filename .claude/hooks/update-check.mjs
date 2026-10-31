// One line at session start when a newer maruaudio exists. Reads a daily cache, and refreshes it in the background.
import { spawn } from "node:child_process"
import { mkdirSync, readFileSync, statSync } from "node:fs"
import { homedir } from "node:os"
import { join } from "node:path"
import { config, projectDir } from "./_lib.mjs"
if (process.env.CI || config().features?.update_check === false) process.exit(0)
const dir = join(homedir(), ".cache/maru-plugin-studio"), cache = join(dir, "latest.txt")
mkdirSync(dir, { recursive: true })
let age = Infinity
try { age = Date.now() - statSync(cache).mtimeMs } catch {}
try {
  const latest = readFileSync(cache, "utf8").trim()
  const here = JSON.parse(readFileSync(join(projectDir, "node_modules/maruaudio/package.json"), "utf8")).version
  if (latest && latest !== here) console.log(`maruaudio ${latest} is available; this project has ${here}. See UPGRADING.md.`)
} catch {}
if (age > 86_400_000) spawn("sh", ["-c", `npm view maruaudio version > "${cache}" 2>/dev/null`], { detached: true, stdio: "ignore" }).unref()
