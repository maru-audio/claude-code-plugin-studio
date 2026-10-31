---
name: qa-plan
description: "QA plan for a sprint or release: which checks are automated, what a person must listen to, and which hosts."
user-invocable: true
allowed-tools: Read, Glob, Grep, Write, Edit, AskUserQuestion, Bash(npx maru *), Bash(npm run *), Bash(node tools/*), Bash(git log*), Bash(git status*), Bash(git diff*), Task
---

# Qa Plan

QA plan for a sprint or release: which checks are automated, what a person must listen to, and which hosts.

## Who leads

`qa-lead`

## Steps

1. Classify stories by type.
2. Map each to automated checks, listening tests and host tests.
3. State what cannot be tested on this machine.

## Output

Write to `production/qa/plan.md` using `.claude/docs/templates/qa-plan.md`. Ask "May I write this to [filepath]?" first, unless `modes.automation` is `act`.

## Review by rigor

Read `modes.rigor` with `node tools/config-get.mjs`. See `.claude/docs/director-gates.md`.

| Rigor | Review |
| --- | --- |
| `minimal` | None. Show the result to the person. |
| `standard` | `qa-lead` reviews before you ask for approval. |
| `full` | Also `qa-lead`. |

## Done when

A plan exists that separates measured, listened and not tested.

