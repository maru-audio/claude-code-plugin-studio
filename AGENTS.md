# Build a Maru module

Build a Maru module (an instrument, effect or other musical tool) with
the Maru agent skill: https://github.com/maru-audio/maru-skill (`skills/maru-agent/SKILL.md`).

This file is served at https://maru.audio/new-module/agents.md and shipped as
`AGENTS.md` in every module project. If you fetched it, the user's request is
the text after the command. A project's own notes follow under
**This project** and take precedence where they are more specific.

## Set up

Already in a module project (this file sits beside its `package.json`)? Skip
to step 4's last line and use the commands under **This project**.

1. Check the CLI with `maru --version`. If it is missing, use
   `npx maruaudio@latest` wherever these steps say `maru`, and suggest
   `npm i -g maruaudio` to the user.
2. Sign in: `maru whoami`, then `maru login` if needed. It
   opens a browser sign-in. Unless you can open a browser and finish it
   yourself, run `maru login --print-url` and ask the user to open the
   URL.
3. Install the skill: `maru skill install --global`, then use it. If
   the skill cannot be invoked right after installing, read
   `skills/maru-agent/SKILL.md` from https://github.com/maru-audio/maru-skill and follow it directly.
4. Scaffold from an official blank starter that fits the request:
   `maru init <name> --from @maru/blank-effect` for an effect,
   `@maru/blank-instrument` for an instrument (`maru init --help` lists
   the rest). Install dependencies with the command it prints, then read the
   project's README and the guides that match the task.

If the user did not say what to build, ask them once the setup is done.

## How Maru works

- **A module is the product.** One TypeScript project holds the declaration
  (`src/index.ts`), the parameter schema, the sound, the face (`src/ui/`),
  presets and assets. The sound is a Processor (restricted TypeScript in
  `src/dsp/processor.ts`, the default) or a Graph of existing SDK nodes.
  [Project structure](https://maru.audio/docs/project-structure.md)
- **Sound and face are separate.** The face reads and changes parameters
  through the face contract and is built from the shared UI kit; it never
  generates audio or opens devices. [Module UI](https://maru.audio/docs/ui.md)
- **Reuse comes first.** Named effects, the DSP library and catalog modules
  are there to compose: `maru dsp effects`, `maru dsp nodes`,
  `maru module list`. Any remixable module can be a starting point:
  `maru init <name> --from @maru/<slug>` or `@<handle>/<slug>`.
  [Effects, instruments and custom DSP](https://maru.audio/docs/effects-and-instruments.md)
- **One source, several outputs.** The same source runs in the browser and
  builds into native plug-ins (VST3, CLAP, AU), each checked from that source:
  `maru module` and `maru plugin`.
  [Check, build and export](https://maru.audio/docs/export.md),
  [Native plugins](https://maru.audio/docs/native-plugins.md)
- **Generation runs beside the audio.** Hosted jobs (`maru audio`)
  create sounds, kits and MIDI; a module loads the results and never runs a
  model in its audio path. [Generate audio](https://maru.audio/docs/generate-audio.md)
- **Where it runs.** Locally, the project's `dev` script opens the workbench
  with live audio, MIDI and hot reload. On the website, hosted projects are
  edited in Studio (https://maru.audio/studio) and get a module page where people
  play, share and remix them. [Development workbench](https://maru.audio/docs/dev.md),
  [Studio workflow](https://maru.audio/docs/studio-workflow.md)
- **Sign-in comes from the host.** On Maru, a module gets Maru sign-in and
  account presets without auth code: `FaceModuleNavbar` shows the account
  button whenever the host offers `face.appAuth`. Build it offline with
  `maru dev --sign-in`. Never add a login form, token or secret to a
  face. [Sign-in in a module](https://maru.audio/docs/sign-in-in-a-module.md)
- **Same tools everywhere.** Every operation is a CLI command and an MCP tool
  (`maru mcp`), the same ones Studio's agent uses.
  [Use Maru from your agent](https://maru.audio/docs/agent-setup.md)

## Read more

- Agent guides, the reference for building modules:
  https://maru.audio/guides/llms.txt. Read those whose "when to read" line matches
  the task; `maru guide read <name>` prints the same guides for the
  installed version.
- Product documentation: https://maru.audio/llms.txt, starting with
  [How it works](https://maru.audio/docs/how-it-works.md).

## Plan before implementation

Read `maru guide read project-planning` before creating a module,
choosing its starter/DSP or changing wiring. State the musical outcome and
selected owner/project type, starting point, Graph/Processor choice, DSP
candidates, real signal/control paths, prerequisites/gaps and verification
order. Save the short plan in the project's existing Markdown notes. Choose
the first proof by risk: a new model, resource path or routing seam may need
proof before visual polish. A UI-first brief stays in the real workbench with
labeled temporary sound. Keep small fixes proportional; planning does not
require another approval within the work the user already authorized.

## How to work

- Start from the musical result the user described. Ask only when missing
  information changes that goal or an important boundary; continue independent
  discovery while waiting.
- Make focused edits. Never change the module `id` after first publish (`/start` sets it once, using `tools/rename-project.mjs`), and never hand-edit
  generated output (`build/`, `dist/`, `*.generated.ts`). A missing shared
  capability belongs in its framework owner, not in a local copy.
- Let the user play and listen to the module while you work. Their listening
  is the test of the sound.
- Run the project's checks for the change you made, and report only results
  you actually saw. A skipped or unavailable check is not a pass.
- Ask the user before publishing, installing plug-ins, running paid or hosted
  generation, or passing `--yes` to a destructive command.

## Finish

Tell the user which files you created or changed, the checks you ran and their
results, how to play the module, and anything left to do or unverified.

## This project: Maru Agentic Template

This project is built on the [Maru framework](https://maru.audio).
Read [README.md](README.md) for its working starter, [CONTRIBUTING.md](CONTRIBUTING.md)
for the local loop, and the [Maru documentation](https://maru.audio/docs).
This file is the project entry point for coding agents. `CLAUDE.md` points here.

### Run the project through its scripts

`maruaudio` is a dependency of this project, and the `package.json` scripts
run its installed `maru` CLI. Start the workbench with `npm run dev` (it
plays to the speakers; agents add `-- --silent`) and pass any other option
after `--`, for example `npm run dev -- --port 4241 --open`. For a command
without a script, use `npx maru <command>`, which resolves the same installed
CLI. Never call `./node_modules/.bin/maru` directly, and never use
`npx maruaudio@…` inside the project: it can fetch a different version from
the registry.

### Discover the installed CLI before editing

Run from this project directory after installing the declared dependencies:

```sh
npx --no-install maru --version
npx --no-install maru doctor
npx --no-install maru --help
npx --no-install maru guide list
npx --no-install maru guide read <name>...
npx --no-install maru tools describe --json
```

Use `maru <group> --help` to discover command options, and read the guide cards
whose triggers match the task before changing DSP, parameter contracts, faces,
presets or builds. Read the SDK types the project actually compiles against.
Commands, schemas and guides come from the installed version. Do not silently
fetch latest, upgrade dependencies or assume a source-workspace capability is
present in a published release. If the CLI is missing, install the dependencies
using the project's package manager and lockfile rather than another CLI version.

When the host supports MCP, `maru mcp` exposes the same operation layer.
CLI discovery remains available without MCP. The optional agent skill is managed
with `maru skill install`, `skill status` and `skill update`; it complements
this file. An unavailable skill distribution does not remove access to CLI guides.

### Project ownership

This is a standalone Processor effect module project, not a framework checkout.
Never change `id` as an incidental refactor: it is the module's permanent identity from first publish.
Keep declaration and package source-role metadata consistent.

- `src/index.ts` exports `AUDIO_MODULE`, declares schema, ports and face, and is
  named by `maru.development.sources.module` in package.json.
- The sound lives in `src/dsp/processor.ts`, the default-exported Processor,
  named by implementation.source and `maru.development.sources.dsp`.
- `src/contract.ts` owns parameter paths, ranges, steps, taper and defaults.
- `src/factory-bank.ts` owns the bank shared by the declaration and face;
  Initial derives from the schema rather than copying its default values.
- `src/qualification.ts` owns deterministic audio/MIDI/parameter test tapes,
  named by `maru.development.sources.qualification`; it is not realtime DSP.
- `src/ui/index.tsx` owns the custom face; it explicitly imports scoped CSS.

A Processor is the default for product DSP. Its declaration imports builders
from `maruaudio/audio/define`; its sound composes focused `maruaudio/dsp/<leaf>`
imports. Graphs use existing SDK node factories from `maruaudio/audio/graph`.
A missing shared capability belongs in its framework owner; do not create a
second audio engine, device manager, preset engine or host bridge in this face.

### Choose the project and implementation order

Before changing the starter's purpose or sound, read
`maru guide read project-planning`. Record the musical outcome, existing
owner or starting point, Graph/Processor choice, DSP candidates, real wiring,
prerequisites and ordered checks in the project's Markdown notes. Discover
actual template kinds and SDK contracts rather than forcing a product into
incompatible I/O. Keep small fixes proportional and proceed within the work
the user authorized.

For an image-led UI experiment, also read `face-from-reference`. Bind the
face to the real schema/host and compare `maru module screenshot` captures
with the reference. An effect may retain passthrough while designing its face;
an instrument retains its playable starter voice. Label temporary sound and
state-only controls. For a new model or uncertain resource/routing path, prove
that seam before visual polish. Do not impose UI-first or DSP-first on every
project. A renamed or removed parameter also changes
`src/factory-bank.ts` and `src/qualification.ts`.

### Start from another module

`maru init <dir> --from <reference>` starts a new local project from any
module whose source may be remixed: an official starter or catalog module
(`@maru/<slug>`, or just its exact slug, such as `blank-instrument`) or a
community module (`@handle/<slug>`). No online project is created. The module identity becomes
`local.<slug>`, and `.maru/source.json` records the origin's reference,
version and source digest, so keep that file. A licence or purchase refusal
comes from the server; the command prints its reason.

### UI and DSP rules

Read source before changing it. Make focused edits and preserve unrelated work.
Use shared UI-kit controls, formatters and host parameter/gesture bindings.
The schema owns parameter meaning; update DSP dispatch, presets, fixtures and
face bindings together when changing a descriptor. Avoid UI-only range remaps
and compatibility aliases for an incorrect prelaunch contract.

The face consumes `AudioModuleFaceProps`. Shared `FaceModuleNavbar` controls
host presets and power. Audio/MIDI devices, transport and execution belong to
the host. Illustrative graphics remain labelled as models, not measured audio.

Processor `process` performs no allocation, locking, I/O, logging or dynamic
imports. Allocate state outside realtime work; keep work bounded and preserve
block-size invariance. Follow the installed restricted-TypeScript guide rather
than guessing which language constructs compile.

### Develop, inspect and qualify

```sh
npm run dev              # canonical workbench and live custom face
npm run typecheck        # types and imports
npm run module:check     # fast development gates
npm run check:portability # compiled portability; needs the Processor compiler (beta)
npm run test             # project aggregate; inspect each result
npm run build:vst3       # build and run applicable VST3 validation
npm run build:clap       # CLAP build and applicable validation
npm run build:au         # AU build and applicable validation, macOS
```

Choose checks for the actual edit. Face changes need parameter/host agreement,
keyboard/pointer/reset behavior and the relevant type and UI checks. DSP changes
need fresh offline output with finite/peak/RMS/silence checks and a measurable
parameter effect, plus state and target checks for the changed behavior.
Local tools can render and measure audio; listening supplements that evidence.

For no sound, inspect the selected input/MIDI source, transport, monitor level,
host power and diagnostics before blaming DSP. Inspect Evaluate and the served
versus playing Program identity; a successful face rebuild is not audible activation.
The qualification fixture supplies deterministic evidence, not a substitute
algorithm. The Graph-only module:eval command is not part of this Processor project.

Read actual reports and process exits. Native build jobs retain their reports in
`.maru/reports/`; the generated `build/README.md` links the delivered bundles,
archives and selected qualification reports. Inspect `validation.status` and other gates.
Unavailable or skipped required checks are not passes. A binary, browser preview
or typecheck does not prove DAW or hardware qualification. If setup or a validator
is unavailable, report the blocker without weakening it or inventing a fallback.

Do not hand-edit generated `build/` or `dist/` output or re-pin evidence to hide
a failure. Follow the user's Git and dependency instructions; publishing,
plug-in installation and external actions require task authorization.
Finish with changed files, commands/results and any unverified targets.

[Maru website](https://maru.audio) · [Documentation](https://maru.audio/docs)
