import { readFileSync, writeFileSync } from "node:fs"
import { dirname, join } from "node:path"
import { fileURLToPath } from "node:url"
export const root = join(dirname(fileURLToPath(import.meta.url)), "..")
export const RIGOR = {
  minimal: { review_mode: "solo", required_sections: [], docs_density: "terse", qa_level: "smoke" },
  standard: { review_mode: "lean", required_sections: ["Musical promise", "Controls", "Signal flow", "Presets", "Acceptance"], docs_density: "balanced", qa_level: "standard" },
  full: { review_mode: "full", required_sections: ["Musical promise", "Controls", "Signal flow", "Behaviour at extremes", "Presets", "Face", "Acceptance", "Not in scope"], docs_density: "thorough", qa_level: "full" },
}
const read = (f) => { try { return JSON.parse(readFileSync(join(root, f), "utf8")) } catch { return {} } }
export function merged() {
  const a = read("studio.config.json"), b = read("studio.local.json"), out = structuredClone(a)
  for (const [k, v] of Object.entries(b)) out[k] = typeof v === "object" && v ? { ...out[k], ...v } : v
  return { ...out, effective: RIGOR[out.modes?.rigor ?? "minimal"] }
}
export function setKey(file, key, value) {
  const data = read(file); let o = data; const parts = key.split(".")
  for (const p of parts.slice(0, -1)) o = o[p] ??= {}
  o[parts.at(-1)] = value === "true" ? true : value === "false" ? false : value
  writeFileSync(join(root, file), JSON.stringify(data, null, 2) + "\n")
}
