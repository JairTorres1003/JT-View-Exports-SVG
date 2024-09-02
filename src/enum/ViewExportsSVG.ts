export enum SVGTypeExport {
  Function = 'function',
  Variable = 'variable',
}

export enum SVGPostMessage {
  SendAssetsPath = 'send-assets-path', // assetsPath
  SendLanguage = 'send-language', // language
  SendLastScanDate = 'send-last-scan-date', // lastScanDate
  SendSVGComponents = 'send-svg-components', // svgComponents
  SendSVGError = 'send-svg-error', // svgError
  SendSVGFilteredComponents = 'send-svg-filter', // filteredSvgComponents
  SendSVGPlayground = 'send-svg-playground', // customSvgComponent
  SendPlaygroundError = 'send-playground-error', // playgroundError
  SendTheme = 'send-theme', // currentTheme
  SendVsCodeStyles = 'send-vscode-styles', // vscodeStyles
}

export enum SVGReceiveMessage {
  ExtractSVGComponent = 'extract-svg-component', // extractIconsFile
  GetAssetsPath = 'get-assets-path', // getAssetsPath
  GetLanguage = 'get-language', // getTranslations
  GetLastScanDate = 'get-last-scan-date', // getLastScanDate
  GetSVGComponents = 'get-svg-components', // requestSvgComponents
  GetTheme = 'get-theme', // getCurrentTheme
  GetViewAssets = 'get-view-assets', // viewAssets
  GetVsCodeStyles = 'get-vscode-styles', // getStyles
  OpenFile = 'open-file', // openFile
  PlaygroundSVGComponents = 'playground-svg-components', // playgroundSvgComponents
  RemoveAssets = 'remove-assets', // removeAsset
  ScanWorkspace = 'scan-workspace', // scanWorkspace
  SearchSVGComponents = 'search-svg-components', // searchSvgComponents
}
