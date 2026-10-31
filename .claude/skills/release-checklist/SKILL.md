---
name: release-checklist
description: "Pre-release checklist: build verification, levels, presets, rights, version."
user-invocable: true
allowed-tools: Read, Glob, Grep, Write, Edit, AskUserQuestion, Bash(npx maru *), Bash(npm run *), Bash(node tools/*), Bash(git log*), Bash(git status*), Bash(git diff*)
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
5. Report each item as done, failed or not run.

## Output

Write to `production/release/checklist.md` using `.claude/docs/templates/release-checklist.md`. Ask "May I write this to [filepath]?" first, unless `modes.automation` is `act`.

## Done when

Each item is done, failed or not run.

