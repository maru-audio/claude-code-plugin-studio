---
name: design-review
description: "Reviews one design document for completeness, consistency, implementability and whether it can be tested."
argument-hint: "[path]"
user-invocable: true
allowed-tools: Read, Glob, Grep, AskUserQuestion, Bash(npx maru *), Bash(node tools/*), Bash(git log*), Bash(git status*), Bash(git diff*)
---

# Design Review

Reviews one design document for completeness, consistency, implementability and whether it can be tested.

## Who leads

`product-designer`

## Steps

1. Read the document and its template.
2. Check every required section for the current rigor.
3. Check every control has a range, a taper and a meaning.
4. Check every acceptance item can be heard or measured.
5. Report PASS, CONCERNS or FAIL.

## Done when

A verdict exists with the exact sections to fix.

