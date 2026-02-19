# 📋 Project Refactoring Proposal

## Current Project Analysis

### Identified Problems

#### 1. **Contaminated Root**

The root has configuration files and dependencies from MULTIPLE projects:

- **VS Code Extension** (`src/`, in CommonJS)
- **Web Client** (`client/`, React + Vite)
- **Documentation** (`docs/`, Docusaurus)
- **Backend Server** (`server/`, Deno)
- Root `package.json` manages everything (extension, CJS/ESM compilation, shared scripts)

#### 2. **Scattered Dependency Management**

- Root `package.json`: 78+ devDependencies (mixed everything)
- `client/package.json`: 45+ dependencies
- `docs/package.json`: 35+ dependencies
- No clear separation of concerns
- Redundant and conflicting dependencies

#### 3. **Non-Scalable Typing System** ⚠️

- Client imports types from `../src/types/*` via alias in `tsconfig.app.json`
- Types are in root `src/` (extension domain)
- **No shared core or types package**
- Server uses local `types.d.ts` with no connection to common types
- Documentation also imports from relative paths (`@site/src/types/types`)
- Strong coupling between packages

#### 4. **Disguised Monolithic Architecture**

- Everything compiling to the same `out/` directory
- Complex compilation scripts with multiple `tsconfig.*.json`
- No clear boundaries between packages
- Hard to understand structure for new developers

---

## 🏗️ Improved Structure Proposal

### Proposed Directory Tree

```
jt-view-exports-svg/
├── .github/               # GitHub workflows, etc
├── .vscode/              # VS Code settings
├── .husky/               # Git hooks
├── packages/
│   ├── core/             # ⭐ NEW: Shared core (types, utilities, enums)
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   ├── src/
│   │   │   ├── types/    # Unique and shared types
│   │   │   ├── enums/    # Shared enumerations
│   │   │   ├── utils/    # Common utilities
│   │   │   └── index.ts
│   │   ├── dist/         # Dist for types and JS
│   │   └── README.md
│   │
│   ├── extension/        # ⭐ RENAMED from src/ → packages/extension/
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   ├── src/
│   │   │   ├── extension.ts
│   │   │   ├── commands/
│   │   │   ├── controllers/
│   │   │   ├── providers/
│   │   │   ├── utilities/
│   │   │   ├── views/
│   │   │   └── constants/
│   │   ├── out/          # Compiled output
│   │   ├── test/         # Extension tests
│   │   ├── .vscodeignore
│   │   └── README.md
│   │
│   ├── webview/          # ⭐ RENAMED from client/ → packages/webview/
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   ├── vite.config.ts
│   │   ├── src/
│   │   ├── public/
│   │   ├── dist/
│   │   ├── __tests__/
│   │   └── README.md
│   │
│   ├── docs/             # ⭐ MOVED from docs/ → packages/docs/
│   │   ├── package.json
│   │   ├── docusaurus.config.ts
│   │   ├── src/
│   │   ├── docs/
│   │   ├── static/
│   │   ├── build/
│   │   └── README.md
│   │
│   └── server/           # ⭐ MOVED from server/ → packages/server/
│       ├── deno.json
│       ├── src/
│       ├── README.md
│       └── types.d.ts
│
├── scripts/              # ⭐ NEW: Centralized build/deploy scripts
│   ├── build.js
│   ├── prepublish.js
│   └── prepare-readme.js (moved)
│
├── .github/
├── .vscode/
├── .husky/
├── biome.json            # Shared config
├── package.json          # ⭐ SIMPLIFIED: Root + workspaces only
├── pnpm-workspace.yaml   # ⭐ NEW: If using pnpm (recommended)
├── tsconfig.base.json    # ⭐ NEW: Base for all tsconfig
├── tsconfig.json         # Deprecated or renamed
├── CHANGELOG.md
├── CODE_OF_CONDUCT.md
├── CONTRIBUTING.md
├── LICENSE
├── README.md
├── SECURITY.md
└── REFACTORING_PROPOSAL.md
```

---

## 📦 Proposed Key Changes

### 1. Create `packages/core` (New Package - The Missing Core)

This will be the centralizing package for types, enums and shared utilities.

#### `packages/core/package.json`

```json
{
  "name": "@jt-view-exports-svg/core",
  "version": "1.0.0",
  "type": "module",
  "description": "Core types, enums and utilities for JT View Exports SVG",
  "main": "./dist/index.js",
  "types": "./dist/index.d.ts",
  "exports": {
    ".": {
      "import": "./dist/index.js",
      "types": "./dist/index.d.ts"
    },
    "./types": {
      "import": "./dist/types/index.js",
      "types": "./dist/types/index.d.ts"
    },
    "./enums": {
      "import": "./dist/enums/index.js",
      "types": "./dist/enums/index.d.ts"
    }
  },
  "files": ["dist"],
  "scripts": {
    "build": "tsc",
    "watch": "tsc --watch",
    "typecheck": "tsc --noEmit"
  },
  "devDependencies": {
    "typescript": "^5.x",
    "@types/node": "^22.x"
  }
}
```

#### `packages/core/src/` Content

```
core/src/
├── types/
│   ├── cache.ts          # From: src/types/cache.d.ts
│   ├── svg.ts            # From: src/types/svg/
│   ├── views.ts          # From: src/types/views/
│   ├── properties.ts     # From: src/types/properties/
│   ├── vscode.ts         # From: src/types/vscode.d.ts
│   ├── ViewExportsSVG.ts # From: src/types/ViewExportsSVG.d.ts
│   └── index.ts          # Exports everything
├── enums/
│   └── index.ts          # From: src/enum/
├── utils/
│   └── index.ts
└── index.ts              # Exports core, types, enums
```

#### `packages/core/tsconfig.json`

```jsonc
{
  "extends": "../../tsconfig.base.json",
  "compilerOptions": {
    "declaration": true,
    "declarationMap": true,
    "outDir": "./dist",
    "rootDir": "./src"
  },
  "include": ["src/**/*"],
  "exclude": ["dist", "node_modules"]
}
```

---

### 2. Reorganize `src/` → `packages/extension/`

The extension should depend on core, not have local types.

#### `packages/extension/package.json` - Now Simple and Clear

```json
{
  "name": "@jt-view-exports-svg/extension",
  "displayName": "%extension.title%",
  "description": "%extension.description%",
  "version": "4.0.2",
  "type": "commonjs",
  "main": "./out/cjs/extension.js",
  "browser": "./out/cjs/web/extension.js",
  "l10n": "../l10n",
  "dependencies": {
    "@jt-view-exports-svg/core": "workspace:*",
    "vscode": "^1.109.0"
  },
  "devDependencies": {
    "@types/vscode": "^1.109.0",
    "@types/node": "^22.x",
    "typescript": "^5.x",
    "@vscode/test-cli": "^0.0.11",
    "@vscode/test-electron": "^2.5.2",
    "@vscode/test-web": "^0.0.79"
  },
  "scripts": {
    "build": "tsc -b tsconfig.json",
    "watch": "tsc --watch -p tsconfig.json",
    "test": "node ./out/cjs/test/runTest.js --verbose"
  }
}
```

#### `packages/extension/tsconfig.json`

```jsonc
{
  "extends": "../../tsconfig.base.json",
  "compilerOptions": {
    "target": "ES2022",
    "module": "commonjs",
    "outDir": "./out/cjs",
    "rootDir": "./src",
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"],
      "@core/*": ["../core/src/*"]
    }
  },
  "include": ["src/**/*"],
  "exclude": ["out", "node_modules", "__tests__"]
}
```

---

### 3. Rename `client/` → `packages/webview/`

The webview (client) is only the visual interface, should use types from core.

#### `packages/webview/package.json`

```json
{
  "name": "@jt-view-exports-svg/webview",
  "displayName": "View Exports SVG (Webview)",
  "version": "4.1.0",
  "type": "module",
  "description": "Webview UI for View Exports SVG Extension",
  "dependencies": {
    "@jt-view-exports-svg/core": "workspace:*",
    "react": "^19.0.0",
    "react-dom": "^19.0.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.x",
    "vite": "^6.x",
    "typescript": "^5.x",
    "vitest": "^2.x"
  },
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "preview": "vite preview",
    "test": "vitest",
    "test:ui": "vitest --ui",
    "test:coverage": "vitest run --coverage"
  }
}
```

#### `packages/webview/tsconfig.json`

```jsonc
{
  "extends": "../../tsconfig.base.json",
  "compilerOptions": {
    "target": "ES2022",
    "module": "ESNext",
    "outDir": "./dist",
    "baseUrl": ".",
    "jsx": "react-jsx",
    "noEmit": true,
    "paths": {
      "@/*": ["src/*"],
      "@core/*": ["../core/src/*"]
    }
  },
  "include": ["src", "../core/src"],
  "exclude": ["dist", "node_modules"]
}
```

---

### 4. Move `docs/` → `packages/docs/`

Documentation only needs access to types for examples.

#### `packages/docs/package.json`

```json
{
  "name": "@jt-view-exports-svg/docs",
  "displayName": "View Exports SVG (Docs)",
  "version": "1.0.0",
  "description": "Documentation for View Exports SVG Extension",
  "dependencies": {
    "@jt-view-exports-svg/core": "workspace:*",
    "@docusaurus/core": "3.9.2",
    "@docusaurus/preset-classic": "3.9.2",
    "react": "^18.0.0",
    "react-dom": "^18.0.0"
  },
  "scripts": {
    "docusaurus": "docusaurus",
    "start": "docusaurus start",
    "build": "docusaurus build",
    "serve": "docusaurus serve"
  }
}
```

---

### 5. Move `server/` → `packages/server/`

The Deno server remains relatively the same but with clear references to core.

#### `packages/server/deno.json`

```json
{
  "version": "1.0.0",
  "imports": {
    "@/": "./src/",
    "@core/": "../core/src/",
    "@types/babel__traverse": "npm:@types/babel__traverse@^7.20.6"
  },
  "tasks": {
    "dev": "deno run --watch -A --unstable-sloppy-imports src/server.ts",
    "start": "deno run -A --unstable-sloppy-imports src/server.ts"
  }
}
```

---

### 6. Simplify Root `package.json`

The root now only manages workspaces and common scripts.

#### New Root `package.json`

```json
{
  "name": "jt-view-exports-svg",
  "displayName": "JT View Exports SVG",
  "description": "VS Code Extension to view and manage SVG icon exports",
  "version": "4.0.2",
  "private": true,
  "license": "MIT",
  "author": "Jair Torres",
  "publisher": "JairTorres1003",
  "repository": {
    "type": "git",
    "url": "https://github.com/JairTorres1003/JT-View-Exports-SVG.git"
  },
  "bugs": {
    "url": "https://github.com/JairTorres1003/JT-View-Exports-SVG/issues"
  },
  "homepage": "https://github.com/JairTorres1003/JT-View-Exports-SVG#readme",
  "workspaces": [
    "packages/core",
    "packages/extension",
    "packages/webview",
    "packages/docs",
    "packages/server"
  ],
  "scripts": {
    "build": "npm run build --workspaces --if-present",
    "build:ext": "npm run build -w packages/extension",
    "build:webview": "npm run build -w packages/webview",
    "build:docs": "npm run build -w packages/docs",
    "dev": "npm run dev --workspaces --if-present",
    "dev:ext": "npm run watch -w packages/extension",
    "dev:webview": "npm run dev -w packages/webview",
    "dev:docs": "npm run start -w packages/docs",
    "test": "npm run test --workspaces --if-present",
    "test:ext": "npm run test -w packages/extension",
    "typecheck": "npm run typecheck --workspaces --if-present",
    "biome:check": "biome check --write .",
    "biome:format": "biome format --write .",
    "package": "npm run package -w packages/extension",
    "prepare": "husky"
  },
  "devDependencies": {
    "@biomejs/biome": "^2.4.2",
    "concurrently": "^9.2.1",
    "husky": "^9.1.6",
    "rimraf": "^5.1.4"
  }
}
```

---

### 7. Create `tsconfig.base.json`

Base configuration inherited by all packages.

#### `tsconfig.base.json`

```jsonc
{
  "compilerOptions": {
    // Version and libraries
    "target": "ES2022",
    "lib": ["ES2022", "DOM", "DOM.Iterable"],
    "module": "ESNext",

    // Module resolution
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "allowImportingTsExtensions": true,
    "verbatimModuleSyntax": true,

    // Compilation
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,

    // Strictness
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedSideEffectImports": true,
    "exactOptionalPropertyTypes": false,

    // Paths (base, each tsconfig.json inherits and extends)
    "baseUrl": ".",
    "paths": {}
  }
}
```

---

### 8. Create `pnpm-workspace.yaml` (Alternative to npm workspaces)

If you want to use **pnpm** (more efficient for monorepos):

```yaml
packages:
  - 'packages/*'

settings:
  autoInstallPeers: true
  shamefully-hoist: false
```

**pnpm Advantages**:
- ✅ Faster installation
- ✅ Better management of duplicate dependencies
- ✅ Sibling packages resolved automatically
- ✅ Less disk space

---

## 📊 Before vs After Comparison

| Aspect | **Before** | **After** |
|--------|---------|----------|
| **Config files in root** | 50+ | 10-15 ✅ |
| **devDependencies in root** | 78+ (mixed) | 5-8 (tooling only) ✅ |
| **Typing** | Relative paths `../src/types` | Centralized `@core/*` ✅ |
| **Duplicate dependencies** | ❌ Conflicting | ✅ Clear per package |
| **Build scripts** | Complex and multiple | Uniform with `--workspaces` ✅ |
| **Scalability** | Hard to add packages | Trivial ✅ |
| **Understandability** | Confusing | Clear and modular ✅ |
| **CI/CD** | Custom scripts | Standard and simple ✅ |
| **Documentation** | Implicit | Explicit per package ✅ |

---

## 🎯 Advantages of the New Structure

✅ **Clear separation of concerns**
- Each package has a unique and well-defined responsibility
- Easy to identify what each does

✅ **Centralized typing**
- One true and unique `core`
- All type imports from `@core/*`
- Avoids duplication and desynchronization

✅ **Improved dependency management**
- Each package declares only what it needs
- Reduced footprint in node_modules
- Fewer version conflicts

✅ **Simpler CI/CD**
- Uniform commands: `npm run test --workspaces`
- Easier to scale to complex build pipelines

✅ **Easy to understand**
- New people understand the structure in minutes
- Faster onboarding

✅ **Ready to grow**
- Adding new packages is trivial
- Foundation for expanding the project

✅ **Controlled publishing**
- Only the extension is published to VS Code Marketplace
- Core and webview are reusable internally

---

## ⚠️ Important Considerations

### Gradual vs. Complete Migration

**Option A: Complete Migration** (Recommended)
- Do everything at once
- Advantage: No confusing parallel branches
- Disadvantage: Large changes in a single review

**Option B: Gradual Migration**
- Step 1: Create `packages/core`
- Step 2: Move extension to `packages/extension`
- Step 3: Move webview to `packages/webview`
- Step 4: Adjust imports
- Advantage: Fewer changes per step
- Disadvantage: More time, parallel branches

### Impact on build/publish

- Build scripts need to be updated
- Imports in all packages need refactoring
- Tests must be re-validated in each package

### Performance

The monorepo structure can slow down type checking if not properly configured.
Solution: Use TypeScript references (`tsc --build`) instead of loose types.

---

## 📝 Implementation Plan (Next Steps)

If you decide to proceed:

1. ✅ **Create folder structure**
   ```bash
   mkdir packages/{core,extension,webview,docs,server}
   ```

2. ✅ **Create `packages/core`** with types, enums and utils
   - Move `src/types/` → `packages/core/src/types/`
   - Move `src/enum/` → `packages/core/src/enums/`
   - Create `packages/core/package.json` and `tsconfig.json`

3. ✅ **Move extension**
   - Copy `src/` → `packages/extension/src/`
   - Update `packages/extension/tsconfig.json` to import from `@core`
   - Delete `src/types/` and `src/enum/` (now in core)

4. ✅ **Move webview**
   - Copy `client/` → `packages/webview/`
   - Update imports in `**/src/**` to use `@core/*`

5. ✅ **Move documentation and server**
   - `docs/` → `packages/docs/`
   - `server/` → `packages/server/`

6. ✅ **Update root package.json**
   - Simplify structure
   - Configure workspaces

7. ✅ **Add tsconfig.base.json**

8. ✅ **Testing and validation**
   - `npm install` with workspaces
   - `npm run build` in each package
   - Tests in each package

---

## 💡 Useful Resources

- [NPM Workspaces Docs](https://docs.npmjs.com/cli/v10/using-npm/workspaces)
- [pnpm Workspaces](https://pnpm.io/workspaces)
- [TypeScript Project References](https://www.typescriptlang.org/docs/handbook/project-references.html)
- [Monorepo Best Practices](https://www.baeldung.com/cs/monorepos)

---

## 📌 Conclusion

This structure:
- Eliminates **root contamination**
- Establishes a **centralized typed core**
- Facilitates **maintenance and scalability**
- Follows **modern monorepo patterns**
- Prepares the project to **grow without delays**

Do you want to proceed with the implementation?
