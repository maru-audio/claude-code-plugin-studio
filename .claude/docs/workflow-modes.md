# Workflow modes

## modes.rigor

| Setting | minimal (default) | standard | full |
| --- | --- | --- | --- |
| Required design sections | none | Promise, Controls, Signal flow, Presets, Acceptance | all eight |
| Documents | terse | balanced | thorough |
| QA evidence | smoke, plus the look-and-listen rule | standard | full, on every story type |
| Director review | solo | lean | full |
| Gates between phases | advisory | required | required |

The look-and-listen rule holds at every level: a change to the sound is rendered,
measured, and a person is asked to listen.

## modes.automation

| Setting | Behaviour |
| --- | --- |
| `ask` (default) | Ask before each write |
| `guided` | Ask at decisions; write inside an approved story without asking |
| `act` | Keep going, and stop only for the consent list |

The consent list never relaxes: publishing, signing in, installing plug-ins, paid
generation and anything public.

## Overrides

Use `studio.local.json` for your own preferences (`/settings --local`).
