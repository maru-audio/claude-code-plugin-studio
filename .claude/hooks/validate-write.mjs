// Blocks a face from touching audio or devices, which is Maru's central ownership rule.
import { deny, readInput, projectDir } from "./_lib.mjs"
const { tool_input: t = {} } = readInput()
const path = String(t.file_path ?? "").replace(projectDir + "/", "")
const text = String(t.content ?? t.new_string ?? "")
if (path.startsWith("src/ui/")) {
  const m = text.match(/\b(AudioContext|OfflineAudioContext|AudioWorkletNode|requestMIDIAccess|getUserMedia)\b/)
  if (m) deny(`Blocked: ${path} uses ${m[1]}. A face never generates audio or opens a device. Declare a port or a parameter, and let the host do it.`)
}
if (path.startsWith("src/dsp/")) {
  const m = text.match(/\b(fetch|setTimeout|setInterval|localStorage|document|window)\s*[.(]/)
  if (m) deny(`Blocked: ${path} uses ${m[1]}. A Processor performs no I/O and calls no host services.`)
}
