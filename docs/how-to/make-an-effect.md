# Make an effect

This template already is one: a soft drive into a one-pole tone control.

1. **Say what it does.** Run `/brainstorm`, or write `design/brief.md` yourself. One sentence, and five or fewer controls.
2. **Check what exists.** `npx maru dsp effects` lists named effects to chain, and `npx maru module list` shows catalog modules. Recompose before you write DSP.
3. **Set the parameters.** Run `/parameter-pass`. `src/contract.ts` owns names, ranges and tapers.
4. **Build the face.** Run `/face-from-reference` if you have an image, or edit `src/ui/`. Check with `npx maru module screenshot .`.
5. **Write the sound.** Edit `src/dsp/processor.ts`, or run `/dev-story`. `npx maru guide read processor-authoring dsp-leaf-catalog` explains the lifecycle and the library.
6. **Listen.** Run `npm run dev`, choose a source, press Play and click **Unmute**. An effect needs an input signal.
7. **Check.** Run `npx maru module check .`, then `/gain-staging`.
8. **Share.** See [Publish and share](publish-and-share.md).
