---
name: modulation-design
description: "Design modulation: sources, targets, depth, rate, sync and what can be heard."
user-invocable: true
allowed-tools: Read, Glob, Grep, Write, Edit, AskUserQuestion, Bash(npx maru *), Bash(npm run *), Bash(node tools/*), Bash(git log*), Bash(git status*), Bash(git diff*), Task
---

# Modulation Design

Design modulation: sources, targets, depth, rate, sync and what can be heard.

## Read first

```sh
npx maru guide read processor-authoring parameters-and-schema
```

## Who leads

`modulation-engineer`, `product-designer`

## Steps

1. List what should move and why.
2. For each route state source, target, range, rate and whether it syncs to the host.
3. Decide what runs at audio rate and what at control rate.
4. Say what happens at extreme depth, and how clicks are avoided.
5. Add any new controls through `/parameter-pass`.

## Output

Write to `design/modulation.md` using `.claude/docs/templates/modulation.md`. Ask "May I write this to [filepath]?" first, unless `modes.automation` is `act`.

## Review by rigor

Read `modes.rigor` with `node tools/config-get.mjs`. See `.claude/docs/director-gates.md`.

| Rigor | Review |
| --- | --- |
| `minimal` | None. Show the result to the person. |
| `standard` | `modulation-engineer` reviews before you ask for approval. |
| `full` | Also `creative-director`. |

## Done when

`design/modulation.md` lists every route, with its rate and range.

