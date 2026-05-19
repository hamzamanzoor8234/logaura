# loghue

A lightweight, zero-dependency npm package that patches the global `console` with colored log levels and timestamps.

## Features

- Patches `console.log`, `console.warn`, and `console.error` globally
- Native ANSI colors — no Chalk, Kleur, or other dependencies
- Cyan timestamps and colored level tags: `[INFO]`, `[WARN]`, `[ERROR]`
- Optional timestamp and 12-hour / 24-hour time format
- Preserves Node’s built-in formatting for objects and multiple arguments

## Installation

```bash
npm install loghue
```

For local development in this repo:

```bash
npm link
```

## Quick Start

Call `initLoghue()` once at application startup. Every `console` call after that gets a formatted prefix.

```js
const { initLoghue } = require('loghue');

initLoghue();

console.log('Server started on port 3000');
console.warn('Memory usage is high');
console.error('Failed to connect to database');
```

Example output (colors shown in supported terminals):

```text
[2026-05-19 14:30:45] [INFO] Server started on port 3000
[2026-05-19 14:30:45] [WARN] Memory usage is high
[2026-05-19 14:30:45] [ERROR] Failed to connect to database
```

## Configuration Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `includeTimestamp` | `boolean` | `true` | Prefix each line with a cyan timestamp |
| `timeFormat` | `'24h'` \| `'12h'` | `'24h'` | Clock format for the timestamp |

### Turn off timestamps

```js
const { initLoghue } = require('loghue');

initLoghue({ includeTimestamp: false });

console.log('No timestamp, still colored [INFO] tag');
```

### Use 12-hour time

```js
initLoghue({ timeFormat: '12h' });

console.log('Timestamp uses AM/PM');
```

### Combine options

```js
initLoghue({
  includeTimestamp: true,
  timeFormat: '12h',
});
```

## Publishing (CI/CD)

GitHub Actions publishes to npm using a granular access token stored as a repository secret.

### One-time setup

1. Create a **Granular Access Token** at [npm tokens](https://www.npmjs.com/settings/hamzamanzoor/tokens):
   - **Packages:** Read and write (scope to `loghue`)
   - Enable **Bypass 2FA** for automation
2. Add the token as a **Repository secret** (not Dependabot or Codespaces):
   - Open [Actions secrets for this repo](https://github.com/hamzamanzoor8234/loghue/settings/secrets/actions)
   - **New repository secret**
   - Name: `NPM_TOKEN` (exact name; or `NPM_ACCESS_TOKEN`)
   - Value: paste the full `npm_...` token once (you cannot view it again)

3. Push the workflow file to `main`, then re-run **Publish to npm**.

**If the workflow fails with “No npm token found”:** the secret is missing, misnamed, or was added under the wrong tab. Create `NPM_TOKEN` under **Actions** secrets and re-run the job (secrets are not applied to runs that started before the secret existed).

### Publish a new version

1. Bump `"version"` in `package.json` (must be higher than the version on npm).
2. Commit and push to `main`.
3. Either:
   - **Tag push:** `git tag v1.0.3` then `git push origin v1.0.3`, or
   - **Manual:** GitHub → **Actions** → **Publish to npm** → **Run workflow**

The workflow runs `npm test` then `npm publish`.

## Repository

[github.com/hamzamanzoor8234/loghue](https://github.com/hamzamanzoor8234/loghue)

## License

MIT
