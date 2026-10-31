---
name: sample-rate-test
description: "Check behaviour at 44.1, 48, 96 and 192 kHz: tuning, time constants, filter behaviour."
user-invocable: true
allowed-tools: Read, Glob, Grep, Write, Edit, AskUserQuestion, Bash(npx maru *), Bash(npm run *), Bash(node tools/*), Bash(git log*), Bash(git status*), Bash(git diff*), Task
---

# Sample Rate Test

Check behaviour at 44.1, 48, 96 and 192 kHz: tuning, time constants, filter behaviour.

## Who leads

`qa-tester`, `host-compat-engineer`

## Steps

1. Review `src/dsp/` for rate-dependent constants, using `/dsp-review`.
2. `src/qualification.ts` tapes declare one rate. Add a second tape only if the qualification contract allows it, and record what it does.
3. In the workbench or a DAW, a person changes the rate and compares.
4. Record which rates were really tested.

## Review by rigor

Read `modes.rigor` with `node tools/config-get.mjs`. See `.claude/docs/director-gates.md`.

| Rigor | Review |
| --- | --- |
| `minimal` | None. Show the result to the person. |
| `standard` | `qa-tester` reviews before you ask for approval. |
| `full` | Also `qa-lead`. |

## Done when

Each rate is listed as tested or not tested.

## Known gaps

This skill may hit: [DEVX-072](../../../docs/KNOWN-GAPS.md#devx-072). If it does, quote the exact message and carry on with what is left. Do not substitute another runtime.
