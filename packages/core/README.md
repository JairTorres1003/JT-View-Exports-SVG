# @jt-view-exports-svg/core

Shared types, constants, and utilities for the JT View Exports SVG extension ecosystem. This package provides a centralized, organized, and type-safe interface for all core functionality.

## Installation

This is an internal workspace package. Install dependencies in the workspace root:

```bash
npm install
```

## Usage

### Main Export (Types + Constants)

```typescript
import { SVGPostMessage, SVGReceiveMessage } from '@jt-view-exports-svg/core'
import type { SVGComponent, ViewExportSVG } from '@jt-view-exports-svg/core'
```

### Import Constants Only

```typescript
import { SVGPostMessage, SVGReceiveMessage, CacheIconKind } from '@jt-view-exports-svg/core/constants'
```

### Import Types Only

```typescript
import type { SVGFile, SVGIcon, PostMessage, ReceiveMessage } from '@jt-view-exports-svg/core/types'
```

## Structure

```
src/
├── constants/              # Runtime constants (no TypeScript enums)
│   ├── cache.ts           # Cache configuration constants
│   ├── declarations.ts    # SVG declaration types constants
│   ├── messages.ts        # Messaging constants (Post/Receive)
│   └── index.ts           # Barrel export
├── types/                 # Type definitions only (no runtime)
│   ├── utils.d.ts         # Utility and generic types
│   ├── misc.d.ts          # Miscellaneous types
│   ├── index.d.ts         # Main barrel export
│   ├── common/            # Base types used across domains
│   │   ├── file.d.ts      # File and SVG file types
│   │   ├── location.d.ts  # Position and location types
│   │   ├── error.d.ts     # Error types
│   │   └── index.d.ts     # Barrel export
│   ├── svg/               # SVG-specific types
│   │   ├── component.d.ts # SVG component types
│   │   ├── icon.d.ts      # SVG icon types
│   │   ├── export.d.ts    # Export-related types
│   │   ├── parsing.d.ts   # Parsing types
│   │   ├── tags.d.ts      # SVG tag types
│   │   └── index.d.ts     # Barrel export
│   ├── messaging/         # Generic messaging system
│   │   ├── base.d.ts      # Base generic message types
│   │   ├── post.d.ts      # Post message (Extension → Webview)
│   │   ├── receive.d.ts   # Receive message (Webview → Extension)
│   │   └── index.d.ts     # Barrel export
│   ├── editor/            # VSCode editor types
│   │   ├── config.d.ts    # Editor configuration types
│   │   ├── theme.d.ts     # Theme-related types
│   │   ├── language.d.ts  # Language file types
│   │   └── index.d.ts     # Barrel export
│   ├── cache/             # Cache types
│   │   ├── icons.d.ts     # Icon cache types
│   │   └── index.d.ts     # Barrel export
│   └── properties/        # Property types
│       └── propertyValues.d.ts
└── index.ts              # Main entry point
```

## Build Process

### Two-Step Build

1. **Constants** (`tsc`): Compiles TypeScript constants to JavaScript
   - Input: `src/constants/**/*.ts`
   - Output: `dist/constants/**/*.js` + `dist/constants/**/*.d.ts`
   - Includes runtime values needed for bundle

2. **Types** (`cp`): Copies type definitions (no compilation)
   - Input: `src/types/**/*.d.ts`
   - Output: `dist/types/**/*.d.ts`
   - Type-only, no runtime cost

### Why This Approach?

- **Enums → Constants**: Using `const` with `as const` instead of TypeScript enums saves ~2KB bundle size and provides better tree-shaking
- **Type-Only Copies**: `.d.ts` files don't need compilation, reducing build time
- **Separate Entry Points**: Different import paths for different use cases (optimize bundle size per consumer)

## Scripts

```bash
# Build everything
npm run build

# Compile constants only
npm run build:enums

# Copy types only
npm run copy:types

# Watch mode (constants only)
npm run watch

# Type check without emitting
npm run typecheck

# Clean build artifacts
npm run clean
```

## Export Points

| Export | Size | Use Case |
|--------|------|----------|
| `@jt-view-exports-svg/core` | Full | Entire package (types + constants) |
| `@jt-view-exports-svg/core/constants` | ~2KB | Only messaging/configuration constants |
| `@jt-view-exports-svg/core/types` | Types only | All type definitions (no runtime) |

## Key Features

### Generic Messaging System

Replaces duplicate message interfaces with templated types:

```typescript
// Before: Separate interfaces for each message type
interface PostMessageData { type: SVGPostMessage; data: any }
interface ReceiveMessageData { type: SVGReceiveMessage; data: any }

// After: Single generic Message<T, D> type
type PostMessage = Message<SVGPostMessage, PostMessageDataMap>
type ReceiveMessage = Message<SVGReceiveMessage, ReceiveMessageDataMap>
```

Benefits: -15-20% type definition duplication, stronger type safety

### Domain Organization

Types are organized by domain (common, svg, messaging, editor, cache) instead of by file purpose. This makes it easier to:
- Find related types
- Understand relationships
- Create focused interfaces

## Output

```
dist/
├── index.js                    # Main entry point (re-exports everything)
├── index.d.ts
├── constants/
│   ├── cache.js                # Runtime constant (2.8KB)
│   ├── declarations.js         # Runtime constant (2.3KB)
│   ├── messages.js             # Runtime constant (14.3KB)
│   └── index.js
└── types/
    ├── common/
    ├── svg/
    ├── messaging/
    ├── editor/
    ├── cache/
    └── [All .d.ts files only]
```

Total: ~136KB, 34 files
