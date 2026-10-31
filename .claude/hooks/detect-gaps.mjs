import { config, has } from "./_lib.mjs"
const c = config(), notes = []
if (!has("node_modules/.bin/maru")) notes.push("Dependencies are not installed, so `npx maru` will not use the pinned version.")
if (!has("design/brief.md") && (c.project?.stage ?? "Concept") !== "Concept") notes.push("No design/brief.md, though the project is past Concept.")
if (!has("production/validation/report.md")) notes.push("This machine has not been validated. /studio-validate shows what works here.")
if (notes.length) console.log("Studio notes:\n" + notes.map((n) => `  - ${n}`).join("\n"))
