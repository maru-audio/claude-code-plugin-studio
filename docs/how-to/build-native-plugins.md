# Build native plug-ins

How a module becomes a VST3, Audio Unit or CLAP plug-in. You author one module, and
each format on each platform is a separate build with its own evidence.

**Current state:** the hosted route below is Maru's designed path for everyone. This
studio has not yet run it end to end, and its tracked work is still open. That task,
[DEVX-063](../KNOWN-GAPS.md#devx-063), comes up once it is the last gap left. Until then, treat
each step after the publish as unverified, and tell us what you find with `/studio-gap`.

## Which route?

| Route | You need | Maru does | Result |
| --- | --- | --- | --- |
| **Hosted, through publishing** (recommended) | A Maru account and source uploaded with your release | Builds, validates, signs and delivers | Listeners install through Maru Desktop |
| **Local tools** | The private native toolkit, available to approved developers, plus platform SDKs | Nothing; you run it | Builds on your machine, for your own testing or an independent release |
| **Creator CI** | The toolkit on your own runner | Nothing; you run it | See the [CI tutorial](https://maru.audio/docs/build-and-publish-in-ci) |

You do not need a compiler, an Apple signing identity or a local build to use the hosted route.

Maru's own signature only goes on what Maru built. A binary you built yourself can
be published under your own signature, and never under Maru's.

## The hosted route

### 1. Get the module ready

```bash
npm run typecheck
npx maru module check .
npx maru module screenshot .
```

Run `/release-checklist` for the rest, including a person listening.

### 2. Check it is your plugin

`maru init --from` and `/start` both do this for you. If you skipped them:

```bash
node tools/rename-project.mjs "Plugin Name" com.yourname.plugin-name
```

The id becomes permanent at first publish.

### 3. Dry run

```bash
npx maru publish --dry-run
```

Nothing is uploaded. Read these lines:

- **account:** the account it would publish under.
- **build:** a fast development Release by default, published unqualified. Add `--qualify` for the checked publisher.
- **visibility:** **a first publication is public with free access.** Use `--visibility unlisted` to keep it off listings.
- **upload set** and **source archive:** exactly what leaves your machine. Studio files such as `.claude/` and `design/` are excluded.
- **origin:** the starter or module it credits.

### 4. Publish

```bash
npx maru login
npx maru publish --screenshot --visibility unlisted
```

Keep the source archive on. **`--no-source` means native builds cannot use your release.**
Source stays private unless you pass `--source-visibility public`, which needs a source licence on the listing.

### 5. Request native builds

```bash
npx maru module status .
```

Status links to the **Distribution** tab in Studio. Visibility, price, licence and native builds are managed there. Choose your formats.

Hosted plug-in builds come with paid plans. See [pricing](https://maru.audio/pricing).

### 6. Follow the build

```bash
npx maru build list
npx maru build show <project>
```

`build show` gives each build's status, format and architecture, its error message if it failed, its releases, and the delivery state of each format. **A format can report `unsupported`,** which means it is not available for that project.

### 7. Test what was delivered

Install through Maru Desktop, then test in real hosts with `/in-daw-test`, and record results with `/host-matrix`. A successful build does not prove any particular DAW accepts the plug-in.

### 8. Say only what was tested

| Format and platform | Built | Validated | Tested in |
| --- | --- | --- | --- |
| VST3, macOS arm64 | | | not tested |
| VST3, Windows x64 | | | not tested |
| AU, macOS | | | not tested |
| CLAP | | | not tested |

**Unavailable, unsupported and untested are different,** and an honest release lists all three.

## The local route

If `npx maru doctor` shows the native payload installed:

```bash
npx maru module doctor
npx maru plugin build src/index.ts --format vst3
npx maru plugin inspect <artifact>
npx maru plugin verify-formats
npx maru plugin install
```

Formats are `standalone`, `vst3`, `clap`, `au` and `aax`. Build on the platform you intend to support: a macOS result says nothing about Windows.

**Without the toolkit, these fail with `Run maru setup native`, and that command asks for an approved private package you may not have.** That is a known dead end, [DEVX-062](../KNOWN-GAPS.md#devx-062), and not something you did wrong.

To sell a plug-in with activation, see `/license-setup` before building.

## Later updates

```bash
npx maru module version .
npx maru release compare <old> <new>
npx maru publish --dry-run
```

Parameter order is the host ABI. After a first release, changing it can alter saved sessions.

## Taking something down

A module cannot be unpublished from the command line yet. Archive it from the website.
