# Port a web audio prototype

A browser prototype is a reference, not a shipping path.

1. **Read first.** `npx maru guide read porting-web-audio`.
2. **Audit.** Run `/adopt`.
3. **Rebuild.** Move the sound into a Processor or Graph, and the controls into the contract and face. Do not keep the old AudioContext.
4. **Compare.** Render both and run `/sound-compare`. A person decides whether it is close enough.
