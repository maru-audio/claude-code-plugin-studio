---
name: create-control-manifest
description: "Build a short must-do and never-do list for this module from accepted ADRs."
user-invocable: true
allowed-tools: Read, Glob, Grep, Write, Edit, AskUserQuestion, Bash(npx maru *), Bash(npm run *), Bash(node tools/*), Bash(git log*), Bash(git status*), Bash(git diff*)
---

# Create Control Manifest

Build a short must-do and never-do list for this module from accepted ADRs.

## Steps

1. Read accepted ADRs and `.claude/rules/`.
2. Write at most fifteen rules, each with its source.
3. Keep them specific: `src/dsp/processor.ts` must not allocate in `process`.

## Output

Write to `docs/architecture/control-manifest.md`. Ask "May I write this to [filepath]?" first, unless `modes.automation` is `act`.

## Done when

`docs/architecture/control-manifest.md` exists and fits on one screen.

