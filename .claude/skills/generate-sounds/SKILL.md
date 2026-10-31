---
name: generate-sounds
description: "Generate audio, a kit or MIDI with hosted jobs. Asks first, since jobs can cost money."
user-invocable: true
allowed-tools: Read, Glob, Grep, Write, Edit, AskUserQuestion, Bash(npx maru *), Bash(npm run *), Bash(node tools/*), Bash(git log*), Bash(git status*), Bash(git diff*), Task
---

# Generate Sounds

Generate audio, a kit or MIDI with hosted jobs. Asks first, since jobs can cost money.

## Read first

```sh
npx maru guide read generation-and-transcription sample-kits-and-banks
```

## Who leads

`generative-audio-specialist`

## Steps

1. Read the spec and confirm that hosted generation is wanted.
2. Inspect options with `npx maru audio generate --help`.
3. Run the job only after a yes, then check it using `npx maru audio status`.
4. Record prompt, seed, settings and rights in `design/assets.md`.

## Review by rigor

Read `modes.rigor` with `node tools/config-get.mjs`. See `.claude/docs/director-gates.md`.

| Rigor | Review |
| --- | --- |
| `minimal` | None. Show the result to the person. |
| `standard` | `generative-audio-specialist` reviews before you ask for approval. |
| `full` | Also `creative-director`. |

## Done when

Generated takes are on disk, with settings and rights recorded.

