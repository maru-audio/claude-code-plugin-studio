---
name: create-architecture
description: "Author the technical plan before code: owner, starter, Graph or Processor, DSP candidates, wiring, prerequisites and verification order."
user-invocable: true
allowed-tools: Read, Glob, Grep, Write, Edit, AskUserQuestion, Bash(npx maru *), Bash(npm run *), Bash(node tools/*), Bash(git log*), Bash(git status*), Bash(git diff*)
---

# Create Architecture

Author the technical plan before code: owner, starter, Graph or Processor, DSP candidates, wiring, prerequisites and verification order.

## Read first

```sh
npx maru guide read project-planning processor-authoring
```

## Who leads

`technical-director`, `lead-dsp-engineer`

## Steps

1. Read the `project-planning` guide and follow its decision tree.
2. State the project type, the starter, and Graph or Processor.
3. List DSP candidates and their real consumers.
4. State real host wiring, and prerequisites that are missing on this machine.
5. Order verification by risk. Save beside the module as `docs/architecture/plan.md`.

## Output

Write to `docs/architecture/plan.md`. Ask "May I write this to [filepath]?" first, unless `modes.automation` is `act`.

## Done when

A plan exists that another engineer could follow, with gaps named.

