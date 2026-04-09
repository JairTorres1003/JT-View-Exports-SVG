import { type SVGPlayground, SVGPostMessage, SVGReceiveMessage } from '@jt-view-exports-svg/core'
import * as vsc from 'vscode'

import { REGEX_TAG_NAME } from '@/constants/regex'
import type { WebviewMessenger } from '@/messaging/WebviewMessenger'
import { getCache } from '@/services/cache/main'
import { playgroundComponent } from '@/services/playgroundComponent'
import { viewExportStore } from '@/store/ViewExportStore'
import { getUnknownError } from '@/utilities/misc'
import { BaseHandler } from '../BaseHandler'

export class EditComponentInPlaygroundHandler extends BaseHandler {
  readonly type = SVGReceiveMessage.EditComponentInPlayground

  constructor(private readonly messenger: WebviewMessenger) {
    super()
  }

  async handle(icon: SVGPlayground) {
    try {
      const fileList = viewExportStore.getFiles()
      const file = fileList[icon.location.id]

      if (!file) {
        throw new Error(
          vsc.l10n.t('File with id {id} not found in cache.', { id: icon.location.id })
        )
      }

      const cache = getCache().get('viewExports')
      const currentWorkspace = vsc.workspace.workspaceFolders?.[0] ?? 'global'

      const entryCache = await cache.getByFile(currentWorkspace, file)

      const tagName = icon.value.match(REGEX_TAG_NAME)?.[1] ?? icon.name
      const currentComponent = entryCache?.data.components.find((c) => c.name === tagName)

      if (!currentComponent) {
        throw new Error(
          vsc.l10n.t('Component with name "{name}" not found in file "{file}"', {
            name: tagName,
            file: file.absolutePath,
          })
        )
      }

      const component = await playgroundComponent({
        file,
        value: icon.value,
        location: icon.location,
        component: currentComponent,
      })

      if ('message' in component) {
        throw new Error(component.message)
      }

      this.messenger.postMessage(SVGPostMessage.ComponentEditedInPlayground, component)
    } catch (error) {
      this.messenger.postMessage(SVGPostMessage.ErrorEditingComponentInPlayground, {
        message: vsc.l10n.t('Error editing component: {error}', { error: getUnknownError(error) }),
      })
    }
  }
}
