<p align="center">
  <h1 align="center">Maru Agentic Template</h1>
  <p align="center">
    Turn a single Claude Code session into a full audio plugin studio.
    <br />
    42 agents. 104 skills. One coordinated AI team, on a real Maru module.
  </p>
</p>

---

> **Status: early trial, not a finished release.** This template exists to walk the whole path a new user would take and find what is missing. [What works today](#what-works-today) is measured, not promised. Run `npm run studio:validate` to see what works on your machine.

## Why This Exists

Making a plugin with AI is powerful, but a single chat session has no structure. Nobody stops you from shipping a preset that clips, skipping the listening test, or adding a twelfth knob. There is no QA pass, no sound review, no one asking "does this still do the one thing it promised?"

**Maru Agentic Template** gives your AI session the structure of a real plugin company. Instead of one general-purpose assistant, you get 42 specialized agents organized into a studio hierarchy: directors who guard the vision, department leads who own their domains, and specialists who do the hands-on work. Each agent has defined responsibilities, escalation paths and quality gates.

The result: you still make every decision, and you are still the only one who can say how it sounds. But now you have a team that asks the right questions, catches mistakes early, and keeps your project organized from first idea to published release.

It is deliberately more opinionated than the [Maru agent skill](https://github.com/maru-audio/maru-skill). The skill tells an agent what Maru can do. This tells it how we think a plugin should get made.

## Table of Contents

- [What's Included](#whats-included)
- [Studio Hierarchy](#studio-hierarchy)
- [Slash Commands](#slash-commands)
- [Does it produce plugins, or documents?](#does-it-produce-plugins-or-documents)
- [What works today](#what-works-today)
- [Getting Started](#getting-started)
- [Configuration](#configuration)
- [Upgrading](#upgrading)
- [Project Structure](#project-structure)
- [How It Works](#how-it-works)
- [Design Philosophy](#design-philosophy)
- [Customization](#customization)
- [Credits](#credits)
- [License](#license)

## What's Included

| Category | Count | Description |
| --- | --- | --- |
| **Module** | 1 | A working Maru effect in `src/`, from the official blank starter |
| **Agents** | 42 | Specialized subagents across product, DSP, face, sound, QA, release and Maru itself |
| **Skills** | 104 | Slash commands for every phase (`/start`, `/design-module`, `/dev-story`, `/gain-staging`, `/publish`) |
| **Hooks** | 15 | Automated checks on commits, pushes, face and DSP writes, large reads, assets and session lifecycle |
| **Rules** | 13 | Path-scoped standards for DSP, faces, the contract, presets, assets and more |
| **Templates** | 30 | Briefs, design documents, ADRs, listening reports, host matrices, release checklists |
| **How-to guides** | 8 | [Effect, instrument, MIDI tool, sample kit, face from an image, web audio port, publishing, native builds](docs/how-to/) |
| **Task map** | 1 | [Every plugin design task, with its skill, agent and status](docs/PLUGIN-DESIGN-TASKS.md) |
| **Validator** | 1 | Checks every command this studio names against your installed CLI, then tries each capability |

## Studio Hierarchy

```
Tier 1: Directors
  creative-director    technical-director    producer

Tier 2: Department Leads
  product-designer     lead-dsp-engineer     sound-director
  art-director         qa-lead               release-manager
  docs-lead            localization-lead     maru-specialist

Tier 3: Specialists
  dsp-engineer         voice-engineer        midi-engineer
  graph-engineer       parameter-designer    face-engineer
  ux-designer          preset-designer       sample-librarian
  demo-producer        prototyper            performance-analyst
  host-compat-engineer native-format-engineer devops-engineer
  security-engineer    qa-tester             accessibility-specialist
  community-manager    copywriter            tools-programmer
  modulation-engineer  sampler-engineer      visualizer-engineer

  Maru specialists
  restricted-typescript-specialist           dsp-library-specialist
  ui-kit-specialist    generative-audio-specialist  publishing-specialist
  hardware-specialist
```

Each agent has its own role, area of ownership, rules and escalation path, and agents without a build job have no shell access. The directors ask for Opus, most specialists name Sonnet, and the rest inherit your session's model. Rules in `.claude/rules/` add a second layer: they load by file path, whichever agent is working. [The roster](.claude/docs/agent-roster.md) lists them all.

## Slash Commands

Type `/` in Claude Code to access all 104 skills:

**Onboarding & Navigation**
`/start` `/help` `/project-stage-detect` `/setup-target` `/adopt` `/settings` `/studio-validate` `/studio-gap` `/remix-module`

**Product Design**
`/brainstorm` `/map-signal-flow` `/design-module` `/quick-design` `/review-all-designs` `/design-review` `/propagate-design-change` `/consistency-check` `/competitor-review` `/modulation-design`

**Sound & Visual Identity**
`/sound-bible` `/face-bible` `/asset-spec` `/asset-audit` `/generate-sounds` `/sampler-bank`

**UX & Face**
`/ux-design` `/ux-review` `/face-from-reference` `/parameter-pass` `/visualizer`

**Architecture**
`/create-architecture` `/architecture-decision` `/architecture-review` `/create-control-manifest`

**Stories & Sprints**
`/create-epics` `/create-stories` `/story-readiness` `/dev-story` `/story-done` `/sprint-plan` `/sprint-status` `/estimate`

**Reviews & Analysis**
`/code-review` `/gain-staging` `/sound-compare` `/content-audit` `/scope-check` `/perf-profile` `/tech-debt` `/gate-check` `/security-audit` `/dsp-review`

**QA & Testing**
`/qa-plan` `/smoke-check` `/listening-test` `/soak-test` `/regression-suite` `/test-setup` `/test-helpers` `/test-evidence-review` `/test-flakiness` `/host-matrix` `/state-recall` `/midi-test` `/skill-test` `/skill-improve` `/latency-check` `/sample-rate-test` `/automation-test` `/in-daw-test`

**Production**
`/milestone-review` `/retrospective` `/bug-report` `/bug-triage` `/reverse-document` `/onboard` `/localize` `/manual`

**Creative**
`/prototype` `/vertical-slice` `/preset-pass` `/demo-pass`

**Release**
`/build-plugin` `/publish` `/release-checklist` `/launch-checklist` `/changelog` `/patch-notes` `/hotfix` `/day-one-patch` `/module-page` `/license-setup` `/marketplace-listing` `/compare-release` `/hardware-target`

**Team Orchestration**
`/team-effect` `/team-instrument` `/team-face` `/team-sound` `/team-presets` `/team-polish` `/team-qa` `/team-release` `/team-launch`

## Does it produce plugins, or documents?

A fair question, and the answer should be a measurement. We owe that measurement and do not have it yet. The upstream project this is modelled on built one brief at different process levels; its heavier level wrote 30 documents before any code and ranked last. So `minimal` is the default here too.

First agent trials, one tape-echo brief, on this studio's first version, before the fixes they prompted. Treat these as a start, not a result:

| `modes.rigor` | Files written before the first module change | First module edit | Cost and time | Outcome |
| --- | ---: | ---: | --- | --- |
| `minimal` | 6 | tool call 72 of 162 | $10.57, 20 min | Module built, and the full check passes. 3 of 5 stories unmet. **Nothing measured or heard** |
| `standard` | 11 | tool call 116 of 216 when stopped | Stopped by hand, unfinished | The fast check passes. **Nothing heard** |

Neither trial delegated to a single subagent, so the agent hierarchy itself is still untested. Nobody has listened to either result. [DEVX-077](docs/KNOWN-GAPS.md#devx-077) tracks a proper comparison.

### It renders the plugin, and a person listens

A passing test says nothing about how something sounds. So a story that changes the sound is not closed until it has been rendered, measured, and a person has been asked to listen in the workbench. Measured health and listening evidence are reported separately. **Not run** is a valid result. A hook-free rule of this studio is that no agent may claim something sounds good.

## What works today

Measured with `maruaudio@0.0.7` on macOS. Fixes for DEVX-061, DEVX-062 and DEVX-065 are in source, and passed on a local candidate of the next release. See [docs/KNOWN-GAPS.md](docs/KNOWN-GAPS.md) for each item and its task, and run `npm run studio:validate` for your own machine.

| Works | Result |
| --- | --- |
| Create a project, typecheck, full module check | Passes |
| Workbench starts, and is driven in Chrome | Passes. No person has listened |
| Screenshot of the face | Passes |
| Levels with your own audio (`node tools/make-test-signal.mjs`) | Passes |
| Pack a web Release; publication dry run | Passes. A real publish was not run |
| Guides, DSP catalog, community search | Passes |

| Does not work yet | Task |
| --- | --- |
| `module preview`, and levels with built-in audio: test audio is missing from the package | [DEVX-061](docs/KNOWN-GAPS.md#devx-061) |
| `module pack` after `module preview` | [DEVX-065](docs/KNOWN-GAPS.md#devx-065) |
| Local native builds: needs a private toolkit, and the messages are a dead end | [DEVX-062](docs/KNOWN-GAPS.md#devx-062) |
| Native builds through publishing: [documented](docs/how-to/build-native-plugins.md), not verified | [DEVX-063](docs/KNOWN-GAPS.md#devx-063) |
| Portability check and export for a public user | [DEVX-064](docs/KNOWN-GAPS.md#devx-064) |
| Measuring a Processor, CPU, latency and soak | [DEVX-070](docs/KNOWN-GAPS.md#devx-070), [DEVX-071](docs/KNOWN-GAPS.md#devx-071) |
| Local preset commands | [DEVX-067](docs/KNOWN-GAPS.md#devx-067) |

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 22.12 or later
- [Git](https://git-scm.com/)
- [Claude Code](https://code.claude.com/docs/en/setup)
- A Chromium browser, for the workbench and screenshots

Unlike the upstream project, this needs no Python or Bash: hooks and tools run on Node, which every Maru project already has.

### Setup

1. **Create your project.** Click **Use this template** on GitHub, clone your copy and run `npm install`. `/start` then gives it its own identity.

   With a `maruaudio` release newer than 0.0.7, one command does both. On 0.0.7 it stops with a download-limit error ([DEVX-076](docs/KNOWN-GAPS.md#devx-076)):

   ```bash
   npx maruaudio@latest init my-plugin --from https://github.com/maru-audio/maru-agentic-template --ref main
   ```

   **To publish on 0.0.7, install with pnpm.** `maru publish` refuses projects installed with npm on that version. The release after it fixes this.

2. **See what this machine can do:**

   ```bash
   npm run studio:validate
   ```

3. **Open Claude Code in the project's root folder** (the one holding `CLAUDE.md`) and start a session:

   ```bash
   claude
   ```

   Starting it in a subfolder such as `src/` skips the project's hooks and permission rules.

4. **Run `/start`.** It asks where you are (no idea, vague idea, clear idea, existing work) and guides you to the right workflow.

   Or jump straight in:

   - `/brainstorm`: explore plugin ideas
   - `/face-from-reference path/to/image.png`: start from a look
   - `/quick-design`: a small change to what is here

5. **Hear it:** run `npm run dev` and press Play. An effect needs an input signal.

## Configuration

`studio.config.json` at the repo root is the single source of truth for how the studio behaves. `/start` writes it for you. The one question that matters most is **`modes.rigor`**:

- **`minimal`** (default): sketch speed. A one-page brief, no required design documents, smoke-level QA, solo review. `/start` → `/brainstorm` → `/create-stories` → `/dev-story` ↔ `/story-done` → `/publish`.
- **`standard`**: five required design sections, balanced documents, standard QA evidence, lean review.
- **`full`**: all design sections, thorough documents, full QA evidence, full director review.

Raise it with `/settings modes.rigor=standard` when the project grows. Per-developer preferences go in the gitignored `studio.local.json`. Details are in [.claude/docs/workflow-modes.md](.claude/docs/workflow-modes.md).

## Upgrading

See [UPGRADING.md](UPGRADING.md). GitHub templates keep no link to their source, so a copy of this repository upgrades by merging from a remote, as described there.

## Project Structure

```
CLAUDE.md                     # Master configuration for Claude Code
AGENTS.md                     # The Maru module rules, for any coding agent
studio.config.json            # Stage, rigor, automation, targets
.claude/
  settings.json               # Hooks, permissions, MARU_SILENT
  agents/                     # 42 agent definitions
  skills/                     # 104 slash commands
  hooks/                      # 15 Node hooks and a helper
  rules/                      # 13 path-scoped standards
  statusline.mjs              # Stage and rigor in the status line
  docs/
    workflow-catalog.json     # 7-phase pipeline (read by /help)
    templates/                # 30 document templates
src/                          # The module: entry, contract, DSP, face, presets, qualification
assets/                       # Samples, impulse responses, images
demos/                        # Demo audio rendered through the module
design/                       # Brief, Sound Bible, Face Bible, design documents
docs/                         # How-to guides, workflow guide, architecture, manual
tests/                        # The project's own tests
tools/                        # Studio validator and config helpers
prototypes/                   # Notes for experiments inside this module's workbench
production/                   # Sprints, stories, bugs, QA evidence, validation reports
```

## How It Works

### Agent Coordination

1. **Vertical delegation:** directors delegate to leads, leads delegate to specialists.
2. **Horizontal consultation:** same-tier agents can consult each other but cannot make binding cross-domain decisions.
3. **Conflict resolution:** disagreements escalate to the shared parent (`creative-director` for product and sound, `technical-director` for technical).
4. **Change propagation:** cross-department changes are coordinated by `producer`.
5. **Domain boundaries:** agents do not modify files outside their domain without explicit delegation.

### Collaborative, Not Autonomous

This is **not** an auto-pilot. Every agent follows the same protocol:

1. **Ask:** agents ask questions before proposing solutions.
2. **Present options:** two to four options with trade-offs.
3. **You decide:** you always make the call.
4. **Draft:** agents show work before finalizing.
5. **Approve:** nothing gets written without your sign-off.

`modes.automation` trades some of these prompts for speed. See [docs/COLLABORATIVE-DESIGN-PRINCIPLE.md](docs/COLLABORATIVE-DESIGN-PRINCIPLE.md).

### Automated Safety

| Hook | Trigger | What it does |
| --- | --- | --- |
| `validate-write.mjs` | Before Write/Edit | **Blocks** a face from using audio or device APIs, and a Processor from I/O |
| `validate-commit.mjs` | Before `git commit` | **Blocks** a commit that changes the module if the fast check fails |
| `validate-push.mjs` | Before `git push` | **Blocks** force pushes and pushes to the template repository |
| `validate-publish.mjs` | Before `maru publish` | Lets a dry run through, and always asks before a real publish |
| `validate-read.mjs` | Before Read | Refuses a whole-file read of a design document over 40 KB and lists its headings |
| `validate-assets.mjs` | After Write/Edit | Notes an audio or image file with no rights entry |
| `validate-skill-change.mjs` | After Write/Edit | Suggests `/skill-test` after a skill or agent changes |
| `session-start.mjs` | Session open | Branch, stage, rigor, `maruaudio` version |
| `detect-gaps.mjs` | Session open | Missing install, brief or validation |
| `update-check.mjs` | Session open | One line when a newer `maruaudio` exists |
| `pre-compact.mjs` | Before compaction | Keeps the current state in view |
| `session-stop.mjs` | End of a response | Records git activity |
| `log-agent.mjs`, `log-agent-stop.mjs` | Agent starts and stops | Audit trail |
| `notify.mjs` | Needs your attention | macOS notification |

**Permission rules** in `settings.json` allow read-only Maru commands, and ask before `maru unpublish`, `login`, `audio`, `marketplace`, `remix` and license changes. **`MARU_SILENT=1`** is set for every agent, so nothing reaches your speakers until you click **Unmute**.

### Path-Scoped Rules

| Path | Enforces |
| --- | --- |
| `src/dsp/**` | No allocation in `process`, composing the DSP library, resettable state, finite output |
| `src/ui/**` | UI kit first, face contract only, no audio or devices, concise labels |
| `src/contract.ts` | Names, ranges, tapers, parameter order as host ABI |
| `src/factory-bank.ts` | One use per preset, level-matched, auditioned |
| `src/qualification.ts` | Valid tapes, automation coverage, state round trip |
| `tests/**` | Behaviour-named tests with real assertions |
| `design/**` | Required sections, units, testable acceptance |
| `assets/**` | Rights for every file, generation settings recorded |
| `demos/**` | Rendered through the module, level-matched, listened to |
| `prototypes/**` | Inside the module's workbench, question stated, temporary behaviour labelled |
| `production/**` | Evidence kept beside its story, **not run** stated plainly |

## Design Philosophy

- **One module.** The framework owns MIDI, ports, parameter state and compilation. A face never generates audio.
- **Sound and evidence stay separate.** Measurements are not listening, and listening is not an agent's job.
- **First slice by risk.** Build what could kill the idea first, not whatever is conventional.
- **Few controls.** Five that feel immediate beat twenty that need a manual.
- **Face first, DSP last.** Parameters, then the face, then the sound, so nothing needs rewiring.
- **Honest about targets.** Claim only what was built and checked.

## Customization

This is a **template**, not a locked framework. Delete agents you do not need, edit their prompts, tune the hooks, add rules for your folders, or change process weight with `modes.rigor`. After changes, `/skill-test` checks that every command your skills name still exists.

To start from something other than an effect, replace `src/` using `npx maru init <dir> --from blank-instrument`, or see [docs/how-to/](docs/how-to/).

## Credits

The structure, hierarchy and much of the wording of this studio are adapted from [Claude Code Game Studios](https://github.com/Donchitos/Claude-Code-Game-Studios) by Donchitos, under the MIT License. This project is not affiliated with or endorsed by that project. See [NOTICE.md](NOTICE.md).

## License

Studio files are under the [MIT License](LICENSE), including the upstream copyright notice. **That is separate from your plugin's licence:** `maru.config.json` sets your module's published listing licence. Starting with `maru init --from` carries over this repository's MIT licence, and starting from the bare starter defaults to `maru-remix-1.0`. Choose the one you want before you publish. The `maruaudio` package and other dependencies keep their own licences.
