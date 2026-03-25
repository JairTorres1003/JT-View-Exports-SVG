import {
  type FileIdentifier,
  SVGPostMessage,
  SVGReceiveMessage,
  type ViewExportSVG,
} from '@jt-view-exports-svg/core'
import * as vsc from 'vscode'

import type { WebviewMessenger } from '@/messaging/WebviewMessenger'
import { getCache } from '@/services/cache/main'
import type { ViewExportSVGCache } from '@/services/cache/ViewExportSVGCache'
import { filterComponents } from '@/services/filterComponents'
import { viewExportStore } from '@/store/ViewExportStore'
import { processFiles } from '@/utilities/files/processFiles'
import { getUnknownError } from '@/utilities/misc'
import { svgFileToUri } from '@/utilities/vscode/uri'
import { BaseHandler } from '../BaseHandler'

export class ReloadComponentHandler extends BaseHandler {
  readonly type = SVGReceiveMessage.ReloadComponent

  private viewExportCache: ViewExportSVGCache | null = null
  private identifierWorkspace: vsc.WorkspaceFolder | 'global' = 'global'

  constructor(private readonly messenger: WebviewMessenger) {
    super()
  }

  /**
   * Initializes the cache for view exports and sets the current workspace identifier.
   *
   * @param workspace - The workspace folder context or 'global' for global scope
   */
  private async initializeCache(workspace: vsc.WorkspaceFolder | 'global') {
    if (!this.viewExportCache) {
      this.viewExportCache = getCache().get('viewExports')
    }

    this.identifierWorkspace = workspace
  }

  /**
   * Removes cached view export data for the specified files.
   *
   * @param files - An array of file identifiers to remove from the cache
   */
  private async cleanCache(files: FileIdentifier[]): Promise<void> {
    await this.viewExportCache?.removeByFileIds(this.identifierWorkspace, files)
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
      throw new Error(vsc.l10n.t('No results found...'))
    }

    return filtered
  }

  /**
   * Retrieves the URIs of the files corresponding to the given file identifiers from the cache.
   *
   * @param files - An array of file identifiers for which to retrieve the URIs.
   * @returns A promise that resolves to an array of URIs corresponding to the given file identifiers.
   */
  private async getFilesUris(files: FileIdentifier[]): Promise<vsc.Uri[]> {
    const cachedFiles = await this.viewExportCache?.getFromWorkspace(this.identifierWorkspace)

    if (!cachedFiles) return []

    return files.flatMap((fileId) => {
      const cachedFile = cachedFiles.files[fileId]

      if (cachedFile) {
        return svgFileToUri(cachedFile)
      }

      return []
    })
  }

  async handle(files: FileIdentifier[]) {
    try {
      await this.initializeCache(vsc.workspace.workspaceFolders?.[0] ?? 'global')

      const uriFiles = await this.getFilesUris(files)

      await this.cleanCache(files)

      const operation = (result: ViewExportSVG[]) => {
        result.forEach((item) => {
          viewExportStore.update(item.groupKind.id, item)
        })

        try {
          const filtered = this.applyFilter(result)

          this.messenger.postMessage(SVGPostMessage.OnReloadComponent, filtered)
        } catch (error) {
          this.messenger.postMessage(SVGPostMessage.OnReloadComponent, result)
          this.messenger.postMessage(SVGPostMessage.OnErrorComponents, {
            message: getUnknownError(error),
          })
        }
      }

      await processFiles(uriFiles, operation)
    } catch (error) {
      console.error(vsc.l10n.t('Error processing files for reload: {0}'), getUnknownError(error))
    }
  }
}
