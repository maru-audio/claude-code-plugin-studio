import { deny, git, readInput } from "./_lib.mjs"
const cmd = String(readInput().tool_input?.command ?? "")
if (!/\bgit\b[^|;&]*\bpush\b/.test(cmd)) process.exit(0)
if (/(--force|\s-f\b|\s\+\S)/.test(cmd)) deny("Blocked: force push. Ask the person, and let them run it.")
if (/(maru-agentic-template|maru-plugin-studio)(\.git)?$/i.test(git("remote", "get-url", "origin"))) deny("Blocked: origin still points at the template repository. Set your own remote first.")
