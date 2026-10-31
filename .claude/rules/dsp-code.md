---
paths:
  - "src/dsp/**"
---

# DSP code

- No allocation, locks, I/O or JavaScript callbacks in `process`. Prepare everything before the block runs.
- Compose `maruaudio/dsp` leaves before writing a new algorithm. Search with `npx maru guide read dsp-leaf-catalog`.
- Keep state resettable: a reset must match a fresh default, including smoothed values.
- Keep output finite. Guard feedback paths, and check that silence stays silent after a tail.
- If `src/index.ts` declares `processing`, it must include `maxBlockFrames`. A long tail needs `maxTailSeconds`.
- After any change to gain, drive or mix, check levels with `/gain-staging`.
- Never name a compiler or target in product DSP.
