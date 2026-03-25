import type {
  FileIdentifier,
  IconCollectionKind,
  SVGFile,
  SVGIcon,
  SVGIconCollection,
} from '@jt-view-exports-svg/core'
import { exists } from 'fs'
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

export class IconCollectionCache extends BaseCache<IconCollectionCacheEntry> {
  constructor(
    ctx: vsc.ExtensionContext,
    private readonly maxEntries: number = 0
  ) {
    super(ctx, 'icon-collection')
  }

  /**
   * Creates a unique identifier for a cache entry based on the workspace folder and icon collection kind.
   *
   * @param workspace - The workspace folder used to scope the cache entry.
   * @param kind - The kind of icon collection (e.g., 'project', 'global') used to differentiate cache entries.
   * @returns A string identifier that uniquely represents the combination of workspace and icon collection kind.
   */
  private createIdentifier(workspace: vsc.WorkspaceFolder, kind: IconCollectionKind): string {
    return `${workspace.uri}::${kind}`
  }

  /**
   * Retrieves a cache entry for a given identifier, or initializes a new entry if it does not exist.
   */
  private async getEntry(
    identifier: string,
    kind: IconCollectionKind
  ): Promise<IconCollectionCacheEntry> {
    return (await this.get(identifier)) ?? { name: kind, files: {}, data: [] }
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
    const id = this.createIdentifier(workspace, icon.collection)
    const entry = await this.getEntry(id, icon.collection)

    this.removeFromEntry(entry, icon)

    entry.name = icon.collection
    entry.data.unshift(icon)
    entry.files[icon.location.id] = {
      file: icon.file,
      count: (entry.files[icon.location.id]?.count ?? 0) + 1,
    }

    this.enforceLimit(entry)

    await this.set(id, entry)
  }

  /**
   * Removes an icon collection record from the cache for a specific workspace.
   *
   * @param workspace - The workspace folder used to scope the cache entry.
   * @param icon - The SVG icon collection item to remove from the cache.
   */
  public async remove(workspace: vsc.WorkspaceFolder, icon: IconEntry): Promise<void> {
    const id = this.createIdentifier(workspace, icon.collection)
    const entry = await this.getEntry(id, icon.collection)

    this.removeFromEntry(entry, icon)

    await this.set(id, entry)
  }

  public async masiveRemove(workspace: vsc.WorkspaceFolder, icons: IconEntry[]): Promise<void> {
    if (icons.length === 0) return

    const groupedByCollection = icons.reduce(
      (acc, icon) => {
        acc[icon.collection] ??= []
        acc[icon.collection].push(icon)
        return acc
      },
      {} as Record<IconCollectionKind, IconEntry[]>
    )

    for (const [collection, icons] of Object.entries(groupedByCollection)) {
      const id = this.createIdentifier(workspace, collection as IconCollectionKind)
      const entry = await this.getEntry(id, collection as IconCollectionKind)

      for (const icon of icons) {
        this.removeFromEntry(entry, icon)
      }

      await this.set(id, entry)
    }
  }

  /**
   * Clears all icon collection records from the cache for a specific workspace and collection kind.
   *
   * @param workspace - The workspace folder used to scope the cache entry.
   * @param kind - The kind of icon collection (e.g., 'project', 'global') to clear from the cache.
   */
  public async clearCollection(
    workspace: vsc.WorkspaceFolder,
    kind: IconCollectionKind
  ): Promise<void> {
    const id = this.createIdentifier(workspace, kind)
    await this.delete(id)
  }

  /**
   * Retrieves the icon collection cache entry for a specific workspace and collection kind.
   *
   * @param workspace - The workspace folder used to scope the cache entry.
   * @param kind - The kind of icon collection (e.g., 'project', 'global') to retrieve from the cache.
   */
  public async getCollection(
    workspace: vsc.WorkspaceFolder,
    kind: IconCollectionKind
  ): Promise<IconCollectionCacheEntry> {
    const id = this.createIdentifier(workspace, kind)
    return await this.getEntry(id, kind)
  }

  public async hasIcon(workspace: vsc.WorkspaceFolder, icon: IconEntry): Promise<boolean> {
    const id = this.createIdentifier(workspace, icon.collection)
    const entry = await this.getEntry(id, icon.collection)

    const index = entry.data.findIndex(
      (item) => item.name === icon.name && item.location.id === icon.location.id
    )

    return index !== -1
  }
}
