---
name: skill-test
description: "Validate this studio's skills: structure, and every command, flag and guide they name."
argument-hint: "[skill]"
user-invocable: true
allowed-tools: Read, Glob, Grep, AskUserQuestion, Bash(npx maru *), Bash(node tools/*), Bash(git log*), Bash(git status*), Bash(git diff*)
---

# Skill Test

Validate this studio's skills: structure, and every command, flag and guide they name.

## Steps

1. Run `node tools/skill-lint.mjs` for structure.
2. Run `npm run studio:validate -- --static` for commands, flags and guides.
3. Report anything stale.

## Done when

All skills pass, or each failure is listed.

