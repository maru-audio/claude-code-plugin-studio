---
name: setup-target
description: "Choose what this project promises to run on: browser, VST3, CLAP, AU, AAX, standalone or hardware. Records it and checks the machine can build it."
user-invocable: true
allowed-tools: Read, Glob, Grep, Write, Edit, AskUserQuestion, Bash(npx maru *), Bash(npm run *), Bash(node tools/*), Bash(git log*), Bash(git status*), Bash(git diff*)
---

# Setup Target

Choose what this project promises to run on: browser, VST3, CLAP, AU, AAX, standalone or hardware. Records it and checks the machine can build it.

## Read first

```sh
npx maru guide read build-preview-export
```

## Steps

1. Ask which targets matter and why. Browser is the default because it gives a playable link.
2. Run `npx maru doctor`, `npx maru module paths src/index.ts` and `npx maru module doctor`.
3. For each target, state one of: **works here**, **needs a component**, **not available in this release**. Quote the tool's own message.
4. Write only supported targets to `studio.config.json` under `targets`, after a yes.
5. Record unsupported ones in `production/risks.md` with the exact message.

## Done when

`targets` lists what can really be built, and the rest are recorded as risks.

## Known gaps

This skill may hit: [DEVX-062](../../../docs/KNOWN-GAPS.md#devx-062), [DEVX-063](../../../docs/KNOWN-GAPS.md#devx-063). If it does, quote the exact message and carry on with what is left. Do not substitute another runtime.
