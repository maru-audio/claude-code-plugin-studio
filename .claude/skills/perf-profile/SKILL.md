---
name: perf-profile
description: "Performance review: find expensive code, measure against budgets, rank optimizations."
user-invocable: true
allowed-tools: Read, Glob, Grep, AskUserQuestion, Bash(npx maru *), Bash(node tools/*), Bash(git log*), Bash(git status*), Bash(git diff*)
---

# Perf Profile

Performance review: find expensive code, measure against budgets, rank optimizations.

## Who leads

`performance-analyst`

## Steps

1. Read `design/technical-budgets.md`.
2. Review `src/dsp/` for per-sample work that could run per block, and for voices that never stop.
3. Use `npx maru module check .` as the available gate. There is no public CPU measurement for a Processor yet, so say that the result is a code review rather than a measurement.
4. Rank recommendations and label each as measured or estimated.

## Done when

Recommendations are ranked and labelled measured or estimated.

## Known gaps

This skill may hit: [DEVX-071](../../../docs/KNOWN-GAPS.md#devx-071). If it does, quote the exact message and carry on with what is left. Do not substitute another runtime.
