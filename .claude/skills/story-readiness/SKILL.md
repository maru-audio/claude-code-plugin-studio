---
name: story-readiness
description: "Check whether a story is ready: clear acceptance, no open questions, valid decisions."
argument-hint: "[story]"
user-invocable: true
allowed-tools: Read, Glob, Grep, AskUserQuestion, Bash(npx maru *), Bash(node tools/*), Bash(git log*), Bash(git status*), Bash(git diff*)
---

# Story Readiness

Check whether a story is ready: clear acceptance, no open questions, valid decisions.

## Steps

1. Read the story.
2. Check acceptance can be verified.
3. Check dependencies are complete and files exist.
4. Report READY or NOT READY with reasons.

## Done when

A verdict exists.

