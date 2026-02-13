import {
  registerExtension,
  ExtensionHostKind,
  type IExtensionManifest,
} from '@codingame/monaco-vscode-api/extensions'

/**
 * Activates the theme extension in development mode by registering a default theme.
 *
 * This function registers a default theme named "Default Theme One Dark" with the Monaco Editor.
 * It sets the theme's path and other metadata, allowing it to be used in the editor.
 */
export default function devActivate(): void {
  const themePath = '/dev/vs/theme/default-theme-one-dark.json'
  const manifest: IExtensionManifest = {
    name: 'default-theme-one-dark',
    displayName: 'Default Theme One Dark',
    publisher: 'zhuangtongfa',
    version: __APP_VERSION,
    engines: {
      vscode: '*',
    },
    contributes: {
      themes: [
        {
          label: 'Default Theme One Dark',
          path: themePath,
          id: 'default-theme-one-dark',
          uiTheme: 'vs-dark',
        },
      ],
    },
  }

  const extensionTheme = registerExtension(manifest, ExtensionHostKind.LocalProcess)
  extensionTheme.registerFileUrl(themePath, new URL(themePath, window.location.href).href)

  document.documentElement.classList.add('monaco-workbench')
}
