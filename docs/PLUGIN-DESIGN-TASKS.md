# Plugin design task map

Every job in making an audio plugin, who handles it, and whether it works today.
Rules: **Works** means we ran the commands with `maruaudio@0.0.7`. **Guided** means
the studio walks you through it, with a person doing part of the work or no command
behind it. **Blocked** means a tool is missing or broken, and the task tracks it.

Run `npm run studio:validate` for your own machine.

## Idea and product

| Task | Skill | Lead | Status |
| --- | --- | --- | --- |
| Find a concept | `/brainstorm` | `product-designer` | Works |
| Write the brief | `/brainstorm` | `creative-director` | Works |
| Review comparable plugins | `/competitor-review` | `product-designer` | Guided |
| Check what already exists | `/map-signal-flow` | `dsp-library-specialist` | Works |
| Start from another module | `/remix-module` | `publishing-specialist` | Works; a new identity for the copy is [DEVX-076](KNOWN-GAPS.md#devx-076) |
| Write a design document | `/design-module` | `product-designer` | Works |
| Small design change | `/quick-design` | `product-designer` | Works |
| Check for scope creep | `/scope-check` | `producer` | Works |

## Sound

| Task | Skill | Lead | Status |
| --- | --- | --- | --- |
| Define the sound | `/sound-bible` | `sound-director` | Works |
| Map the signal flow | `/map-signal-flow` | `product-designer` | Works |
| Choose existing DSP | `/map-signal-flow` | `dsp-library-specialist` | Works |
| Write effect DSP | `/dev-story`, `/team-effect` | `dsp-engineer` | Works |
| Write instrument voices | `/dev-story`, `/team-instrument` | `voice-engineer` | Works |
| Build a MIDI tool | [how-to](how-to/make-a-midi-tool.md) | `midi-engineer` | Works |
| Design modulation | `/modulation-design` | `modulation-engineer` | Guided |
| Build a Graph chain | [how-to](how-to/make-an-effect.md) | `graph-engineer` | Works |
| Fix compile errors | agent | `restricted-typescript-specialist` | Works |
| Review DSP quality | `/dsp-review` | `lead-dsp-engineer` | Guided; measurements are [DEVX-070](KNOWN-GAPS.md#devx-070) |
| Check levels | `/gain-staging` | `sound-director` | Works with the studio's test signals; built-in audio is [DEVX-061](KNOWN-GAPS.md#devx-061) |
| Compare with a reference | `/sound-compare` | `sound-director` | Guided, [DEVX-073](KNOWN-GAPS.md#devx-073) |
| Run a listening test | `/listening-test` | `sound-director` | Guided; a person listens |

## Parameters and presets

| Task | Skill | Lead | Status |
| --- | --- | --- | --- |
| Design parameters and tapers | `/parameter-pass` | `parameter-designer` | Works |
| Write factory presets | `/preset-pass`, `/team-presets` | `preset-designer` | Works by editing source; the `maru preset` commands are [DEVX-067](KNOWN-GAPS.md#devx-067) |
| Level-match presets | `/gain-staging` | `preset-designer` | Works with the studio's test signals |
| Keep everything consistent | `/consistency-check` | `parameter-designer` | Works |

## Face

| Task | Skill | Lead | Status |
| --- | --- | --- | --- |
| Define the visual identity | `/face-bible` | `art-director` | Works |
| Build from an image | `/face-from-reference` | `face-engineer` | Works |
| Design the interaction | `/ux-design` | `ux-designer` | Works |
| Add meters and scopes | `/visualizer` | `visualizer-engineer` | Works |
| Review the built face | `/ux-review` | `ux-designer` | Works, by screenshot |
| Check accessibility | `/ux-review`, `/team-face` | `accessibility-specialist` | Guided, [DEVX-074](KNOWN-GAPS.md#devx-074) |
| Translate | `/localize` | `localization-lead` | Guided, [DEVX-074](KNOWN-GAPS.md#devx-074) |

## Samples and generated sound

| Task | Skill | Lead | Status |
| --- | --- | --- | --- |
| Generate sounds | `/generate-sounds` | `generative-audio-specialist` | Not run; costs money |
| Make a kit or bank | `/sampler-bank` | `sampler-engineer` | Guided |
| Track rights | `/asset-spec`, `/asset-audit` | `sample-librarian` | Works |

## Technical planning

| Task | Skill | Lead | Status |
| --- | --- | --- | --- |
| Choose targets | `/setup-target` | `technical-director` | Works |
| Plan the build | `/create-architecture` | `technical-director` | Works |
| Record decisions | `/architecture-decision` | `technical-director` | Works |
| Prove the risky part | `/prototype`, `/vertical-slice` | `prototyper` | Works |
| Plan and track work | `/create-stories`, `/sprint-plan` | `producer` | Works |

## Quality

| Task | Skill | Lead | Status |
| --- | --- | --- | --- |
| Quick health check | `/smoke-check` | `qa-lead` | Works |
| Code review | `/code-review` | `lead-dsp-engineer` | Works |
| Measure CPU | `/perf-profile` | `performance-analyst` | **Blocked:** no command, [DEVX-071](KNOWN-GAPS.md#devx-071) |
| Long soak test | `/soak-test` | `qa-tester` | Guided, [DEVX-071](KNOWN-GAPS.md#devx-071) |
| Check latency | `/latency-check` | `host-compat-engineer` | Guided, [DEVX-071](KNOWN-GAPS.md#devx-071) |
| Test sample rates | `/sample-rate-test` | `qa-tester` | Guided, [DEVX-072](KNOWN-GAPS.md#devx-072) |
| Test automation | `/automation-test` | `qa-tester` | Works for tapes; a person checks in a DAW |
| Test MIDI behaviour | `/midi-test` | `qa-tester` | Works for tapes; a person plays it |
| Test save and recall | `/state-recall` | `host-compat-engineer` | Parameters work; a person checks in a DAW |
| Write project tests | `/test-setup`, `/test-helpers` | `devops-engineer` | Works; no shared helpers, [DEVX-072](KNOWN-GAPS.md#devx-072) |
| Test in a DAW | `/in-daw-test` | `host-compat-engineer` | Needs a native build, [DEVX-063](KNOWN-GAPS.md#devx-063) |
| Keep a host matrix | `/host-matrix` | `host-compat-engineer` | Guided |

## Release

| Task | Skill | Lead | Status |
| --- | --- | --- | --- |
| Pre-release checklist | `/release-checklist` | `release-manager` | Works |
| Security check | `/security-audit` | `security-engineer` | Works |
| Publish to a playable page | `/publish` | `publishing-specialist` | Dry run works; a real publish was not run |
| Build native plug-ins | `/build-plugin` | `native-format-engineer` | **Not verified:** [DEVX-063](KNOWN-GAPS.md#devx-063), and [the workflow](how-to/build-native-plugins.md) |
| Sign and notarize | `/build-plugin` | `native-format-engineer` | Hosted route, not verified |
| Sell with activation | `/license-setup` | `security-engineer` | Not run; changes the product |
| Prepare the module page | `/module-page` | `copywriter` | Works |
| Produce a demo | `/demo-pass` | `demo-producer` | **Blocked:** `module preview`, [DEVX-061](KNOWN-GAPS.md#devx-061) |
| Write the manual | `/manual` | `docs-lead` | Works |
| Marketplace listing | `/marketplace-listing` | `publishing-specialist` | Not run; it is public |
| Compare with the last release | `/compare-release` | `release-manager` | Not run; needs two releases |
| Notes and changelog | `/changelog`, `/patch-notes` | `community-manager` | Works |
| Emergency fix | `/hotfix`, `/day-one-patch` | `release-manager` | Works; no CLI unpublish, [DEVX-068](KNOWN-GAPS.md#devx-068) |
| Hardware or pedal | `/hardware-target` | `hardware-specialist` | Not verified outside a Maru checkout, [DEVX-075](KNOWN-GAPS.md#devx-075) |
| Compose a rack | none | none | From Studio or the website; no command line route |
