# Make an instrument

An instrument takes MIDI and makes sound. The template starts as an effect, so replace `src/` with an instrument starter.

1. **Create the starter.** In a new folder run `npx maru init my-synth --from blank-instrument`, then move this studio's `.claude/`, `design/`, `docs/`, `production/`, `tools/` and `studio.config.json` into it. There is no command for this yet.
2. **Read first.** `npx maru guide read instrument-sound-design midi-and-event-modules dsp-leaf-catalog`.
3. **Choose the voice.** Compare existing voices with `npx maru module list` and `npx maru module spec osc-mini`. The blank starter's oscillator proves wiring; it is not a sound decision.
4. **Build.** Run `/team-instrument`, or use `voice-engineer` directly.
5. **Test playing.** Run `/midi-test`, then play it yourself in `npm run dev`. Overlapping notes and transitions matter more than a sustained tone.
6. **Check headroom.** Hold many notes. Say what the level does, and let a person judge it.
