import { ExtensionMessage, type FileTemporary, WebviewMessage } from '@jt-view-exports-svg/core'
import * as vsc from 'vscode'
import { CONFIG_KEY } from '@/constants/misc'
import type { WebviewMessenger } from '@/messaging/WebviewMessenger'
import { BaseHandler } from '../BaseHandler'

export class CreateTempFilesHandler extends BaseHandler {
  readonly type = WebviewMessage.CreateTempFiles

  constructor(private readonly messenger: WebviewMessenger) {
    super()
  }

  async handle(files: FileTemporary[]) {
    try {
      const uris = await Promise.all(
        files.map(async ({ name, content }) => {
          const tempUri = vsc.Uri.parse(`scheme-${CONFIG_KEY}:/${name}`)

          const fileBuffer =
            typeof content === 'string' ? Buffer.from(content, 'utf8') : Buffer.from(content)

          await vsc.workspace.fs.writeFile(tempUri, fileBuffer)

          await vsc.workspace.openTextDocument(tempUri)

          return tempUri.toString()
        })
      )

      this.messenger.postMessage(ExtensionMessage.LoadOpenFiles, uris)
    } catch (error) {
      console.error(vsc.l10n.t('Error creating temporary files'), error)
    }
  }
}
