---
name: bug-report
description: "Structured bug report: what you did, what you heard, what you expected, and how to reproduce it."
user-invocable: true
allowed-tools: Read, Glob, Grep, Write, Edit, AskUserQuestion, Bash(npx maru *), Bash(npm run *), Bash(node tools/*), Bash(git log*), Bash(git status*), Bash(git diff*)
---

# Bug Report

Structured bug report: what you did, what you heard, what you expected, and how to reproduce it.

## Who leads

`qa-tester`

## Steps

1. Ask for the steps, preset, host and sample rate.
2. Reproduce it if possible, and record the exact command or capture.
3. Assign severity. A loud click or NaN output is always critical.
4. Write it from the template.

## Output

Write to `production/bugs/` using `.claude/docs/templates/bug.md`. Ask "May I write this to [filepath]?" first, unless `modes.automation` is `act`.

## Done when

A bug report exists with reproduction steps.

