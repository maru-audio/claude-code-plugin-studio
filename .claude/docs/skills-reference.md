# Skills reference

## Onboarding & Navigation

| Skill | What it does |
| --- | --- |
| `/start` | Guides a first-time user through onboarding and picks the right workflow. Use when the user is new, just cloned the template, has no idea yet, asks where to begin, or wants to bring in existing work. |
| `/help` | What should I do next? Use when stuck or unsure what comes next. |
| `/project-stage-detect` | Analyze project state, detect the stage, identify gaps and recommend next steps. 'Where are we in development?' |
| `/setup-target` | Choose what this project promises to run on: browser, VST3, CLAP, AU, AAX, standalone or hardware. Records it and checks the machine can build it. |
| `/adopt` | Brownfield audit: bring an existing module or plugin idea into the studio with a numbered migration plan. Checks that existing artifacts actually work. |
| `/settings` | View or change studio config: rigor, automation, targets, stage. |
| `/studio-validate` | Run the validator: checks every command, flag and guide named in this studio against the installed CLI, then tries each capability on this project. Use after install or an upgrade, or to report what does not work. |
| `/studio-gap` | Record something the studio or Maru could not do: a failing command, a missing capability or misleading documentation. Use when a tool fails or a skill hits a dead end. |
| `/remix-module` | Start from an existing community or official module, keeping its credit and licence. |

## Product Design

| Skill | What it does |
| --- | --- |
| `/brainstorm` | Guides the user through finding and choosing a plugin concept. Use when they want ideas, a new concept, or have a musical problem but no plugin yet. |
| `/map-signal-flow` | Decompose a concept into signal blocks, controls and their dependencies, and set the design order. |
| `/design-module` | Section-by-section Plugin Design Document for one module or block. Walks through each required section, one at a time. |
| `/quick-design` | Lightweight spec for small changes: a tuning adjustment or one new control. Skips the full PDD. |
| `/review-all-designs` | Holistic review across PDDs: contradictions, controls that do the same thing, and too many controls. |
| `/design-review` | Reviews one design document for completeness, consistency, implementability and whether it can be tested. |
| `/propagate-design-change` | Finds architecture decisions and stories made stale by a changed design document, and resolves each. |
| `/consistency-check` | Check parameter names, ranges and units agree across the contract, face, presets, design documents and manual. |
| `/competitor-review` | Review comparable plugins: what they do well, what people complain about, and where this one differs. |
| `/modulation-design` | Design modulation: sources, targets, depth, rate, sync and what can be heard. |

## Sound & Visual Identity

| Skill | What it does |
| --- | --- |
| `/sound-bible` | Author the Sound Bible: the sonic identity, references and level policy that all sound work must follow. |
| `/face-bible` | Author the Face Bible: visual identity, references, type, colour and control style. |
| `/asset-spec` | Specs for samples, impulse responses and images: format, rights, slot and, if generated, the prompt and seed. |
| `/asset-audit` | Audit assets against the spec: orphans, missing rights, size and format. |
| `/generate-sounds` | Generate audio, a kit or MIDI with hosted jobs. Asks first, since jobs can cost money. |
| `/sampler-bank` | Make a sampler bank or playable kit from recordings, with mappings, presets and rights. |

## UX & Face

| Skill | What it does |
| --- | --- |
| `/ux-design` | Section-by-section UX spec for the face: what is visible at rest, the first minute, and how controls are reached. |
| `/ux-review` | Validate a UX spec or the built face: accessibility, concision and agreement with the design. |
| `/face-from-reference` | Build the face from a reference image inside this module: parameters first, then the face, DSP last. |
| `/parameter-pass` | Design or change the parameter contract: names, ranges, tapers, defaults, order. |
| `/visualizer` | Add a meter, scope or curve to the face, drawn from real module data. |

## Architecture

| Skill | What it does |
| --- | --- |
| `/create-architecture` | Author the technical plan before code: owner, starter, Graph or Processor, DSP candidates, wiring, prerequisites and verification order. |
| `/architecture-decision` | Create an ADR documenting one technical decision: context, alternatives and consequences. |
| `/architecture-review` | Map design requirements to decisions. Finds gaps, conflicts between ADRs, and unsupported assumptions about Maru. |
| `/create-control-manifest` | Build a short must-do and never-do list for this module from accepted ADRs. |

## Stories & Sprints

| Skill | What it does |
| --- | --- |
| `/create-epics` | Turn the design and architecture into epics, one per module area. |
| `/create-stories` | Break one epic, or the brief at minimal rigor, into stories with acceptance criteria. |
| `/story-readiness` | Check whether a story is ready: clear acceptance, no open questions, valid decisions. |
| `/dev-story` | Implement one story: code, check, evidence. Use when the user says to build or implement a story. |
| `/story-done` | Close a finished story: verify each acceptance item and record deviations. |
| `/sprint-plan` | Create or update a sprint plan from the milestone and capacity. |
| `/sprint-status` | Fast sprint snapshot. 'How is the sprint going?' |
| `/estimate` | Estimate effort from complexity, dependencies and risk, with a confidence level. |

## Reviews & Analysis

| Skill | What it does |
| --- | --- |
| `/code-review` | Review module code: realtime safety first, then ownership, contract use and tests. |
| `/gain-staging` | Check output against input level, per preset and across inputs. The audio version of a balance check. |
| `/sound-compare` | Compare the module against a reference recording or plugin for a chosen musical property. |
| `/content-audit` | Audit planned against built: controls, presets, demos and assets. |
| `/scope-check` | Scope creep check: current scope against the brief. 'Any scope creep?' |
| `/perf-profile` | Performance review: find expensive code, measure against budgets, rank optimizations. |
| `/tech-debt` | Track and prioritize technical debt: TODOs, temporary labels, workarounds. |
| `/gate-check` | Ready to advance between phases? Returns PASS, CONCERNS, NOT ASSESSED or FAIL with blockers. 'Can we move on?' |
| `/security-audit` | Security review before publishing: dependencies, credentials, licence settings and source visibility. |
| `/dsp-review` | Audio-specific review of DSP: stability, aliasing, zipper noise, denormals, DC, sample-rate independence, tails and reset. |

## QA & Testing

| Skill | What it does |
| --- | --- |
| `/qa-plan` | QA plan for a sprint or release: which checks are automated, what a person must listen to, and which hosts. |
| `/smoke-check` | Critical-path smoke gate: does it compile, load, render and show its face? |
| `/listening-test` | Structured listening session: a script for a person, then a report of what they heard. The audio version of a playtest. |
| `/soak-test` | Long-running behaviour: hours of audio, automation, tails, memory, denormals. |
| `/regression-suite` | Map tests to critical behaviour, find fixed bugs without a regression test, and extend the qualification tapes. |
| `/test-setup` | Set up tests and CI: test script, qualification tapes and a GitHub Actions workflow. |
| `/test-helpers` | Write project test helpers: tape builders, event builders and assertions. |
| `/test-evidence-review` | Review the quality of tests and evidence, not just their existence. ADEQUATE, INCOMPLETE or MISSING. |
| `/test-flakiness` | Find flaky checks from CI logs or repeated runs. |
| `/host-matrix` | Maintain the host and format compatibility matrix, with evidence per cell. |
| `/state-recall` | Test save and recall: parameters, presets, authored state and automation. |
| `/midi-test` | Test MIDI behaviour: note lifecycle, stuck notes, overlapping notes and capacity. |
| `/skill-test` | Validate this studio's skills: structure, and every command, flag and guide they name. |
| `/skill-improve` | Improve a skill through a test, fix and retest loop. |
| `/latency-check` | Establish the module's latency, what it reports to hosts, and whether a mix control stays aligned. |
| `/sample-rate-test` | Check behaviour at 44.1, 48, 96 and 192 kHz: tuning, time constants, filter behaviour. |
| `/automation-test` | Test automation of every parameter: clicks, zipper noise and recall. |
| `/in-daw-test` | Test in a real DAW: load, sound, automation, save and reopen. |

## Production

| Skill | What it does |
| --- | --- |
| `/milestone-review` | Milestone review: completeness, quality, risk and a go or no-go recommendation. |
| `/retrospective` | Sprint or milestone retrospective with actions for next time. |
| `/bug-report` | Structured bug report: what you did, what you heard, what you expected, and how to reproduce it. |
| `/bug-triage` | Re-evaluate open bugs: priority against severity, and what is a systemic trend. |
| `/reverse-document` | Generate missing design or architecture docs from existing code. |
| `/onboard` | Onboarding doc for a new contributor or agent: project state, conventions and priorities. |
| `/localize` | Face and manual translation: find hardcoded strings, extract a table, check lengths. |
| `/manual` | Write the plugin's manual: what it does, each parameter, first steps and honest support statements. |

## Creative

| Skill | What it does |
| --- | --- |
| `/prototype` | Test one risky idea quickly inside the module workbench. PROCEED, PIVOT or KILL. |
| `/vertical-slice` | End-to-end validation: one control, one sound, one preset, from face to publication dry run. |
| `/preset-pass` | Write or revise factory presets: names, order and range. |
| `/demo-pass` | Produce demo audio and the first impression on the module page. |

## Release

| Skill | What it does |
| --- | --- |
| `/build-plugin` | Build native plug-in formats and read the report. A binary alone does not prove anything. |
| `/publish` | Publish this module online. Dry run first, and always after an explicit yes. |
| `/release-checklist` | Pre-release checklist: build verification, levels, presets, rights, version. |
| `/launch-checklist` | Launch readiness across every department: code, sound, face, docs, page, community, legal. Go or no-go. |
| `/changelog` | Generate a changelog from git commits and stories. |
| `/patch-notes` | Musician-facing notes from the changelog. |
| `/hotfix` | Emergency fix outside the sprint, with a full record and a regression test. |
| `/day-one-patch` | First patch after launch: known issues and the first feedback, with a rollback plan. |
| `/module-page` | Prepare the module page: name, one-line promise, copy, screenshot, demo and licence. |
| `/license-setup` | Set up paid activation and tester licences for a native plug-in. Asks first; it changes how the product works. |
| `/marketplace-listing` | Prepare a free marketplace listing: validate, preview, and submit only with approval. |
| `/compare-release` | Compare two releases before shipping: what changed, and could saved sessions sound different? |
| `/hardware-target` | Check whether a module can run on a pedal or hardware board, and what that would take. |

## Team Orchestration

| Skill | What it does |
| --- | --- |
| `/team-effect` | Orchestrate the effect team: product-designer, parameter-designer, dsp-engineer, face-engineer, sound-director, qa-tester. Coordinates several agents on one feature. |
| `/team-instrument` | Orchestrate the instrument team: product-designer, voice-engineer, parameter-designer, face-engineer, sound-director, qa-tester. Coordinates several agents on one feature. |
| `/team-face` | Orchestrate the face team: ux-designer, art-director, ui-kit-specialist, face-engineer, accessibility-specialist. Coordinates several agents on one feature. |
| `/team-sound` | Orchestrate the sound team: sound-director, dsp-library-specialist, dsp-engineer, preset-designer, demo-producer. Coordinates several agents on one feature. |
| `/team-presets` | Orchestrate the preset and content team: sound-director, preset-designer, sample-librarian, copywriter. Coordinates several agents on one feature. |
| `/team-polish` | Orchestrate the polish team: performance-analyst, face-engineer, preset-designer, qa-tester. Coordinates several agents on one feature. |
| `/team-qa` | Orchestrate the QA team: qa-lead, qa-tester, host-compat-engineer. Coordinates several agents on one feature. |
| `/team-release` | Orchestrate the release team: release-manager, qa-lead, security-engineer, publishing-specialist. Coordinates several agents on one feature. |
| `/team-launch` | Orchestrate the launch team: release-manager, copywriter, docs-lead, community-manager, demo-producer. Coordinates several agents on one feature. |
