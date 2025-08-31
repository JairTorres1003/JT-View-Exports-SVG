<div align="center">
  <img src="./assets/JT View Exports SVG - ICON.png" alt="Logo View Exports SVG" width="180" height="180">
  <br>
  <h1>View Exports SVG</h1>
  <p>The ultimate tool to discover, visualize, and manage your SVG component library directly within Visual Studio Code.</p>

  <p>
    <a href="https://marketplace.visualstudio.com/items?itemName=JairTorres1003.jt-view-exports-svg"><img src="https://img.shields.io/visual-studio-marketplace/v/JairTorres1003.jt-view-exports-svg?style=for-the-badge" alt="Marketplace Version"></a>
    <a href="https://marketplace.visualstudio.com/items?itemName=JairTorres1003.jt-view-exports-svg"><img src="https://img.shields.io/visual-studio-marketplace/d/JairTorres1003.jt-view-exports-svg?style=for-the-badge" alt="Marketplace Downloads"></a>
    <a href="https://marketplace.visualstudio.com/items?itemName=JairTorres1003.jt-view-exports-svg&ssr=false#review-details"><img src="https://img.shields.io/visual-studio-marketplace/r/JairTorres1003.jt-view-exports-svg?style=for-the-badge" alt="Marketplace Rating"></a>
    <a href="https://github.com/JairTorres1003/JT-View-Exports-SVG/blob/main/LICENSE"><img src="https://img.shields.io/github/license/JairTorres1003/JT-View-Exports-SVG?style=for-the-badge" alt="License"></a>
  </p>
</div>

'**View Exports SVG**' is a powerful Visual Studio Code extension that transforms how you interact with SVG icons in your projects. It goes beyond simple viewing, offering a complete suite of tools to scan your workspace, preview components in an interactive playground, and manage your assets with an intuitive DevTools panel.

## ✨ Key Features

- **Advanced DevTools Panel:** A dockable, full-featured panel with a component viewer, search, and management tools.
- **Interactive Playground:** Select any icon to preview it, edit its properties in a real-time code editor, and see your changes instantly.
- **Workspace-wide Scanning:** Automatically discover all SVG components across your entire project, not just in specific files.
- **Component Management:** Mark icons as **favorites**, see your **recently used** components, and get quick access to what matters most.
- **Multiple Ways to View:** Launch the viewer from the context menu, the command palette, or by dragging and dropping files.
- **Powerful Actions:** Copy component names, download as SVG/PNG, or open the source file directly from the UI.
- **Broad Framework Support:** Works out-of-the-box with JavaScript/TypeScript projects using frameworks like React, Preact, and more. ([See Full SVG Support](SVG%20SUPPORT.md)).
- **Native Theming:** The interface automatically adapts to your current VS Code theme for a seamless experience.

## 🚀 In Action

<div align="center">
  <video src="https://github.com/user-attachments/assets/66020180-98ca-4ff8-adf4-0cc56526e6e3" controls>
    <source src="https://github.com/user-attachments/assets/66020180-98ca-4ff8-adf4-0cc56526e6e3" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</div>

## Getting Started

### Installation

1.  Open **Visual Studio Code**.
2.  Go to the **Extensions** view (`Ctrl+Shift+X`).
3.  Search for `View Exports SVG`.
4.  Click **Install**.

### Usage

You can visualize your icons in multiple ways:

- **From the Explorer (Context Menu):**
  1.  Right-click on a file, a folder, or a selection of multiple files.
  2.  Select **View Exports SVG 🔍**.

- **From the Command Palette:**
  1.  Open the Command Palette (`Ctrl+Shift+P`).
  2.  Run the command **`View Exports SVG: Start Scanning`** to discover all icons in your project.

- **Via Drag and Drop:**
  1.  Open the viewer using one of the methods above.
  2.  Drag and drop SVG files directly onto the panel to add them.

Once the panel is open, you can click on any icon to copy its name to the clipboard or select it to start experimenting in the Playground.

## 📚 Wiki & Documentation

For more information, detailed guides, and advanced configuration, please check the [**official Wiki**](https://github.com/JairTorres1003/JT-View-Exports-SVG/wiki).

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the "feature request" tag.

## 📜 License

This extension is available under the [MIT License](LICENSE). See the `LICENSE` file for more details.

## CHANGELOG

You can find details of all changes and updates in the [CHANGELOG.md](CHANGELOG.md) file.

## Development

Want to contribute to the development? Follow these steps:

1.  Clone the repository:
    ```bash
    git clone [https://github.com/JairTorres1003/JT-View-Exports-SVG.git](https://github.com/JairTorres1003/JT-View-Exports-SVG.git)
    ```
2.  Install all dependencies:
    ```bash
    npm run install:all
    ```
3.  Build the webview UI:
    ```bash
    npm run client:build
    ```
4.  Compile the extension:
    ```bash
    npm run compile
    ```
5.  Press `F5` to open a new VS Code window with the extension loaded for testing.
