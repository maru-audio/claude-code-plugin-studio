---
name: test-flakiness
description: "Find flaky checks from CI logs or repeated runs."
user-invocable: true
allowed-tools: Read, Glob, Grep, AskUserQuestion, Bash(npx maru *), Bash(node tools/*), Bash(git log*), Bash(git status*), Bash(git diff*)
---

# Test Flakiness

Find flaky checks from CI logs or repeated runs.

## Steps

1. Collect recent results.
2. Find checks that both passed and failed on the same code.
3. Recommend a fix or quarantine, with a reason.

## Done when

Flaky checks are listed.

