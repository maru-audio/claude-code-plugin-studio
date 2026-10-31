---
name: parameter-pass
description: "Design or change the parameter contract: names, ranges, tapers, defaults, order."
user-invocable: true
allowed-tools: Read, Glob, Grep, Write, Edit, AskUserQuestion, Bash(npx maru *), Bash(npm run *), Bash(node tools/*), Bash(git log*), Bash(git status*), Bash(git diff*), Task
---

# Parameter Pass

Design or change the parameter contract: names, ranges, tapers, defaults, order.

## Read first

```sh
npx maru guide read parameters-and-schema
```

## Who leads

`parameter-designer`

## Steps

1. Read the `parameters-and-schema` guide and `src/contract.ts`. `npx maru module params` only serves official modules, so read the file.
2. For each parameter, say what the middle of its range sounds like.
3. Set the taper in the descriptor. Never fix feel in the face.
4. Remember that order is the host ABI. Before first release, change it freely and migrate every consumer in the same change.
5. Update presets and `src/qualification.ts` together, then run `npx maru module check . --fast`.

## Review by rigor

Read `modes.rigor` with `node tools/config-get.mjs`. See `.claude/docs/director-gates.md`.

| Rigor | Review |
| --- | --- |
| `minimal` | None. Show the result to the person. |
| `standard` | `parameter-designer` reviews before you ask for approval. |
| `full` | Also `art-director`. |

## Done when

Contract, presets, face and qualification agree, and the fast check passes.

