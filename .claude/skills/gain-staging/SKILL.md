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

1. Make test audio with `node tools/make-test-signal.mjs`.
2. Run `npx maru module eval --suite levels --stimulus production/qa/signals/sine-440.wav`. Narrow with `--sweep <param>`, `--no-presets`, `--input-lufs -18` and `--max-seconds 2`. Try the other signals too; a tone alone misses a lot.
3. Compare each preset with the policy in `design/sound-bible.md`.
4. Report numbers, not adjectives. Equal loudness does not replace listening.
5. If the command fails, stop and use `/studio-gap`.

## Reading the numbers

- Levels are output minus input in LU, at the nominal level (default -18 LUFS).
- For an effect, unity at default is a good starting policy. Character effects may differ, but must do so on purpose.
- Watch the transfer slope: above 1 means the module adds dynamics, and below 1 means it compresses.
- Check true peak, as well as loudness.
- The built-in test audio is missing from `maruaudio@0.0.7`, so pass `--stimulus`.

## Done when

Measured level per preset is reported, or the failure is recorded.

## Known gaps

This skill may hit: [DEVX-061](../../../docs/KNOWN-GAPS.md#devx-061), [DEVX-070](../../../docs/KNOWN-GAPS.md#devx-070). If it does, quote the exact message and carry on with what is left. Do not substitute another runtime.
