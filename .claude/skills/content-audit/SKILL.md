---
name: content-audit
description: "Audit planned against built: controls, presets, demos and assets."
user-invocable: true
allowed-tools: Read, Glob, Grep, AskUserQuestion, Bash(npx maru *), Bash(node tools/*), Bash(git log*), Bash(git status*), Bash(git diff*)
---

# Content Audit

Audit planned against built: controls, presets, demos and assets.

## Steps

1. Read design counts.
2. Count what exists using `src/contract.ts` and `src/factory-bank.ts`.
3. Report planned, built, and missing.

## Done when

Planned and built are compared.

