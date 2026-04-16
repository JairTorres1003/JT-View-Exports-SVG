/**
 * Post message types (Extension → Webview)
 * Messages sent from the extension to the webview
 */
export const SVGPostMessage = {
  // root message types
  Navigate: 'send/navigate',

  // UI-related messages
  LoadComponents: 'send/load-components',
  LoadUserComponents: 'send/load-user-components',
  FilterComponents: 'send/filter-components',
  OnErrorComponents: 'send/error-components',
  OnReloadComponent: 'send/reload-component',
  ToggleExpandAllComponents: 'send/toggle-expand-all-components',

  // Developer tools related messages
  ToggleOpenDevTools: 'send/toggle-open-devtools',
  ComponentEditedInPlayground: 'send/component-edited-in-playground',
  ErrorEditingComponentInPlayground: 'send/error-editing-component-in-playground',

  // Settings-related messages
  LoadEditorConfig: 'send/load-editor-config',
  LoadExtensionTheme: 'send/load-extension-theme',
  LoadEditorStyles: 'send/load-editor-styles',

  // File-related messages
  LoadOpenFiles: 'send/load-open-files',
  LoadFileMetadata: 'send/load-file-metadata',

  // Fetch-related messages
  FetchVSCodeTheme: 'send/fetch-vscode-theme/<placeholder>',
  FetchVsCodeThemePackage: 'send/fetch-vscode-theme-package',
} as const

/**
 * Type representing possible post message values
 */
export type SVGPostMessage = (typeof SVGPostMessage)[keyof typeof SVGPostMessage]

/**
 * Receive message types (Webview → Extension)
 * Messages sent from the webview to the extension
 */
export const SVGReceiveMessage = {
  // root message types
  Ready: 'ready',
  ChangeViewPath: 'navigate/change-path',

  // UI-related messages
  RequestComponents: 'ui/request-components',
  RequestUserComponents: 'ui/request-user-components',
  SearchComponents: 'ui/search-components',
  ReloadComponent: 'ui/reload-component',
  IsExpandComponents: 'ui/is-expand-components',
  ProcessUploadedFiles: 'ui/process-uploaded-files',

  // Icons-related messages
  AddIconToCollection: 'icons/add-to-collection',
  RemoveIconFromCollection: 'icons/remove-from-collection',
  ClearIconCollection: 'icons/clear-collection',

  // Developer tools related messages
  IsOpenDevTools: 'devtools/is-open',
  EditComponentInPlayground: 'devtools/edit-component-in-playground',

  // Editor-related messages
  RequestEditorConfig: 'editor/request-config',
  RequestEditorExtensionTheme: 'editor/request-extension-theme',
  RequestEditorStyles: 'editor/request-styles',
  ReloadEditorExtensionTheme: 'editor/reload-extension-theme',

  // File-related messages
  OpenFileInEditor: 'file/open-in-editor',
  OpenDialogFiles: 'file/open-dialog',
  CreateTempFiles: 'file/create-temp',
  RequestFileMetadata: 'file/request-metadata',

  // fetch-related messages
  FetchVSCodeTheme: 'fetch/request-vscode-theme/<placeholder>',
  FetchVsCodeThemePackage: 'fetch/request-vscode-theme-package',
} as const

/**
 * Type representing possible receive message values
 */
export type SVGReceiveMessage = (typeof SVGReceiveMessage)[keyof typeof SVGReceiveMessage]
