# Upgrading

A repository made with **Use this template** has its own history, with no link back here.

## Maru itself

```bash
npm install maruaudio@latest
npx maru guide list
npm run studio:validate
```

The last line re-checks every command this studio names against the new version.

## The studio files

Starting with `maru init --from` leaves out `.github/`, so copy `.github/workflows/check.yml` across if you want the CI check.

```bash
git remote add studio <url-of-this-template>
git fetch studio
git merge studio/main --allow-unrelated-histories
```

Expect conflicts in `CLAUDE.md`, `studio.config.json` and anything you edited. Keep your content and take the structural changes. Then run `/skill-test`.

Keeping process files in each user's repository makes this harder than it should be. [DEVX-076](docs/KNOWN-GAPS.md#devx-076) tracks whether they belong in the plugin instead.
