---
name: sound-bible
description: "Author the Sound Bible: the sonic identity, references and level policy that all sound work must follow."
user-invocable: true
allowed-tools: Read, Glob, Grep, Write, Edit, AskUserQuestion, Bash(npx maru *), Bash(npm run *), Bash(node tools/*), Bash(git log*), Bash(git status*), Bash(git diff*), Task
---

# Sound Bible

Author the Sound Bible: the sonic identity, references and level policy that all sound work must follow.

## Read first

```sh
npx maru guide read instrument-sound-design
```

## Who leads

`sound-director`

## Steps

1. Ask for two to five reference recordings or plugins, and what is liked about each.
2. Describe the character in plain words: dark, wide, unstable, polite.
3. Set the level policy: output relative to input, headroom, how presets are level-matched.
4. Write what the plugin must never sound like.
5. Write the listening script used to judge it.

## Output

Write to `design/sound-bible.md` using `.claude/docs/templates/sound-bible.md`. Ask "May I write this to [filepath]?" first, unless `modes.automation` is `act`.

## Review by rigor

Read `modes.rigor` with `node tools/config-get.mjs`. See `.claude/docs/director-gates.md`.

| Rigor | Review |
| --- | --- |
| `minimal` | None. Show the result to the person. |
| `standard` | `sound-director` reviews before you ask for approval. |
| `full` | Also `creative-director`. |

## Done when

`design/sound-bible.md` exists, and someone new could judge a sound from it.

