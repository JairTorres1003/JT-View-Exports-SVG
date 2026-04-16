import {
  pathnames,
  SVGPostMessage,
  SVGReceiveMessage,
  type ViewExportSVG,
} from '@jt-view-exports-svg/core'
import * as vsc from 'vscode'

import { PanelController } from '@/controllers/views/PanelController'
import type { WebviewMessenger } from '@/messaging/WebviewMessenger'
import { viewExportStore } from '@/store/ViewExportStore'
import { pathToSVGFile } from '@/utilities/files/misc'
import { processFiles } from '@/utilities/files/processFiles'
import { svgFileToUri } from '@/utilities/vscode/uri'

import { BaseHandler } from '../BaseHandler'

export class ProcessUploadedFilesHandler extends BaseHandler {
  readonly type = SVGReceiveMessage.ProcessUploadedFiles

  constructor(private readonly messenger: WebviewMessenger) {
    super()
  }

  async handle(files: string[]) {
    try {
      viewExportStore.clear()

      const resolvedFiles = await Promise.all(files.map(pathToSVGFile))
      const uriFiles = resolvedFiles.map(svgFileToUri)

      const operation = (result: ViewExportSVG[]): void => {
        viewExportStore.set(result)
        PanelController.navigate(pathnames.dashboard)
      }

      await processFiles(uriFiles, operation)
    } catch (error) {
      const errorMessage = vsc.l10n.t('Error processing uploaded files')
      vsc.window.showErrorMessage(errorMessage).then(undefined, console.error)
      console.error(errorMessage, error)
      this.messenger.postMessage(SVGPostMessage.LoadOpenFiles, files)
    }
  }
}
