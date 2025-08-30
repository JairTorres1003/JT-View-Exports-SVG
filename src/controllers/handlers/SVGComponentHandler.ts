import { l10n } from 'vscode'

import { SVGPostMessage } from '@/enum/ViewExportsSVG'
import type { SVGFile, SVGPlayground, ViewExportSVG } from '@/types/ViewExportsSVG'
import type { FuncPostMessage } from '@/types/views/PostMessage'
import { pathToSVGFile, processFiles, scanningFiles } from '@/utilities/files'
import { getUnknownError, isEmpty } from '@/utilities/misc'
import { filteredExports, playground } from '@/utilities/svg'
import { svgFileToUri } from '@/utilities/vscode'

import { getCacheManager } from '../cache'

export class SVGComponentHandler {
  private viewExportSVG: ViewExportSVG[]

  constructor(
    private readonly postMessage: FuncPostMessage,
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
      this.postMessage(SVGPostMessage.SendRefreshSVGComponents, result)
      this.viewExportSVG = this.viewExportSVG.map((item) => {
        const newItem = result.find((r) => r.groupKind.id === item.groupKind.id)
        return newItem ?? item
      })
    }

    await processFiles(files.map(svgFileToUri), operation)
  }

  getSVGComponents(): void {
    if (!isEmpty(this.viewExportSVG)) {
      this.postMessage(SVGPostMessage.SendSVGComponents, this.viewExportSVG)
    } else {
      this.postMessage(SVGPostMessage.SendSVGError, {
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

  searchSVGComponents(query: string): void {
    const filtered = filteredExports(this.viewExportSVG, query)

    if (Array.isArray(filtered)) {
      this.postMessage(SVGPostMessage.SendSVGFilteredComponents, filtered)
    } else {
      this.postMessage(SVGPostMessage.SendSVGError, filtered)
    }
  }
}
