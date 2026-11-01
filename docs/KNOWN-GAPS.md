# Known gaps

What this studio or Maru could not do when we tried it, with `maruaudio@0.0.7` on macOS arm64. Run `npm run studio:validate` to see whether each still applies to you. When a row with a task passes, the report says so.

Found something else? Run `/studio-gap`.

| Task | Gap | Workaround |
| --- | --- | --- |
| [DEVX-061](#devx-061) | Published package omits the demo audio, so `module preview` and the levels suite crash | `--stimulus <wav>` works for levels; `node tools/make-test-signal.mjs` makes the audio. Nothing yet for `module preview`. |
| [DEVX-062](#devx-062) | Every native failure says `Run maru setup native`, which asks for a private package a public user cannot get | Use the hosted route, as in `docs/how-to/build-native-plugins.md`. |
| [DEVX-063](#devx-063) | Verify native plug-ins through `maru publish`, from a template project to an installed plug-in | Browser-playable modules work today. Local native builds need approved access to the toolkit. |
| [DEVX-064](#devx-064) | Portability, WebAssembly and export fail without the Processor compiler, and the fix points at a Maru checkout | None. Keep to restricted TypeScript rules, and check after a hosted build. |
| [DEVX-065](#devx-065) | `module pack` and `module build` refuse the default output after `module preview` | Delete `build/` before `module pack`. |
| [DEVX-066](#devx-066) | `plugin test` and `plugin package` need a `plugin.config.json` that `maru init` never creates | None. |
| [DEVX-067](#devx-067) | The `maru preset` group is advertised, but is not served, and has no local mode | Edit `src/factory-bank.ts`, and audition in the workbench. |
| [DEVX-068](#devx-068) | Public CLI rough edges: monorepo hints, unreachable gates, local module commands | See each row. For local parameters, read `src/contract.ts`. |
| [DEVX-069](#devx-069) | Quickstart says the workbench needs a beta toolchain, but 0.0.7 ships it | Run `npm run studio:validate`, and trust its result. |
| [DEVX-070](#devx-070) | No public way to get measurements from a Processor beyond the levels suite | `node tools/make-test-signal.mjs`, with the levels suite. `src/qualification.ts` expectations cover finite and audible. |
| [DEVX-071](#devx-071) | No public way to measure CPU, latency or long-run stability | Read the code for per-sample cost, and watch the workbench by hand. |
| [DEVX-072](#devx-072) | No public test helpers for module behaviour: sample rates, MIDI, automation, recall | Write helpers by hand in `tests/helpers/`, using `/test-helpers`. |
| [DEVX-073](#devx-073) | No tool to compare against a reference, or to record that a person listened | `/listening-test` keeps a report under `production/qa/listening/`. |
| [DEVX-074](#devx-074) | No checks or guidance for face accessibility and translation | Manual review by `accessibility-specialist`, and a hand-built string table. |
| [DEVX-075](#devx-075) | No public host validation matrix, and hardware commands may assume a checkout | A person tests in a DAW and records it with `/host-matrix`. |
| [DEVX-076](#devx-076) | Ship Maru Agentic Template: generated from one source, with each copy getting its own identity | Change `name` in `package.json` and `maru.config.json` by hand before publishing. |
| [DEVX-077](#devx-077) | Measure the studio: does it produce plugins or documents? | See the README. |
| [DEVX-078](#devx-078) | Public guides leave out what authors hit first, so an agent reads package source | This studio's path rules carry these facts. |

## DEVX-061

**Fixed in source, not released yet.** It reaches you with the `maruaudio` release after 0.0.7.

**Published package omits the demo audio, so `module preview` and the levels suite crash**

The commands that render a module's sound fail on every project created from the public package, because they read test audio that is not in the tarball.

- `maru module preview src/index.ts` exits with ENOENT: `maruaudio/src/assets/audio-clean-test-tone.wav'`.
- `maru module eval --suite levels` exits with ENOENT on `node_modules/maruaudio/src/assets/audio-clean-test-tone.wav`. The file is nowhere in the installed package.
- The `maru-agent` skill tells agents to run the levels suite after any gain change, so following it crashes.
- An agent trial hit this on a real effect, and could not measure any audio as a result.

**Workaround:** `--stimulus <wav>` works for levels; `node tools/make-test-signal.mjs` makes the audio. Nothing yet for `module preview`.

## DEVX-062

**Fixed in source, not released yet.** It reaches you with the `maruaudio` release after 0.0.7.

**Every native failure says `Run maru setup native`, which asks for a private package a public user cannot get**

A public user or agent that follows the printed fix reaches a second error with no route forward, and the messages disagree. `maru module doctor` also fails hard over components the person cannot obtain.

- `maru plugin build` and `maru module verify` both print `Run maru setup native`.
- `maru setup native` replies: `No native toolkit package for this platform is installed in this project. Install the approved private GitHub package`. It does not say how to get approved.
- Plain `maru setup` says something different: payload delivery `is not implemented yet`, and native builds `are not available from the npm package yet`.
- `maru doctor` lists `maru setup native` and `maru setup desktop` as fixes.
- `maru module doctor` exits with failure on `nativeArchive` and `nativeShell`, although browser work is healthy.

**Workaround:** Use the hosted route, as in `docs/how-to/build-native-plugins.md`.

## DEVX-063

**Verify native plug-ins through `maru publish`, from a template project to an installed plug-in**

Maru's designed route for everyone is hosted: publish, then Maru builds, validates, signs and delivers. Nobody has run that from a template project, and its tracked work (PLAT-088, PLAT-107, PLAT-224) is open. The studio now documents the workflow, but cannot claim it works. **This is scheduled last on purpose:** Felix's decision is to prioritize it when it becomes the only remaining gap.

- `maru plugin build` needs a private toolkit by design, per the [native toolchain distribution plan](../../docs/strategy/native-toolchain-distribution-plan-2026-10-24.md).
- `maru module status` points to the Distribution tab for native builds. `maru build list` showed existing projects as `unsupported (native-artifact-missing)`.
- Workflow: `maru-agentic-template/docs/how-to/build-native-plugins.md`.

**Workaround:** Browser-playable modules work today. Local native builds need approved access to the toolkit.

## DEVX-064

**Portability, WebAssembly and export fail without the Processor compiler, and the fix points at a Maru checkout**

A public user cannot learn whether their Processor will compile to WebAssembly or native, which is the question they most need answered before going further. The suggested fix is to depend on a Maru checkout, which they do not have.

- `maru module check . --portability` reports unavailable, then advises a `file:<checkout>/packages/maruaudio` dependency.
- `maru module export src/index.ts` fails with `compiler profile builder is missing`.
- `maru module pack-npm` fails with `package.processor-release-required`.
- `--programs js,wasm` therefore cannot be used; `maru publish` limits the public to JS unless qualified.

**Workaround:** None. Keep to restricted TypeScript rules, and check after a hosted build.

## DEVX-065

**Fixed in source, not released yet.** It reaches you with the `maruaudio` release after 0.0.7.

**`module pack` and `module build` refuse the default output after `module preview`**

`module preview` writes `build/audio-preview` and `build/processor` with no ownership marker, even when it then crashes. `module pack` and `module build` then refuse `build/` as not owned by Maru. `--out` inside the project is refused as well, so the person has to delete the folder.

- On fresh copies, `module pack` succeeds after `module check`, `dev --check`, `verify-browser` and `verify`.
- After `module preview`: `build=[audio-preview processor]`, and `Output directory is not owned by Maru: .../build. Choose an empty output location.`
- `--out .maru/pack-out` is refused: `Build output cannot overlap authored source, dependencies or .maru storage`.
- One other project reached this state with only `build/processor`. The command responsible for that was not isolated.

**Workaround:** Delete `build/` before `module pack`.

## DEVX-066

**`plugin test` and `plugin package` need a `plugin.config.json` that `maru init` never creates**

Two project models coexist. A project from `maru init` has `maru.config.json`, and these commands look for a different file, without saying how to get it.

- `maru plugin test .` and `maru plugin package .` fail with `plugin project spec not found: .../plugin.config.json`.
- `plugin.config.json` is not in any starter or in `maru init --help`.

**Workaround:** None.

## DEVX-067

**The `maru preset` group is advertised, but is not served, and has no local mode**

Presets are central to a plugin, yet the command group is unavailable and only addresses hosted projects. Local presets can only be changed by editing `src/factory-bank.ts`, with no way to audition, list or compare them from the CLI.

- `maru preset list`: `list_project_presets is not served by the hosted service yet.`
- `maru --help` lists the group as available.
- `maru publish --help`: preset publication is not yet available (SC-AUDIO-059).

**Workaround:** Edit `src/factory-bank.ts`, and audition in the workbench.

## DEVX-068

**Public CLI rough edges: monorepo hints, unreachable gates, local module commands**

Small problems that each stop an agent or confuse a new user. Together they show the public CLI still assumes a Maru checkout.

- `maru dev --check` prints `pnpm --dir modules/<slug> check # gate: ...` as the reproduction command, which is a monorepo path.
- The `signal-audit` and `face-contract` gates report **not requested**, and `module check` has no flag to request them.
- `maru module validate .` fails with `unknown module workspace '.'`; it wants the name.
- `maru module params .` and `maru module spec .` refuse a local project: `Module specs are served for official modules`.
- `maru module examples` prints `maru init <dir> --from blank-face-first`, which then fails: `--face-first needs --params`.
- A module cannot be unpublished from the command line, while `maru publish` can create one.
- `maru module eval src/index.ts` refuses the default starter: `requires a canonical Graph definition`.
- The starter's `AGENTS.md` says never change the module id, while the comment in `src/index.ts` says to set your own before first publish.
- `face-bundle` counts bindings only from literal paths: a trial's four knobs from a mapped array reported `1 parameter bindings in the schema`.
- The blank effect is +10.2 LU at nominal with default settings, and the levels suite reports `passed`. A starter teaches gain staging by example.

**Workaround:** See each row. For local parameters, read `src/contract.ts`.

## DEVX-069

**Quickstart says the workbench needs a beta toolchain, but 0.0.7 ships it**

The public availability note understates what works, and may turn people away from something that runs.

- Quickstart: the local workbench and plug-in builds also need a toolchain provided in the selected-developer beta.
- `maru doctor` on 0.0.7: `payload:toolchain-source shipped in maruaudio 0.0.7`.
- `maru dev --check`, `module verify-browser` and the full `module check` all pass from the published package.
- Not yet confirmed on a clean machine with a new account.

**Workaround:** Run `npm run studio:validate`, and trust its result.

## DEVX-070

**No public way to get measurements from a Processor beyond the levels suite**

The default starter is a Processor, and `module eval` only supports a Graph without `--suite`. A DSP engineer cannot get peak, spectrum, finiteness over a chosen input, or a frequency or impulse response from the CLI. `/dsp-review` is therefore a code reading, not a measurement.

- `maru module eval src/index.ts`: `module eval requires a canonical Graph definition`.
- `--suite` accepts only `levels`.
- `maru render` works on installed modules from the library, not on the project being edited.
- An agent trial found no command to write test input, so nothing could be measured. `maru render` with no `--audio` gave silence.
- No command reports spectrum or pitch of a render, or lets you choose the block size.
- The `standard` trial wrote its own script for repeat-by-repeat analysis of an echo, because no command offers one.

**Workaround:** `node tools/make-test-signal.mjs`, with the levels suite. `src/qualification.ts` expectations cover finite and audible.

## DEVX-071

**No public way to measure CPU, latency or long-run stability**

Budgets cannot be checked. `/perf-profile`, `/soak-test` and `/latency-check` can only be code reviews or manual protocols, and they say so.

- The help for `module check`, `module eval`, `module verify` and `dev` does not mention CPU, benchmarks, soak, stress, denormals or latency.
- The internal lowering lab may hold reusable parts; this was not checked.

**Workaround:** Read the code for per-sample cost, and watch the workbench by hand.

## DEVX-072

**No public test helpers for module behaviour: sample rates, MIDI, automation, recall**

`module check --tests` runs a script the author must write from nothing. Qualification covers one sample rate and parameter round trips. Every project will rewrite tape builders and offline-render assertions, or skip the tests.

- The package's 452 exports include `./audio/qualification`, and nothing for test helpers.
- The starter's `test` script is the typecheck plus the module check.
- `--tests` runs the starter's `test` script, which is the typecheck plus the module check. The starter has no module test.
- No public guide covers writing a module test.

**Workaround:** Write helpers by hand in `tests/helpers/`, using `/test-helpers`.

## DEVX-073

**No tool to compare against a reference, or to record that a person listened**

Maru's rule is that listening is the test of sound, but listening leaves no record tied to a release, and there is no A/B or matched-loudness comparison against a reference or earlier version.

- The help for `module eval`, `module preview` and `dev` has no reference or A/B options.
- `module status` and release evidence have nowhere for a listening result.
- The workbench was not opened to check for a matched-loudness comparison.

**Workaround:** `/listening-test` keeps a report under `production/qa/listening/`.

## DEVX-074

**No checks or guidance for face accessibility and translation**

The `ui-kit-faces` guide mentions `aria-label` for icons, and nothing else. No gate checks keyboard reach or contrast, and there is no documented way to translate a face.

- The help for `module check`, `module screenshot` and `module verify-browser` mentions no accessibility check.
- No guide covers keyboard use of controls or locale handling.
- Whether UI kit controls are keyboard operable was not tested here.

**Workaround:** Manual review by `accessibility-specialist`, and a hand-built string table.

## DEVX-075

**No public host validation matrix, and hardware commands may assume a checkout**

A person cannot run format validators or see host compatibility without native tools. `maru hardware list` says it lists projects in this checkout, so hardware may not work for a consumer. `maru daw` is experimental, and its coverage is unstated.

- `maru module doctor`: `host.validator-missing: clapValidator`.
- `maru plugin capabilities` offers only `scan` and `listPlugins`.
- `maru hardware targets` lists all five boards as `unavailable`: `producer ... is not installed yet`. `maru hardware --help` says `List pedal projects in this checkout`.

**Workaround:** A person tests in a DAW and records it with `/host-matrix`.

## DEVX-076

**Ship Maru Agentic Template: generated from one source, with each copy getting its own identity**

The studio is an early trial, with several things in the way of release. A copy keeps the template's module id and name, so its first publish would be called Maru Agentic Template. Its files sit outside the module project contract, so they are dropped from the source archive and lost on a Studio round trip. It is a hand-assembled copy of a generated starter, so it will drift. A GitHub template has no update link.

- `maru publish --dry-run` planned `local.maru-agentic-template@0.0.1` as the published identity until `tools/rename-project.mjs` was added to the studio. That is a local script, and the platform has no rename step.
- The dry run also credits `@maru/blank-effect` as origin, which is right, and should stay.
- On `maruaudio@0.0.7`, `maru init --from` stops with "GitHub template response exceeds the download limit" on any template with a very small file, because gzip makes those responses longer than the file. Fixed in source, and it created a working project from this repository on a local candidate. Until that release, use **Use this template**.
- On `maruaudio@0.0.7`, `maru publish` refuses a project installed with npm: "maruaudio@0.0.7: 43379940 unpacked bytes is over the 25 MB budget". A plain starter does the same, and pnpm is not affected. It passes on a local candidate of the next release.
- The instrument starter requires moving files by hand; there is no command.

**Workaround:** Change `name` in `package.json` and `maru.config.json` by hand before publishing.

## DEVX-077

**Measure the studio: does it produce plugins or documents?**

The README owes a measurement. One agent trial per rigor level on one brief is a start. It needs a person's blind listening, and a repeat on a clean machine after the blockers are fixed.

- `minimal`: 6 files before the first module change, tool call 72 of 162, $10.57, 20 minutes. The full check passes, 3 of 5 stories are unmet, and nothing was measured or heard.
- `standard`: 11 files before the first module change, tool call 116 of 216. Stopped by hand, unfinished. The fast check passes.
- Neither trial delegated to any subagent, so the agent hierarchy is untested.
- Both ran on the first version of the studio. Results are in `../maru-plugin-studio-trials/`. No person has listened to either.

**Workaround:** See the README.

## DEVX-078

**Public guides leave out what authors hit first, so an agent reads package source**

With only the guides, an agent still had to read `node_modules/maruaudio/source` six times for basic authoring facts. Each missing fact costs time and tokens for every new user.

- The `parameters-and-schema` guide does not say a `"log"` taper needs a strictly positive range, or that `display: { format: "percent" }` needs a range inside 0 to 1 and no `units`.
- It tells readers to use `maru module params`, which refuses a local project.
- No guide says `processing.maxBlockFrames` is required once `processing` is declared; the type error is long and buried in overloads.
- No guide says a contract change fails `face-bundle` until the face is updated, or names the order to work in.
- No guide shows a worked delay with modulation inside its feedback loop, although the delay leaves exist.

**Workaround:** This studio's path rules carry these facts.

