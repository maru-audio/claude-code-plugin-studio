import maruProjectConfig from "../maru.config.json"
import { defineEffect } from "maruaudio/audio/define"

import { PROCESSOR_EFFECT_SCHEMA } from "./contract"
import { factoryPresets } from "./factory-bank"

export const AUDIO_MODULE = defineEffect({
  // Set your own reverse-DNS module id (for example com.<you>.maru-agentic-template) before your first publish: it becomes the module's permanent identity. "local." is a provisional default.
  id: "local.maru-agentic-template",
  name: "Maru Agentic Template",
  version: maruProjectConfig.version,
  // Mono unless set: add `channels: 2` for a stereo effect, and give the
  // qualification input tape a second channel.
  ui: {
    entry: "./ui/index.tsx",
    minSize: { width: 320, height: 420 },
    defaultSize: { width: 680, height: 420 },
    maxSize: { width: 1200, height: 900 },
  },
  schema: PROCESSOR_EFFECT_SCHEMA,
  presets: factoryPresets,
  implementation: { kind: "processor", source: "src/dsp/processor.ts" },
})
