---
name: face-from-reference
description: "Build the face from a reference image inside this module: parameters first, then the face, DSP last."
argument-hint: "[image path]"
user-invocable: true
allowed-tools: Read, Glob, Grep, Write, Edit, AskUserQuestion, Bash(npx maru *), Bash(npm run *), Bash(node tools/*), Bash(git log*), Bash(git status*), Bash(git diff*)
---

# Face From Reference

Build the face from a reference image inside this module: parameters first, then the face, DSP last.

## Read first

```sh
npx maru guide read face-from-reference ui-kit-faces
```

## Who leads

`face-engineer`, `art-director`

## Steps

1. Read the guide below, then measure the reference: size, control positions, what each control means.
2. Map each control to a parameter in `src/contract.ts`. Use `/parameter-pass` if the contract needs to change.
3. Build `src/ui/` from shared controls and bind every control.
4. Run `npx maru module screenshot .` and put the capture next to the reference.
5. Say where they still differ. Keep the temporary sound labelled as temporary.

## Done when

A bound face renders at its declared size, and the differences from the reference are stated.

