import { RIGOR, setKey } from "./_config.mjs"
const args = process.argv.slice(2), local = args.includes("--local"), [key, value] = args.filter((a) => a !== "--local")
if (!key || value === undefined) { console.error("Usage: node tools/config-set.mjs [--local] <key> <value>"); process.exit(2) }
if (key === "modes.rigor" && !RIGOR[value]) { console.error(`modes.rigor must be one of ${Object.keys(RIGOR).join(", ")}`); process.exit(2) }
setKey(local ? "studio.local.json" : "studio.config.json", key, value)
console.log(`${key} = ${value}${local ? " (local)" : ""}`)
