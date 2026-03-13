import {
  type SVGFile,
  SVGPostMessage,
  SVGReceiveMessage,
  type ViewExportSVG,
} from '@jt-view-exports-svg/core'
import { l10n } from 'vscode'

import { getCacheManager } from '@/controllers/cache'
import type { WebviewMessenger } from '@/messaging/WebviewMessenger'
import { filterComponents } from '@/services/filterComponents'
import { viewExportStore } from '@/store/ViewExportStore'
import { processFiles } from '@/utilities/files/processFiles'
import { getUnknownError } from '@/utilities/misc'
import { svgFileToUri } from '@/utilities/vscode/uri'

import { BaseHandler } from '../BaseHandler'

export class ReloadComponentHandler extends BaseHandler {
  readonly type = SVGReceiveMessage.ReloadComponent

  constructor(private readonly messenger: WebviewMessenger) {
    super()
  }

  private cleanCache(files: SVGFile[]): void {
    const { ComponentsFileCache, DeclarationFileCache } = getCacheManager()
    const removedFiles = files.map((file) => file.uri)

    ComponentsFileCache.delete(removedFiles)
    DeclarationFileCache.delete(removedFiles)
  }

  /**
   * Applies a search filter to an array of ViewExportSVG components.
   *
   * @param components - The array of ViewExportSVG components to filter.
   * @returns The filtered array of components matching the search term, or `false`
   * if no results are found and the total search results is 1.
   */
  private applyFilter(components: ViewExportSVG[]) {
    const searchTerm = viewExportStore.getSearch()

    if (searchTerm.trim().length === 0) return components

    const filtered = filterComponents(components, searchTerm)

    const totalSearchResults = viewExportStore.getTotalSearchResults()

    if (filtered.length === 0 && totalSearchResults === 1) {
      viewExportStore.setTotalSearchResults(0)
      throw new Error(l10n.t('No results found...'))
    }

    return filtered
  }

  handle(files: SVGFile[]) {
    this.cleanCache(files)

    const uriFiles = files.map(svgFileToUri)

    const operation = (result: ViewExportSVG[]): void => {
      result.forEach((item) => {
        viewExportStore.update(item.groupKind.id, item)
      })

      try {
        const filtered = this.applyFilter(result)

        this.messenger.postMessage(SVGPostMessage.OnReloadComponent, filtered)
      } catch (error) {
        this.messenger.postMessage(SVGPostMessage.OnErrorComponents, {
          location: {},
          message: getUnknownError(error),
        })
      }
    }

    processFiles(uriFiles, operation).catch((error) => {
      console.error(l10n.t('Error processing files for reload: {0}'), getUnknownError(error))
    })
  }
}
