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
3. Before the first story, add a **Plan** section to the brief or epic: starter, Graph or Processor, DSP candidates, wiring and first slice by risk. `npx maru guide read project-planning` sets out what it needs. Keep it short; do not write a separate document at `minimal`.
4. Give each a type: Face, DSP, Contract, Preset, Demo or Release.
5. **Put a contract change and the face bindings in one story.** `module check --fast` fails while a face binds a parameter the schema no longer has, so they cannot pass separately. The order is: contract with face bindings and presets, then face layout, then DSP.
6. Give each a check: a command, a measurement or a listening question.
7. List the files each story touches.

## Output

Write to `production/stories/` using `.claude/docs/templates/story.md`. Ask "May I write this to [filepath]?" first, unless `modes.automation` is `act`.

## Review by rigor

Read `modes.rigor` with `node tools/config-get.mjs`. See `.claude/docs/director-gates.md`.

| Rigor | Review |
| --- | --- |
| `minimal` | None. Show the result to the person. |
| `standard` | The department lead reviews before you ask for approval. |
| `full` | Also `producer`. |

## Done when

Each story has a check that does not depend on opinion alone, except listening questions marked for a person.

