// A dry run uploads nothing, so it needs no approval. A real publish always asks.
import { readInput } from "./_lib.mjs"
const cmd = String(readInput().tool_input?.command ?? "")
if (!/\bmaru\s+publish\b/.test(cmd)) process.exit(0)
const dry = /--(dry-run|help)\b/.test(cmd) && !/[;&|]/.test(cmd)
console.log(JSON.stringify({ hookSpecificOutput: { hookEventName: "PreToolUse",
  permissionDecision: dry ? "allow" : "ask",
  permissionDecisionReason: dry ? "A publication dry run uploads nothing." : "Publishing puts this online. A first publication is public." } }))
