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

## Done when

The story is closed with evidence, or stays open with the reason.

