---
name: hardware-target
description: "Check whether a module can run on a pedal or hardware board, and what that would take."
user-invocable: true
allowed-tools: Read, Glob, Grep, Write, Edit, AskUserQuestion, Bash(npx maru *), Bash(npm run *), Bash(node tools/*), Bash(git log*), Bash(git status*), Bash(git diff*), Task
---

# Hardware Target

Check whether a module can run on a pedal or hardware board, and what that would take.

## Who leads

`hardware-specialist`

## Steps

1. See `npx maru hardware --help` and `npx maru hardware targets`.
2. Get suggestions with `npx maru hardware boards <module>`.
3. State memory, rate and control limits.
4. Say what is not proven by any desktop or browser result, and whether this works outside a Maru checkout.

## Review by rigor

Read `modes.rigor` with `node tools/config-get.mjs`. See `.claude/docs/director-gates.md`.

| Rigor | Review |
| --- | --- |
| `minimal` | None. Show the result to the person. |
| `standard` | `hardware-specialist` reviews before you ask for approval. |
| `full` | Also `release-manager`. |

## Done when

Board fit is stated, with what remains unproven.

## Known gaps

This skill may hit: [DEVX-075](../../../docs/KNOWN-GAPS.md#devx-075). If it does, quote the exact message and carry on with what is left. Do not substitute another runtime.
