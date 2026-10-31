---
name: help
description: "What should I do next? Use when stuck or unsure what comes next."
user-invocable: true
allowed-tools: Read, Glob, Grep, AskUserQuestion, Bash(npx maru *), Bash(node tools/*), Bash(git log*), Bash(git status*), Bash(git diff*)
---

# Help

What should I do next? Use when stuck or unsure what comes next.

## Steps

1. Run `node tools/project-state.mjs` and read `.claude/docs/workflow-catalog.json`.
2. Find the current stage from `studio.config.json`. At `rigor: minimal` follow the minimal route instead.
3. Compare what the stage requires with what is on disk.
4. Separate **required next** from **optional**, and name at most three items.
5. End with one recommended command.

## Done when

The person has one recommended command and knows why.

