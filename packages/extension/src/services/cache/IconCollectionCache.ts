import type {
  FileIdentifier,
  IconCollectionKind,
  SVGFile,
  SVGIcon,
  SVGIconCollection,
} from '@jt-view-exports-svg/core'
import type * as vsc from 'vscode'

import { BaseCache } from './BaseCache'

export interface IconCollectionCacheEntry {
  name: IconCollectionKind
  files: Record<FileIdentifier, { file: SVGFile; count: number }>
  data: SVGIcon[]
}

export interface IconEntry extends SVGIconCollection {
  file: SVGFile
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

  protected getIdentifier([workspace, kind]: [vsc.WorkspaceFolder, IconCollectionKind]): string {
    return `${workspace.uri.toString()}::${kind}`
  }

  /**
   * Removes a file reference from a cache entry and decrements the associated count.
   */
  private removeFileFromEntry(entry: IconCollectionCacheEntry, fileId: FileIdentifier) {
    const fileEntry = entry.files[fileId]
    if (!fileEntry) return

    fileEntry.count--
    if (fileEntry.count <= 0) {
      delete entry.files[fileId]
    }
  }

  /**
   * Removes an icon from a cache entry and updates the file reference count.
   *
   * @param entry - The cache entry to remove the icon from
   * @param icon - The icon collection to remove, identified by name and location id
   */
  private removeFromEntry(entry: IconCollectionCacheEntry, icon: IconEntry) {
    const index = entry.data.findIndex(
      (item) => item.name === icon.name && item.location.id === icon.location.id
    )

    if (index !== -1) {
      entry.data.splice(index, 1)
      this.removeFileFromEntry(entry, icon.location.id)
    }
  }

  /**
   * Enforces the configured maximum number of cached icons for a collection entry.
   *
   * @param entry - The cache entry to trim and reconcile.
   */
  private enforceLimit(entry: IconCollectionCacheEntry) {
    if (this.maxEntries <= 0 || entry.data.length <= this.maxEntries) return

    const removedIcons = entry.data.splice(this.maxEntries)

    for (const icon of removedIcons) {
      this.removeFileFromEntry(entry, icon.location.id)
    }
  }

  /**
   * Adds an icon collection record to the cache for a specific workspace.
   *
   * @param workspace - The workspace folder used to scope the cache entry.
   * @param icon - The SVG icon collection item to add to the cache.
   */
  public async add(workspace: vsc.WorkspaceFolder, icon: IconEntry): Promise<void> {
    const entry = (await this.get([workspace, icon.collection])) ?? {
      data: [],
      files: {},
      name: icon.collection,
    }

    this.removeFromEntry(entry, icon)

    entry.data.unshift({ name: icon.name, location: icon.location })
    entry.files[icon.location.id] = {
      file: icon.file,
      count: (entry.files[icon.location.id]?.count ?? 0) + 1,
    }

    this.enforceLimit(entry)

    this.set([workspace, icon.collection], entry)
  }

  /**
   * Removes an icon collection record from the cache for a specific workspace.
   *
   * @param workspace - The workspace folder used to scope the cache entry.
   * @param icon - The SVG icon collection item to remove from the cache.
   */
  public async remove(workspace: vsc.WorkspaceFolder, icon: IconEntry): Promise<void> {
    const entry = await this.get([workspace, icon.collection])

    if (!entry) return

    this.removeFromEntry(entry, icon)

    this.set([workspace, icon.collection], entry)
  }

  /**
   * Removes multiple icons from the cache in bulk, organized by their collections.
   *
   * @param workspace - The workspace folder context for the cache operation
   * @param icons - Array of icon entries to remove from the cache
   */
  public async removeIconsInBulk(
    workspace: vsc.WorkspaceFolder,
    icons: IconEntry[]
  ): Promise<void> {
    if (icons.length === 0) return

    const groupedByCollection = icons.reduce(
      (acc, icon) => {
        acc[icon.collection] ??= []
        acc[icon.collection].push(icon)
        return acc
      },
      {} as Record<IconCollectionKind, IconEntry[]>
    )

    const entries = Object.entries(groupedByCollection) as [IconCollectionKind, IconEntry[]][]

    for (const [collection, collectionIcons] of entries) {
      const entry = await this.get([workspace, collection])
      if (!entry) continue

      for (const icon of collectionIcons) {
        this.removeFromEntry(entry, icon)
      }

      this.set([workspace, collection], entry)
    }
  }

  /**
   * Checks if a specific icon collection entry exists in the cache for a given workspace.
   *
   * @param workspace - The workspace folder context for the cache lookup
   * @param icon - The icon collection item to check for existence, identified by name and location id
   */
  public async hasIcon(workspace: vsc.WorkspaceFolder, icon: IconEntry): Promise<boolean> {
    const entry = await this.get([workspace, icon.collection])

    const index =
      entry?.data.findIndex(
        (item) => item.name === icon.name && item.location.id === icon.location.id
      ) ?? -1

    return index !== -1
  }
}
