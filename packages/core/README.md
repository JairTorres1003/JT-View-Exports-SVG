# @jt-view-exports-svg/core

Provides a centralized, type-safe set of types and constants for the **View Exports SVG** ecosystem. This package ensures consistent contracts across the monorepo.

## Role In The Project

This package acts as the common contract between `extension`, `webview`, and `server`. It is also inherited by `extension-api`.

## Dependencies

- **Production:** none
- **Consumed by:** `extension`, `webview`, `server`, `extension-api`

## Installation

Install dependencies from the workspace root:

```bash
pnpm install
```

Build only this package:

```bash
pnpm -F @jt-view-exports-svg/core run build
```

## Minimal Usage

```ts
import { SVGPostMessage } from '@jt-view-exports-svg/core/constants'
import type { SVGComponent } from '@jt-view-exports-svg/core/types'
```

---

MIT © Jair Torres
