---
name: dsp-review
description: "Audio-specific review of DSP: stability, aliasing, zipper noise, denormals, DC, sample-rate independence, tails and reset."
user-invocable: true
allowed-tools: Read, Glob, Grep, AskUserQuestion, Bash(npx maru *), Bash(node tools/*), Bash(git log*), Bash(git status*), Bash(git diff*)
---

# Dsp Review

Audio-specific review of DSP: stability, aliasing, zipper noise, denormals, DC, sample-rate independence, tails and reset.

## Read first

```sh
npx maru guide read restricted-typescript processor-authoring
```

## Who leads

`lead-dsp-engineer`, `dsp-engineer`

## Steps

1. Read `src/dsp/` and the design.
2. **Stability:** can any feedback path run away? What limits it?
3. **Sample rate:** are time constants derived from it? Is there a hard-coded rate?
4. **Clicks:** is every audible parameter smoothed, including delay time and mix?
5. **Aliasing:** does any nonlinearity need oversampling? Is the decision stated?
6. **Numbers:** denormals in decays, DC after saturation, finite output from silence and full scale.
7. **State:** does reset match a fresh default? What happens on bypass?
8. Run `npx maru module check .`. Report each item as checked by reading, measured or not checked.

## Done when

Each item is reported as read, measured or not checked. Nothing is called good by ear.

## Known gaps

This skill may hit: [DEVX-070](../../../docs/KNOWN-GAPS.md#devx-070), [DEVX-071](../../../docs/KNOWN-GAPS.md#devx-071). If it does, quote the exact message and carry on with what is left. Do not substitute another runtime.
