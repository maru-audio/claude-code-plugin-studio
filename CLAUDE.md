# Maru Plugin Studio: audio plugin studio agent architecture

Audio plugin development managed through 42 coordinated Claude Code subagents,
on one real Maru module. Each agent owns a specific domain.

Read and follow [AGENTS.md](AGENTS.md). It holds the Maru module rules, and they
apply to every agent here.

## Technology

- **Framework:** Maru, from the pinned `maruaudio` dependency. Use `npx maru`.
- **Language:** TypeScript. DSP is restricted TypeScript in `src/dsp/`. The face is React in `src/ui/`.
- **Version control:** Git, trunk-based.

@.claude/docs/directory-structure.md

## Configuration

`studio.config.json` is the single source of truth: stage, `modes.rigor`,
`modes.automation`, targets. Read it with `node tools/config-get.mjs`.

@.claude/docs/coordination-rules.md

## Collaboration protocol

**User-driven collaboration, not autonomous execution.**
Every task follows: **Question → Options → Decision → Draft → Approval.**

- Ask "May I write this to [filepath]?" before using Write or Edit. Exempt when
  `modes.automation` is `act`, or a story named that file.
- Show drafts or summaries before asking for approval.
- No commits without instruction.
- A skipped or dismissed question is not an answer: ask again in plain text.
- Never publish, sign in, install plug-ins or run paid generation without a clear yes in this session.
- **No agent says something sounds good.** Report measurements, and ask the person to listen.
- **Not run is a valid result.** A skipped or unavailable check is never a pass.

## When something fails

Quote the exact message, then use `/studio-gap`. Do not work around a missing Maru
capability with another runtime, a standalone player or a hand-written substitute.
