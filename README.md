# Maru Plugin Studio

A new audio module project built on the [Maru framework](https://maru.audio).
Prototype locally in the browser workbench, inspect parameters and runtime
diagnostics with its debugging tools, and prepare plug-in exports for supported
DAWs. Selected hardware targets use additional target-specific tooling and
qualification; availability depends on the module and installed toolchain.
See the [Maru documentation](https://maru.audio/docs) for authoring and delivery
guidance.

The starter DSP is an audio-in / audio-out effect: a soft drive into a one-pole tone control.

```sh
npm install
npm run dev            # live player in your browser
npm run test           # typecheck + the full module check
```

## The module

```
src/index.ts          the authoring entry — exports AUDIO_MODULE
src/contract.ts       the parameter schema, shared by the entry and the DSP
src/factory-bank.ts   schema-derived Initial and contrasting factory sounds
src/qualification.ts  deterministic host audio/MIDI/automation fixture
src/dsp/processor.ts  the product DSP — this is where the sound is
src/dsp/index.ts      the public DSP surface, for composition and tests
src/ui/index.tsx       module-owned face with public UI-kit controls
src/ui/styles.css      scoped face styling
```

`src/index.ts` is declared in `package.json` under
`maru.development.sources.module` and `src/dsp/processor.ts` under
`maru.development.sources.dsp`. The declaration names the DSP a second time
in `implementation: { kind: "processor", source: … }` — that is the field the
toolchain actually resolves.

The DSP is **restricted TypeScript**: one target-neutral source that compiles
to JavaScript by default and to WebAssembly and native code from the same file.
`process` allocates nothing, takes no lock, performs no I/O and calls back
into no host; every array it touches is allocated in `createState`.
`AGENTS.md` has the rules in full.

The editable face in `src/ui/` comes from the same canonical starter as
its sound and parameter schema. It uses public UI-kit controls, host-owned
power and descriptor-bound parameter gestures. Its styles ship beside the face.
The factory bank in `src/factory-bank.ts` is shared by the declaration and face.
Initial derives from schema defaults; the other presets provide contrasting sounds.

To add a parameter, add it to `src/contract.ts` and handle its path in
`setParameter`, then bind the face control. Typecheck and verify the audible
parameter effect; typechecking alone cannot prove that DSP dispatch handles a path. A Processor is the default shape for product DSP;
`AGENTS.md` has the rules.

## First session

1. Run the workbench, then choose an audio source in the host and press Play.
2. Try Initial and the two contrasting factory presets, then change a control.
3. Edit a label in `src/ui/index.tsx` to see face hot reload. Change sound in
   `src/dsp/processor.ts` and inspect the served and active Program status.

[CONTRIBUTING.md](CONTRIBUTING.md) covers UI and DSP edits, debugging, validation,
prerequisites and troubleshooting. [AGENTS.md](AGENTS.md) is the coding-agent entry.

## Shipping

```sh
npm run module:check       # the packager's own gates, fast lane
npm run module:pack        # content-addressed web package (local)
npx maru publish           # publish to your profile; prints @handle/slug@version
npm run module:export      # native shell plan + metadata
npm run build:standalone   # native executable
npm run build:vst3         # VST3 + validator evidence
npm run build:clap         # CLAP
npm run build:au           # AU (macOS)
npm run build              # all configured native formats, with per-target results
npm run verify:formats     # freshness gate over the built formats
```

Each native build retains its report under `.maru/reports/` and links final
bundles, archives and qualification from `build/README.md`. Read its
`validation.status`: `passed` means a real validator or native harness ran;
`unavailable` means the optional tool is not installed. A binary on disk is
not by itself evidence.

## Project folders

Edit `src/` and the resources you supply in `assets/`. Tests and their
development inputs belong in `tests/` and `fixtures/`. Find generated,
usable outputs through `build/README.md`; there is no separate root web dist.
The reusable browser package is `build/web/module/`.

Maru keeps disposable compiler/workbench files in `.maru/cache/` and retained
diagnostics in `.maru/reports/`. Generated takes live in `.maru/generated/`;
they are personal work, not disposable cache. Shared tooling settings belong in
the optional tracked `.maru/config.json`. Product identity and parameters
remain in the module declaration.

The defaults need no settings file: output root `build`, without product or
version nesting. Set `build.output.directory`, `productDirectory` and
`versionDirectory` to choose another layout, and `build.nativeFormats` to
select the formats built by `npm run build`. Add a custom output directory
to Git ignore. Read the [packaging guide](https://maru.audio/docs/packaging-and-releasing-plugins)
for native builds, CI, installers and distribution.

`AGENTS.md` is the authoring contract, written for coding agents but accurate
for humans too. `CLAUDE.md` points at it.

[Maru website](https://maru.audio) · [Documentation](https://maru.audio/docs)
