---
name: review-all-designs
description: "Holistic review across PDDs: contradictions, controls that do the same thing, and too many controls."
user-invocable: true
allowed-tools: Read, Glob, Grep, AskUserQuestion, Bash(npx maru *), Bash(node tools/*), Bash(git log*), Bash(git status*), Bash(git diff*)
---

# Review All Designs

Holistic review across PDDs: contradictions, controls that do the same thing, and too many controls.

## Steps

1. Read every file in `design/pdd/`.
2. List contradictions, duplicate controls and controls with no musical purpose.
3. Check the total against the brief's promise.
4. Report PASS, CONCERNS or FAIL, with a recommended cut for each concern.

## Done when

A verdict exists with concrete cuts.

