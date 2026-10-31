---
name: launch-checklist
description: "Launch readiness across every department: code, sound, face, docs, page, community, legal. Go or no-go."
user-invocable: true
allowed-tools: Read, Glob, Grep, Write, Edit, AskUserQuestion, Bash(npx maru *), Bash(npm run *), Bash(node tools/*), Bash(git log*), Bash(git status*), Bash(git diff*), Task
---

# Launch Checklist

Launch readiness across every department: code, sound, face, docs, page, community, legal. Go or no-go.

## Who leads

`release-manager`, `producer`

## Steps

1. Run `/release-checklist`.
2. Check the module page copy, screenshot, demo and manual.
3. Check licence and credit.
4. Run `npx maru module status .`.
5. Give a recommendation; the person decides.

## Review by rigor

Read `modes.rigor` with `node tools/config-get.mjs`. See `.claude/docs/director-gates.md`.

| Rigor | Review |
| --- | --- |
| `minimal` | None. Show the result to the person. |
| `standard` | `release-manager` reviews before you ask for approval. |
| `full` | Also `release-manager`. |

## Done when

A go or no-go recommendation exists.

