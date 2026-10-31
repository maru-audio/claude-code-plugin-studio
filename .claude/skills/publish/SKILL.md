---
name: publish
description: "Publish this module online. Dry run first, and always after an explicit yes."
user-invocable: true
allowed-tools: Read, Glob, Grep, Write, Edit, AskUserQuestion, Bash(npx maru *), Bash(npm run *), Bash(node tools/*), Bash(git log*), Bash(git status*), Bash(git diff*)
---

# Publish

Publish this module online. Dry run first, and always after an explicit yes.

## Read first

```sh
npx maru guide read build-preview-export
```

## Who leads

`publishing-specialist`

## Steps

1. Explain the difference between draft, source revision, built artifact and published release.
2. Run `npx maru module check .` and `npx maru publish --dry-run`.
3. Show what would be published, its visibility and its licence.
4. Run `npx maru login` only if the person agrees.
5. Ask: publish now? Only on a clear yes, run `npx maru publish --screenshot`.
6. Report the reference and link.

## Done when

A dry run was shown, and publication happened only after a yes.

