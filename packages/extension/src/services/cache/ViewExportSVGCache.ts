import {
  type FileIdentifier,
  IconCollectionKind,
  type SVGFile,
  type SVGIconCollection,
  type ViewExportSVG,
} from '@jt-view-exports-svg/core'
import type * as vsc from 'vscode'

import { BaseCache } from './BaseCache'

interface ViewExportSVGCacheEntry {
  files: Record<FileIdentifier, SVGFile>
  data: Record<FileIdentifier, ViewExportSVG>
}

interface DataEntry {
  file: SVGFile
  data: ViewExportSVG
}

export class ViewExportSVGCache extends BaseCache<
  ViewExportSVGCacheEntry,
  vsc.WorkspaceFolder | 'global'
> {
  constructor(ctx: vsc.ExtensionContext) {
    super(ctx, 'view_export_svg')
  }

  protected getIdentifier(id: vsc.WorkspaceFolder | 'global'): string {
    return typeof id === 'string' ? id : id.uri.toString()
  }

  /**
   * Retrieves cached data for a specific SVG file if it exists and is up-to-date.
   *
   * @param workspace - The workspace folder or 'global' to determine the cache scope
   * @param file - The SVG file for which to retrieve cached data
   * @returns A promise that resolves to the data entry if found and valid, or undefined if not found or outdated
   */
  public async getByFile(
    workspace: vsc.WorkspaceFolder | 'global',
    file: SVGFile
  ): Promise<DataEntry | undefined> {
    const entry = await this.get(workspace)
    const currentFile = entry?.files[file.id]

    if (!currentFile || file.lastModified > currentFile.lastModified) return undefined

    return { file: currentFile, data: entry.data[file.id] }
  }

  /**
   * Adds or updates a file entry in the cache for a given workspace.
   *
   * @param workspace - The workspace folder or 'global' to determine the cache scope
   * @param data - The data entry containing file information and associated data
   */
  public async add(workspace: vsc.WorkspaceFolder | 'global', data: DataEntry) {
    const entry = (await this.get(workspace)) ?? { files: {}, data: {} }

    entry.files[data.file.id] = data.file
    entry.data[data.file.id] = data.data

    this.set(workspace, entry)
  }

  /**
   * Removes file entries from the cache for a given workspace based on their IDs.
   *
   * @param workspace - The workspace folder or 'global' to determine the cache scope
   * @param fileIds - An array of file IDs to remove from the cache
   */
  public async removeByFileIds(
    workspace: vsc.WorkspaceFolder | 'global',
    fileIds: FileIdentifier[]
  ) {
    const currentEntry = await this.get(workspace)

    if (!currentEntry) return

    fileIds.forEach((id) => {
      delete currentEntry.files[id]
      delete currentEntry.data[id]
    })

    this.set(workspace, currentEntry)
  }

  /**
   * Toggles the favorite state of a specific icon component within a cached workspace entry.
   *
   * @param workspace - Target workspace folder cache scope, or `'global'` for shared cache.
   * @param icon - Icon descriptor used to locate the cached data entry and component to update.
   * @param isFavorite - Desired favorite state to set for the icon component. Defaults to `false`.
   */
  public async toggleIconFavorite(
    workspace: vsc.WorkspaceFolder,
    icon: SVGIconCollection,
    isFavorite = false
  ) {
    if (icon.collection !== IconCollectionKind.FAVORITE) return

    const entry = await this.get(workspace)
    if (!entry) return

    const dataEntry = entry.data[icon.location.id]
    if (!dataEntry) return

    const index = dataEntry.components.findIndex((i) => i.name === icon.name)
    if (index === -1 || dataEntry.components[index].isFavorite === isFavorite) return

    const updatedComponents = [...dataEntry.components]
    updatedComponents[index] = {
      ...updatedComponents[index],
      isFavorite,
    }

    entry.data[icon.location.id] = {
      ...dataEntry,
      components: updatedComponents,
    }

    this.set(workspace, entry)
  }
}
