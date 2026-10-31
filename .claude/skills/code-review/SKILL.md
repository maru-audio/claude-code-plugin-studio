---
name: code-review
description: "Review module code: realtime safety first, then ownership, contract use and tests."
user-invocable: true
allowed-tools: Read, Glob, Grep, AskUserQuestion, Bash(npx maru *), Bash(node tools/*), Bash(git log*), Bash(git status*), Bash(git diff*)
---

# Code Review

Review module code: realtime safety first, then ownership, contract use and tests.

## Read first

```sh
npx maru guide read restricted-typescript
```

## Who leads

`lead-dsp-engineer`

## Steps

1. Read the diff with `git diff`.
2. Realtime: allocation, locks, I/O or callbacks in `process`.
3. Ownership: audio in the face, parameter state in the face, curves outside the taper.
4. Imports: public `maruaudio/*` only.
5. Run `npx maru module check . --fast`.
6. Report findings by severity with file and line.

## Severity

| Severity | Examples |
| --- | --- |
| Critical | Allocation or I/O in `process`, audio in the face, unstable feedback, NaN output |
| Major | Missing smoothing, hard-coded sample rate, parameter state in the face, private imports |
| Minor | Naming, duplication, unused code |

For audio-specific checks, also run `/dsp-review`.

## Done when

Findings are listed by severity, or the review states that there are none.

