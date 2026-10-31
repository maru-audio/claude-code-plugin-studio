---
name: bug-triage
description: "Re-evaluate open bugs: priority against severity, and what is a systemic trend."
user-invocable: true
allowed-tools: Read, Glob, Grep, Write, Edit, AskUserQuestion, Bash(npx maru *), Bash(npm run *), Bash(node tools/*), Bash(git log*), Bash(git status*), Bash(git diff*), Task
---

# Bug Triage

Re-evaluate open bugs: priority against severity, and what is a systemic trend.

## Who leads

`qa-lead`

## Steps

1. Read `production/bugs/`.
2. Rank by harm to the musician.
3. Name patterns.
4. Recommend what to fix next.

## Review by rigor

Read `modes.rigor` with `node tools/config-get.mjs`. See `.claude/docs/director-gates.md`.

| Rigor | Review |
| --- | --- |
| `minimal` | None. Show the result to the person. |
| `standard` | `qa-lead` reviews before you ask for approval. |
| `full` | Also `producer`. |

## Done when

Bugs are ranked with a next recommendation.

