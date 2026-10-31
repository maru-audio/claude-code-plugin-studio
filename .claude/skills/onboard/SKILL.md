---
name: onboard
description: "Onboarding doc for a new contributor or agent: project state, conventions and priorities."
argument-hint: "[role]"
user-invocable: true
allowed-tools: Read, Glob, Grep, Write, Edit, AskUserQuestion, Bash(npx maru *), Bash(npm run *), Bash(node tools/*), Bash(git log*), Bash(git status*), Bash(git diff*)
---

# Onboard

Onboarding doc for a new contributor or agent: project state, conventions and priorities.

## Steps

1. Read the project state.
2. Write what matters for the given role.
3. Link rather than repeat.

## Review by rigor

Read `modes.rigor` with `node tools/config-get.mjs`. See `.claude/docs/director-gates.md`.

| Rigor | Review |
| --- | --- |
| `minimal` | None. Show the result to the person. |
| `standard` | The department lead reviews before you ask for approval. |
| `full` | Also `producer`. |

## Done when

A short onboarding doc exists.

