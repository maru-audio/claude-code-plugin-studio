---
name: tech-debt
description: "Track and prioritize technical debt: TODOs, temporary labels, workarounds."
user-invocable: true
allowed-tools: Read, Glob, Grep, Write, Edit, AskUserQuestion, Bash(npx maru *), Bash(npm run *), Bash(node tools/*), Bash(git log*), Bash(git status*), Bash(git diff*)
---

# Tech Debt

Track and prioritize technical debt: TODOs, temporary labels, workarounds.

## Steps

1. Search `src/` for TODO, FIXME and temporary markers.
2. Read `production/gaps.md` for workarounds.
3. Update `production/tech-debt.md` with owner and cost.

## Output

Write to `production/tech-debt.md`. Ask "May I write this to [filepath]?" first, unless `modes.automation` is `act`.

## Review by rigor

Read `modes.rigor` with `node tools/config-get.mjs`. See `.claude/docs/director-gates.md`.

| Rigor | Review |
| --- | --- |
| `minimal` | None. Show the result to the person. |
| `standard` | The department lead reviews before you ask for approval. |
| `full` | Also `technical-director`. |

## Done when

The debt register is current.

