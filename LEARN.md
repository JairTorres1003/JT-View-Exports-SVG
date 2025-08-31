# Learn How to Use View Exports SVG

Welcome to **View Exports SVG**, a Visual Studio Code extension designed to streamline how you discover, manage, and use SVG icons directly within your project.

This guide will walk you through its features to help you enhance your development workflow.

### Key Features

- **Instant Discovery:** Find all exported SVG components within your files or entire workspace.
- **Interactive Playground:** Preview, customize, and edit your components in real-time.
- **Advanced DevTools:** A powerful, dockable panel with search, favorites, and component management.
- **Drag & Drop:** Quickly add SVG files to the viewer by dragging them into the panel.
- **Multi-language Support:** The interface is available in over 15 languages.
- **Native Theming:** The extension's appearance seamlessly integrates with your VS Code theme.

### Installation

1.  **Open Visual Studio Code.**
2.  Navigate to the **Extensions** view (or press `Ctrl+Shift+X`).
3.  Search for "View Exports SVG" in the marketplace.
4.  Click **Install** to add it to your editor.

### How to Use

#### 1. Viewing Icons from Files

This is the most direct way to inspect specific files.

1.  In the Explorer, select one or more files or folders that contain SVG components ([see SVG support](SVG%20SUPPORT.md)).
2.  Right-click on your selection.
3.  Choose "**View Exports SVG 🔍**" from the context menu.
4.  A new panel will open, displaying all the icons found in the selected files.

#### 2. Scanning the Entire Workspace

To get a complete overview of all icons in your project:

1.  Open the **Command Palette** (`Ctrl+Shift+P`).
2.  Type and select "**View Exports SVG: Start Scanning**".
3.  The extension will scan your entire project and display all found icons.

#### 3. Using the DevTools Panel

The DevTools panel is your central hub for managing icons.

- **Search:** Use the search bar at the top to instantly filter icons by name.
- **Copy Name:** Simply click on any icon card to copy its component name to the clipboard.
- **Playground:** Select an icon to see it in the Playground. Here, you can edit its props in the code editor and see your changes applied in real-time.
- **Actions Menu:** Hover over an icon and use the context menu (`...`) to access actions like:
  - Copy as SVG/PNG.
  - Download as SVG/PNG.
  - Mark as Favorite.
  - Open in Editor.
- **Favorites & Recent:** Quickly access your most used or recently selected icons in their respective sections.

#### 4. Drag and Drop

You can also add files directly to the webview panel.

1.  Open the **View Exports SVG** panel.
2.  Drag SVG files from your computer or the VS Code Explorer and drop them onto the panel.

> **Note:** Due to VS Code security restrictions, it is not possible to directly obtain the file path on the OS for dropped files. As a workaround, the contents of dropped files are read and sent via `postMessage` to create a temporary file. For more details, see the issue on [GitHub](https://github.com/microsoft/vscode/issues/255608).

### Keep Learning

For detailed information on version updates and new features, please check the [changelog (CHANGELOG.md)](CHANGELOG.md).

This is an open-source project, and you are welcome to explore the code, report issues, or contribute. Visit the project repository on [GitHub](https://github.com/JairTorres1003/JT-View-Exports-SVG).

Happy developing!
