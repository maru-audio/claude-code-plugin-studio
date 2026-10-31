---
name: smoke-check
description: "Critical-path smoke gate: does it compile, load, render and show its face?"
user-invocable: true
allowed-tools: Read, Glob, Grep, AskUserQuestion, Bash(npx maru *), Bash(node tools/*), Bash(git log*), Bash(git status*), Bash(git diff*)
---

# Smoke Check

Critical-path smoke gate: does it compile, load, render and show its face?

## Steps

1. Run `npm run typecheck`.
2. Run `npx maru module check .`.
3. Run `npx maru module verify-browser src/index.ts`.
4. Run `npx maru module screenshot .`.
5. Report each result. One failure means it is not ready for QA.

## Done when

Four results are reported.

