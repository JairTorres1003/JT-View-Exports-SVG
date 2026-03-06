# @jt-view-exports-svg/extension-api

ESM API build generated from the `extension` package, used by development tooling.

## Role In The Project

This package does not contain source code.
It exists to expose extension APIs in a consumable ESM format, mainly for `server` during development.

## Dependencies

- Development: depends on `core` and artifacts from [`extension`](../extension/README.md) build
- Consumed by: `server`

## Basic Usage

Generate and build from the workspace root:

```bash
pnpm run build:extension-api
```

Build output is written to `dist/`
