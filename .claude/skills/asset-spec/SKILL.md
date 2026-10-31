---
name: asset-spec
description: "Specs for samples, impulse responses and images: format, rights, slot and, if generated, the prompt and seed."
user-invocable: true
allowed-tools: Read, Glob, Grep, Write, Edit, AskUserQuestion, Bash(npx maru *), Bash(npm run *), Bash(node tools/*), Bash(git log*), Bash(git status*), Bash(git diff*)
---

# Asset Spec

Specs for samples, impulse responses and images: format, rights, slot and, if generated, the prompt and seed.

## Read first

```sh
npx maru guide read assets-and-resources generation-and-transcription
```

## Steps

1. List every asset the design needs and its resource slot.
2. For each give source, licence, format and size.
3. For generated sounds write the prompt and settings, and ask before running hosted generation because it can cost money.

## Output

Write to `design/assets.md` using `.claude/docs/templates/assets-register.md`. Ask "May I write this to [filepath]?" first, unless `modes.automation` is `act`.

## Review by rigor

Read `modes.rigor` with `node tools/config-get.mjs`. See `.claude/docs/director-gates.md`.

| Rigor | Review |
| --- | --- |
| `minimal` | None. Show the result to the person. |
| `standard` | The department lead reviews before you ask for approval. |
| `full` | Also `creative-director`. |

## Done when

Each asset has a slot, a source and rights.

