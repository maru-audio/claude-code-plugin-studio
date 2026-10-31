---
name: team-polish
description: "Orchestrate the polish team: performance-analyst, face-engineer, preset-designer, qa-tester. Coordinates several agents on one feature."
argument-hint: "[feature]"
user-invocable: true
allowed-tools: Read, Glob, Grep, Write, Edit, AskUserQuestion, Bash(npx maru *), Bash(npm run *), Bash(node tools/*), Bash(git log*), Bash(git status*), Bash(git diff*), Task
---

# Team Polish

Orchestrate the polish team: performance-analyst, face-engineer, preset-designer, qa-tester. Coordinates several agents on one feature.

## Steps

1. Read the design and current story for this work.
2. Delegate in this order, showing each result before the next: `performance-analyst` → `face-engineer` → `preset-designer` → `qa-tester`.
3. Run `/perf-profile`, `/gain-staging` and `/ux-review`.
4. Report what each agent did, what was verified, and what still needs a person.

## Done when

Each agent's work is reported with evidence, and any listening remains with the person.

## Known gaps

This skill may hit: [DEVX-071](../../../docs/KNOWN-GAPS.md#devx-071). If it does, quote the exact message and carry on with what is left. Do not substitute another runtime.
