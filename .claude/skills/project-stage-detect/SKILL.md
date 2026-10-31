---
name: project-stage-detect
description: "Analyze project state, detect the stage, identify gaps and recommend next steps. 'Where are we in development?'"
user-invocable: true
allowed-tools: Read, Glob, Grep, Write, Edit, AskUserQuestion, Bash(npx maru *), Bash(npm run *), Bash(node tools/*), Bash(git log*), Bash(git status*), Bash(git diff*)
---

# Project Stage Detect

Analyze project state, detect the stage, identify gaps and recommend next steps. 'Where are we in development?'

## Steps

1. Run `node tools/project-state.mjs`.
2. Run `npx maru module check . --fast` and `npx maru module status .`.
3. Read `design/` and `production/` to see what has been written.
4. Report the stage with the evidence for it: Concept, Sound & Control Design, Technical Setup, Pre-Production, Production, Polish or Release.
5. Ask before recording it with `node tools/config-set.mjs project.stage <stage>`.

## Done when

The stage is stated with evidence, and recorded only after a yes.

