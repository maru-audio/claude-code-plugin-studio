---
name: module-page
description: "Prepare the module page: name, one-line promise, copy, screenshot, demo and licence."
user-invocable: true
allowed-tools: Read, Glob, Grep, Write, Edit, AskUserQuestion, Bash(npx maru *), Bash(npm run *), Bash(node tools/*), Bash(git log*), Bash(git status*), Bash(git diff*), Task
---

# Module Page

Prepare the module page: name, one-line promise, copy, screenshot, demo and licence.

## Who leads

`copywriter`, `demo-producer`

## Steps

1. Read the brief. Write the name and a one-line promise.
2. Write short copy; scope claims to verified behaviour.
3. Capture with `npx maru module screenshot .`, and attach at publish with `--screenshot`.
4. Choose the demo with `/demo-pass`.
5. Confirm the licence in `maru.config.json`.

## Output

Write to `production/release/module-page.md` using `.claude/docs/templates/module-page.md`. Ask "May I write this to [filepath]?" first, unless `modes.automation` is `act`.

## Review by rigor

Read `modes.rigor` with `node tools/config-get.mjs`. See `.claude/docs/director-gates.md`.

| Rigor | Review |
| --- | --- |
| `minimal` | None. Show the result to the person. |
| `standard` | `copywriter` reviews before you ask for approval. |
| `full` | Also `release-manager`. |

## Done when

Copy, screenshot, demo and licence are ready for review.

