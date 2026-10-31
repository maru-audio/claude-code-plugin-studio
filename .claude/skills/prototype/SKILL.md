---
name: prototype
description: "Test one risky idea quickly inside the module workbench. PROCEED, PIVOT or KILL."
user-invocable: true
allowed-tools: Read, Glob, Grep, Write, Edit, AskUserQuestion, Bash(npx maru *), Bash(npm run *), Bash(node tools/*), Bash(git log*), Bash(git status*), Bash(git diff*), Task
---

# Prototype

Test one risky idea quickly inside the module workbench. PROCEED, PIVOT or KILL.

## Read first

```sh
npx maru guide read face-from-reference
```

## Who leads

`prototyper`

## Steps

1. State the one question being tested.
2. Use a face-first passthrough or the starter's audition voice. Label temporary behaviour.
3. Work in the module with `npm run dev`. Never create a standalone preview.
4. Ask the person to try it, then recommend PROCEED, PIVOT or KILL.

## Output

Write to `prototypes/<name>/README.md`. Ask "May I write this to [filepath]?" first, unless `modes.automation` is `act`.

## Review by rigor

Read `modes.rigor` with `node tools/config-get.mjs`. See `.claude/docs/director-gates.md`.

| Rigor | Review |
| --- | --- |
| `minimal` | None. Show the result to the person. |
| `standard` | `prototyper` reviews before you ask for approval. |
| `full` | Also `creative-director`. |

## Done when

A recommendation exists with what was tried.

