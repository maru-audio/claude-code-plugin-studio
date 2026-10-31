---
paths:
  - "src/contract.ts"
---

# Parameter contract

- `src/contract.ts` owns names, ranges, units, tapers and defaults.
- Parameter order is the host ABI. Before first release, change it and migrate every consumer in the same commit. After first release, treat it as a breaking change.
- A response curve belongs in the descriptor `taper`, not in a face or a CC mapping.
- Update `src/factory-bank.ts` and `src/qualification.ts` whenever this file changes.
