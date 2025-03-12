export enum SVGDeclaration {
  Function = 'function',
  Variable = 'variable',
}

export enum SVGPostMessage {
  SendSVGComponents = 'send/svg/components',
  SendSVGError = 'send/svg/error',
  SendSVGFilteredComponents = 'send/svg/filtered-components',
  SendSVGPlayground = 'send/svg/playground',
  SendPlaygroundError = 'send/svg/playground-error',

  SendAssetsPath = 'send/assets/paths',

  SendRunExtraction = 'send/svg/run-extraction',
  SendLanguage = 'send/settings/language',
  SendTheme = 'send/settings/theme',
  SendEditorConfig = 'send/settings/editor-config',
  SendVsCodeStyles = 'send/settings/vscode-styles',
  SendExpandAllIcons = 'send/settings/default-expand-all',
  SendOpenDevTools = 'send/settings/default-click-to-open-dev-tools',
  SendExtensionTheme = 'send/settings/extension-theme',

  SendLastScanDate = 'send/scan/last-date',

  SendRecentIcons = 'send/icons/recent',
  SendFavoriteIcons = 'send/icons/favorite',
}

export enum SVGReceiveMessage {
  ExtractSVGComponent = 'svg/extract-component',
  GetSVGComponents = 'svg/get-components',
  SearchSVGComponents = 'svg/search-components',
  PlaygroundSVGComponents = 'svg/playground-component',

  GetAssetsPath = 'assets/paths',
  RemoveAssets = 'assets/remove',
  GetViewAssets = 'assets/views',

  GetLanguage = 'settings/language',
  GetTheme = 'settings/theme',
  GetEditorConfig = 'settings/editor-config',
  GetVsCodeStyles = 'settings/vscode-styles',
  InitDefaultExpandedIcons = 'settings/default-expand-all/init',
  ToggleExpandIcon = 'settings/default-expand-all/toggle',
  InitDefaultOpenDevTools = 'settings/default-click-to-open-dev-tools/init',
  GetExtensionTheme = 'settings/extension-theme',

  GetLastScanDate = 'scan/last-date',
  ScanWorkspace = 'scan/workspace',

  OpenFile = 'file/open',

  AddRecentIcon = 'icons/recent/add',
  RemoveRecentIcon = 'icons/recent/remove',
  GetRecentIcons = 'icons/recent/get',
  ClearRecentIcons = 'icons/recent/clear',
  AddFavoriteIcon = 'icons/favorite/add',
  RemoveFavoriteIcon = 'icons/favorite/remove',
  ClearFavoriteIcons = 'icons/favorite/clear',
  GetFavoriteIcons = 'icons/favorite/get',
}
