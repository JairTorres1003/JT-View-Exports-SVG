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

  // Settings-related messages
  LoadEditorThemeMode: 'send/load-editor-theme-mode',
  LoadEditorConfig: 'send/load-editor-config',
  LoadExtensionTheme: 'send/load-extension-theme',
  LoadEditorStyles: 'send/load-editor-styles',

  SendSVGPlayground: 'send/svg/playground',
  SendPlaygroundError: 'send/svg/playground-error',

  // Assets-related messages
  SendAssetsPath: 'send/assets/paths',

  // Settings-related messages
  SendRunLoading: 'send/settings/run-loading',
  SendUpdateConfiguration: 'send/update-configuration',
  SendReloadWebview: 'send/reload-webview',

  // Scan-related messages
  SendLastScanDate: 'send/scan/last-date',

  // File-related messages
  SendOpenFiles: 'send/file/open',
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

  // Developer tools related messages
  IsOpenDevTools: 'devtools/is-open',

  // Editor-related messages
  RequestEditorThemeMode: 'editor/request-theme-mode',
  RequestEditorConfig: 'editor/request-config',
  RequestEditorExtensionTheme: 'editor/request-extension-theme',
  RequestEditorStyles: 'editor/request-styles',

  // File-related messages
  OpenFileInEditor: 'file/open-in-editor',

  ExtractSVGComponentFromFiles: 'svg/extract-components-from-files',
  PlaygroundSVGComponents: 'svg/playground-component',

  // Assets-related messages
  GetAssetsPath: 'assets/paths',
  RemoveAssets: 'assets/remove',
  GetViewAssets: 'assets/views',

  ReloadExtensionTheme: 'settings/reload-extension-theme',

  // Scan-related messages
  GetLastScanDate: 'scan/last-date',
  ScanWorkspace: 'scan/workspace',

  RequestFileOpen: 'file/request-open',
  CreateTempFiles: 'file/create-temp',

  // Icons-related messages
  AddRecentIcon: 'icons/recent/add',
  RemoveRecentIcon: 'icons/recent/remove',
  ClearRecentIcons: 'icons/recent/clear',
  AddFavoriteIcon: 'icons/favorite/add',
  RemoveFavoriteIcon: 'icons/favorite/remove',
  ClearFavoriteIcons: 'icons/favorite/clear',
} as const

/**
 * Type representing possible receive message values
 */
export type SVGReceiveMessage = (typeof SVGReceiveMessage)[keyof typeof SVGReceiveMessage]
