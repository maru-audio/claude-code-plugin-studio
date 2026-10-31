# Maru Plugin Studio: workflow guide

How to go from an idea to a published plugin using the 42 agents and 104 commands.

The pipeline has 7 phases. At `rigor: standard` and `full`, each phase has a gate
(`/gate-check`). At `rigor: minimal`, the default, nothing requires a gate. The
authoritative sequence is `.claude/docs/workflow-catalog.json`, read by `/help`.

## Quick start

1. Install: `npm install`.
2. Check the machine: `npm run studio:validate`.
3. Start Claude Code at the project root. You should see the session context from `session-start.mjs`. If not, hooks are not running; check that you started at the root.
4. Run `/start`.
5. At any point run `/help`. It reads your stage and tells you what is next.

## The default path: rigor minimal

```
/start → /brainstorm → /create-stories → /dev-story ↔ /story-done → /publish
```

One page of brief, then build. Each story must end in something you can hear or see.
Use this until a project needs more.

## Phase 1: Concept

**Goal:** one sentence saying what this plugin does for someone's music.

- `/brainstorm`: three concepts, each with a promise, a player and a riskiest unknown.
- Before inventing anything, look at what exists: `npx maru module list` and `npx maru dsp effects`. Many ideas are a good chain of existing effects.
- **Output:** `design/brief.md`.

A good brief says "a delay whose repeats get darker and more unstable, for dub", not "a versatile delay plugin".

## Phase 2: Sound and control design

**Goal:** know what it sounds like and what you touch.

- `/map-signal-flow`: every block from input to output, with a DSP candidate and a risk.
- `/sound-bible`: the character in plain words, references, level policy, and a listening script.
- `/face-bible`: reference images, the real UI kit components, declared size.
- `/design-module`: one Plugin Design Document per module or major block.
- `/design-review`, `/review-all-designs`: check them. `/propagate-design-change` when one changes.

## Phase 3: Technical setup

**Goal:** a plan that fits this machine and is honest about targets.

- `/setup-target`: which formats you promise. Each gets **works here**, **needs a component** or **not available in this release**.
- `/create-architecture`: owner, starter, Graph or Processor, DSP candidates, wiring, verification order.
- `/architecture-decision`: one ADR per decision that would be expensive to reverse.
- `/create-control-manifest`: at most fifteen must and never rules for this module.
- `/test-setup`: tests and CI, using the same commands as local work.

**Graph or Processor?** Use a Graph to wire existing nodes. Use a Processor for custom DSP in restricted TypeScript. Processor is the starter's default. `npx maru guide read project-planning` has the decision tree.

## Phase 4: Pre-production

**Goal:** prove the riskiest thing before building the rest.

- `/prototype`: test one question inside this module's workbench. Never build a standalone player.
- `/parameter-pass`: get the contract right. Parameter order is the host ABI.
- `/face-from-reference`: parameters, then the face, with DSP last.
- `/vertical-slice`: one control, one sound, one preset, all the way to a publication dry run. This is the most useful test in the studio, because it hits every gap early.
- `/create-epics`, `/create-stories`: slice the rest.

## Phase 5: Production

**Goal:** build in slices you can hear.

- `/sprint-plan`, `/sprint-status`.
- `/story-readiness`, `/dev-story`, `/story-done`.
- `/code-review`: realtime safety first.
- For bigger features use a team: `/team-effect`, `/team-instrument`, `/team-face`, `/team-sound`, `/team-presets`.

The working loop:

```bash
npm run dev                               # workbench with hot reload
npm run typecheck
npx maru module check . --fast            # while editing
npx maru module check .                   # before calling it done
npx maru module screenshot .              # after a face change
```

`--fast` skips the publish and browser gates, so it is not a pass.

## Phase 6: Polish

**Goal:** it holds up, and someone other than an agent has listened.

- `/gain-staging`: output against input, per preset.
- `/preset-pass`, `/demo-pass`.
- `/listening-test`: a script for a person, and a report in their words.
- `/state-recall`, `/midi-test`, `/soak-test`, `/perf-profile`.
- `/ux-review`, `/host-matrix`.
- `/team-polish`, `/team-qa`.

## Phase 7: Release

**Goal:** a link someone can play.

- `/release-checklist`: each item done, failed or not run.
- `/security-audit`: what is about to leave your machine.
- `/build-plugin`: native formats, if available here. A binary alone does not prove validation passed.
- `/publish`: a dry run first, then an explicit yes.
- `/launch-checklist`, `/changelog`, `/patch-notes`, `/team-release`, `/team-launch`.
- After launch: `/bug-report`, `/bug-triage`, `/hotfix`, `/day-one-patch`.

Words matter: **publish** puts a new version online, a **release** is one published version, and **unpublish** takes it offline.

## Cross-cutting

| Need | Use |
| --- | --- |
| What now? | `/help` |
| Where are we? | `/project-stage-detect` |
| Did the scope grow? | `/scope-check` |
| Is everything consistent? | `/consistency-check` |
| Something failed | `/studio-gap` |
| Does the studio itself still work? | `/studio-validate`, `/skill-test` |
| A platform question | the `maru-specialist` agent |

## Ask the tools, not your memory

```bash
npx maru --help
npx maru guide list
npx maru guide read processor-authoring
npx maru guide props Knob
npx maru tools describe --json
```

The guides ship with the CLI, so they match your installed version.

## How-to guides

- [Make an effect](how-to/make-an-effect.md)
- [Make an instrument](how-to/make-an-instrument.md)
- [Make a MIDI tool](how-to/make-a-midi-tool.md)
- [Make a sample kit](how-to/make-a-sample-kit.md)
- [Build a face from an image](how-to/face-from-an-image.md)
- [Port a web audio prototype](how-to/port-web-audio.md)
- [Publish and share](how-to/publish-and-share.md)
- [Build native plug-ins](how-to/build-native-plugins.md)

For everything else, the [task map](PLUGIN-DESIGN-TASKS.md) lists every plugin design task and who handles it.
