import { l10n } from 'vscode'

import { SVGPostMessage } from '@/enum/ViewExportsSVG'
import type { SVGFile } from '@/types/ViewExportsSVG'
import type { FuncPostMessage } from '@/types/views/PostMessage'
import { scanningFiles, scanningWorkspace } from '@/utilities/files'
import { getUnknownError } from '@/utilities/misc'
import { svgFileToUri } from '@/utilities/vscode/uri'

import { AssetsPathsController, LastScanDateController } from '../config'

export class AssetsHandler {
  private readonly assetsPathController: AssetsPathsController
  private readonly lastScanDateController: LastScanDateController

  constructor(private readonly postMessage: FuncPostMessage) {
    this.assetsPathController = new AssetsPathsController()
    this.lastScanDateController = new LastScanDateController()
  }

  async getAssetsPath(): Promise<void> {
    try {
      const assetsPath = await this.assetsPathController.getAssetsPath()
      this.postMessage(SVGPostMessage.SendAssetsPath, assetsPath)
    } catch (error) {
      console.error(l10n.t('Error getting assets path: {error}'), { error: getUnknownError(error) })
    }
  }

  async getViewAssets(files: SVGFile[]): Promise<void> {
    try {
      await scanningFiles(files.map(svgFileToUri))
    } catch (error) {
      console.error(l10n.t('Error scanning files: {error}'), { error: getUnknownError(error) })
    }
  }

  getLastScanDate(): void {
    const date = this.lastScanDateController._dateString
    this.postMessage(SVGPostMessage.SendLastScanDate, date)
  }

  async removeAssets(files: SVGFile[]): Promise<void> {
    try {
      await this.assetsPathController.remove(files)
      await this.getAssetsPath()
    } catch (error) {
      console.error(l10n.t('Error removing assets path: {error}'), {
        error: getUnknownError(error),
      })
    }
  }

  async scanWorkspace(): Promise<void> {
    try {
      const files = await scanningWorkspace()
      await scanningFiles(files)
      this.getLastScanDate()
    } catch (error) {
      console.error(l10n.t('Error scanning workspace: {error}', { error: getUnknownError(error) }))
    }
  }
}
