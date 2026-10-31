---
name: face-bible
description: "Author the Face Bible: visual identity, references, type, colour and control style."
user-invocable: true
allowed-tools: Read, Glob, Grep, Write, Edit, AskUserQuestion, Bash(npx maru *), Bash(npm run *), Bash(node tools/*), Bash(git log*), Bash(git status*), Bash(git diff*)
---

# Face Bible

Author the Face Bible: visual identity, references, type, colour and control style.

## Read first

```sh
npx maru guide read face-from-reference ui-kit-faces
```

## Who leads

`art-director`

## Steps

1. Collect reference images and say what each is for.
2. Choose control style from what the UI kit offers. Check props with `npx maru guide props Knob`.
3. Set the declared face size, and one label at rest with the value on hover.
4. List what must be removed from references because it implies behaviour the module lacks.

## Output

Write to `design/face-bible.md` using `.claude/docs/templates/face-bible.md`. Ask "May I write this to [filepath]?" first, unless `modes.automation` is `act`.

## Done when

`design/face-bible.md` exists and names the real components it will use.

