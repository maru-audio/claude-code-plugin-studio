---
name: ux-design
description: "Section-by-section UX spec for the face: what is visible at rest, the first minute, and how controls are reached."
user-invocable: true
allowed-tools: Read, Glob, Grep, Write, Edit, AskUserQuestion, Bash(npx maru *), Bash(npm run *), Bash(node tools/*), Bash(git log*), Bash(git status*), Bash(git diff*), Task
---

# Ux Design

Section-by-section UX spec for the face: what is visible at rest, the first minute, and how controls are reached.

## Read first

```sh
npx maru guide read ui-kit-faces
```

## Who leads

`ux-designer`

## Steps

1. Read the brief and Face Bible.
2. Describe the first minute: what the person sees, touches and hears.
3. List controls by importance. Consider hiding anything below the top five.
4. State hover, edit, loading and error states.
5. State the keyboard path.

## Output

Write to `design/ux/face.md` using `.claude/docs/templates/ux-spec.md`. Ask "May I write this to [filepath]?" first, unless `modes.automation` is `act`.

## Review by rigor

Read `modes.rigor` with `node tools/config-get.mjs`. See `.claude/docs/director-gates.md`.

| Rigor | Review |
| --- | --- |
| `minimal` | None. Show the result to the person. |
| `standard` | `ux-designer` reviews before you ask for approval. |
| `full` | Also `art-director`. |

## Done when

`design/ux/face.md` exists and covers the first minute.

