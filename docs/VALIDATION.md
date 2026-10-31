# Validate the studio

One command tells you what works on your machine, and it uploads nothing:

```bash
npm run studio:validate
```

It writes `production/validation/report.md`.

## What it checks

**Static.** Every `maru` command, flag and guide named anywhere in this studio is checked against your installed CLI. So are agents, skills and templates referenced from other files.

**Capabilities.** It copies the project to a temporary folder and tries each thing the studio relies on, from `tools/capabilities.json`.

| Result | Meaning |
| --- | --- |
| `pass` | The command ran and reported success. It says nothing about sound. |
| `fail` | It failed in a way that looks like a bug. |
| `unavailable` | The tool says it is not available in this release or on this machine. |
| `timeout` | No result in time. |
| `no-command` | Nothing in the CLI's help offers this. |
| `review` | Help now mentions it, so the recorded gap may be closed. |

A row with a task and `(may be fixed)` means a known gap now passes. Good news: tell us.

## Options

```bash
npm run studio:validate -- --static
npm run studio:validate -- --only preview,eval-levels
npm run studio:validate -- --strict
```

## Reporting what you find

Run `/studio-gap`. It records what you tried and offers to open an issue. Compare with [KNOWN-GAPS.md](KNOWN-GAPS.md) first.

It never signs in, publishes, uploads or generates audio. `publish --dry-run` stays local, and commands that write to your account are not in the list.
