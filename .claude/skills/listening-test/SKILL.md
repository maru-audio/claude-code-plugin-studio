---
name: listening-test
description: "Structured listening session: a script for a person, then a report of what they heard. The audio version of a playtest."
user-invocable: true
allowed-tools: Read, Glob, Grep, Write, Edit, AskUserQuestion, Bash(npx maru *), Bash(npm run *), Bash(node tools/*), Bash(git log*), Bash(git status*), Bash(git diff*), Task
---

# Listening Test

Structured listening session: a script for a person, then a report of what they heard. The audio version of a playtest.

## Who leads

`sound-director`

## Steps

1. Read the listening script in `design/sound-bible.md`.
2. Give the person steps: start `npm run dev`, click **Unmute**, play this, turn this.
3. Ask what they heard. Do not lead them.
4. Write it up as listening evidence, separate from measurements.

## Output

Write to `production/qa/listening/` using `.claude/docs/templates/listening-report.md`. Ask "May I write this to [filepath]?" first, unless `modes.automation` is `act`.

## How to run a useful session

- Match loudness first, or the louder option wins.
- Change one thing at a time, and take a break every twenty minutes.
- Use material the listener knows well.
- Ask open questions: "what changed?" before "did you prefer it?"
- Write what they said, not what you hoped they said.

## Review by rigor

Read `modes.rigor` with `node tools/config-get.mjs`. See `.claude/docs/director-gates.md`.

| Rigor | Review |
| --- | --- |
| `minimal` | None. Show the result to the person. |
| `standard` | `sound-director` reviews before you ask for approval. |
| `full` | Also `qa-lead`. |

## Done when

A listening report exists in a person's words.

## Known gaps

This skill may hit: [DEVX-073](../../../docs/KNOWN-GAPS.md#devx-073). If it does, quote the exact message and carry on with what is left. Do not substitute another runtime.
