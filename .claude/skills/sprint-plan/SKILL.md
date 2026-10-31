---
name: sprint-plan
description: "Create or update a sprint plan from the milestone and capacity."
user-invocable: true
allowed-tools: Read, Glob, Grep, Write, Edit, AskUserQuestion, Bash(npx maru *), Bash(npm run *), Bash(node tools/*), Bash(git log*), Bash(git status*), Bash(git diff*)
---

# Sprint Plan

Create or update a sprint plan from the milestone and capacity.

## Steps

1. Read the current milestone and open stories.
2. Ask how much time the person has.
3. Choose by risk first.
4. Write the plan and what is explicitly out.

## Output

Write to `production/sprints/` using `.claude/docs/templates/sprint.md`. Ask "May I write this to [filepath]?" first, unless `modes.automation` is `act`.

## Review by rigor

Read `modes.rigor` with `node tools/config-get.mjs`. See `.claude/docs/director-gates.md`.

| Rigor | Review |
| --- | --- |
| `minimal` | None. Show the result to the person. |
| `standard` | The department lead reviews before you ask for approval. |
| `full` | Also `producer`. |

## Done when

A sprint plan exists with an explicit out list.

