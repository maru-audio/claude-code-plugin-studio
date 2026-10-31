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

## Review by rigor

Read `modes.rigor` with `node tools/config-get.mjs`. See `.claude/docs/director-gates.md`.

| Rigor | Review |
| --- | --- |
| `minimal` | None. Show the result to the person. |
| `standard` | The department lead reviews before you ask for approval. |
| `full` | Also `producer`. |

## Done when

Epics exist and are ordered by risk.

