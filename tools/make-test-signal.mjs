#!/usr/bin/env node
// Writes test audio as 48 kHz mono WAV files in production/qa/signals, for
// `npx maru module eval --suite levels --stimulus <file>` and listening tests.
//
//   node tools/make-test-signal.mjs
import { mkdirSync, writeFileSync } from "node:fs"
import { join } from "node:path"
import { root } from "./_config.mjs"

const rate = 48_000
const dir = join(root, "production/qa/signals")
mkdirSync(dir, { recursive: true })

function writeWav(name, samples) {
  const b = Buffer.alloc(44 + samples.length * 2)
  b.write("RIFF", 0); b.writeUInt32LE(36 + samples.length * 2, 4); b.write("WAVEfmt ", 8); b.writeUInt32LE(16, 16)
  b.writeUInt16LE(1, 20); b.writeUInt16LE(1, 22); b.writeUInt32LE(rate, 24); b.writeUInt32LE(rate * 2, 28)
  b.writeUInt16LE(2, 32); b.writeUInt16LE(16, 34); b.write("data", 36); b.writeUInt32LE(samples.length * 2, 40)
  samples.forEach((s, i) => b.writeInt16LE(Math.round(Math.max(-1, Math.min(1, s)) * 32767), 44 + i * 2))
  writeFileSync(join(dir, name), b)
  console.log(`production/qa/signals/${name}`)
}
const silence = (n) => new Array(n).fill(0)
const seconds = (s) => Math.round(s * rate)
const sine = (hz, s, amp = 0.2) => Array.from({ length: seconds(s) }, (_, i) => amp * Math.sin((2 * Math.PI * hz * i) / rate))

// A fixed seed keeps renders comparable from run to run.
let state = 0x12345678
const noise = (n, amp) => Array.from({ length: n }, () => {
  state ^= state << 13; state ^= state >>> 17; state ^= state << 5
  return amp * ((state >>> 0) / 0xffffffff * 2 - 1)
})

writeWav("sine-440.wav", sine(440, 4))
writeWav("sine-100.wav", sine(100, 4))
writeWav("noise-burst.wav", [...noise(seconds(0.1), 0.5), ...silence(seconds(3.9))])
writeWav("impulse.wav", [0.9, ...silence(seconds(4) - 1)])
writeWav("silence.wav", silence(seconds(4)))
writeWav("full-scale-sine.wav", sine(440, 2, 1))
