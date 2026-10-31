import { clampUnit } from "maruaudio/dsp/math/range"
import {
  onePoleLowpassTick,
  toneFilterCoefficient,
} from "maruaudio/dsp/filters/one-pole"
import type {
  ProcessSpec,
  ProcessorBlock,
  ProcessorDefinition,
} from "maruaudio/dsp/processor"
import { isProcessingRateSupported, PROCESSING_REFERENCE_RATE } from "maruaudio/dsp/processor"

/**
 * The blank Processor effect's DSP: a tone-controlled soft drive.
 *
 * Deliberately two audible stages and no more. A starter's DSP has one job
 * beyond making sound — to be the shortest complete example of the Processor
 * contract a user can read in full and then edit — so both stages are real
 * `maruaudio/dsp` leaves rather than arithmetic written out here, and the
 * file's own code is the lifecycle plus the per-sample loop.
 *
 * `drive` shapes, `tone` filters what the shaping produced. That order is the
 * reason this is audible rather than merely non-silent: drive adds harmonics
 * above the input's own spectrum and the low-pass is what makes moving `tone`
 * change the sound instead of trimming the top of an already-dull signal.
 */

/** Per-instance state. One filter accumulator per supported channel. */
export interface ToneDriveState {
  drive: number
  tone: number
  sampleRate: number
  /** The one-pole accumulator for channel 0 and channel 1. A double, never
   * frounded — `onePoleLowpassTick`'s own contract. */
  filterState: Float64Array
  prepared: boolean
}

/**
 * Bounded rational soft clipping — the same monotonic transfer the SDK's
 * soft-clip reference uses, so the two starters do not teach two different
 * shapers for the same word.
 */
export function driveTransfer(input: number, drive: number): number {
  const amount = clampUnit(drive)
  let magnitude = input
  if (magnitude < 0) magnitude = -magnitude
  const k = amount * 40
  return ((1 + k) * input) / (1 + k * magnitude)
}

/** Allocate algorithm state. Schema defaults arrive through `setParameter`. */
export function createState(): ToneDriveState {
  return {
    drive: 0,
    tone: 2400,
    sampleRate: PROCESSING_REFERENCE_RATE,
    // Allocated ONCE, here, because `process` may not allocate.
    filterState: new Float64Array(2),
    prepared: false,
  }
}

/** Accept the bounded mono or stereo layout the generated adapter supplies. */
export function prepare(state: ToneDriveState, spec: ProcessSpec): boolean {
  const valid =
    isProcessingRateSupported(spec.sampleRate) &&
    Number.isInteger(spec.maximumBlockSize) &&
    spec.maximumBlockSize > 0 &&
    spec.inputChannels === spec.outputChannels &&
    (spec.inputChannels === 1 || spec.inputChannels === 2)
  state.prepared = valid
  if (valid) {
    state.sampleRate = spec.sampleRate
    state.filterState[0] = 0
    state.filterState[1] = 0
  }
  return valid
}

/** Select parameters by their stable public schema paths. */
export function setParameter(
  state: ToneDriveState,
  path: string,
  value: number
): boolean {
  // `value !== value` is the NaN test that survives the restricted subset.
  if (value !== value) return false
  if (path === "drive") {
    state.drive = clampUnit(value)
    return true
  }
  if (path === "tone") {
    state.tone = value
    return true
  }
  return false
}

/** Process a borrowed planar block without allocating or selecting a target. */
export function process(state: ToneDriveState, block: ProcessorBlock): boolean {
  if (!state.prepared) return false
  if (
    block.inputChannels !== block.outputChannels ||
    (block.inputChannels !== 1 && block.inputChannels !== 2) ||
    block.channelStride < 1 ||
    block.frameOffset < 0 ||
    block.frameCount < 0 ||
    block.frameOffset + block.frameCount > block.channelStride ||
    block.input.length < block.inputChannels * block.channelStride ||
    block.output.length < block.outputChannels * block.channelStride
  )
    return false

  const coefficient = toneFilterCoefficient(state.tone, state.sampleRate)
  const start = block.frameOffset
  const frames = block.frameCount
  const stride = block.channelStride
  const channels = block.outputChannels

  // The two supported channels are explicit so realtime safety is provable
  // without changing the processing contract — the soft-clip reference's rule.
  for (let channel = 0; channel < 2; channel = channel + 1) {
    if (channel >= channels) break
    const base = channel * stride
    let filtered = state.filterState[channel]
    for (let offset = 0; offset < frames; offset = offset + 1) {
      const index = base + start + offset
      const shaped = driveTransfer(block.input[index], state.drive)
      filtered = onePoleLowpassTick(filtered, shaped, coefficient)
      block.output[index] = Math.fround(filtered)
    }
    state.filterState[channel] = filtered
  }
  return true
}

export function reset(state: ToneDriveState): void {
  // Parameter defaults are schema facts the adapter reapplies after this.
  state.filterState[0] = 0
  state.filterState[1] = 0
}

const processor = {
  createState,
  prepare,
  setParameter,
  process,
  reset,
} satisfies ProcessorDefinition<ToneDriveState>

export default processor
