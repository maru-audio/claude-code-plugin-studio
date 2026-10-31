---
name: map-signal-flow
description: "Decompose a concept into signal blocks, controls and their dependencies, and set the design order."
user-invocable: true
allowed-tools: Read, Glob, Grep, Write, Edit, AskUserQuestion, Bash(npx maru *), Bash(npm run *), Bash(node tools/*), Bash(git log*), Bash(git status*), Bash(git diff*)
---

# Map Signal Flow

Decompose a concept into signal blocks, controls and their dependencies, and set the design order.

## Read first

```sh
npx maru guide read project-planning dsp-leaf-catalog
```

## Steps

1. Read `design/brief.md`.
2. Draw the signal flow as a Mermaid diagram from input to output, including modulation and feedback paths.
3. For each block find candidates with `npx maru dsp nodes`, `npx maru dsp effects` and the `dsp-leaf-catalog` guide.
4. Mark each block as existing, composed, or new DSP. New DSP is a risk.
5. Order blocks by risk: what could kill the idea gets designed first.

## Output

Write to `design/signal-flow.md`. Ask "May I write this to [filepath]?" first, unless `modes.automation` is `act`.

## Done when

`design/signal-flow.md` lists every block with a candidate and a risk.

