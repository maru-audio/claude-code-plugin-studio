---
name: studio-gap
description: "Record something the studio or Maru could not do: a failing command, a missing capability or misleading documentation. Use when a tool fails or a skill hits a dead end."
user-invocable: true
allowed-tools: Read, Glob, Grep, Write, Edit, AskUserQuestion, Bash(npx maru *), Bash(npm run *), Bash(node tools/*), Bash(git log*), Bash(git status*), Bash(git diff*)
---

# Studio Gap

Record something the studio or Maru could not do: a failing command, a missing capability or misleading documentation. Use when a tool fails or a skill hits a dead end.

## Steps

1. Write down exactly what you tried, the exact output, the `maruaudio` version and the operating system.
2. Check `docs/KNOWN-GAPS.md`. If it is listed, add your evidence rather than a new entry.
3. Otherwise add an entry to `production/gaps.md` from `.claude/docs/templates/gap.md`: what you wanted, what happened, what would have helped.
4. Offer to open a GitHub issue with that text. Ask first, because it is public; remove paths and credentials.

## Output

Using `.claude/docs/templates/gap.md`. Ask "May I write this to [filepath]?" first, unless `modes.automation` is `act`.

## Done when

The gap is recorded with a reproducible command, and any workaround is labelled as a workaround.

