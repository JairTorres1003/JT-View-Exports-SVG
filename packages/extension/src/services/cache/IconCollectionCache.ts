import type {
  FileIdentifier,
  IconCollectionKind,
  SVGIcon,
  SVGIconCollection,
} from '@jt-view-exports-svg/core'
import type * as vsc from 'vscode'

import { BaseCache } from './BaseCache'

export interface IconCollectionCacheEntry {
  name: IconCollectionKind
  fileCounts: Record<FileIdentifier, number>
  data: SVGIcon[]
}

export class IconCollectionCache extends BaseCache<
  IconCollectionCacheEntry,
  [vsc.WorkspaceFolder, IconCollectionKind]
> {
  constructor(
    ctx: vsc.ExtensionContext,
    private readonly maxEntries: number = 0
  ) {
    super(ctx, 'icon-collection')
  }

  protected override getIdentifier([workspace, kind]: [
    vsc.WorkspaceFolder,
    IconCollectionKind,
  ]): string {
    return `${workspace.uri.toString()}::${kind}`
  }

  private decrementFileCount(entry: IconCollectionCacheEntry, fileId: FileIdentifier): void {
    if (entry.fileCounts[fileId] === undefined) return
    entry.fileCounts[fileId]--
    if (entry.fileCounts[fileId] <= 0) {
      delete entry.fileCounts[fileId]
    }
  }

  private removeFromEntry(entry: IconCollectionCacheEntry, icon: SVGIconCollection): void {
    const index = entry.data.findIndex(
      (item) => item.name === icon.name && item.location.id === icon.location.id
    )
    if (index !== -1) {
      entry.data.splice(index, 1)
      this.decrementFileCount(entry, icon.location.id)
    }
  }

  private enforceLimit(entry: IconCollectionCacheEntry): void {
    if (this.maxEntries <= 0 || entry.data.length <= this.maxEntries) return
    const removed = entry.data.splice(this.maxEntries)
    for (const icon of removed) {
      this.decrementFileCount(entry, icon.location.id)
    }
  }

  async add(workspace: vsc.WorkspaceFolder, icon: SVGIconCollection): Promise<void> {
    const entry = (await this.get([workspace, icon.collection])) ?? {
      data: [],
      fileCounts: {},
      name: icon.collection,
    }

    this.removeFromEntry(entry, icon)

    entry.data.unshift({ name: icon.name, location: icon.location })
    entry.fileCounts[icon.location.id] = (entry.fileCounts[icon.location.id] ?? 0) + 1

    this.enforceLimit(entry)
    this.set([workspace, icon.collection], entry)
  }

  async remove(workspace: vsc.WorkspaceFolder, icon: SVGIconCollection): Promise<void> {
    const entry = await this.get([workspace, icon.collection])
    if (!entry) return
    this.removeFromEntry(entry, icon)
    this.set([workspace, icon.collection], entry)
  }

  async removeIconsInBulk(
    workspace: vsc.WorkspaceFolder,
    icons: SVGIconCollection[]
  ): Promise<void> {
    if (icons.length === 0) return

    const grouped = icons.reduce(
      (acc, icon) => {
        acc[icon.collection] ??= []
        acc[icon.collection].push(icon)
        return acc
      },
      {} as Record<IconCollectionKind, SVGIconCollection[]>
    )

    for (const [collection, collectionIcons] of Object.entries(grouped) as [
      IconCollectionKind,
      SVGIconCollection[],
    ][]) {
      const entry = await this.get([workspace, collection])
      if (!entry) continue
      for (const icon of collectionIcons) {
        this.removeFromEntry(entry, icon)
      }
      this.set([workspace, collection], entry)
    }
  }

  async hasIcon(workspace: vsc.WorkspaceFolder, icon: SVGIconCollection): Promise<boolean> {
    const entry = await this.get([workspace, icon.collection])
    const index =
      entry?.data.findIndex(
        (item) => item.name === icon.name && item.location.id === icon.location.id
      ) ?? -1
    return index !== -1
  }
}
