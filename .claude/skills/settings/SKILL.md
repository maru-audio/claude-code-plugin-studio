---
name: settings
description: "View or change studio config: rigor, automation, targets, stage."
argument-hint: "[key=value] [--local]"
user-invocable: true
allowed-tools: Read, Glob, Grep, Write, Edit, AskUserQuestion, Bash(npx maru *), Bash(npm run *), Bash(node tools/*), Bash(git log*), Bash(git status*), Bash(git diff*)
---

# Settings

View or change studio config: rigor, automation, targets, stage.

## Steps

1. Show the merged values with `node tools/config-get.mjs`.
2. With arguments, change them using `node tools/config-set.mjs <key> <value>`; `--local` writes the gitignored `studio.local.json`.
3. Explain the effect of the change in one sentence. See `.claude/docs/workflow-modes.md`.

## Done when

The value is set and its effect has been explained.

