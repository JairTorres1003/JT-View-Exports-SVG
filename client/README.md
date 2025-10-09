# View Exports SVG: The DevTools Client

Welcome to the `client` directory! This folder contains the source code for the interactive webview panel of the **View Exports SVG** extension. This is not just a simple viewer; it's a complete front-end application built with **React** and **TypeScript** to provide a rich, performant, and feature-packed user experience.

This UI serves as the central hub where users discover, manage, and experiment with their SVG component libraries.

<br>

<div align="center">
  <video src="https://raw.githubusercontent.com/JairTorres1003/JT-View-Exports-SVG/main/assets/JT%20View%20Exports%20SVG%20-%20Demo.mp4" controls>
    <source src="https://raw.githubusercontent.com/JairTorres1003/JT-View-Exports-SVG/main/assets/JT%20View%20Exports%20SVG%20-%20Demo.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</div>

<br>

## Core Features of the Client

The client is architected around several key components to deliver a powerful workflow:

### 1. **Component Explorer**

The main view where all discovered SVG icons are displayed in a clean, searchable grid.

- **Instant Search:** A responsive search bar allows users to filter icons by name in real-time.
- **Favorites & Recents:** Accordion panels provide quick access to frequently used or recently selected icons, streamlining the development process.
- **Contextual Actions:** Each icon card has a rich context menu with actions like "Copy Name", "Download as PNG/SVG", and "Open in Editor".

### 2. **The Interactive Playground**

This is the heart of the DevTools panel. When an icon is selected, it's loaded into the Playground, which features:

- **Live Preview:** A dedicated area to see the selected component rendered.
- **Real-time Code Editor:** An integrated Monaco Editor instance allows users to edit the component's props and see the changes reflected instantly in the live preview.
- **Toolbar Actions:** Quick actions to copy the generated code, reset changes, or toggle editor settings like word wrap.

### 3. **Seamless VS Code Integration**

The client is designed to feel like a native part of the VS Code editor.

- **Adaptive Theming:** The UI automatically inherits colors and styles from the user's active VS Code theme for a consistent look.
- **Bidirectional Communication:** A robust message-passing system communicates with the extension's backend to fetch data, execute commands, and update state.

## Tech Stack

- **Framework:** React
- **Language:** TypeScript
- **UI Components:** Material-UI (MUI)
- **State Management:** Redux Toolkit

This README provides a high-level overview for developers navigating the client-side codebase. For more information on the extension as a whole, please refer to the main [README.md](../README.md) in the root directory.
