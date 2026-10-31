---
name: vertical-slice
description: "End-to-end validation: one control, one sound, one preset, from face to publication dry run."
user-invocable: true
allowed-tools: Read, Glob, Grep, Write, Edit, AskUserQuestion, Bash(npx maru *), Bash(npm run *), Bash(node tools/*), Bash(git log*), Bash(git status*), Bash(git diff*)
---

# Vertical Slice

End-to-end validation: one control, one sound, one preset, from face to publication dry run.

## Read first

```sh
npx maru guide read project-planning build-preview-export
```

## Who leads

`producer`, `technical-director`

## Steps

1. Choose the smallest thing that proves the whole path.
2. Build it: contract, DSP, face, preset.
3. Run `npx maru module check .`, `npx maru module screenshot .` and `npx maru publish --dry-run`.
4. Write down every step that hurt, and use `/studio-gap` for what failed.

## Done when

One slice reaches a publication dry run, and each failure is recorded.

