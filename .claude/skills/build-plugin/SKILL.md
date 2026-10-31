---
name: build-plugin
description: "Build native plug-in formats and read the report. A binary alone does not prove anything."
argument-hint: "[vst3|clap|au|aax|standalone]"
user-invocable: true
allowed-tools: Read, Glob, Grep, Write, Edit, AskUserQuestion, Bash(npx maru *), Bash(npm run *), Bash(node tools/*), Bash(git log*), Bash(git status*), Bash(git diff*)
---

# Build Plugin

Build native plug-in formats and read the report. A binary alone does not prove anything.

## Read first

```sh
npx maru guide read build-preview-export
```

## Who leads

`native-format-engineer`

## Steps

1. Run `npx maru doctor` and `npx maru module doctor`.
2. If native components are unavailable, say so and stop. Quote the message and do not suggest a workaround.
3. Run `npx maru plugin build src/index.ts --format <format>`.
4. Run `npx maru plugin inspect <artifact>`, and read the build report.
5. Claim only the formats you built and checked.

## Done when

Each claimed format has a built artifact and a report, or the blocker is quoted.

## Known gaps

This skill may hit: [DEVX-062](../../../docs/KNOWN-GAPS.md#devx-062), [DEVX-063](../../../docs/KNOWN-GAPS.md#devx-063), [DEVX-064](../../../docs/KNOWN-GAPS.md#devx-064). If it does, quote the exact message and carry on with what is left. Do not substitute another runtime.
