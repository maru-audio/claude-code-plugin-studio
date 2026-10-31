import { readInput } from "./_lib.mjs"
const path = String(readInput().tool_input?.file_path ?? "")
if (/\.claude\/(skills|agents)\//.test(path)) console.log("Studio file changed. Run /skill-test to check the commands it names.")
