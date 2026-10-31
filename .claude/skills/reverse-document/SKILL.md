---
name: reverse-document
description: "Generate missing design or architecture docs from existing code."
argument-hint: "[area]"
user-invocable: true
allowed-tools: Read, Glob, Grep, Write, Edit, AskUserQuestion, Bash(npx maru *), Bash(npm run *), Bash(node tools/*), Bash(git log*), Bash(git status*), Bash(git diff*)
---

# Reverse Document

Generate missing design or architecture docs from existing code.

## Steps

1. Read `src/`.
2. Describe what exists, and mark inferred intent as inferred.
3. Ask about anything unclear before writing.

## Review by rigor

Read `modes.rigor` with `node tools/config-get.mjs`. See `.claude/docs/director-gates.md`.

| Rigor | Review |
| --- | --- |
| `minimal` | None. Show the result to the person. |
| `standard` | The department lead reviews before you ask for approval. |
| `full` | Also `producer`. |

## Done when

Documents exist and inferences are marked.

