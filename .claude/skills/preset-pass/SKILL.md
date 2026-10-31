---
name: preset-pass
description: "Write or revise factory presets: names, order and range."
user-invocable: true
allowed-tools: Read, Glob, Grep, Write, Edit, AskUserQuestion, Bash(npx maru *), Bash(npm run *), Bash(node tools/*), Bash(git log*), Bash(git status*), Bash(git diff*), Task
---

# Preset Pass

Write or revise factory presets: names, order and range.

## Read first

```sh
npx maru guide read presets-and-state
```

## Who leads

`preset-designer`

## Steps

1. Read the `presets-and-state` guide and `src/factory-bank.ts`.
2. Write presets that each show one use.
3. Order them from most useful to most extreme.
4. Check levels with `/gain-staging`, then ask a person to audition them.

## Review by rigor

Read `modes.rigor` with `node tools/config-get.mjs`. See `.claude/docs/director-gates.md`.

| Rigor | Review |
| --- | --- |
| `minimal` | None. Show the result to the person. |
| `standard` | `preset-designer` reviews before you ask for approval. |
| `full` | Also `creative-director`. |

## Done when

Presets are written, level-checked and awaiting listening.

## Known gaps

This skill may hit: [DEVX-067](../../../docs/KNOWN-GAPS.md#devx-067). If it does, quote the exact message and carry on with what is left. Do not substitute another runtime.
