---
name: adopt
description: "Brownfield audit: bring an existing module or plugin idea into the studio with a numbered migration plan. Checks that existing artifacts actually work."
user-invocable: true
allowed-tools: Read, Glob, Grep, Write, Edit, AskUserQuestion, Bash(npx maru *), Bash(npm run *), Bash(node tools/*), Bash(git log*), Bash(git status*), Bash(git diff*)
---

# Adopt

Brownfield audit: bring an existing module or plugin idea into the studio with a numbered migration plan. Checks that existing artifacts actually work.

## Read first

```sh
npx maru guide read porting-web-audio platform-overview
```

## Steps

1. Identify what exists: a Maru module, a community module to remix, a JUCE project, or a web audio prototype.
2. For a Maru module run `npx maru module check .`. For a community module use `npx maru community search --query <text>` and `npx maru community files <owner> <slug>`.
3. For a web audio prototype read the `porting-web-audio` guide. For JUCE or other C++, say that there is no automatic import.
4. Write a numbered plan: what moves into `src/`, what is rebuilt, what is dropped.
5. Ask before executing any step. Keep credit and licence notices intact.

## Output

Write to `production/adoption-plan.md` using `.claude/docs/templates/adoption-plan.md`. Ask "May I write this to [filepath]?" first, unless `modes.automation` is `act`.

## Done when

A numbered migration plan exists, with credit and licence recorded.

