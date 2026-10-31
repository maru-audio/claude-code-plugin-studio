---
name: visualizer
description: "Add a meter, scope or curve to the face, drawn from real module data."
user-invocable: true
allowed-tools: Read, Glob, Grep, Write, Edit, AskUserQuestion, Bash(npx maru *), Bash(npm run *), Bash(node tools/*), Bash(git log*), Bash(git status*), Bash(git diff*), Task
---

# Visualizer

Add a meter, scope or curve to the face, drawn from real module data.

## Read first

```sh
npx maru guide read ui-kit-faces
```

## Who leads

`visualizer-engineer`

## Steps

1. Say what the readout helps someone decide. If nothing, leave it out.
2. Find the control with `npx maru guide read ui-kit-faces` and `npx maru guide props <Component>`.
3. Bind it to declared values or a declared visualization.
4. Check drawing stops when nothing changes, then capture with `npx maru module screenshot .`.

## Review by rigor

Read `modes.rigor` with `node tools/config-get.mjs`. See `.claude/docs/director-gates.md`.

| Rigor | Review |
| --- | --- |
| `minimal` | None. Show the result to the person. |
| `standard` | `visualizer-engineer` reviews before you ask for approval. |
| `full` | Also `art-director`. |

## Done when

The readout shows real values and has been captured.

