import { git, has } from "./_lib.mjs"
console.log("Before compacting: keep the current story, what was verified and what was not.")
const changed = git("status", "--short")
if (changed) console.log(`Uncommitted:\n${changed}`)
if (has("production/session-state/active.md")) console.log("Update production/session-state/active.md.")
