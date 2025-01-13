export enum SVGDeclaration {
  Function = 'function',
  Variable = 'variable',
}

export enum SVGPostMessage {
  SendAssetsPath = 'send-assets-path',
  SendLanguage = 'send-language',
  SendLastScanDate = 'send-last-scan-date',
  SendPlaygroundError = 'send-playground-error',
  SendRunExtraction = 'send-run-extraction',
  SendSVGComponents = 'send-svg-components',
  SendSVGError = 'send-svg-error',
  SendSVGFilteredComponents = 'send-svg-filter',
  SendSVGPlayground = 'send-svg-playground',
  SendTheme = 'send-theme',
  SendVsCodeStyles = 'send-vscode-styles',
  SendRecentIcons = 'send-recent-icons',
  SendFavoriteIcons = 'send-favorite-icons',
  SendExpandAllIcons = 'send-expand-all-icons',
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
  GetVsCodeStyles = 'settings/vscode-styles',

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
  InitDefaultExpandedIcons = 'icons/expanded/init-default',
  ToggleExpandIcon = 'icons/expanded/toggle',
}
