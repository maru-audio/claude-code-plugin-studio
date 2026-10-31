---
name: design-module
description: "Section-by-section Plugin Design Document for one module or block. Walks through each required section, one at a time."
argument-hint: "[module or block name]"
user-invocable: true
allowed-tools: Read, Glob, Grep, Write, Edit, AskUserQuestion, Bash(npx maru *), Bash(npm run *), Bash(node tools/*), Bash(git log*), Bash(git status*), Bash(git diff*)
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

## Done when

A PDD exists with its required sections and testable acceptance.

