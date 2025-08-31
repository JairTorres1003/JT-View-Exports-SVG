import { l10n, type WorkspaceFolder, type Uri } from 'vscode'

import type { CacheIconKind } from '@/enum/cache'
import type { SVGIconCache } from '@/types/cache'
import type { SVGIcon } from '@/types/ViewExportsSVG'

import { FileModifiedCacheController } from './FileModifiedCacheController'

export class IconCacheController extends FileModifiedCacheController<SVGIconCache[]> {
  private readonly kind: CacheIconKind
  /**
   * The maximum number of saved icons.
   */
  private savedIconLimit?: number | (() => number)

  /**
   * Constructs an instance of the IconCache.
   *
   * @param cacheFilePath - The file path where the cache is stored.
   * @param savedIconLimit - Optional limit on the number of saved icons.
   */
  constructor(cacheFilePath: Uri, kind: CacheIconKind, savedIconLimit?: number | (() => number)) {
    super(cacheFilePath)
    this.kind = kind
    this.savedIconLimit = savedIconLimit
  }

  /**
   * Updates the limit on the number of saved icons.
   *
   * @param limit - The new limit on the number of saved icons.
   */
  updateLimit(limit: number | (() => number)): void {
    this.savedIconLimit = limit
  }

  /**
   * Adds a list of SVG icons to the cache under the specified key.
   * If an icon with the same name already exists in the cache, it will not be added again.
   *
   * @param key - The key under which the icons will be cached.
   * @param folder - The folder URI to which the icons belong.
   * @param value - An array of SVG icons to be added to the cache.
   * @returns The new list of icons after the specified icons have been added.
   */
  add(folder: WorkspaceFolder, value: SVGIcon[]): SVGIconCache[] {
    const currentKey = this.getId(folder)

    const current = super.get(currentKey, 0) ?? []
    const newValue = current

    value.forEach((icon) => {
      const existing = current.findIndex(
        (item) => item.name === icon.name && item.location.file.uri === icon.location.file.uri
      )

      if (existing !== -1) {
        newValue.splice(existing, 1)
      }

      newValue.unshift({ ...icon, dateAdd: Date.now() })
    })

    const limitConfig =
      (typeof this.savedIconLimit === 'function' ? this.savedIconLimit() : this.savedIconLimit) ?? 0
    const limit = limitConfig > 0 ? limitConfig : newValue.length

    super.set(currentKey, newValue.slice(0, limit), 0)

    return newValue.slice(0, limit)
  }

  /**
   * Removes an icon from the cache.
   *
   * @param key - The key under which the icon is cached.
   * @param folder - The workspace folder to which the icon belongs.
   * @param icon - The icon to be removed from the cache.
   * @returns The new list of icons after the specified icon has been removed.
   */
  remove(folder: WorkspaceFolder, icon: SVGIcon | SVGIcon[]): SVGIconCache[] {
    const currentKey = this.getId(folder)
    const current = super.get(currentKey, 0) ?? []

    const iconsToRemove = Array.isArray(icon) ? icon : [icon]

    const newValue = current.filter(({ name, location }) => {
      return !iconsToRemove.some(
        (i) => i.name === name && i.location.file.uri === location.file.uri
      )
    })

    super.set(currentKey, newValue, 0)

    return newValue
  }

  /**
   * Sets a new value in the cache for the specified key.
   * Each icon in the value array is augmented with the current timestamp.
   *
   * @param key - The key under which the value should be stored.
   * @param folder - The workspace folder to which the icons belong.
   * @param value - An array of SVGIcon objects to be stored in the cache.
   */
  public setIcons(folder: WorkspaceFolder, value: SVGIcon[]): void {
    const newValue = value.map((icon) => ({ ...icon, dateAdd: Date.now() }))

    super.set(this.getId(folder), newValue, 0)
  }

  /**
   * Checks if the specified icon exists in the cache for the given folder.
   *
   * @param folder - The workspace folder for which to check the icon.
   * @param icon - The SVGIcon object to check for existence in the cache.
   * @returns `true` if the icon exists in the cache, otherwise `false`.
   */
  public hasIcon(folder: WorkspaceFolder, icon: SVGIcon): boolean {
    const currentKey = this.getId(folder)
    const current = super.get(currentKey, 0) ?? []

    return current.some(
      (item) => item.name === icon.name && item.location.file.uri === icon.location.file.uri
    )
  }

  /**
   * Retrieves the cached value for the specified folder.
   *
   * @param folder - The workspace folder for which to retrieve the cached value.
   * @returns The cached value if found, or `undefined` if not found.
   */
  getIcons(folder: WorkspaceFolder): SVGIconCache[] | undefined {
    return super.get(this.getId(folder), 0)
  }

  /**
   * Deletes the cache entry for the specified folder.
   *
   * @param folder - The workspace folder for which to delete the cache entry.
   */
  deleteIcons(folder: WorkspaceFolder): void {
    super.delete(this.getId(folder))
  }

  /**
   * Generates a unique identifier string for a given workspace folder.
   *
   * The identifier is composed of the controller's kind, the folder's name,
   * and an encoded representation of the folder's URI.
   *
   * @param folder - The workspace folder for which to generate the identifier.
   * @returns A unique string identifier for the specified folder.
   */
  getId(folder: WorkspaceFolder): string {
    const folderEncode = encodeURIComponent(folder.uri.toString())
    return `[${this.kind}]-[${folder.name}]-[${folderEncode}]`
  }

  /**
   * Returns the kind of the cache.
   *
   * @returns The kind of the cache.
   */
  getKind(): CacheIconKind {
    return this.kind
  }

  /**
   * @deprecated Use `add` instead.
   */
  set(): void {
    throw new Error(l10n.t('Method not implemented'))
  }

  /**
   * @deprecated Use `getIcons` instead.
   */
  get(): SVGIconCache[] | undefined {
    throw new Error(l10n.t('Method not implemented'))
  }

  /**
   * @deprecated Use `deleteIcons` instead.
   */
  delete(): void {
    throw new Error(l10n.t('Method not implemented'))
  }
}
