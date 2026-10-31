---
name: studio-validate
description: "Run the validator: checks every command, flag and guide named in this studio against the installed CLI, then tries each capability on this project. Use after install or an upgrade, or to report what does not work."
user-invocable: true
allowed-tools: Read, Glob, Grep, Write, Edit, AskUserQuestion, Bash(npx maru *), Bash(npm run *), Bash(node tools/*), Bash(git log*), Bash(git status*), Bash(git diff*)
---

# Studio Validate

Run the validator: checks every command, flag and guide named in this studio against the installed CLI, then tries each capability on this project. Use after install or an upgrade, or to report what does not work.

## Steps

1. Run `npm run studio:validate` and wait for it.
2. Read `production/validation/report.md`.
3. Summarize in plain language: what works, what is broken, what is unavailable.
4. For each failure with no linked task, offer `/studio-gap`.

## Done when

The report exists and the person knows what works on their machine.

