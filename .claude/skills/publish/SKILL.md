---
name: publish
description: "Publish this module online. Dry run first, and always after an explicit yes."
user-invocable: true
allowed-tools: Read, Glob, Grep, Write, Edit, AskUserQuestion, Bash(npx maru *), Bash(npm run *), Bash(node tools/*), Bash(git log*), Bash(git status*), Bash(git diff*), Task
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

## Say this before asking

- **A first publication is public** with free access, unless `--visibility unlisted` is passed.
- Your source is uploaded by default, as a private archive. It is needed for Studio editing and native builds.
- A module cannot be unpublished from the command line yet. It is archived from the website.
- By default this publishes a fast development build, unqualified. `--qualify` runs the checked publisher.
- Check the module id and name first. They should be this plugin's, not the template's.

## Review by rigor

Read `modes.rigor` with `node tools/config-get.mjs`. See `.claude/docs/director-gates.md`.

| Rigor | Review |
| --- | --- |
| `minimal` | None. Show the result to the person. |
| `standard` | `publishing-specialist` reviews before you ask for approval. |
| `full` | Also `release-manager`. |

## Done when

A dry run was shown, and publication happened only after a yes.

