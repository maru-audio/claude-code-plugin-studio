// Shared helpers for studio hooks. Hooks use Node because every Maru project has it.
import { spawnSync } from "node:child_process"
import { existsSync, readFileSync } from "node:fs"
import { join } from "node:path"

export const projectDir = process.env.CLAUDE_PROJECT_DIR ?? process.cwd()

export function readInput() {
  try { return JSON.parse(readFileSync(0, "utf8") || "{}") } catch { return {} }
}
export function config() {
  const read = (f) => { try { return JSON.parse(readFileSync(join(projectDir, f), "utf8")) } catch { return {} } }
  const base = read("studio.config.json"), local = read("studio.local.json")
  return { ...base, ...local, project: { ...base.project, ...local.project }, modes: { ...base.modes, ...local.modes }, features: { ...base.features, ...local.features } }
}
export function git(...args) {
  const r = spawnSync("git", args, { cwd: projectDir, encoding: "utf8" })
  return r.status === 0 ? r.stdout.trim() : ""
}
export function deny(message) { console.error(message); process.exit(2) }
export function has(path) { return existsSync(join(projectDir, path)) }
