---
paths:
  - "src/contract.ts"
---

# Parameter contract

- `src/contract.ts` owns names, ranges, units, tapers and defaults.
- Parameter order is the host ABI. Before first release, change it and migrate every consumer in the same commit. After first release, treat it as a breaking change.
- A response curve belongs in the descriptor `taper`, not in a face or a CC mapping.
- Update `src/factory-bank.ts`, `src/qualification.ts` and the face bindings whenever this file changes. The fast check fails until the face matches.
- A `"log"` taper needs a strictly positive range. `display: { format: "percent" }` needs a range inside 0 to 1 and no `units`.
