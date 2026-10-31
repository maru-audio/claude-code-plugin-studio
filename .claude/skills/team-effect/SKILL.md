---
name: team-effect
description: "Orchestrate the effect team: product-designer, parameter-designer, dsp-engineer, face-engineer, sound-director, qa-tester. Coordinates several agents on one feature."
argument-hint: "[feature]"
user-invocable: true
allowed-tools: Read, Glob, Grep, Write, Edit, AskUserQuestion, Bash(npx maru *), Bash(npm run *), Bash(node tools/*), Bash(git log*), Bash(git status*), Bash(git diff*), Task
---

# Team Effect

Orchestrate the effect team: product-designer, parameter-designer, dsp-engineer, face-engineer, sound-director, qa-tester. Coordinates several agents on one feature.

## Steps

1. Read the design and current story for this work.
2. Delegate in this order, showing each result before the next: `product-designer` → `parameter-designer` → `dsp-engineer` → `face-engineer` → `sound-director` → `qa-tester`.
3. Run `npx maru module check .`, then `/gain-staging`.
4. Report what each agent did, what was verified, and what still needs a person.

## Done when

Each agent's work is reported with evidence, and any listening remains with the person.

## Known gaps

This skill may hit: [DEVX-061](../../../docs/KNOWN-GAPS.md#devx-061). If it does, quote the exact message and carry on with what is left. Do not substitute another runtime.
