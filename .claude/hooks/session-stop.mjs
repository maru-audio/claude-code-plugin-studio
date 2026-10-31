import { appendFileSync, mkdirSync } from "node:fs"
import { join } from "node:path"
import { git, projectDir } from "./_lib.mjs"
const dir = join(projectDir, "production/session-logs")
mkdirSync(dir, { recursive: true })
appendFileSync(join(dir, "sessions.log"), `${new Date().toISOString()} ${git("rev-parse", "--short", "HEAD")} ${git("status", "--short").split("\n").filter(Boolean).length} uncommitted\n`)
