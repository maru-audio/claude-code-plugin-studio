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

Write to `production/retros/` using `.claude/docs/templates/retrospective.md`. Ask "May I write this to [filepath]?" first, unless `modes.automation` is `act`.

## Review by rigor

Read `modes.rigor` with `node tools/config-get.mjs`. See `.claude/docs/director-gates.md`.

| Rigor | Review |
| --- | --- |
| `minimal` | None. Show the result to the person. |
| `standard` | The department lead reviews before you ask for approval. |
| `full` | Also `producer`. |

## Done when

At most three actions are written.

