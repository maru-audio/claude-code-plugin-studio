---
name: gain-staging
description: "Check output against input level, per preset and across inputs. The audio version of a balance check."
user-invocable: true
allowed-tools: Read, Glob, Grep, AskUserQuestion, Bash(npx maru *), Bash(node tools/*), Bash(git log*), Bash(git status*), Bash(git diff*)
---

# Gain Staging

Check output against input level, per preset and across inputs. The audio version of a balance check.

## Who leads

`sound-director`

## Steps

1. Run `npx maru module eval --suite levels`. Narrow with `--sweep <param>`, `--no-presets`, `--input-lufs -18` and `--max-seconds 2`.
2. Compare each preset with the policy in `design/sound-bible.md`.
3. Report numbers, not adjectives. Equal loudness does not replace listening.
4. If the command fails, stop and use `/studio-gap`.

## Done when

Measured level per preset is reported, or the failure is recorded.

## Known gaps

This skill may hit: [DEVX-061](../../../docs/KNOWN-GAPS.md#devx-061), [DEVX-070](../../../docs/KNOWN-GAPS.md#devx-070). If it does, quote the exact message and carry on with what is left. Do not substitute another runtime.
