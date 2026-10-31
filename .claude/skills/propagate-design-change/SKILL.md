---
name: propagate-design-change
description: "Finds architecture decisions and stories made stale by a changed design document, and resolves each."
argument-hint: "[path]"
user-invocable: true
allowed-tools: Read, Glob, Grep, Write, Edit, AskUserQuestion, Bash(npx maru *), Bash(npm run *), Bash(node tools/*), Bash(git log*), Bash(git status*), Bash(git diff*)
---

# Propagate Design Change

Finds architecture decisions and stories made stale by a changed design document, and resolves each.

## Steps

1. Run `git diff` on the design document.
2. Search `docs/architecture/` and `production/stories/` for what it affects.
3. Walk through each with options: update, supersede, or leave with a reason.

## Review by rigor

Read `modes.rigor` with `node tools/config-get.mjs`. See `.claude/docs/director-gates.md`.

| Rigor | Review |
| --- | --- |
| `minimal` | None. Show the result to the person. |
| `standard` | The department lead reviews before you ask for approval. |
| `full` | Also `creative-director`. |

## Done when

No decision or story silently contradicts the design.

