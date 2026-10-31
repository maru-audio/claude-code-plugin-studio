---
name: changelog
description: "Generate a changelog from git commits and stories."
user-invocable: true
allowed-tools: Read, Glob, Grep, Write, Edit, AskUserQuestion, Bash(npx maru *), Bash(npm run *), Bash(node tools/*), Bash(git log*), Bash(git status*), Bash(git diff*)
---

# Changelog

Generate a changelog from git commits and stories.

## Steps

1. Read `git log` since the last tag.
2. Group changes by what a musician notices.
3. Write `CHANGELOG.md`.

## Done when

`CHANGELOG.md` is updated.

