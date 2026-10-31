#!/usr/bin/env node
// Gives a copy of this template its own identity, before its first publish.
//
//   node tools/rename-project.mjs "Dub Tape Echo" com.example.dub-tape-echo
import { readFileSync, writeFileSync } from "node:fs"
import { join } from "node:path"
import { root } from "./_config.mjs"

const [name, id] = process.argv.slice(2)
if (!name || !id || !/^[a-z0-9]+(\.[a-z0-9-]+)+$/.test(id)) {
  console.error('Usage: node tools/rename-project.mjs "Plugin Name" com.yourname.plugin-name')
  process.exit(2)
}
const slug = id.split(".").at(-1)

const edit = (file, fn) => {
  const path = join(root, file), before = readFileSync(path, "utf8"), after = fn(before)
  if (after !== before) { writeFileSync(path, after); console.log(`updated ${file}`) }
}
edit("src/index.ts", (t) => t
  .replace(/^\s*\/\/ Set your own reverse-DNS module id.*\n/m, "")
  .replace(/id: "[^"]+"/, `id: "${id}"`)
  .replace(/^(\s*)name: "[^"]+"/m, `$1name: "${name}"`))
edit("package.json", (t) => {
  const p = JSON.parse(t)
  p.name = slug
  if (p.maru?.moduleId) p.maru.moduleId = id
  return JSON.stringify(p, null, 2) + "\n"
})
edit("studio.config.json", (t) => {
  const c = JSON.parse(t)
  c.project = { ...c.project, name }
  return JSON.stringify(c, null, 2) + "\n"
})
console.log(`Now run: npx maru module check . --fast and npx maru publish --dry-run`)
