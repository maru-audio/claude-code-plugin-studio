# Developing Claude Code Plugin Studio

Built on the [Maru framework](https://maru.audio); see the
[documentation](https://maru.audio/docs) and this project's [README](README.md).

## Local loop

Use Node.js 22.12 or later and the project dependency versions. Install once,
then run `npm run dev` from this folder. The shared workbench supplies playback,
MIDI/audio devices, monitor level, diagnostics and reload. The face does not
open devices or generate audio. Choose an audio source and press Play; an effect needs an input signal.

Some commands need separately installed build components. Run
`npx maru doctor` and read its output before building. If the installed release
cannot install a required component, report that limitation; do not substitute a
different runtime. A generated project does not establish native or hardware
qualification.

## Edit the custom UI

- Layout and controls: `src/ui/index.tsx`; scoped styling: `src/ui/styles.css`.
- Use the existing UI-kit controls, descriptor bindings, formatting and edit
  gestures. Ranges, defaults, steps and response curves belong to the schema.
- Host power and presets use `FaceModuleNavbar`; do not add local bypass state
  or a second preset selection engine.
- The authored bank is `src/factory-bank.ts`. Both declaration and face consume it; edit intentional overrides there.
- Keep illustrative graphics labelled as models. Actual meters need host data.
- Check narrow and default face dimensions, pointer/keyboard edits, reset,
  Parameters-view agreement and host power after UI changes.

Face source edits rebuild the face. Check the build indicator to distinguish
served files from the Program actually playing. Keep the existing workbench;
do not add a page-specific audio controller or a second preview server.

## Edit the sound

`src/contract.ts` owns parameter descriptors; `src/dsp/processor.ts` owns processing. Add or change a descriptor, its `setParameter` handling and audible use, and its face binding together. Compose public DSP leaves; allocate state outside `process`, and keep realtime work bounded and free of allocation, I/O and host callbacks.

Keep initial values derived from the schema. Presets author only intentional
overrides. Verify changed parameters affect real output, then check reset and
state restore. A moving control or successful typecheck is not audio evidence.

## Checks and debugging

```sh
npm run typecheck       # types and public imports
npm run module:check    # fast development gates
npm run test            # types plus the full module check
npx maru guide list    # version-specific authoring guides
```

Use workbench Evaluate for build diagnostics and checks. For no sound, inspect
the selected source, transport, monitor level and host power, then MIDI delivery
for an instrument and output meters. A new build is not necessarily active.
Keep failures and the served/playing Program identities in bug reports.

For DSP changes, render through the existing engine and measure finite output,
peak/RMS, clipping, silence where expected and the changed parameter's effect.
Check signal input, silence, reset and parameter endpoints.
Test presets and saved-state restore through the host. Typecheck, browser
interaction, audio behavior and native validation are distinct evidence lanes.
Read reports: unavailable or skipped required checks are not passes.

## Coding agents

Read [AGENTS.md](AGENTS.md). Install the optional project-local Maru skill using
its existing CLI lifecycle:

```sh
npx maru skill install
npx maru skill status
```

Installation requires the configured skill distribution to contain a valid
skill. Use this project's installed CLI and matching guides; do not silently
switch to a latest release to work around a missing feature.

## Delivery

Use the build scripts listed in README. Each target has its own prerequisites
and validation. Inspect `build/README.md` and the linked qualification reports;
a binary or a passing
browser preview does not establish DAW/native/hardware acceptance. Keep generated
`build/`, `dist/` and `node_modules/` out of version control.
