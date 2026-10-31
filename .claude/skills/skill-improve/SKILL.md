---
name: skill-improve
description: "Improve a skill through a test, fix and retest loop."
argument-hint: "[skill]"
user-invocable: true
allowed-tools: Read, Glob, Grep, Write, Edit, AskUserQuestion, Bash(npx maru *), Bash(npm run *), Bash(node tools/*), Bash(git log*), Bash(git status*), Bash(git diff*)
---

# Skill Improve

Improve a skill through a test, fix and retest loop.

## Steps

1. Run `/skill-test` on the skill.
2. Fix the smallest thing that failed.
3. Run it again. Keep the fix only if the result improved.

## Review by rigor

Read `modes.rigor` with `node tools/config-get.mjs`. See `.claude/docs/director-gates.md`.

| Rigor | Review |
| --- | --- |
| `minimal` | None. Show the result to the person. |
| `standard` | The department lead reviews before you ask for approval. |
| `full` | Also `qa-lead`. |

## Done when

The skill passes, or the remaining failure is stated.

