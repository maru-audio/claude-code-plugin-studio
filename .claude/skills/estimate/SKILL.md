---
name: estimate
description: "Estimate effort from complexity, dependencies and risk, with a confidence level."
argument-hint: "[task]"
user-invocable: true
allowed-tools: Read, Glob, Grep, AskUserQuestion, Bash(npx maru *), Bash(node tools/*), Bash(git log*), Bash(git status*), Bash(git diff*)
---

# Estimate

Estimate effort from complexity, dependencies and risk, with a confidence level.

## Steps

1. Read the task.
2. List the unknowns.
3. Give a range and a confidence level.
4. Name what would shrink the range.

## Done when

A range and confidence are stated.

