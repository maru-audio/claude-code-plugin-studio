---
name: sampler-bank
description: "Make a sampler bank or playable kit from recordings, with mappings, presets and rights."
user-invocable: true
allowed-tools: Read, Glob, Grep, Write, Edit, AskUserQuestion, Bash(npx maru *), Bash(npm run *), Bash(node tools/*), Bash(git log*), Bash(git status*), Bash(git diff*), Task
---

# Sampler Bank

Make a sampler bank or playable kit from recordings, with mappings, presets and rights.

## Read first

```sh
npx maru guide read sample-kits-and-banks assets-and-resources
```

## Who leads

`sampler-engineer`, `sample-librarian`

## Steps

1. Read the guide, and choose between a generated kit, a pitched instrument, a bank and a Sampler module.
2. Collect files, and record rights for each in `design/assets.md`.
3. Set zones, velocity layers and round robin.
4. Ask a person to play it. Listen for seams, level jumps and machine-gun repeats.
5. A bank publishes through `/publish`; check `bank.json` is detected with `npx maru publish --dry-run`.

## Review by rigor

Read `modes.rigor` with `node tools/config-get.mjs`. See `.claude/docs/director-gates.md`.

| Rigor | Review |
| --- | --- |
| `minimal` | None. Show the result to the person. |
| `standard` | `sampler-engineer` reviews before you ask for approval. |
| `full` | Also `creative-director`. |

## Done when

A playable bank exists, with rights recorded and a person's playing notes.

