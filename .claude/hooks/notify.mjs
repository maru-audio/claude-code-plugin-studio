import { spawnSync } from "node:child_process"
import { readInput } from "./_lib.mjs"
const message = String(readInput().message ?? "Claude needs you").replaceAll('"', "'")
if (process.platform === "darwin") spawnSync("osascript", ["-e", `display notification "${message}" with title "Maru Agentic Template"`])
