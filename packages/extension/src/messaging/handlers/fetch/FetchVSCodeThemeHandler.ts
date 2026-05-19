import {
  generateDynamicMessage,
  type IExtension,
  SVGPostMessage,
  SVGReceiveMessage,
} from '@jt-view-exports-svg/core'
import * as vsc from 'vscode'

import type { WebviewMessenger } from '@/messaging/WebviewMessenger'
import { getCache } from '@/services/cache/main'
import { CACHE_KEY } from '@/services/vscode/extensionTheme'
import { getUnknownError } from '@/utilities/misc'

import { BaseHandler } from '../BaseHandler'

export class FetchVSCodeThemeHandler extends BaseHandler {
  readonly type = SVGReceiveMessage.FetchVSCodeTheme

  constructor(private readonly messenger: WebviewMessenger) {
    super()
  }

  async handle(path: string): Promise<void> {
    const cache = getCache().get('extensionTheme')

    const themeData = await cache?.get(CACHE_KEY)

    const type = generateDynamicMessage(SVGPostMessage.FetchVSCodeTheme, path)

    if (!themeData || themeData.id === '') {
      this.messenger.postMessage(type, {
        success: false,
        error: vsc.l10n.t('Theme not found for path: {path}', { path }),
      })
      return
    }

    const ext = (vsc.extensions.getExtension(themeData.id) as IExtension) || undefined

    const uriFile = vsc.Uri.joinPath(ext.extensionUri, path)

    try {
      const fileData = await vsc.workspace.fs.readFile(uriFile)
      const themeContent = new TextDecoder('utf-8').decode(fileData)

      this.messenger.postMessage(type, {
        success: true,
        data: JSON.parse(themeContent),
      })
    } catch (error) {
      this.messenger.postMessage(type, {
        success: false,
        error: vsc.l10n.t('Error reading theme file: {path} — {error}', {
          path,
          error: getUnknownError(error),
        }),
      })
    }
  }
}
