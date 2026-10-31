---
name: host-matrix
description: "Maintain the host and format compatibility matrix, with evidence per cell."
user-invocable: true
allowed-tools: Read, Glob, Grep, Write, Edit, AskUserQuestion, Bash(npx maru *), Bash(npm run *), Bash(node tools/*), Bash(git log*), Bash(git status*), Bash(git diff*)
---

# Host Matrix

Maintain the host and format compatibility matrix, with evidence per cell.

## Who leads

`host-compat-engineer`

## Steps

1. Run `npx maru plugin capabilities` and `npx maru plugin list`.
2. Run `npx maru plugin verify-formats` if native builds are available here.
3. For each host and format record: tested with version, result, or **not tested**.
4. A person tests inside a DAW. Do not fill cells from assumption.

## Output

Write to `production/qa/host-matrix.md` using `.claude/docs/templates/host-matrix.md`. Ask "May I write this to [filepath]?" first, unless `modes.automation` is `act`.

## Done when

The matrix has evidence or an explicit **not tested** in each cell.

## Known gaps

This skill may hit: [DEVX-063](../../../docs/KNOWN-GAPS.md#devx-063), [DEVX-075](../../../docs/KNOWN-GAPS.md#devx-075). If it does, quote the exact message and carry on with what is left. Do not substitute another runtime.
