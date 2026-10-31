---
name: design-module
description: "Section-by-section Plugin Design Document for one module or block. Walks through each required section, one at a time."
argument-hint: "[module or block name]"
user-invocable: true
allowed-tools: Read, Glob, Grep, Write, Edit, AskUserQuestion, Bash(npx maru *), Bash(npm run *), Bash(node tools/*), Bash(git log*), Bash(git status*), Bash(git diff*), Task
---

# Design Module

Section-by-section Plugin Design Document for one module or block. Walks through each required section, one at a time.

## Read first

```sh
npx maru guide read project-planning parameters-and-schema
```

## Who leads

`product-designer`, `parameter-designer`

## Steps

1. Read the brief, the signal flow and the Sound Bible if they exist.
2. Work through the sections for the current `modes.rigor`: Musical promise, Controls, Signal flow, Behaviour at extremes, Presets, Face, Acceptance.
3. For each section ask, offer options, draft, and ask before writing.
4. State formulas with units, and state each control's range and taper.
5. Record what the module deliberately does not do.

## Output

Write to `design/pdd/<name>.md` using `.claude/docs/templates/plugin-design-doc.md`. Ask "May I write this to [filepath]?" first, unless `modes.automation` is `act`.

## Opinions

- Describe each control by what the middle of its range sounds like.
- Write Behaviour at extremes even at low rigor, because people will go there.
- If a section cannot be answered yet, write what would answer it. Do not fill it with prose.

## Review by rigor

Read `modes.rigor` with `node tools/config-get.mjs`. See `.claude/docs/director-gates.md`.

| Rigor | Review |
| --- | --- |
| `minimal` | None. Show the result to the person. |
| `standard` | `product-designer` reviews before you ask for approval. |
| `full` | Also `creative-director`. |

## Done when

A PDD exists with its required sections and testable acceptance.

