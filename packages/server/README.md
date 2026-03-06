# @jt-view-exports-svg/server

Development server used to expose extension capabilities in a web environment.

## Role In The Project

This package exists **only for development**.

It provides a lightweight Node + Express server that exposes parts of the extension API so the `webview` can run in a browser environment while still interacting with extension-like functionality.

This significantly improves the development workflow by allowing fast iteration on the webview without restarting the VS Code extension host.

## Dependencies

- Development: `@jt-view-exports-svg/core`, `@jt-view-exports-svg/extension-api`
- Works together with: `@jt-view-exports-svg/webview`

## Basic Usage

Run the development server only:

```bash
pnpm -F @jt-view-exports-svg/server run dev
```

Run the full webview development environment (`server` + `webview`):

```bash
pnpm run dev:webview
```

This command starts both packages in parallel using `concurrently`.
