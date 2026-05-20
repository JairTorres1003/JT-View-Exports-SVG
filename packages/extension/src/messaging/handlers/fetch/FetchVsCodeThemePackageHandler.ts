import { ExtensionMessage, type IExtension, WebviewMessage } from '@jt-view-exports-svg/core'
import * as vsc from 'vscode'

import type { WebviewMessenger } from '@/messaging/WebviewMessenger'
import { getCache } from '@/services/cache/main'
import { CACHE_KEY } from '@/services/vscode/extensionTheme'
import { getUnknownError } from '@/utilities/misc'

import { BaseHandler } from '../BaseHandler'

export class FetchVsCodeThemePackageHandler extends BaseHandler {
  readonly type = WebviewMessage.FetchVsCodeThemePackage

  constructor(private readonly messenger: WebviewMessenger) {
    super()
  }

  async handle(): Promise<void> {
    const cache = getCache().get('extensionTheme')

    const themeData = await cache?.get(CACHE_KEY)

    if (!themeData || themeData.id === '') {
      this.messenger.postMessage(ExtensionMessage.FetchVsCodeThemePackage, {
        success: false,
        error: vsc.l10n.t('Theme package not found'),
      })
      return
    }

    const ext = (vsc.extensions.getExtension(themeData.id) as IExtension) || undefined

    const uriFile = vsc.Uri.joinPath(ext.extensionUri, 'package.json')

    try {
      const fileData = await vsc.workspace.fs.readFile(uriFile)
      const themeContent = new TextDecoder('utf-8').decode(fileData)

      this.messenger.postMessage(ExtensionMessage.FetchVsCodeThemePackage, {
        success: true,
        data: JSON.parse(themeContent),
      })
    } catch (error) {
      this.messenger.postMessage(ExtensionMessage.FetchVsCodeThemePackage, {
        success: false,
        error: vsc.l10n.t('Error reading theme package file: {error}', {
          error: getUnknownError(error),
        }),
      })
    }
  }
}
