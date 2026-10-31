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

## Done when

Documents exist and inferences are marked.

