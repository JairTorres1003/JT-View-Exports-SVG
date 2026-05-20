import type { IExtensionManifest } from '@codingame/monaco-vscode-api/extensions'

export const defaultThemePath = './one-dark.json'

const manifest: IExtensionManifest = {
  name: 'default-theme-one-dark',
  displayName: 'Default Theme One Dark',
  publisher: 'zhuangtongfa',
  version: '1.0.0',
  engines: {
    vscode: '*',
  },
  contributes: {
    themes: [
      {
        label: 'Default Theme One Dark',
        path: defaultThemePath,
        uiTheme: 'vs-dark',
      },
    ],
  } as IExtensionManifest['contributes'],
}

export default manifest
