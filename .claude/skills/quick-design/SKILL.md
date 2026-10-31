---
name: quick-design
description: "Lightweight spec for small changes: a tuning adjustment or one new control. Skips the full PDD."
user-invocable: true
allowed-tools: Read, Glob, Grep, Write, Edit, AskUserQuestion, Bash(npx maru *), Bash(npm run *), Bash(node tools/*), Bash(git log*), Bash(git status*), Bash(git diff*)
---

# Quick Design

Lightweight spec for small changes: a tuning adjustment or one new control. Skips the full PDD.

## Steps

1. Ask what changes musically, and how you would hear that it worked.
2. Name the parameters and files affected.
3. Write a half-page spec directly into a story.

## Output

Write to `production/stories/`. Ask "May I write this to [filepath]?" first, unless `modes.automation` is `act`.

## Done when

A small spec exists inside a story, with an acceptance test someone can hear or measure.

