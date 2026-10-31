import type { AudioModulePreset } from "maruaudio/audio/define"
import { PROCESSOR_EFFECT_SCHEMA } from "./contract"

// Derive initial values once from the schema; presets only author intentional overrides.
const defaults: Record<string, number> = Object.fromEntries(
  PROCESSOR_EFFECT_SCHEMA.params.map((param) => {
    if (typeof param.default !== "number") throw new Error(`Missing numeric default: ${param.path}`)
    return [param.path, param.default]
  })
)

/** Shared by the declaration and face; hosts own preset selection and restore. */
const sounds: { id: string; name: string; values: Record<string, number> }[] = [
  { id: "init", name: "Initial", values: defaults },
  { id: "warm", name: "Warm drive", values: { drive: 0.25, tone: 1800 } },
  { id: "bright", name: "Bright edge", values: { drive: 0.7, tone: 9000 } },
]

export const factoryPresets = sounds.map((preset) => ({
  ...preset,
  values: { ...defaults, ...preset.values },
})) satisfies readonly AudioModulePreset[]
