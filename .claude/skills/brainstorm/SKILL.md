---
name: brainstorm
description: "Guides the user through finding and choosing a plugin concept. Use when they want ideas, a new concept, or have a musical problem but no plugin yet."
user-invocable: true
allowed-tools: Read, Glob, Grep, Write, Edit, AskUserQuestion, Bash(npx maru *), Bash(npm run *), Bash(node tools/*), Bash(git log*), Bash(git status*), Bash(git diff*), Task
---

# Brainstorm

Guides the user through finding and choosing a plugin concept. Use when they want ideas, a new concept, or have a musical problem but no plugin yet.

## Who leads

`creative-director`, `product-designer`

## Steps

1. Ask what they play or produce, what annoys them, and a sound they love.
2. Check what exists with `npx maru module list` and `npx maru dsp effects`, so ideas can be recomposed rather than invented.
3. Offer three concepts, each with one musical promise, a player, and the riskiest unknown.
4. After a choice, write the one-page brief from `.claude/docs/templates/brief.md`.
5. Next step: at `minimal` go to `/create-stories`; otherwise `/map-signal-flow`.

## Output

Write to `design/brief.md` using `.claude/docs/templates/brief.md`. Ask "May I write this to [filepath]?" first, unless `modes.automation` is `act`.

## Opinions

- A good promise can be heard: "repeats get darker and more unstable as they fade" works, and "a versatile delay" does not.
- Prefer a limit that creates character over a feature list.
- If a chain of existing effects already does it, say so. That may be the right product, built in an afternoon.

## Questions worth asking

- What did you try that almost worked, and what was wrong with it?
- What would you turn first?
- When would you not use this?

## Review by rigor

Read `modes.rigor` with `node tools/config-get.mjs`. See `.claude/docs/director-gates.md`.

| Rigor | Review |
| --- | --- |
| `minimal` | None. Show the result to the person. |
| `standard` | `creative-director` reviews before you ask for approval. |
| `full` | Also `creative-director`. |

## Done when

`design/brief.md` exists: one page, one promise, one player, one riskiest unknown.

