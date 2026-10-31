---
name: team-qa
description: "Orchestrate the QA team: qa-lead, qa-tester, host-compat-engineer. Coordinates several agents on one feature."
argument-hint: "[feature]"
user-invocable: true
allowed-tools: Read, Glob, Grep, Write, Edit, AskUserQuestion, Bash(npx maru *), Bash(npm run *), Bash(node tools/*), Bash(git log*), Bash(git status*), Bash(git diff*), Task
---

# Team Qa

Orchestrate the QA team: qa-lead, qa-tester, host-compat-engineer. Coordinates several agents on one feature.

## Steps

1. Read the design and current story for this work.
2. Delegate in this order, showing each result before the next: `qa-lead` → `qa-tester` → `host-compat-engineer`.
3. Run `/qa-plan`, `/smoke-check`, `/state-recall` and `/host-matrix`.
4. Report what each agent did, what was verified, and what still needs a person.

## Done when

Each agent's work is reported with evidence, and any listening remains with the person.

## Known gaps

This skill may hit: [DEVX-072](../../../docs/KNOWN-GAPS.md#devx-072), [DEVX-075](../../../docs/KNOWN-GAPS.md#devx-075). If it does, quote the exact message and carry on with what is left. Do not substitute another runtime.
