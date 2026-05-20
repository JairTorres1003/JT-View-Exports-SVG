import {
  type FileIdentifier,
  IconCollectionKind,
  type SVGIconCollection,
  type ViewExportSVG,
} from '@jt-view-exports-svg/core'
import type * as vsc from 'vscode'

import { BaseCache } from './BaseCache'

export type ViewExportSVGCacheEntry = Record<FileIdentifier, ViewExportSVG>

export class ViewExportSVGCache extends BaseCache<
  ViewExportSVGCacheEntry,
  vsc.WorkspaceFolder | 'global'
> {
  constructor(ctx: vsc.ExtensionContext) {
    super(ctx, 'view_export_svg')
  }

  protected override getIdentifier(id: vsc.WorkspaceFolder | 'global'): string {
    return typeof id === 'string' ? id : id.uri.toString()
  }

  /**
   * Adds or updates a ViewExportSVG entry in the cache for a given workspace.
   */
  async add(
    workspace: vsc.WorkspaceFolder | 'global',
    fileId: FileIdentifier,
    data: ViewExportSVG
  ): Promise<void> {
    const entry = (await this.get(workspace)) ?? ({} as ViewExportSVGCacheEntry)
    entry[fileId] = data
    this.set(workspace, entry)
  }

  /**
   * Removes file entries from the cache for a given workspace based on their IDs.
   */
  async removeByFileIds(
    workspace: vsc.WorkspaceFolder | 'global',
    fileIds: FileIdentifier[]
  ): Promise<void> {
    const entry = await this.get(workspace)
    if (!entry) return
    for (const id of fileIds) {
      delete entry[id]
    }
    this.set(workspace, entry)
  }

  /**
   * Toggles the favorite state of a specific icon component.
   */
  async toggleIconFavorite(
    workspace: vsc.WorkspaceFolder,
    icon: SVGIconCollection,
    isFavorite = false
  ): Promise<void> {
    if (icon.collection !== IconCollectionKind.FAVORITE) return

    const entry = await this.get(workspace)
    if (!entry) return

    const dataEntry = entry[icon.location.id]
    if (!dataEntry) return

    const index = dataEntry.components.findIndex((i) => i.name === icon.name)
    if (index === -1 || dataEntry.components[index].isFavorite === isFavorite) return

    const updatedComponents = [...dataEntry.components]
    updatedComponents[index] = { ...updatedComponents[index], isFavorite }

    entry[icon.location.id] = { ...dataEntry, components: updatedComponents }
    this.set(workspace, entry)
  }

  /**
   * Unmarks all icons as favorite in the cache for a given workspace.
   */
  async unmarkAllIconsAsFavorite(workspace: vsc.WorkspaceFolder): Promise<void> {
    const entry = await this.get(workspace)
    if (!entry) return

    for (const fileId in entry) {
      const dataEntry = entry[fileId as FileIdentifier]
      const updatedComponents = dataEntry.components.map((component) =>
        component.isFavorite ? { ...component, isFavorite: false } : component
      )
      entry[fileId as FileIdentifier] = { ...dataEntry, components: updatedComponents }
    }

    this.set(workspace, entry)
  }
}
