---
name: latency-check
description: "Establish the module's latency, what it reports to hosts, and whether a mix control stays aligned."
user-invocable: true
allowed-tools: Read, Glob, Grep, AskUserQuestion, Bash(npx maru *), Bash(node tools/*), Bash(git log*), Bash(git status*), Bash(git diff*)
---

# Latency Check

Establish the module's latency, what it reports to hosts, and whether a mix control stays aligned.

## Who leads

`host-compat-engineer`

## Steps

1. Read the design: does any block add latency, such as lookahead or oversampling?
2. Read the `build-preview-export` guide and `src/index.ts` for what is declared.
3. There is no public latency measurement yet, so this is a review plus a manual null test in a DAW.
4. Record the result as reviewed or measured.

## Done when

Latency is stated and labelled as reviewed or measured.

## Known gaps

This skill may hit: [DEVX-071](../../../docs/KNOWN-GAPS.md#devx-071). If it does, quote the exact message and carry on with what is left. Do not substitute another runtime.
