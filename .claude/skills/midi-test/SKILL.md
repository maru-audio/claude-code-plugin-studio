---
name: midi-test
description: "Test MIDI behaviour: note lifecycle, stuck notes, overlapping notes and capacity."
user-invocable: true
allowed-tools: Read, Glob, Grep, Write, Edit, AskUserQuestion, Bash(npx maru *), Bash(npm run *), Bash(node tools/*), Bash(git log*), Bash(git status*), Bash(git diff*)
---

# Midi Test

Test MIDI behaviour: note lifecycle, stuck notes, overlapping notes and capacity.

## Read first

```sh
npx maru guide read midi-and-event-modules
```

## Steps

1. Read the `midi-and-event-modules` guide.
2. Add event tapes for overlapping notes, all-notes-off and bursts over `maxEvents`.
3. Run `npx maru module check .`.
4. Ask a person to play it in the workbench.

## Done when

Event tapes exist and results are reported.

## Known gaps

This skill may hit: [DEVX-072](../../../docs/KNOWN-GAPS.md#devx-072). If it does, quote the exact message and carry on with what is left. Do not substitute another runtime.
