---
name: demo-pass
description: "Produce demo audio and the first impression on the module page."
user-invocable: true
allowed-tools: Read, Glob, Grep, Write, Edit, AskUserQuestion, Bash(npx maru *), Bash(npm run *), Bash(node tools/*), Bash(git log*), Bash(git status*), Bash(git diff*), Task
---

# Demo Pass

Produce demo audio and the first impression on the module page.

## Who leads

`demo-producer`

## Steps

1. Read the `build-preview-export` guide.
2. Choose material the plugin improves, with rights to use it.
3. Render it with `npx maru module preview src/index.ts`.
4. Ask a person to listen before it is used.

## Review by rigor

Read `modes.rigor` with `node tools/config-get.mjs`. See `.claude/docs/director-gates.md`.

| Rigor | Review |
| --- | --- |
| `minimal` | None. Show the result to the person. |
| `standard` | `demo-producer` reviews before you ask for approval. |
| `full` | Also `creative-director`. |

## Done when

Demo audio exists, has been listened to, and its rights are recorded.

## Known gaps

This skill may hit: [DEVX-061](../../../docs/KNOWN-GAPS.md#devx-061). If it does, quote the exact message and carry on with what is left. Do not substitute another runtime.
