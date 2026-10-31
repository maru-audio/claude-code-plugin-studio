---
name: retrospective
description: "Sprint or milestone retrospective with actions for next time."
user-invocable: true
allowed-tools: Read, Glob, Grep, Write, Edit, AskUserQuestion, Bash(npx maru *), Bash(npm run *), Bash(node tools/*), Bash(git log*), Bash(git status*), Bash(git diff*)
---

# Retrospective

Sprint or milestone retrospective with actions for next time.

## Steps

1. Read completed work and blockers.
2. Ask the person what felt slow.
3. Write at most three actions.

## Output

Write to `production/retros/`. Ask "May I write this to [filepath]?" first, unless `modes.automation` is `act`.

## Done when

At most three actions are written.

