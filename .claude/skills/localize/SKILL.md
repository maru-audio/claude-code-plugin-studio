---
name: localize
description: "Face and manual translation: find hardcoded strings, extract a table, check lengths."
user-invocable: true
allowed-tools: Read, Glob, Grep, Write, Edit, AskUserQuestion, Bash(npx maru *), Bash(npm run *), Bash(node tools/*), Bash(git log*), Bash(git status*), Bash(git diff*), Task
---

# Localize

Face and manual translation: find hardcoded strings, extract a table, check lengths.

## Who leads

`localization-lead`

## Steps

1. Find visible strings in `src/ui/`.
2. Extract them to a table.
3. Check label lengths for each locale.
4. There is no shared locale mechanism in the UI kit documentation yet, so record what you had to build.

## Review by rigor

Read `modes.rigor` with `node tools/config-get.mjs`. See `.claude/docs/director-gates.md`.

| Rigor | Review |
| --- | --- |
| `minimal` | None. Show the result to the person. |
| `standard` | `localization-lead` reviews before you ask for approval. |
| `full` | Also `producer`. |

## Done when

A string table exists and length problems are listed.

## Known gaps

This skill may hit: [DEVX-074](../../../docs/KNOWN-GAPS.md#devx-074). If it does, quote the exact message and carry on with what is left. Do not substitute another runtime.
