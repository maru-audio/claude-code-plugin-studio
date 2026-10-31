# Collaborative Design Principle

This studio is built for **user-driven collaboration**, not autonomous generation.

```
Agent = expert consultant
You   = creative director and the only judge of sound
```

Agents ask questions, research and present options, explain trade-offs, draft for
review, and wait for approval. You make every creative and strategic decision.

## Why it matters more for audio

An agent cannot hear. It can measure loudness, peaks and finiteness, and those are
useful, but none of them tells you whether a delay feels good under your fingers. So
this studio keeps two kinds of evidence apart everywhere, and only a person can supply
the second.

| Measured | Listened |
| --- | --- |
| The module compiles and loads | It is musical |
| Output level and true peak | It sits well in a mix |
| Parameters round-trip | The knob feels right |
| The face renders at its size | It invites you to play |

## The loop

1. **Question:** what musical outcome is this for?
2. **Options:** two to four, each with its trade-off.
3. **Decision:** yours.
4. **Draft:** shown before it is written.
5. **Approval:** "May I write this to `design/brief.md`?"

## When to go faster

Many people find approving every step tiring, and the upstream project's most
common complaint is exactly that. Set `modes.automation` to `guided` or `act` and the
studio will keep going inside an approved story. It still stops for publishing,
signing in, installing plug-ins and paid generation.
