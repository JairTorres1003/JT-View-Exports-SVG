# View Exports SVG - Changelog

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
