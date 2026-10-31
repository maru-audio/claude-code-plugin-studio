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

Write to `design/assets.md`. Ask "May I write this to [filepath]?" first, unless `modes.automation` is `act`.

## Done when

Each asset has a slot, a source and rights.

