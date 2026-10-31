# Make a MIDI tool

An event-only module transforms notes and makes no sound of its own.

1. **Read first.** `npx maru guide read midi-and-event-modules`.
2. **Start close.** Look at existing MIDI modules with `npx maru module list`, and start from one with `npx maru init my-tool --from velocity`.
3. **Remember who owns what.** Devices, transport and routing belong to the host. Your module declares ports and handles events.
4. **Test.** Add event tapes in `src/qualification.ts`, run `/midi-test`, then play it through an instrument.
