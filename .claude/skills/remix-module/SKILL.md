---
name: remix-module
description: "Start from an existing community or official module, keeping its credit and licence."
argument-hint: "[search text or @handle/slug]"
user-invocable: true
allowed-tools: Read, Glob, Grep, Write, Edit, AskUserQuestion, Bash(npx maru *), Bash(npm run *), Bash(node tools/*), Bash(git log*), Bash(git status*), Bash(git diff*), Task
---

# Remix Module

Start from an existing community or official module, keeping its credit and licence.

## Read first

```sh
npx maru guide read platform-overview
```

## Who leads

`publishing-specialist`

## Steps

1. Search with `npx maru community search --query <text>` or `npx maru module list`.
2. Read it with `npx maru community files <owner> <slug>` and `npx maru module spec <slug>`.
3. Check its licence allows the use you intend. Remixes keep their origin and credit.
4. Start a project with `npx maru init <dir> --from @<handle>/<slug>`; ask first if you use `npx maru remix`, because that writes to the account.
5. Move this studio's files in, then run `/start`.

## Done when

A project exists with its origin and licence recorded.

## Known gaps

This skill may hit: [DEVX-076](../../../docs/KNOWN-GAPS.md#devx-076). If it does, quote the exact message and carry on with what is left. Do not substitute another runtime.
