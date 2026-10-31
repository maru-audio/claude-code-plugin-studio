---
name: architecture-review
description: "Map design requirements to decisions. Finds gaps, conflicts between ADRs, and unsupported assumptions about Maru."
user-invocable: true
allowed-tools: Read, Glob, Grep, AskUserQuestion, Bash(npx maru *), Bash(node tools/*), Bash(git log*), Bash(git status*), Bash(git diff*)
---

# Architecture Review

Map design requirements to decisions. Finds gaps, conflicts between ADRs, and unsupported assumptions about Maru.

## Steps

1. Read `design/pdd/` and `docs/architecture/`.
2. Build a table from requirement to decision.
3. Check each assumption about Maru against `npx maru <group> --help` or a guide.
4. Report PASS, CONCERNS or FAIL.

## Done when

A traceability table exists with gaps listed.

