# @jt-view-exports-svg/core

Shared types, constants, and utilities for the **View Exports SVG** extension ecosystem. This package provides a centralized, type-safe foundation for all core functionality across the extension, webview, and other packages.

---

## 📦 Installation

This is an internal workspace package. Install dependencies from the workspace root:

```bash
pnpm install
```

---

## 🚀 Usage

### Import Everything (Types + Constants)

```typescript
import { SVGPostMessage, SVGReceiveMessage, CacheIconKind } from '@jt-view-exports-svg/core'
import type { SVGComponent, ViewExportSVG, PostMessage } from '@jt-view-exports-svg/core'
```

### Import Constants Only

```typescript
import { SVGPostMessage, SVGReceiveMessage, CacheIconKind, SVGDeclaration } from '@jt-view-exports-svg/core/constants'
```

### Import Types Only

```typescript
import type {
  SVGFile,
  SVGIcon,
  PostMessage,
  ReceiveMessage,
  EditorConfig,
  ThemeColors
} from '@jt-view-exports-svg/core/types'
```

---

## 📁 Project Structure

```
src/
├── constants/             # Runtime constants (replaces TypeScript enums)
│   ├── cache.ts           # Cache configuration (favorite, recent)
│   ├── declarations.ts    # SVG declaration types (function, variable)
│   ├── messages.ts        # Messaging constants (Post/Receive)
│   └── index.ts           # Barrel export
│
├── types/                 # Type definitions only (zero runtime cost)
│   ├── common/            # Base types used across domains
│   │   ├── file.d.ts      # File and SVG file types
│   │   ├── location.d.ts  # Position and location types
│   │   ├── error.d.ts     # Error handling types
│   │   └── index.d.ts
│   │
│   ├── svg/               # SVG-specific types
│   │   ├── component.d.ts # SVG component definitions
│   │   ├── icon.d.ts      # SVG icon types
│   │   ├── export.d.ts    # Export-related types
│   │   ├── parsing.d.ts   # Parsing types
│   │   ├── tags.d.ts      # SVG tag types
│   │   └── index.d.ts
│   │
│   ├── messaging/         # Generic messaging system
│   │   ├── base.d.ts      # Base generic message types
│   │   ├── post.d.ts      # Post messages (Extension → Webview)
│   │   ├── receive.d.ts   # Receive messages (Webview → Extension)
│   │   └── index.d.ts
│   │
│   ├── editor/            # VSCode editor types
│   │   ├── config.d.ts    # Editor configuration
│   │   ├── theme.d.ts     # Theme definitions
│   │   ├── language.d.ts  # Language file types
│   │   └── index.d.ts
│   │
│   ├── cache/             # Cache types
│   │   ├── icons.d.ts     # Icon cache types
│   │   └── index.d.ts
│   │
│   ├── properties/        # Property types
│   │   └── propertyValues.d.ts
│   │
│   ├── utils.d.ts         # Utility and generic types
│   └── index.d.ts         # Main barrel export
│
└── index.ts               # Main entry point (re-exports all)
```

---

## 🔧 Build System

### Compilation Strategy

The package uses a **dual-mode build** to optimize both bundle size and type safety:

#### 1. **Constants** (TypeScript → JavaScript)
- **Input:** `src/constants/**/*.ts`
- **Output:**
  - `dist/cjs/constants/**/*.js` (CommonJS)
  - `dist/esm/constants/**/*.js` (ES Modules)
  - `dist/types/constants/**/*.d.ts` (Type definitions)
- **Why:** Runtime values needed for bundle; using `const` objects with `as const` instead of enums saves ~2KB and enables better tree-shaking

#### 2. **Types** (Copy Only)
- **Input:** `src/types/**/*.d.ts`
- **Output:** `dist/types/types/**/*.d.ts`
- **Why:** Type definitions don't compile to JavaScript, reducing build time and ensuring zero runtime cost

### Build Scripts

```bash
# Full build (clean + compile + copy)
pnpm run build

# Individual build steps
pnpm run build:esm        # Compile to ES Modules
pnpm run build:cjs        # Compile to CommonJS
pnpm run build:types      # Generate type definitions
pnpm run copy:types       # Copy .d.ts files

# Utilities
pnpm run clean            # Remove dist/ folder
```

---

## 📤 Export Points

| Export Path | Size | Contents | Use Case |
|-------------|------|----------|----------|
| `@jt-view-exports-svg/core` | ~3KB | All types + constants | Main import for extension/webview |
| `@jt-view-exports-svg/core/constants` | ~2KB | Runtime constants only | Lightweight imports for messaging |
| `@jt-view-exports-svg/core/types` | 0KB | Type definitions only | Type-only imports (no bundle cost) |

### Examples

```typescript
// Full import (types + constants)
import { SVGPostMessage, CacheIconKind } from '@jt-view-exports-svg/core'
import type { SVGComponent } from '@jt-view-exports-svg/core'

// Constants only (smaller bundle)
import { SVGPostMessage } from '@jt-view-exports-svg/core/constants'

// Types only (zero runtime cost)
import type { PostMessage, ReceiveMessage } from '@jt-view-exports-svg/core/types'
```

---

## 🎯 Key Features

### ✅ Type-Safe Messaging System

Generic message types replace duplicate interfaces:

```typescript
// Generic Message<T, D> type system
type PostMessage = Message<SVGPostMessage, PostMessageDataMap>
type ReceiveMessage = Message<SVGReceiveMessage, ReceiveMessageDataMap>

// Usage with full type safety
const message: PostMessage = {
  type: SVGPostMessage.SendSVGComponents,
  data: { components: [...] } // Strongly typed based on message type
}
```

**Benefits:**
- ✅ Eliminates 15-20% type duplication
- ✅ Stronger compile-time type checking
- ✅ Auto-complete for message data based on type

### ✅ Domain-Organized Types

Types are grouped by domain (common, svg, messaging, editor, cache) for:
- 🔍 Easier discovery
- 🧩 Clear relationships
- 📦 Focused interfaces
- 🚀 Better maintainability

### ✅ Zero Runtime Type Cost

All type definitions are in `.d.ts` files, ensuring:
- No JavaScript output for types
- Zero bundle size impact
- Fast build times
- Full TypeScript IntelliSense

### ✅ Enum Replacement Strategy

Using `const` objects instead of TypeScript enums:

```typescript
// ❌ Old: TypeScript enum (adds ~500 bytes runtime code)
enum MessageType {
  SendData = 'send/data'
}

// ✅ New: Const object with as const (zero runtime overhead)
export const MessageType = {
  SendData: 'send/data'
} as const
```

**Savings:** ~2KB bundle reduction + better tree-shaking

---

## 📦 Build Output

```
dist/
├── cjs/                       # CommonJS builds
│   ├── index.js
│   └── constants/
│       ├── cache.js
│       ├── declarations.js
│       ├── messages.js
│       └── index.js
│
├── esm/                       # ES Module builds
│   ├── index.js
│   └── constants/
│       ├── cache.js
│       ├── declarations.js
│       ├── messages.js
│       └── index.js
│
└── types/                     # Type definitions
    ├── index.d.ts
    ├── constants/
    │   ├── cache.d.ts
    │   ├── declarations.d.ts
    │   ├── messages.d.ts
    │   └── index.d.ts
    └── types/
        ├── common/
        ├── svg/
        ├── messaging/
        ├── editor/
        ├── cache/
        ├── properties/
        └── utils.d.ts
```

---

## 🔗 Related Packages

- **[jt-view-exports-svg](../extension)** - VS Code extension (main package)
- **[@jt-view-exports-svg/webview](../webview)** - Webview UI (React + Vite)
- **[@jt-view-exports-svg/docs](../docs)** - Documentation site (Docusaurus)

---

## 📄 License

MIT © Jair Torres
