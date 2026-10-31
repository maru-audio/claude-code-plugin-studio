# Run and observe

The rule is that nothing is done until someone has run it and looked or listened.

| Change | Run | Evidence | Who judges |
| --- | --- | --- | --- |
| Face | `npx maru module screenshot .` | Image in `production/qa/evidence/` | Agent checks layout; person approves |
| DSP | `npx maru module check .` and `npx maru module eval --suite levels` | Output and numbers | Agent reports; **person listens** |
| Presets | `/gain-staging` | Numbers per preset | **Person auditions** |
| Whole module | `npx maru module verify-browser src/index.ts` | Report under `.maru/reports/` | Agent |
| Native format | `npx maru plugin build`, then `npx maru plugin inspect` | Build report | Agent, then a person in a DAW |

A person listens with `npm run dev`, then clicks **Unmute**.
