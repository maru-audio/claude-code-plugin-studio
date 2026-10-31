---
name: localize
description: "Face and manual translation: find hardcoded strings, extract a table, check lengths."
user-invocable: true
allowed-tools: Read, Glob, Grep, Write, Edit, AskUserQuestion, Bash(npx maru *), Bash(npm run *), Bash(node tools/*), Bash(git log*), Bash(git status*), Bash(git diff*)
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

## Done when

A string table exists and length problems are listed.

## Known gaps

This skill may hit: [DEVX-074](../../../docs/KNOWN-GAPS.md#devx-074). If it does, quote the exact message and carry on with what is left. Do not substitute another runtime.
