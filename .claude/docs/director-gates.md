# Director gates

Who reviews what, by `modes.rigor`. A gate returns PASS, CONCERNS, NOT ASSESSED or FAIL.
NOT ASSESSED means it could not be checked, and it is never a pass.

| Work | minimal | standard | full |
| --- | --- | --- | --- |
| Brief and product design | none | `product-designer` | also `creative-director` |
| Sound Bible, presets and demos | none | `sound-director` | also `creative-director` |
| Face and UX | none | `art-director` | also `creative-director` |
| Architecture and ADRs | none | `lead-dsp-engineer` | also `technical-director` |
| DSP stories | none | `lead-dsp-engineer` | also `technical-director` |
| QA evidence | none | `qa-lead` | also `producer` |
| Release | a person, always | `release-manager` | also `producer`, `security-engineer` |
| Phase change | advisory | `producer` | all three directors |

**What no gate can replace:** a person listening. A gate may review a listening report, and it cannot write one.

To review, delegate with the Task tool to the named agent, give it the file, and show the person its verdict.
