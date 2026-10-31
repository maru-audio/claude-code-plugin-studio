---
name: dev-story
description: "Implement one story: code, check, evidence. Use when the user says to build or implement a story."
argument-hint: "[story]"
user-invocable: true
allowed-tools: Read, Glob, Grep, Write, Edit, AskUserQuestion, Bash(npx maru *), Bash(npm run *), Bash(node tools/*), Bash(git log*), Bash(git status*), Bash(git diff*)
---

# Dev Story

Implement one story: code, check, evidence. Use when the user says to build or implement a story.

## Read first

```sh
npx maru guide read processor-authoring
```

## Steps

1. Read the story and the guides for its type.
2. Name the files and public imports you will use.
3. Implement the smallest slice that can be heard or seen.
4. While working, run `npx maru module check . --fast` and `npm run typecheck`.
5. For a Face story run `npx maru module screenshot .`. For a DSP story make test audio with `node tools/make-test-signal.mjs`, then check levels with `npx maru module eval --suite levels --no-presets --max-seconds 2 --stimulus production/qa/signals/sine-440.wav`.
6. Save evidence to `production/qa/evidence/<story>/`.
7. Ask the person to listen in `npm run dev` when the sound changed. Say plainly if they have not.

## Order of work by story type

| Type | Order | Evidence |
| --- | --- | --- |
| Contract | `src/contract.ts`, presets, qualification and face bindings, all in one commit | Fast check |
| Face | Bind parameters, then lay out | Screenshot |
| DSP | Compose leaves, then custom code | Full check, levels, **a person listens** |
| Preset | Write, level-match, order | Levels, **a person auditions** |

## Stop and ask when

- The design does not say what happens at an extreme.
- A public import you need does not exist. Record it with `/studio-gap`.
- A check fails and the fix would change the design.

## Review by rigor

Read `modes.rigor` with `node tools/config-get.mjs`. See `.claude/docs/director-gates.md`.

| Rigor | Review |
| --- | --- |
| `minimal` | None. Show the result to the person. |
| `standard` | The department lead reviews before you ask for approval. |
| `full` | Also `producer`. |

## Done when

The code is in, the checks ran, evidence is saved, and the listening status is stated.

## Known gaps

This skill may hit: [DEVX-061](../../../docs/KNOWN-GAPS.md#devx-061). If it does, quote the exact message and carry on with what is left. Do not substitute another runtime.
