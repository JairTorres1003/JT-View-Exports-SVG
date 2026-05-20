# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Package Manager

Use **pnpm** exclusively (`pnpm >= 10.0.0`, `node >= 22.0.0`). Never use npm or yarn.

## Common Commands

```bash
# Full setup from scratch
pnpm setup

# Development
pnpm dev:webview        # Webview + server (concurrently)
pnpm dev:extension      # Extension (watch mode)

# Build individual packages
pnpm build:core         # @jt-view-exports-svg/core
pnpm build:webview      # @jt-view-exports-svg/webview
pnpm build:extension    # jt-view-exports-svg (extension)

# Full release build
pnpm release            # clean → build:core → test → build:webview → package

# Lint / Format (Biome)
pnpm lint               # biome check --write .
pnpm format             # biome format --write .

# Typecheck all packages
pnpm typecheck

# Tests
pnpm test:extension     # VS Code extension tests
pnpm test:web-extension # Web extension tests
# Webview tests (from packages/webview):
pnpm -F @jt-view-exports-svg/webview run test
pnpm -F @jt-view-exports-svg/webview run test:coverage
```

## Monorepo Structure

```
packages/
  core/           # @jt-view-exports-svg/core — shared types, utils, constants (ESM + CJS)
  extension/      # jt-view-exports-svg — VS Code extension (Node + Web targets)
  server/         # @jt-view-exports-svg/server — Express dev server (bootstraps VS Code API for webview dev)
  webview/        # @jt-view-exports-svg/webview — React + MUI UI rendered in extension panel
  extension-api/  # @jt-view-exports-svg/extension-api — generated API types for inter-package contracts
  docs/           # Documentation site
```

## Architecture

**Extension ↔ Webview communication** flows through a typed message bus:

- `packages/extension/src/messaging/MessageRouter.ts` — routes inbound webview messages to typed `BaseHandler` subclasses (one file per message type under `handlers/`)
- `packages/extension/src/messaging/WebviewMessenger.ts` — sends messages from extension → webview
- The `@jt-view-exports-svg/core` package owns all shared message types (`ReceiveMessageMap`, `SVGReceiveMessage`) used by both sides

**Extension internals (`packages/extension/src/`)**:

- `extension.ts` — activation entry point; registers commands and the `InMemoryFileSystemProvider`
- `commands/` — VS Code command implementations
- `services/cache/` — singleton `CacheManager` (initialized with `ExtensionContext`)
- `services/vscode/` — VS Code API wrappers (theme, etc.)
- `controllers/` — business logic bridging commands ↔ services
- `views/WebviewContent.ts` — constructs and manages the webview panel HTML

**Webview (`packages/webview/src/`)**:

- React + Redux Toolkit (`store/`) with slices under `store/features/`
- MUI v5 + Emotion for styling
- Embeds Monaco Editor via `@codingame/monaco-vscode-*` overrides for the playground view
- Three route-level views: `home`, `dashboard`, `upload`
- `services/` handles communication with the extension host

**Dev server (`packages/server/`)**:

- Express app that bootstraps `@codingame/monaco-vscode-api` outside VS Code so the webview can be developed standalone in a browser

## Linter / Formatter

Biome (not ESLint/Prettier). Config in `biome.json` and `biome.react.json`. Line width 100, 2-space indent, LF endings. Run `pnpm lint` before committing.

## Build Order

`core` must be built before `extension` or `webview`. The `pnpm setup` and `pnpm release` scripts enforce this automatically.

## Rule Editing

- When you finish editing, you should not commit the changes.
