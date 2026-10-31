---
name: license-setup
description: "Set up paid activation and tester licences for a native plug-in. Asks first; it changes how the product works."
user-invocable: true
allowed-tools: Read, Glob, Grep, Write, Edit, AskUserQuestion, Bash(npx maru *), Bash(npm run *), Bash(node tools/*), Bash(git log*), Bash(git status*), Bash(git diff*), Task
---

# License Setup

Set up paid activation and tester licences for a native plug-in. Asks first; it changes how the product works.

## Who leads

`security-engineer`, `release-manager`

## Steps

1. Read <https://maru.audio/docs/plugin-licensing>.
2. See the current state with `npx maru module license status`.
3. Explain seats, trials and testers, then ask.
4. Only after a yes run `npx maru module license on`, and `npx maru module license grant <email>` for testers.
5. Rebuild afterwards, because licensing binds to the build.

## Review by rigor

Read `modes.rigor` with `node tools/config-get.mjs`. See `.claude/docs/director-gates.md`.

| Rigor | Review |
| --- | --- |
| `minimal` | None. Show the result to the person. |
| `standard` | `security-engineer` reviews before you ask for approval. |
| `full` | Also `release-manager`. |

## Done when

Licensing state is reported, and changed only after a yes.

