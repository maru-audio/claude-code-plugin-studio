import { readdirSync, readFileSync } from "node:fs"
import { join } from "node:path"
import { root } from "./_config.mjs"
let bad = 0
const dir = join(root, ".claude/skills")
for (const name of readdirSync(dir)) {
  const t = readFileSync(join(dir, name, "SKILL.md"), "utf8"), fails = []
  if (!new RegExp(`^name: ${name}$`, "m").test(t)) fails.push("name does not match its folder")
  if (!/^description: .{20,}/m.test(t)) fails.push("description missing or short")
  if (!/^allowed-tools:/m.test(t)) fails.push("no allowed-tools")
  if (!/^## Steps/m.test(t)) fails.push("no Steps section")
  if (!/^## Done when/m.test(t)) fails.push("no Done when section")
  if (fails.length) { bad++; console.log(`${name}: ${fails.join("; ")}`) }
}
console.log(bad ? `${bad} skills need work` : "All skills pass structure checks")
process.exit(bad ? 1 : 0)
