---
name: release-checklist
description: "Pre-release checklist: build verification, levels, presets, rights, version."
user-invocable: true
allowed-tools: Read, Glob, Grep, Write, Edit, AskUserQuestion, Bash(npx maru *), Bash(npm run *), Bash(node tools/*), Bash(git log*), Bash(git status*), Bash(git diff*), Task
---

# Release Checklist

Pre-release checklist: build verification, levels, presets, rights, version.

## Who leads

`release-manager`

## Steps

1. Run `/smoke-check` and `/gain-staging`.
2. Confirm listening reports exist.
3. Confirm rights with `/asset-audit`.
4. Check the version with `npx maru module version .`.
5. Run `/compare-release` if there is an earlier version.
6. Report each item as done, failed or not run.

## Output

Write to `production/release/checklist.md` using `.claude/docs/templates/release-checklist.md`. Ask "May I write this to [filepath]?" first, unless `modes.automation` is `act`.

## Review by rigor

Read `modes.rigor` with `node tools/config-get.mjs`. See `.claude/docs/director-gates.md`.

| Rigor | Review |
| --- | --- |
| `minimal` | None. Show the result to the person. |
| `standard` | `release-manager` reviews before you ask for approval. |
| `full` | Also `release-manager`. |

## Done when

Each item is done, failed or not run.

