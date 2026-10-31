---
name: marketplace-listing
description: "Prepare a free marketplace listing: validate, preview, and submit only with approval."
user-invocable: true
allowed-tools: Read, Glob, Grep, Write, Edit, AskUserQuestion, Bash(npx maru *), Bash(npm run *), Bash(node tools/*), Bash(git log*), Bash(git status*), Bash(git diff*), Task
---

# Marketplace Listing

Prepare a free marketplace listing: validate, preview, and submit only with approval.

## Who leads

`publishing-specialist`, `release-manager`

## Steps

1. See `npx maru marketplace --help`.
2. Inspect with `npx maru marketplace inspect`, then run `npx maru marketplace validate` on the metadata.
3. Show the diff using `npx maru marketplace preview`.
4. After a yes, `npx maru marketplace prepare`.
5. Submission is public: run `npx maru marketplace submit` only after a separate yes.

## Review by rigor

Read `modes.rigor` with `node tools/config-get.mjs`. See `.claude/docs/director-gates.md`.

| Rigor | Review |
| --- | --- |
| `minimal` | None. Show the result to the person. |
| `standard` | `publishing-specialist` reviews before you ask for approval. |
| `full` | Also `release-manager`. |

## Done when

Validated metadata and a preview exist, and nothing was submitted without approval.

