---
name: consistency-check
description: "Check parameter names, ranges and units agree across the contract, face, presets, design documents and manual."
user-invocable: true
allowed-tools: Read, Glob, Grep, AskUserQuestion, Bash(npx maru *), Bash(node tools/*), Bash(git log*), Bash(git status*), Bash(git diff*)
---

# Consistency Check

Check parameter names, ranges and units agree across the contract, face, presets, design documents and manual.

## Steps

1. Read `src/contract.ts`, `src/factory-bank.ts` and `src/ui/`.
2. Compare with `design/pdd/` and `docs/manual/`.
3. Run `npx maru module check . --fast`, whose face gate confirms parameter bindings.
4. List each conflict and which file is the owner. `src/contract.ts` wins.

## Done when

Every conflict is listed with its owner.

