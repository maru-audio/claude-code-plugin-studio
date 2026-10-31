---
name: day-one-patch
description: "First patch after launch: known issues and the first feedback, with a rollback plan."
user-invocable: true
allowed-tools: Read, Glob, Grep, Write, Edit, AskUserQuestion, Bash(npx maru *), Bash(npm run *), Bash(node tools/*), Bash(git log*), Bash(git status*), Bash(git diff*)
---

# Day One Patch

First patch after launch: known issues and the first feedback, with a rollback plan.

## Steps

1. List what was found after launch.
2. Pick the few that matter.
3. State how to go back: `npx maru unpublish --help` shows what is available today.
4. Run `/publish` after a yes.

## Review by rigor

Read `modes.rigor` with `node tools/config-get.mjs`. See `.claude/docs/director-gates.md`.

| Rigor | Review |
| --- | --- |
| `minimal` | None. Show the result to the person. |
| `standard` | The department lead reviews before you ask for approval. |
| `full` | Also `release-manager`. |

## Done when

The patch is scoped and its rollback is stated.

## Known gaps

This skill may hit: [DEVX-068](../../../docs/KNOWN-GAPS.md#devx-068). If it does, quote the exact message and carry on with what is left. Do not substitute another runtime.
