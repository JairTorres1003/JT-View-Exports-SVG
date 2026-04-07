import { type PostMessageEmitter, type SVGFile, SVGPostMessage } from '@jt-view-exports-svg/core'
import { l10n } from 'vscode'

import { scanningFiles, scanningWorkspace } from '@/utilities/files/scanning'
import { getUnknownError } from '@/utilities/misc'
import { svgFileToUri } from '@/utilities/vscode/uri'

import { AssetsPathsController } from '../config'

export class AssetsHandler {
  private readonly assetsPathController: AssetsPathsController

  constructor(private readonly postMessage: PostMessageEmitter) {
    this.assetsPathController = new AssetsPathsController()
  }

  async getAssetsPath(): Promise<void> {}

  async getViewAssets(files: SVGFile[]): Promise<void> {
    try {
      await scanningFiles(files.map(svgFileToUri))
    } catch (error) {
      console.error(l10n.t('Error scanning files: {error}'), { error: getUnknownError(error) })
    }
  }

  getLastScanDate(): void {}

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
