# Publish and share

Draft, source revision, built artifact and published release are different states.

1. **Check.** Run `npx maru module check .` and `/release-checklist`.
2. **Dry run.** `npx maru publish --dry-run` needs no sign-in, and shows what would be published.
3. **Publish.** `npx maru login`, then `npx maru publish --screenshot`. **A first publication is public with free access**, unless you pass `--visibility unlisted`. The studio always asks first.
4. **See where it stands.** `npx maru module status .`.
5. **Licence.** `maru.config.json` sets the listing licence, `maru-remix-1.0` by default: others may remix with credit.
6. **Native formats.** See [Build native plug-ins](build-native-plugins.md).
7. **Taking it down.** A module cannot be unpublished from the command line yet; archive it from the website.
