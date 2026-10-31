---
name: scope-check
description: "Scope creep check: current scope against the brief. 'Any scope creep?'"
user-invocable: true
allowed-tools: Read, Glob, Grep, AskUserQuestion, Bash(npx maru *), Bash(node tools/*), Bash(git log*), Bash(git status*), Bash(git diff*)
---

# Scope Check

Scope creep check: current scope against the brief. 'Any scope creep?'

## Who leads

`producer`

## Steps

1. Read `design/brief.md`.
2. Compare to current controls, stories and commits since the brief.
3. Quantify what was added.
4. Recommend cuts.

## Done when

Additions are counted and cuts recommended.

