---
name: create-epics
description: "Turn the design and architecture into epics, one per module area."
user-invocable: true
allowed-tools: Read, Glob, Grep, Write, Edit, AskUserQuestion, Bash(npx maru *), Bash(npm run *), Bash(node tools/*), Bash(git log*), Bash(git status*), Bash(git diff*)
---

# Create Epics

Turn the design and architecture into epics, one per module area.

## Steps

1. Read the design and the plan.
2. Create epics such as Contract, DSP, Face, Presets, Demo, Release.
3. Order them by risk, not by convention.

## Output

Write to `production/epics/`. Ask "May I write this to [filepath]?" first, unless `modes.automation` is `act`.

## Done when

Epics exist and are ordered by risk.

