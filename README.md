<p align="center">
  <img src="logo.png" alt="logaura logo" width="220" />
</p>

<h1 align="center">logaura</h1>

<p align="center">
  <strong>A lightweight, zero-dependency global patcher for colorized, timestamped terminal console logging.</strong>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/logaura"><img src="https://img.shields.io/npm/v/logaura.svg?style=flat-square" alt="npm version"></a>
  <a href="https://www.npmjs.com/package/logaura"><img src="https://img.shields.io/npm/dm/logaura.svg?style=flat-square" alt="downloads"></a>
  <a href="https://bundlephobia.com/package/logaura"><img src="https://img.shields.io/bundlephobia/min/logaura.svg?style=flat-square" alt="bundle size"></a>
  <a href="https://github.com/hamzamanzoor8234/logaura/blob/main/LICENSE"><img src="https://img.shields.io/npm/l/logaura.svg?style=flat-square" alt="license"></a>
  <img src="https://img.shields.io/badge/TypeScript-ready-blue?style=flat-square" alt="TypeScript Support">
</p>

---

**logaura** is a minimal, plug-and-play Node.js package that overrides the global `console` object to format output with clean ANSI terminal colors and real-time cyan timestamps. It allows you to transform standard, plain terminal stdout/stderr logs into professional-grade, readable logs across your entire application—without rewriting a single `console.log()` statement.

## 🚀 Key Features

*   **Global Monkey-Patching**: Call `initLogaura()` once at startup, and every native `console.log`, `console.warn`, and `console.error` statement in your application (and your dependencies) is automatically styled.
*   **Zero Dependencies**: Written purely in native Node.js. No dependency bloat from Chalk, Kleur, or debug.
*   **Native Formatting Preserved**: Fully supports Node's utility formatting (`%s`, `%d`, `%j`), multiple arguments, and nested object inspection.
*   **Ultra Lightweight**: Under **1KB** bundle size. It won't bloat your production server runtime.
*   **Flexible Config**: Toggle timestamps on/off, or customize the clock to 12-hour (AM/PM) or 24-hour formats.
*   **Out-of-the-Box TypeScript Support**: Comes bundled with official type definitions (`index.d.ts`) for flawless autocomplete.

---

## 📊 Comparison: logaura vs. Others

| Feature | `logaura` | `winston` | `pino` | `chalk` |
| :--- | :---: | :---: | :---: | :---: |
| **Dependencies** | **0** | ~10+ | ~8+ | 0 |
| **Painless Global Patching** | **Yes** | No | No | No |
| **Auto-Timestamps** | **Yes** | Requires setup | Requires setup | Manual wrapper |
| **Bundle Size** | **< 1 KB** | ~300 KB | ~100 KB | ~15 KB |
| **Zero-Config Colored Levels** | **Yes** | Requires setup | Requires setup | Manual styling |

*`logaura` is designed for projects that need immediate, beautiful console output without setting up complex streams, transports, or custom logging classes.*

---

## 📦 Installation

Install via npm:

```bash
npm install logaura
```

Or via yarn:

```bash
yarn add logaura
```

---

## ⚡ Quick Start

Simply import and call `initLogaura()` at the very top of your entry file (e.g., `index.js`, `server.js`, or `app.js`).

```js
const { initLogaura } = require('logaura');

// Initialize with default settings
initLogaura();

// All standard console calls are now beautifully formatted!
console.log('Server started on port 3000');
console.warn('Database connection latency is high (250ms)');
console.error('Failed to write to file system', new Error('Permission Denied'));
```

### 📺 Console Output Preview
```text
[2026-06-18 22:15:30] [INFO] Server started on port 3000
[2026-06-18 22:15:31] [WARN] Database connection latency is high (250ms)
[2026-06-18 22:15:32] [ERROR] Failed to write to file system Error: Permission Denied...
```

---

## ⚙️ Configuration Options

You can pass a configuration object to `initLogaura(options)` to customize behavior.

| Option | Type | Default | Description |
| :--- | :--- | :---: | :--- |
| `includeTimestamp` | `boolean` | `true` | Prefix logs with a formatted cyan date/time stamp |
| `timeFormat` | `'24h'` \| `'12h'` | `'24h'` | Set the clock style of the timestamp |

### 1. Disable Timestamps (Colors Only)
If you already use a cloud logger that handles timestamps for you (like AWS CloudWatch or GCP Stackdriver), you can disable timestamps and only keep the colorized levels:

```js
initLogaura({ includeTimestamp: false });

console.log('Clean log with colored level only.');
// Output: [INFO] Clean log with colored level only.
```

### 2. Enable 12-Hour AM/PM Time Format
Perfect for human-friendly local console outputs:

```js
initLogaura({ timeFormat: '12h' });

console.log('Local user registered.');
// Output: [2026-06-18 10:19:05 PM] [INFO] Local user registered.
```

---

## 💡 Why override the native `console`?

In standard Node.js applications, third-party middleware, database clients, and helper libraries use native `console` logs to write to stdout. Instead of introducing a custom `logger` class and having to rewrite every single console call in your codebase and search through your dependencies' options, `logaura` intercept-patches the standard stream. 

This ensures that **every output** from your terminal becomes structured and easy to read, with zero refactoring.

---

## 🛠️ Local Development & Testing

If you are cloning this repository and want to run the tests locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/hamzamanzoor8234/logaura.git
   cd logaura
   ```
2. Link the package locally:
   ```bash
   npm link
   ```
3. Run the interactive demo / test script:
   ```bash
   npm test
   ```

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
