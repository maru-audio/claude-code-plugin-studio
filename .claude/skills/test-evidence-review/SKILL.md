---
name: test-evidence-review
description: "Review the quality of tests and evidence, not just their existence. ADEQUATE, INCOMPLETE or MISSING."
user-invocable: true
allowed-tools: Read, Glob, Grep, AskUserQuestion, Bash(npx maru *), Bash(node tools/*), Bash(git log*), Bash(git status*), Bash(git diff*)
---

# Test Evidence Review

Review the quality of tests and evidence, not just their existence. ADEQUATE, INCOMPLETE or MISSING.

## Steps

1. Read `production/qa/evidence/`.
2. Check screenshots are newer than the code they prove.
3. Check tests assert behaviour, not only that it runs.
4. Report a verdict per story.

## Done when

Each story has a verdict.

