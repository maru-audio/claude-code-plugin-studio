---
name: in-daw-test
description: "Test in a real DAW: load, sound, automation, save and reopen."
user-invocable: true
allowed-tools: Read, Glob, Grep, Write, Edit, AskUserQuestion, Bash(npx maru *), Bash(npm run *), Bash(node tools/*), Bash(git log*), Bash(git status*), Bash(git diff*), Task
---

# In Daw Test

Test in a real DAW: load, sound, automation, save and reopen.

## Who leads

`host-compat-engineer`

## Steps

1. Confirm a native build exists; see `/build-plugin`.
2. See what is available with `npx maru plugin capabilities` and `npx maru daw list-daw-capabilities`. DAW control is experimental.
3. Give the person a script: load, play, automate, save, close, reopen, compare.
4. Record each host version and result in `/host-matrix`.

## Review by rigor

Read `modes.rigor` with `node tools/config-get.mjs`. See `.claude/docs/director-gates.md`.

| Rigor | Review |
| --- | --- |
| `minimal` | None. Show the result to the person. |
| `standard` | `host-compat-engineer` reviews before you ask for approval. |
| `full` | Also `qa-lead`. |

## Done when

The host matrix has this host's result, from a person.

## Known gaps

This skill may hit: [DEVX-063](../../../docs/KNOWN-GAPS.md#devx-063), [DEVX-075](../../../docs/KNOWN-GAPS.md#devx-075). If it does, quote the exact message and carry on with what is left. Do not substitute another runtime.
