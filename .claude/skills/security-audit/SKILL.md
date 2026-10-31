---
name: security-audit
description: "Security review before publishing: dependencies, credentials, licence settings and source visibility."
user-invocable: true
allowed-tools: Read, Glob, Grep, AskUserQuestion, Bash(npx maru *), Bash(node tools/*), Bash(git log*), Bash(git status*), Bash(git diff*)
---

# Security Audit

Security review before publishing: dependencies, credentials, licence settings and source visibility.

## Who leads

`security-engineer`

## Steps

1. Review dependencies in `package.json`.
2. Search the repository for secrets.
3. Read `npx maru module license status` and the planned source visibility.
4. Confirm what `npx maru publish --dry-run` would upload.

## Done when

Findings are listed, and nothing was published.

