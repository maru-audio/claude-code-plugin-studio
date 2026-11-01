#!/usr/bin/env node
// For maintainers of this template, not for a project made from it. Compares the
// module files with what the installed `maruaudio` scaffolds today, so a new SDK
// release cannot leave this repository on an old starter without anyone noticing.
//
//   node tools/check-starter-drift.mjs
import { spawnSync } from "node:child_process"
import { existsSync, mkdtempSync, readFileSync, readdirSync, rmSync, statSync } from "node:fs"
import { tmpdir } from "node:os"
import { join, relative } from "node:path"
import { merged, root } from "./_config.mjs"

const files = (dir, out = []) => {
  for (const name of readdirSync(dir)) {
    const path = join(dir, name)
    if (statSync(path).isDirectory()) files(path, out)
    else out.push(path)
  }
  return out
}

const work = mkdtempSync(join(tmpdir(), "maru-starter-drift-"))
try {
  // The folder name sets the module id, so match this template's.
  const fresh = join(work, "maru-agentic-template")
  const made = spawnSync(join(root, "node_modules/.bin/maru"), ["init", fresh, "--from", "blank-effect", "--name", merged().project.name], { encoding: "utf8" })
  if (made.status !== 0) {
    console.error(`maru init failed:\n${made.stdout}${made.stderr}`)
    process.exit(2)
  }
  const changed = []
  for (const path of files(join(fresh, "src"))) {
    const rel = relative(fresh, path), here = join(root, rel)
    if (!existsSync(here)) changed.push(`${rel}: new in the starter`)
    else if (readFileSync(here, "utf8") !== readFileSync(path, "utf8")) changed.push(`${rel}: differs`)
  }
  for (const path of files(join(root, "src"))) {
    if (!existsSync(join(fresh, relative(root, path)))) changed.push(`${relative(root, path)}: not in the starter`)
  }
  console.log(changed.length ? `Module files differ from the current starter:\n${changed.map((c) => `  ${c}`).join("\n")}` : "Module files match the current starter")
  process.exit(changed.length ? 1 : 0)
} finally {
  rmSync(work, { recursive: true, force: true })
}
