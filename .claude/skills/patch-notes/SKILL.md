---
name: patch-notes
description: "Musician-facing notes from the changelog."
user-invocable: true
allowed-tools: Read, Glob, Grep, Write, Edit, AskUserQuestion, Bash(npx maru *), Bash(npm run *), Bash(node tools/*), Bash(git log*), Bash(git status*), Bash(git diff*), Task
---

# Patch Notes

Musician-facing notes from the changelog.

## Who leads

`community-manager`

## Steps

1. Read the changelog.
2. Translate to what someone will hear or see.
3. State whether saved projects could sound different.

## Review by rigor

Read `modes.rigor` with `node tools/config-get.mjs`. See `.claude/docs/director-gates.md`.

| Rigor | Review |
| --- | --- |
| `minimal` | None. Show the result to the person. |
| `standard` | `community-manager` reviews before you ask for approval. |
| `full` | Also `release-manager`. |

## Done when

Notes exist, and the effect on saved sessions is stated.

