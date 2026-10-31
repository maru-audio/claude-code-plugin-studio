import { defineEffectQualification } from "maruaudio/audio/qualification"

/**
 * Deterministic input and automation; consumed by existing qualification hosts.
 * `inputTape.samples` holds one channel per declared input channel, each exactly
 * (warmupQuanta + measuredQuanta) × 128 frames: 4096 for the observation below.
 */
export default defineEffectQualification({
  inputTape: {
    id: "starter-effect-input",
    version: "1",
    sampleRateHz: 48_000,
    samples: [Array.from({ length: 4096 }, (_, frame) => Math.fround(
      0.2 * Math.sin(2 * Math.PI * 375 * frame / 48_000) +
      0.05 * Math.sin(2 * Math.PI * 3000 * frame / 48_000)
    ))],
  },
  eventTape: {
    id: "starter-effect-automation",
    version: "1",
    events: [
      { kind: "param", path: "drive", value: 0.2, frameOffset: 0 },
      { kind: "param", path: "drive", value: 0.8, frameOffset: 549 },
      { kind: "param", path: "tone", value: 9000, frameOffset: 1051 },
    ],
  },
  observation: { warmupQuanta: 2, measuredQuanta: 30 },
  expectations: { finite: true, audible: true },
  parameterStateRoundTrip: true,
})
