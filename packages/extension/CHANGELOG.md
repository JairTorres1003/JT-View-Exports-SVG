# View Exports SVG - Changelog

## 4.1.0

_Feb 18, 2026_

#### ✨ Features

- **Build System Migration (Webpack → Vite):**
  - Migrated client build system from Webpack to Vite for significantly faster development and production builds.
  - Integrated Vite plugins for improved asset handling and WASM support (`codingame-onig-wasm-web-fix`).
  - Added legacy manifest plugin and automatic file removal during build.
  - Development hot module replacement (HMR) now provides instant feedback during development.

- **Code Quality - Biome Integration:**
  - Replaced ESLint and Prettier with Biome for unified linting and formatting.
  - Simplified configuration management with centralized `biome.json`.
  - Improved lint-staged integration for consistent pre-commit checks.

- **Enhanced Development Experience:**
  - Added development mode theme activation for Monaco Editor with default One Dark theme.
  - Improved error handling with safe `window` object access for SSR compatibility.
  - New vite ignore comments and improved base URL construction.

#### 🚀 Enhancements

- **Dependencies Update:**
  - Updated VSCode engine from `^1.80.0` to `^1.109.0` for access to latest APIs and features.
  - Updated TypeScript from `^5.5.4` to `^5.9.3` with ES2022 target.
  - Canvas rendering library updates: `@codingame/monaco-vscode` from `^21.6.0` to `^26.1.2`.
  - UI libraries: `@mui/material` to `^7.3.7`, `lucide-react` to `^0.562.0`.
  - State management: `@reduxjs/toolkit` to `^2.11.2`.
  - Routing: `react-router-dom` to `^7.13.0`.
  - Build tools: `esbuild` to `^0.27.3`, `@vscode/test-web` to `^0.0.79`.

- **UI/UX Improvements:**
  - Improved layout and responsive design with `react-resizable-panels` update (`^3.0.6` → `^4.6.0`).

- **Component Refactoring:**
  - Replaced memoized component exports with direct exports for improved readability.
  - Updated DevTools and ViewPanels components with new separator and group structure.
  - Improved key handling in SelectPickerColor and context menus.
  - Reorganized imports to use `node:` prefix for Node.js modules.

- **Build Configuration:**
  - Migrated TypeScript target from ES2020 to **ES2022** for modern JavaScript features.
  - Updated multiple `tsconfig.json` files for consistency.
  - Improved asset inline handling in Vite configuration.
  - Better handling of CSS and asset inlining.

#### 🐛 Bug Fixes

- **Component Fixes:**
  - Fixed typo in `toggleWordWrap` method naming in MenuTools.
  - Fixed handling of empty components array in completion item provider.
  - Fixed manifest property destructuring for clarity in theme activation.

- **Configuration Fixes:**
  - Corrected typo in initConfiguration for "click to open DevTools" setting.
  - Fixed assetsInlineLimit configuration in Vite.
  - Migrated worker configuration from Rollup to Rolldown compiler for improved build performance.

- **Build Fixes:**
  - Fixed file removal plugin for proper cleanup during build.
  - Fixed CSS link generation for optional `style.css` support in manifests.

#### 📈 Performance Improvements

- **Build Performance:**
  - ~50% faster development and production builds with Vite.
  - ~5-10% smaller bundle sizes with improved esbuild optimization.
  - Faster module resolution with improved bundler mode configuration.
  - Improved build performance with Rolldown compiler migration.

#### ⚠️ Breaking Changes

- **VSCode Engine:** Minimum VSCode version now `^1.109.0` (was `^1.80.0`).
- **Build Tool:** Client development now uses Vite instead of Webpack. Custom Webpack configurations will not work.
- **Biome Rules:** Linting rules have changed from ESLint to Biome. Some formatting rules may differ.
- **Node.js Version:** Recommended Node.js 22.x for compatibility (updated from 20.x).

#### 📚 Documentation

A new external documentation project has been created to provide comprehensive guides and usage instructions:

- **Docusaurus-based Documentation:** New dedicated documentation site with:
  - "Getting Started" guide with installation instructions.
  - Detailed "Usage Guide" with core workflow and interaction steps.
  - FAQ section with common questions and troubleshooting.
  - Settings guide and troubleshooting documentation.
  - Feature history and release history sections.
  - Integrated changelog viewer.
- **Documentation Deployment:** Hosted on Vercel for easy access and updates.
- **Multi-language Support:** Documentation supports all extension languages.

#### 📝 Migration Guide

If upgrading from 4.0.x:

1. **For Users:** Simply update the extension from the VS Code Marketplace. No configuration changes needed.
2. **For Contributors:**
   - Run `npm install` to update all dependencies.
   - Build system now uses Vite - no breaking changes to source code.
   - Code formatting follows Biome rules - run `npm run biome:format` to auto-format.
   - VSCode minimum version updated to 1.109.0.


## 4.0.2

_Oct 20, 2025_

#### ✨ Features

- **Error Handling for VSCode API Wrapper:**
  - Added multi-language support for error handling messages in the `VSCodeAPIWrapper`, improving user feedback and clarity when the API is not available or throws exceptions.
  - Ensures better debugging information in development mode.

#### 🚀 Enhancements

- **Documentation:**
  - Added a dedicated README for the **VSCode Extension Dev Server**, including setup and usage instructions for Deno-based local development.
  - Introduced a `prepare-readme` script to automatically manage video URLs in the README and restore default placeholders when building for production.

- **Build System:**
  - Improved the development workflow by refining the Deno server integration for ESM builds.
  - Updated project dependencies for improved compatibility and stability.

## 4.0.1

_Oct 9, 2025_

#### 🚀 Enhancements

- **Development Environment:**
  - Added `express-rate-limit` middleware to improve request handling during local development (used only when running the standalone browser server).
  - Updated dependencies and improved overall build performance.
  - Refactored nonce generation for better clarity.
  - Simplified `isAnimated` logic and introduced a new `hasMotion` helper to detect motion in SVG elements.

#### 🐛 Bug Fixes

- **Autocomplete:** Fixed issue causing duplicate suggestions in completion items.
- **Cache Statistics:** Corrected increment logic for `totalExports` and `totalNoExports` in `getIconsFromCache`.

## 4.0.0

_Aug 30, 2025_

#### ✨ Features

- **Multi-language Support (i18n):** A comprehensive internationalization system has been integrated throughout the extension. The interface now supports over 15 languages, including Spanish, Portuguese, Chinese (Simplified and Traditional), Russian, German, French, and more.
- **New Developer Tools Panel (DevTools):** An advanced, resizable developer tools panel has been added within the webview, which includes:
  - An **SVG Playground** to preview and edit components in real-time.
  - A **context menu** with quick actions like "Open in editor" and copy/download as SVG/PNG.
  - Management of favorite and recently viewed components.
- **Scanning and Search Functionality:** It is now possible to scan the workspace for SVG components and search for them directly from the interface.
- **Improved File Management:** A Drag and Drop zone has been implemented, supporting multiple files and type validation.
  > **Note:** Due to VS Code security restrictions, it is currently not possible to directly obtain the file path on the OS for dropped files. As a workaround, the contents of dropped files are read and sent via `postMessage` to create a temporary file. For more details, see the issue on [GitHub](https://github.com/microsoft/vscode/issues/255608).

#### 🚀 Enhancements

- **Performance:**
  - Lazy loading of components has been implemented to improve initial load times.
  - SVG component rendering has been optimized using memoization techniques (`CardSvgRenderMemo`).
  - `Terser` has been replaced with `Esbuild` for faster JavaScript and CSS minification.
- **User Experience (UX):**
  - Keyboard shortcuts have been added for common actions like copy, paste, and navigation.
  - UI components now use VS Code's theme variables for a native and consistent look.
  - Error handling has been improved throughout the application with clearer user notifications and messages.
- **Code Organization:**
  - A massive refactoring was done to use `import type` where possible, improving build times.
  - The project structure has been reorganized, moving types and components for better clarity and maintenance.
  - A centralized cache system (`CacheManager`) has been adopted to manage icons, modified files, and more, improving consistency.

#### 🐛 Bug Fixes

- **Display:**
  - Corrected multiple flaws in the CSS structure and styles to ensure proper display of panels and elements.
  - Ensured the correct application of the VS Code theme upon extension startup.
- **Functionality:**
  - Resolved a component lifecycle issue that could cause unexpected behavior in the search bar.
  - Adjusted the Content Security Policy (CSP) to allow loading images from `blob` URLs.

## 3.1.1

_Jun 23, 2024_

**Bug Fixes**

- Bump vite from 5.0.12 to 5.0.13 in /webview-ui by @dependabot in [#123](https://github.com/JairTorres1003/JT-View-Exports-SVG/pull/123)
- Bump braces from 3.0.2 to 3.0.3 by @dependabot in [#124](https://github.com/JairTorres1003/JT-View-Exports-SVG/pull/124)
- Bump braces from 3.0.2 to 3.0.3 in /webview-ui by @dependabot in [#125](https://github.com/JairTorres1003/JT-View-Exports-SVG/pull/125)
- Minor bug fixes and improvements.

## 3.1.0

_Feb 11, 2024_

**Adds Configurations**

- **New Configuration:** Introduces the `JT-View-Exports-SVG.assetsPath` configuration to define in the workspace and/or user settings the files that have been opened and have icons available in the workspace.
- **Internationalization Update:** Adds new translations.

## 3.0.1

_Jan 4, 2024_

**Documentation Updates**

- **Wiki Enhancements:** Added and refined documentation in the project's wiki.
- **Clarifications:** Provided additional clarifications and examples for better understanding.
- **Usage Instructions:** Improved user guidance in the documentation.

## 3.0.0

_Jan 2, 2024_

**Enhancements and New Features**

- **Update Dependencies:** Dependencies were updated.
- **Minor Bug Fixes:** Minor bug fixes and optimizations were made throughout the code.
- **New Styles and Visual Enhancements:** New styles and visual enhancements were added.
- **New Functions and SVG File Handling Improvements:** New functions and improvements in SVG file handling were added.
- **Playground Integrated into PanelDeveloperTools:** A Playground was added.
- **Translations:** the reading of Chinese and Portuguese languages is corrected.

## 2.0.0

_Sep 22, 2023_

**Enhancements and New Features**

- **Fixed Error:** Resolved the issue of "fsPath" not being defined.
- **New Access Method:** Implemented a new access method for extracting SVG components using the command palette.
- **Extended Export Support:** Expanded support for various export types, including:
  - Exported default function declarations using the `export default function functionName() {}` syntax.
  - Exported default declarations using the `export default identifierName` syntax.
  - Exported declarations and object declarations using the `export identifierName` or `export {identifierName1, identifierName2, ...}` syntax.
- **Additional SVG Tags:** Introduced support for additional SVG tags.
- **Optimized Extraction:** Optimized the extraction process for SVG components.
- **Caching:** Added caching for improved performance after the initial extraction of a file.
- **Extended i18n Support:** Expanded i18n support for the following languages:
  - French (fr).
  - Japanese (ja).
  - Portuguese (Brazil) (pt-br).
  - Portuguese (Portugal) (pt-pt).
  - Russian (ru).
  - Chinese (Simplified) (zh-cn).
  - Chinese (Traditional) (zh-tw).
- **Webview-ui Changes:** Made the following improvements to the webview-ui:
  - Load files manually if none are selected.
  - Added an identification icon for animated components what using framer-motion.
- **Configuration Panel:** Added a configuration panel with the following features:
  - Ability to view SVG components in a larger size.
  - Toggle between dark and light mode for displaying SVG components.

## 1.0.0

_Aug 3, 2023_

**Initial Release**

### Key Features

- Created an analysis model for extracting SVG components from JavaScript (JS), JSX, TypeScript (TS), and TypeScript React (TSX) files.
- Defined default parameters for components without specified values.
- Added support for permitted SVG tags.
- Supported export types:
  - Exported function declarations using the `export function functionName() {}` syntax.
  - Exported variable declarations using the `export const variableName = value;` syntax.
- Implemented i18n support for English (en) and Spanish (es).
- Introduced the webview-ui user interface, featuring:
  - Thumbnail cards for visualizing each discovered SVG.
  - A search function for filtering SVGs by name.
- Provided multiple access modes to the extension:
  - Context menu in the code editor.
  - Context menu in files (single or multiple selected files).
