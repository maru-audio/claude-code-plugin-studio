---
name: state-recall
description: "Test save and recall: parameters, presets, authored state and automation."
user-invocable: true
allowed-tools: Read, Glob, Grep, Write, Edit, AskUserQuestion, Bash(npx maru *), Bash(npm run *), Bash(node tools/*), Bash(git log*), Bash(git status*), Bash(git diff*)
---

# State Recall

Test save and recall: parameters, presets, authored state and automation.

## Read first

```sh
npx maru guide read presets-and-state
```

## Steps

1. Confirm `parameterStateRoundTrip: true` in `src/qualification.ts`.
2. Read the `presets-and-state` guide.
3. Add authored state to the check if the module has any.
4. In a DAW, a person saves, closes and reopens the session.
5. Report what was automated and what a person checked.

## Review by rigor

Read `modes.rigor` with `node tools/config-get.mjs`. See `.claude/docs/director-gates.md`.

| Rigor | Review |
| --- | --- |
| `minimal` | None. Show the result to the person. |
| `standard` | The department lead reviews before you ask for approval. |
| `full` | Also `qa-lead`. |

## Done when

Automated and manual recall results are separated.

## Known gaps

This skill may hit: [DEVX-072](../../../docs/KNOWN-GAPS.md#devx-072). If it does, quote the exact message and carry on with what is left. Do not substitute another runtime.
