---
name: hotfix
description: "Emergency fix outside the sprint, with a full record and a regression test."
argument-hint: "[bug]"
user-invocable: true
allowed-tools: Read, Glob, Grep, Write, Edit, AskUserQuestion, Bash(npx maru *), Bash(npm run *), Bash(node tools/*), Bash(git log*), Bash(git status*), Bash(git diff*)
---

# Hotfix

Emergency fix outside the sprint, with a full record and a regression test.

## Steps

1. State the harm: is it loud, silent, or crashing?
2. Fix the smallest thing.
3. Add a regression test.
4. Run `npx maru module check .`.
5. Run `/publish` for the new version after a yes.

## Done when

The fix is in, with a test, and is published only after a yes.

