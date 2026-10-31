---
name: team-launch
description: "Orchestrate the launch team: release-manager, copywriter, docs-lead, community-manager, demo-producer. Coordinates several agents on one feature."
argument-hint: "[feature]"
user-invocable: true
allowed-tools: Read, Glob, Grep, Write, Edit, AskUserQuestion, Bash(npx maru *), Bash(npm run *), Bash(node tools/*), Bash(git log*), Bash(git status*), Bash(git diff*), Task
---

# Team Launch

Orchestrate the launch team: release-manager, copywriter, docs-lead, community-manager, demo-producer. Coordinates several agents on one feature.

## Steps

1. Read the design and current story for this work.
2. Delegate in this order, showing each result before the next: `release-manager` → `copywriter` → `docs-lead` → `community-manager` → `demo-producer`.
3. Run `/launch-checklist` and `/patch-notes`. Post nothing publicly without approval.
4. Report what each agent did, what was verified, and what still needs a person.

## Done when

Each agent's work is reported with evidence, and any listening remains with the person.

