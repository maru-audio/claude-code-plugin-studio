---
name: architecture-decision
description: "Create an ADR documenting one technical decision: context, alternatives and consequences."
argument-hint: "[decision]"
user-invocable: true
allowed-tools: Read, Glob, Grep, Write, Edit, AskUserQuestion, Bash(npx maru *), Bash(npm run *), Bash(node tools/*), Bash(git log*), Bash(git status*), Bash(git diff*)
---

# Architecture Decision

Create an ADR documenting one technical decision: context, alternatives and consequences.

## Who leads

`technical-director`

## Steps

1. Ask what is being decided and why now.
2. List at least two real alternatives.
3. Write the consequences, including what becomes harder.
4. Give it the next number in `docs/architecture/`.

## Output

Write to `docs/architecture/adr-NNN-<slug>.md` using `.claude/docs/templates/adr.md`. Ask "May I write this to [filepath]?" first, unless `modes.automation` is `act`.

## Done when

An ADR exists with alternatives that were actually considered.

