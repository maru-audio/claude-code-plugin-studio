---
name: ux-review
description: "Validate a UX spec or the built face: accessibility, concision and agreement with the design."
user-invocable: true
allowed-tools: Read, Glob, Grep, AskUserQuestion, Bash(npx maru *), Bash(node tools/*), Bash(git log*), Bash(git status*), Bash(git diff*)
---

# Ux Review

Validate a UX spec or the built face: accessibility, concision and agreement with the design.

## Who leads

`ux-designer`, `accessibility-specialist`

## Steps

1. Run `npx maru module screenshot .` and look at the image.
2. Compare with `design/ux/face.md` and `design/face-bible.md`.
3. Check for repeated labels, permanent captions and nested boxes.
4. Report APPROVED, NOT ASSESSED or NEEDS WORK.

## Done when

A verdict exists with a screenshot as evidence.

## Known gaps

This skill may hit: [DEVX-074](../../../docs/KNOWN-GAPS.md#devx-074). If it does, quote the exact message and carry on with what is left. Do not substitute another runtime.
