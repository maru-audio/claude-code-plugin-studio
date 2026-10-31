---
name: story-done
description: "Close a finished story: verify each acceptance item and record deviations."
argument-hint: "[story]"
user-invocable: true
allowed-tools: Read, Glob, Grep, Write, Edit, AskUserQuestion, Bash(npx maru *), Bash(npm run *), Bash(node tools/*), Bash(git log*), Bash(git status*), Bash(git diff*)
---

# Story Done

Close a finished story: verify each acceptance item and record deviations.

## Steps

1. Read the story and its evidence.
2. Check each acceptance item against real output.
3. Run `npx maru module check .`. `--fast` is not a pass here.
4. Record deviations. Mark listening as done only if a person said so.
5. Update its status, and suggest the next story.

## Never close a story when

- Only `--fast` ran.
- The sound changed and no person has been asked to listen. You may close it with **listening: not done**, if you say so plainly.
- A check was unavailable and was treated as passed.

## Review by rigor

Read `modes.rigor` with `node tools/config-get.mjs`. See `.claude/docs/director-gates.md`.

| Rigor | Review |
| --- | --- |
| `minimal` | None. Show the result to the person. |
| `standard` | The department lead reviews before you ask for approval. |
| `full` | Also `producer`. |

## Done when

The story is closed with evidence, or stays open with the reason.

