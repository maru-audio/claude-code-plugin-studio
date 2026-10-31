---
name: asset-audit
description: "Audit assets against the spec: orphans, missing rights, size and format."
user-invocable: true
allowed-tools: Read, Glob, Grep, AskUserQuestion, Bash(npx maru *), Bash(node tools/*), Bash(git log*), Bash(git status*), Bash(git diff*)
---

# Asset Audit

Audit assets against the spec: orphans, missing rights, size and format.

## Steps

1. List files under `assets/` and resource declarations in `src/`.
2. Find orphans and missing files.
3. Check every file has an entry in `design/assets.md` with a source and licence.
4. Report anything with unknown rights as a release blocker.

## Done when

Every asset is accounted for or listed as a blocker.

