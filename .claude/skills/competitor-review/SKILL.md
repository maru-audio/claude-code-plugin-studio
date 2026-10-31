---
name: competitor-review
description: "Review comparable plugins: what they do well, what people complain about, and where this one differs."
user-invocable: true
allowed-tools: Read, Glob, Grep, Write, Edit, AskUserQuestion, Bash(npx maru *), Bash(npm run *), Bash(node tools/*), Bash(git log*), Bash(git status*), Bash(git diff*), Task
---

# Competitor Review

Review comparable plugins: what they do well, what people complain about, and where this one differs.

## Who leads

`product-designer`

## Steps

1. Ask which plugins the person knows and uses.
2. See what is installed with `npx maru plugin inventory`, and what is on Maru with `npx maru community search --query <text>`.
3. For each, note the promise, the controls and what people say. Cite sources; do not invent reviews.
4. State the difference in one sentence, or question whether this plugin should exist.

## Output

Write to `design/competitors.md` using `.claude/docs/templates/competitors.md`. Ask "May I write this to [filepath]?" first, unless `modes.automation` is `act`.

## Review by rigor

Read `modes.rigor` with `node tools/config-get.mjs`. See `.claude/docs/director-gates.md`.

| Rigor | Review |
| --- | --- |
| `minimal` | None. Show the result to the person. |
| `standard` | `product-designer` reviews before you ask for approval. |
| `full` | Also `creative-director`. |

## Done when

`design/competitors.md` says how this plugin differs, with sources.

