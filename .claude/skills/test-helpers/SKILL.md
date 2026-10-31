---
name: test-helpers
description: "Write project test helpers: tape builders, event builders and assertions."
user-invocable: true
allowed-tools: Read, Glob, Grep, Write, Edit, AskUserQuestion, Bash(npx maru *), Bash(npm run *), Bash(node tools/*), Bash(git log*), Bash(git status*), Bash(git diff*)
---

# Test Helpers

Write project test helpers: tape builders, event builders and assertions.

## Steps

1. Read `maruaudio/audio/qualification` usage in `src/qualification.ts`.
2. Write helpers in `tests/helpers/` for tones, impulses, silence and automation.
3. Say what had to be written by hand, and record it with `/studio-gap` if it should ship in the SDK.

## Done when

Helpers exist, and anything the SDK should own is recorded.

## Known gaps

This skill may hit: [DEVX-072](../../../docs/KNOWN-GAPS.md#devx-072). If it does, quote the exact message and carry on with what is left. Do not substitute another runtime.
