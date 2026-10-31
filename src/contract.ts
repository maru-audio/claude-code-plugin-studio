import type { ParamDescriptor } from "maruaudio/contracts"

/**
 * The stable parameter ABI, shared by the declaration, the Processor and any
 * face.
 *
 * Path ORDER is the automation ABI a native shell exposes, so it is a contract
 * rather than a layout preference. It lives in its own file for the reason
 * every first-party Processor module puts it in one: `src/index.ts` declares
 * it and `src/dsp/processor.ts` answers to it, and a schema written inline in
 * the declaration is a schema the DSP can silently stop matching.
 *
 * Two parameters, matching the two audible stages. Add a third here and
 * `setParameter` in `src/dsp/processor.ts` is the one other place to edit.
 */
export const PROCESSOR_EFFECT_SCHEMA: {
  readonly params: readonly ParamDescriptor[]
} = {
  params: [
    { path: "drive", label: "Drive", group: "Shaper", type: "float", min: 0, max: 1, default: 0.45 },
    { path: "tone", label: "Tone", group: "Filter", type: "float", min: 80, max: 12000, default: 2400, units: "Hz" },
  ],
}
