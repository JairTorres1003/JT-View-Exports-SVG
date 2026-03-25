import type { FileIdentifier, SVGFile, ViewExportSVG } from '@jt-view-exports-svg/core'
import type * as vsc from 'vscode'

import { BaseCache } from './BaseCache'

interface ViewExportSVGCacheEntry {
  files: Record<FileIdentifier, SVGFile>
  data: Record<FileIdentifier, ViewExportSVG>
}

export class ViewExportSVGCache extends BaseCache<ViewExportSVGCacheEntry> {
  private transactionInProgress = false
  private transactionWorkspace: vsc.WorkspaceFolder | 'global' = 'global'
  private transactionData: ViewExportSVGCacheEntry = { files: {}, data: {} }

  constructor(ctx: vsc.ExtensionContext) {
    super(ctx, 'viewExportSVG')
  }

  /**
   * Retrieves a cache entry for the specified identifier.
   * If no entry exists, returns a new empty cache entry with default structure.
   *
   * @param identifier - The unique identifier for the cache entry
   */
  private async getEntry(identifier: string): Promise<ViewExportSVGCacheEntry> {
    return (await this.get(identifier)) ?? { files: {}, data: {} }
  }

  /**
   * Gets the transaction identifier from the workspace.
   */
  private getIdentifierWorkspace(workspace: vsc.WorkspaceFolder | 'global'): string {
    return typeof workspace === 'string' ? workspace : workspace.uri.toString()
  }

  /**
   * Initiates a transaction for cache operations.
   *
   * @param workspace - The workspace folder context for the transaction, or 'global' for global scope.
   */
  public async transactionInit(workspace: vsc.WorkspaceFolder | 'global') {
    this.transactionInProgress = true
    this.transactionWorkspace = workspace

    const identifier = this.getIdentifierWorkspace(this.transactionWorkspace)

    this.transactionData = await this.getEntry(identifier)
  }

  /**
   * Adds a file and its associated export data to the pending operations transaction.
   *
   * @param file - The SVG file to be added to the transaction.
   * @param exportData - The view export SVG data associated with the file.
   */
  public transactionAdd(file: SVGFile, exportData: ViewExportSVG) {
    this.transactionData.files[file.id] = file
    this.transactionData.data[file.id] = exportData
  }

  /**
   * Retrieves the pending export data for a given file from the transaction.
   *
   * @param file - The SVG file for which to retrieve the export data.
   * @returns The associated ViewExportSVG data if it exists and is up-to-date, otherwise `undefined`.
   */
  public transactionGetItem(file: SVGFile) {
    const currentFile = this.transactionData.files[file.id]

    if (!currentFile || file.lastModified > currentFile.lastModified) {
      return
    }

    return this.transactionData.data[file.id]
  }

  /**
   * Commits the pending operations transaction to the cache.
   */
  public async transactionCommit() {
    if (!this.transactionInProgress) return

    const identifier = this.getIdentifierWorkspace(this.transactionWorkspace)

    await this.set(identifier, this.transactionData)

    this.transactionInProgress = false
    this.transactionWorkspace = 'global'
    this.transactionData = { files: {}, data: {} }
  }

  /**
   * Removes cache entries for the specified file IDs from a workspace or global storage.
   * @param workspace - The workspace folder context or 'global' for global storage
   * @param fileIds - Array of file identifiers to remove from the cache
   */
  public async removeByFileIds(
    workspace: vsc.WorkspaceFolder | 'global',
    fileIds: FileIdentifier[]
  ) {
    const identifier = this.getIdentifierWorkspace(workspace)

    const currentEntry = await this.getEntry(identifier)

    fileIds.forEach((id) => {
      delete currentEntry.files[id]
      delete currentEntry.data[id]
    })

    await this.set(identifier, currentEntry)
  }

  public async getFromWorkspace(
    workspace: vsc.WorkspaceFolder | 'global'
  ): Promise<ViewExportSVGCacheEntry> {
    const identifier = this.getIdentifierWorkspace(workspace)

    return await this.getEntry(identifier)
  }
}
