# View Exports SVG - Changelog

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
