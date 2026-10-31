---
name: compare-release
description: "Compare two releases before shipping: what changed, and could saved sessions sound different?"
user-invocable: true
allowed-tools: Read, Glob, Grep, AskUserQuestion, Bash(npx maru *), Bash(node tools/*), Bash(git log*), Bash(git status*), Bash(git diff*)
---

# Compare Release

Compare two releases before shipping: what changed, and could saved sessions sound different?

## Who leads

`release-manager`, `host-compat-engineer`

## Steps

1. Run `npx maru release compare <old> <new>`. Its compatibility findings are advisory.
2. Check parameter order, ranges and defaults against the last release.
3. State whether saved sessions could change, and say so in `/patch-notes`.

## Done when

Compatibility is stated with the comparison attached.

