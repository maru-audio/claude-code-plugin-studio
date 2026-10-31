---
name: test-setup
description: "Set up tests and CI: test script, qualification tapes and a GitHub Actions workflow."
user-invocable: true
allowed-tools: Read, Glob, Grep, Write, Edit, AskUserQuestion, Bash(npx maru *), Bash(npm run *), Bash(node tools/*), Bash(git log*), Bash(git status*), Bash(git diff*)
---

# Test Setup

Set up tests and CI: test script, qualification tapes and a GitHub Actions workflow.

## Who leads

`devops-engineer`

## Steps

1. Confirm `npm run test` works.
2. Add `tests/` and a `test` script that runs after the module check.
3. Keep the provided `.github/workflows/check.yml`, and make sure it runs the same commands as local work.

## Done when

Tests and CI use the same commands as local work.

## Known gaps

This skill may hit: [DEVX-072](../../../docs/KNOWN-GAPS.md#devx-072). If it does, quote the exact message and carry on with what is left. Do not substitute another runtime.
