---
name: soak-test
description: "Long-running behaviour: hours of audio, automation, tails, memory, denormals."
user-invocable: true
allowed-tools: Read, Glob, Grep, Write, Edit, AskUserQuestion, Bash(npx maru *), Bash(npm run *), Bash(node tools/*), Bash(git log*), Bash(git status*), Bash(git diff*)
---

# Soak Test

Long-running behaviour: hours of audio, automation, tails, memory, denormals.

## Steps

1. Write the protocol: signal, duration, what to watch.
2. Use the workbench with `npm run dev` for a person-run session.
3. There is no public long-run command yet, so say this is a manual protocol.
4. Record observations.

## Output

Write to `production/qa/soak.md` using `.claude/docs/templates/soak-protocol.md`. Ask "May I write this to [filepath]?" first, unless `modes.automation` is `act`.

## Review by rigor

Read `modes.rigor` with `node tools/config-get.mjs`. See `.claude/docs/director-gates.md`.

| Rigor | Review |
| --- | --- |
| `minimal` | None. Show the result to the person. |
| `standard` | The department lead reviews before you ask for approval. |
| `full` | Also `qa-lead`. |

## Done when

A protocol exists and observations are recorded.

## Known gaps

This skill may hit: [DEVX-071](../../../docs/KNOWN-GAPS.md#devx-071). If it does, quote the exact message and carry on with what is left. Do not substitute another runtime.
