---
name: automation-test
description: "Test automation of every parameter: clicks, zipper noise and recall."
user-invocable: true
allowed-tools: Read, Glob, Grep, Write, Edit, AskUserQuestion, Bash(npx maru *), Bash(npm run *), Bash(node tools/*), Bash(git log*), Bash(git status*), Bash(git diff*), Task
---

# Automation Test

Test automation of every parameter: clicks, zipper noise and recall.

## Who leads

`qa-tester`

## Steps

1. List parameters from `src/contract.ts`.
2. Add automation to the event tape in `src/qualification.ts` for each that could click.
3. Run `npx maru module check .`.
4. A person automates the worst ones in a DAW, and listens.

## Review by rigor

Read `modes.rigor` with `node tools/config-get.mjs`. See `.claude/docs/director-gates.md`.

| Rigor | Review |
| --- | --- |
| `minimal` | None. Show the result to the person. |
| `standard` | `qa-tester` reviews before you ask for approval. |
| `full` | Also `qa-lead`. |

## Done when

Each parameter has an automated check, a listening check, or is marked not tested.

## Known gaps

This skill may hit: [DEVX-072](../../../docs/KNOWN-GAPS.md#devx-072). If it does, quote the exact message and carry on with what is left. Do not substitute another runtime.
