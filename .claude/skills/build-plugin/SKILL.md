---
name: build-plugin
description: "Build native plug-in formats and read the report. A binary alone does not prove anything."
argument-hint: "[vst3|clap|au|aax|standalone]"
user-invocable: true
allowed-tools: Read, Glob, Grep, Write, Edit, AskUserQuestion, Bash(npx maru *), Bash(npm run *), Bash(node tools/*), Bash(git log*), Bash(git status*), Bash(git diff*), Task
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

1. Read `docs/how-to/build-native-plugins.md`.
2. Run `npx maru doctor`, and see whether this machine has the private native tools.
3. **Hosted route:** run `/publish` with the source archive on. Then follow `npx maru module status .` to the Distribution tab, and read results with `npx maru build list` and `npx maru build show <project>`.
4. **Local route, with the toolkit:** run `npx maru plugin build src/index.ts --format <format>`, then `npx maru plugin inspect <artifact>`.
5. Read the validation report for each format. Claim only the formats built and checked.
6. If neither route works, quote the messages and use `/studio-gap`.

## Two routes

| Route | Who it is for | Availability |
| --- | --- | --- |
| **Hosted, through `/publish`** | Everyone. Maru builds, validates and signs from your uploaded source | The primary design; see [how to build native plug-ins](../../../docs/how-to/build-native-plugins.md) for what is verified |
| **Local tools** | Approved developers | `npx maru plugin build` needs a private toolkit |

Always start with the hosted route unless the person has the local toolkit.

## Review by rigor

Read `modes.rigor` with `node tools/config-get.mjs`. See `.claude/docs/director-gates.md`.

| Rigor | Review |
| --- | --- |
| `minimal` | None. Show the result to the person. |
| `standard` | `native-format-engineer` reviews before you ask for approval. |
| `full` | Also `release-manager`. |

## Done when

Each claimed format has an artifact and a report, or the blocker is quoted.

## Known gaps

This skill may hit: [DEVX-062](../../../docs/KNOWN-GAPS.md#devx-062), [DEVX-063](../../../docs/KNOWN-GAPS.md#devx-063), [DEVX-064](../../../docs/KNOWN-GAPS.md#devx-064). If it does, quote the exact message and carry on with what is left. Do not substitute another runtime.
