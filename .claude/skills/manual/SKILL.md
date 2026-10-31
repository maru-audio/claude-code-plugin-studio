---
name: manual
description: "Write the plugin's manual: what it does, each parameter, first steps and honest support statements."
user-invocable: true
allowed-tools: Read, Glob, Grep, Write, Edit, AskUserQuestion, Bash(npx maru *), Bash(npm run *), Bash(node tools/*), Bash(git log*), Bash(git status*), Bash(git diff*), Task
---

# Manual

Write the plugin's manual: what it does, each parameter, first steps and honest support statements.

## Who leads

`docs-lead`, `copywriter`

## Steps

1. Read `src/contract.ts` and the design.
2. Start with how to get a good result in the first minute.
3. Describe each parameter by what it does to the sound, with units.
4. State tested formats and hosts, and what was not tested.
5. Run `/consistency-check`.

## Output

Write to `docs/manual/README.md` using `.claude/docs/templates/manual.md`. Ask "May I write this to [filepath]?" first, unless `modes.automation` is `act`.

## Review by rigor

Read `modes.rigor` with `node tools/config-get.mjs`. See `.claude/docs/director-gates.md`.

| Rigor | Review |
| --- | --- |
| `minimal` | None. Show the result to the person. |
| `standard` | `docs-lead` reviews before you ask for approval. |
| `full` | Also `producer`. |

## Done when

`docs/manual/` matches the contract and states what was tested.

