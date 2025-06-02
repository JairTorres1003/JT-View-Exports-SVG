import { l10n, type Uri } from 'vscode'

import { FileModifiedCacheController } from './FileModifiedCacheController'

import type { CacheIconKind } from '@/enum/cache'
import type { SVGIconCache } from '@/types/cache'
import type { SVGIcon } from '@/types/ViewExportsSVG'

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
  constructor(
    cacheFilePath: string,
    kind: CacheIconKind,
    savedIconLimit?: number | (() => number)
  ) {
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
  add(folder: Uri, value: SVGIcon[]): SVGIconCache[] {
    const currentKey = `[${this.kind}]-[${folder.fsPath}]`

    const current = super.get(currentKey, 0) ?? []
    const newValue = current

    value.forEach((icon) => {
      const existing = current.findIndex(
        (item) =>
          item.name === icon.name &&
          item.location.file.absolutePath === icon.location.file.absolutePath
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
   * @param folder - The folder URI to which the icon belongs.
   * @param icon - The icon to be removed from the cache.
   * @returns The new list of icons after the specified icon has been removed.
   */
  remove(folder: Uri, icon: SVGIcon): SVGIconCache[] {
    const currentKey = `[${this.kind}]-[${folder.fsPath}]`
    const current = super.get(currentKey, 0) ?? []

    const newValue = current.filter(
      (item) =>
        item.name !== icon.name &&
        item.location.file.absolutePath !== icon.location.file.absolutePath
    )

    super.set(currentKey, newValue, 0)

    return newValue
  }

  /**
   * Sets a new value in the cache for the specified key.
   * Each icon in the value array is augmented with the current timestamp.
   *
   * @param key - The key under which the value should be stored.
   * @param folder - The folder URI to which the icons belong.
   * @param value - An array of SVGIcon objects to be stored in the cache.
   */
  public setIcons(folder: Uri, value: SVGIcon[]): void {
    const newValue = value.map((icon) => ({ ...icon, dateAdd: Date.now() }))

    super.set(`[${this.kind}]-[${folder.fsPath}]`, newValue, 0)
  }

  /**
   * Retrieves the cached value for the specified key.
   *
   * @param key - The key to look up in the cache.
   * @returns The cached value if found, or `undefined` if not found.
   */
  getIcons(folder: Uri): SVGIconCache[] | undefined {
    return super.get(`[${this.kind}]-[${folder.fsPath}]`, 0)
  }

  /**
   * Deletes the cache entry for the specified key.
   *
   * @param key - The key to delete from the cache.
   */
  deleteIcons(folder: Uri): void {
    super.delete(`[${this.kind}]-[${folder.fsPath}]`)
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
