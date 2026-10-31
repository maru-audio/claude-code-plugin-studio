import { appendFileSync, mkdirSync } from "node:fs"
import { join } from "node:path"
import { projectDir, readInput } from "./_lib.mjs"
const i = readInput(), dir = join(projectDir, "production/session-logs")
mkdirSync(dir, { recursive: true })
appendFileSync(join(dir, "agents.log"), `${new Date().toISOString()} stop ${i.agent_type ?? i.subagent_type ?? "unknown"}\n`)
