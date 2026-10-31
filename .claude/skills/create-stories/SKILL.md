---
name: create-stories
description: "Break one epic, or the brief at minimal rigor, into stories with acceptance criteria."
argument-hint: "[epic]"
user-invocable: true
allowed-tools: Read, Glob, Grep, Write, Edit, AskUserQuestion, Bash(npx maru *), Bash(npm run *), Bash(node tools/*), Bash(git log*), Bash(git status*), Bash(git diff*)
---

# Create Stories

Break one epic, or the brief at minimal rigor, into stories with acceptance criteria.

## Steps

1. Read the epic or `design/brief.md`.
2. Write stories small enough to hear or see the result in one sitting.
3. Give each a type: Face, DSP, Contract, Preset, Demo or Release.
4. Give each a check: a command, a measurement or a listening question.
5. List the files each story touches.

## Output

Write to `production/stories/` using `.claude/docs/templates/story.md`. Ask "May I write this to [filepath]?" first, unless `modes.automation` is `act`.

## Done when

Each story has a check that does not depend on opinion alone, except listening questions marked for a person.

