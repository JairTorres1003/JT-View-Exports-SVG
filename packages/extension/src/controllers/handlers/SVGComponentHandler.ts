import {
  type PostMessageEmitter,
  type SVGFile,
  type SVGPlayground,
  SVGPostMessage,
  type ViewExportSVG,
} from '@jt-view-exports-svg/core'
import { l10n } from 'vscode'

import { pathToSVGFile } from '@/utilities/files/misc'
import { processFiles } from '@/utilities/files/processFiles'
import { scanningFiles } from '@/utilities/files/scanning'
import { getUnknownError, isEmpty } from '@/utilities/misc'
import { playground } from '@/utilities/svg/playground'
import { svgFileToUri } from '@/utilities/vscode/uri'

import { getCacheManager } from '../cache'

/**
 * @deprecated This class is deprecated and will be removed in future versions. Please use the new handlers in the messaging system instead.
 */
export class SVGComponentHandler {
  private viewExportSVG: ViewExportSVG[]

  constructor(
    private readonly postMessage: PostMessageEmitter,
    viewExportSVG: ViewExportSVG[]
  ) {
    this.viewExportSVG = viewExportSVG
  }

  updateSVGComponents(viewExportSVG: ViewExportSVG[]): void {
    this.viewExportSVG = viewExportSVG
  }

  async extractSVGComponentFromFiles(files: string[]): Promise<void> {
    try {
      const resolvedFiles = await Promise.all(files.map(pathToSVGFile))
      await scanningFiles(resolvedFiles.map(svgFileToUri))
    } catch (error) {
      console.error(error)
    }
  }

  async refreshSVGComponents(files: SVGFile[]): Promise<void> {
    const { ComponentsFileCache, DeclarationFileCache } = getCacheManager()
    const removedFiles = files.map((file) => file.uri)

    ComponentsFileCache.delete(removedFiles)
    DeclarationFileCache.delete(removedFiles)

    const operation = (result: ViewExportSVG[]): void => {
      this.postMessage(SVGPostMessage.OnReloadComponent, result)
      this.viewExportSVG = this.viewExportSVG.map((item) => {
        const newItem = result.find((r) => r.groupKind.id === item.groupKind.id)
        return newItem ?? item
      })
    }

    await processFiles(files.map(svgFileToUri), operation)
  }

  getSVGComponents(): void {
    if (!isEmpty(this.viewExportSVG)) {
      this.postMessage(SVGPostMessage.LoadComponents, this.viewExportSVG)
    } else {
      this.postMessage(SVGPostMessage.OnErrorComponents, {
        location: {},
        message: l10n.t('No SVG components found...'),
      })
    }
  }

  async playgroundSVGComponents(component: SVGPlayground): Promise<void> {
    try {
      const result = await playground(component)

      if ('component' in result) {
        this.postMessage(SVGPostMessage.SendSVGPlayground, result)
      } else {
        this.postMessage(SVGPostMessage.SendPlaygroundError, result)
      }
    } catch (error) {
      const errorMessage = l10n.t('Error generating SVG playground {error}', {
        error: getUnknownError(error),
      })
      console.error(errorMessage, error)
      this.postMessage(SVGPostMessage.SendPlaygroundError, {
        message: errorMessage,
        location: {},
      })
    }
  }

  searchSVGComponents(_query: string): void {}
}
