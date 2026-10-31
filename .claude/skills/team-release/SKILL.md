---
name: team-release
description: "Orchestrate the release team: release-manager, qa-lead, security-engineer, publishing-specialist. Coordinates several agents on one feature."
argument-hint: "[feature]"
user-invocable: true
allowed-tools: Read, Glob, Grep, Write, Edit, AskUserQuestion, Bash(npx maru *), Bash(npm run *), Bash(node tools/*), Bash(git log*), Bash(git status*), Bash(git diff*), Task
---

# Team Release

Orchestrate the release team: release-manager, qa-lead, security-engineer, publishing-specialist. Coordinates several agents on one feature.

## Steps

1. Read the design and current story for this work.
2. Delegate in this order, showing each result before the next: `release-manager` → `qa-lead` → `security-engineer` → `publishing-specialist`.
3. Run `/release-checklist` and `/security-audit`, then `/publish` after a yes.
4. Report what each agent did, what was verified, and what still needs a person.

## Done when

Each agent's work is reported with evidence, and any listening remains with the person.

## Known gaps

This skill may hit: [DEVX-063](../../../docs/KNOWN-GAPS.md#devx-063). If it does, quote the exact message and carry on with what is left. Do not substitute another runtime.
