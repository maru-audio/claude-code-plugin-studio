---
name: gate-check
description: "Ready to advance between phases? Returns PASS, CONCERNS, NOT ASSESSED or FAIL with blockers. 'Can we move on?'"
argument-hint: "[stage]"
user-invocable: true
allowed-tools: Read, Glob, Grep, Write, Edit, AskUserQuestion, Bash(npx maru *), Bash(npm run *), Bash(node tools/*), Bash(git log*), Bash(git status*), Bash(git diff*)
---

# Gate Check

Ready to advance between phases? Returns PASS, CONCERNS, NOT ASSESSED or FAIL with blockers. 'Can we move on?'

## Who leads

`producer`, `qa-lead`

## Steps

1. Read the current stage and `.claude/docs/workflow-catalog.json`.
2. Check required artifacts for the next stage.
3. Run the checks that stage requires.
4. NOT ASSESSED is a valid answer when something could not be run, and it is never a pass.
5. At `rigor: minimal` there are no required gates, so this is advisory.

## Done when

A verdict exists with blockers. The stage moves only after a yes.

