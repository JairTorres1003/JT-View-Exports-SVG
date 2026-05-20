import {
  ExtensionMessage,
  type FileIdentifier,
  type SVGFile,
  WebviewMessage,
} from '@jt-view-exports-svg/core'
import { workspace } from 'vscode'

import type { WebviewMessenger } from '@/messaging/WebviewMessenger'
import { getCache } from '@/services/cache/main'

import { BaseHandler } from '../BaseHandler'

export class RequestFileMetadataHandler extends BaseHandler {
  readonly type = WebviewMessage.RequestFileMetadata

  constructor(private readonly messenger: WebviewMessenger) {
    super()
  }

  async handle(ids: FileIdentifier[]) {
    const filesCache = getCache().get('files')
    const currentWorkspace = workspace.workspaceFolders?.[0] ?? 'global'

    const result: Record<FileIdentifier, SVGFile> = {}

    await Promise.all(
      ids.map(async (id) => {
        const file =
          (await filesCache.getFile(currentWorkspace, id)) ??
          (await filesCache.getFile('global', id))
        if (file) result[id] = file
      })
    )

    this.messenger.postMessage(ExtensionMessage.LoadFileMetadata, result)
  }
}
