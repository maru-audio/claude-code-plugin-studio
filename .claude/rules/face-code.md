---
paths:
  - "src/ui/**"
---

# Face code

- Use the UI kit before drawing a control. Read props with `npx maru guide props <Component>`.
- Read values from the face contract. Never hold a parameter in local state.
- Never create an AudioContext, open a device or request MIDI access. A hook blocks this.
- One label at rest; reveal the value on hover or edit.
- Square corners and neutral borders. Prefer spacing to nested boxes.
- Every visible control changes a parameter, and every readout shows real values.
- After a change, run `npx maru module screenshot .` and look at it.
