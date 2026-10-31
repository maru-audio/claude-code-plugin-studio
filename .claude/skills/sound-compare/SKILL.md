---
name: sound-compare
description: "Compare the module against a reference recording or plugin for a chosen musical property."
user-invocable: true
allowed-tools: Read, Glob, Grep, AskUserQuestion, Bash(npx maru *), Bash(node tools/*), Bash(git log*), Bash(git status*), Bash(git diff*)
---

# Sound Compare

Compare the module against a reference recording or plugin for a chosen musical property.

## Steps

1. Ask for the reference and which property matters.
2. Render the module with `npx maru module preview src/index.ts`.
3. Write a blind A/B script for a person to run.
4. Do not claim a match without their result.

## Done when

A comparison script exists and any result is the person's.

## Known gaps

This skill may hit: [DEVX-061](../../../docs/KNOWN-GAPS.md#devx-061), [DEVX-073](../../../docs/KNOWN-GAPS.md#devx-073). If it does, quote the exact message and carry on with what is left. Do not substitute another runtime.
