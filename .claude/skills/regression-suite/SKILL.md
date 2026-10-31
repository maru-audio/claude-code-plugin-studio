---
name: regression-suite
description: "Map tests to critical behaviour, find fixed bugs without a regression test, and extend the qualification tapes."
user-invocable: true
allowed-tools: Read, Glob, Grep, Write, Edit, AskUserQuestion, Bash(npx maru *), Bash(npm run *), Bash(node tools/*), Bash(git log*), Bash(git status*), Bash(git diff*)
---

# Regression Suite

Map tests to critical behaviour, find fixed bugs without a regression test, and extend the qualification tapes.

## Read first

```sh
npx maru guide read parameters-and-schema
```

## Steps

1. Read `src/qualification.ts` and `tests/`.
2. List fixed bugs in `production/bugs/` with no test.
3. Add input or event tapes to cover them.
4. Run `npx maru module check . --tests`.

## Done when

Each fixed bug has a test or a stated reason.

## Known gaps

This skill may hit: [DEVX-072](../../../docs/KNOWN-GAPS.md#devx-072). If it does, quote the exact message and carry on with what is left. Do not substitute another runtime.
