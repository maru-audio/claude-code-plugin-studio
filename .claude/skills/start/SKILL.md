---
name: start
description: "Guides a first-time user through onboarding and picks the right workflow. Use when the user is new, just cloned the template, has no idea yet, asks where to begin, or wants to bring in existing work."
user-invocable: true
allowed-tools: Read, Glob, Grep, Write, Edit, AskUserQuestion, Bash(npx maru *), Bash(npm run *), Bash(node tools/*), Bash(git log*), Bash(git status*), Bash(git diff*)
---

# Start

Guides a first-time user through onboarding and picks the right workflow. Use when the user is new, just cloned the template, has no idea yet, asks where to begin, or wants to bring in existing work.

## Steps

1. Run `npx maru doctor` and `npx maru module status .`. Keep the results; do not show them yet.
2. Run `node tools/project-state.mjs` to read the stage, the brief and what exists on disk.
3. If `git remote -v` still points at the template, say so: a push would go to the template repository.
4. Ask where the person is: **A** no idea yet, **B** a vague idea, **C** a clear idea, **D** existing work or a module to remix.
5. Ask what they want to make: effect, instrument, MIDI tool, or sample kit. The template starts as an effect; for the others name the matching `npx maru init <dir> --from <starter>`.
6. Ask `modes.rigor`: `minimal` (default), `standard` or `full`. Explain it in one sentence each, then write it with `node tools/config-set.mjs modes.rigor <value>` after a yes.
7. Say plainly what this machine can and cannot do, from `npx maru doctor`. Native plug-in builds may be unavailable; if so, say the result will be a browser-playable module.
8. Name one next step and stop: A or B → `/brainstorm`; C → `/quick-design` or `/design-module`; D → `/adopt`.

## Done when

The person knows what they can make here, what this machine can do, and their one next step.

## Known gaps

This skill may hit: [DEVX-062](../../../docs/KNOWN-GAPS.md#devx-062), [DEVX-063](../../../docs/KNOWN-GAPS.md#devx-063). If it does, quote the exact message and carry on with what is left. Do not substitute another runtime.
