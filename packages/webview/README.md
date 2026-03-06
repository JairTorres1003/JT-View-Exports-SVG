# @jt-view-exports-svg/webview

Web UI package for the extension panel, built with Vite + React.

## Role In The Project

This package renders the interactive panel used by `extension`.

In development mode, it can run against `server` to speed up iteration without restarting the extension host.

## Dependencies

- Production: `@jt-view-exports-svg/core`
- Development: works with `@jt-view-exports-svg/server` during the fast web development workflow

## Basic Usage

Run only webview:

```bash
pnpm -F @jt-view-exports-svg/webview run dev
```

Run fast web development flow (`server` + `webview`):

```bash
pnpm run dev:webview
```

Build:

```bash
pnpm run build:webview
```

## Build Output

Production assets are emitted to `packages/extension/dist/` and consumed by the extension package.
