import { l10n, type Uri } from 'vscode'

import { FileModifiedCacheController } from './FileModifiedCacheController'

import { type CacheIconKind } from '@/enum/cache'
import { type SVGIconCache } from '@/interfaces/cache'
import { type SVGIcon } from '@/interfaces/ViewExportsSVG'

export class IconCacheController extends FileModifiedCacheController<SVGIconCache[]> {
  private readonly kind: CacheIconKind
  /**
   * The maximum number of saved icons.
   */
  private savedIconLimit?: number

  /**
   * Constructs an instance of the IconCache.
   *
   * @param cacheFilePath - The file path where the cache is stored.
   * @param savedIconLimit - Optional limit on the number of saved icons.
   */
  constructor(cacheFilePath: string, kind: CacheIconKind, savedIconLimit?: number) {
    super(cacheFilePath)
    this.kind = kind
    this.savedIconLimit = savedIconLimit
  }

  /**
   * Updates the limit on the number of saved icons.
   *
   * @param limit - The new limit on the number of saved icons.
   */
  updateLimit(limit: number): void {
    this.savedIconLimit = limit
  }

  /**
   * Adds a list of SVG icons to the cache under the specified key.
   * If an icon with the same name already exists in the cache, it will not be added again.
   *
   * @param key - The key under which the icons will be cached.
   * @param workspace - The workspace URI to which the icons belong.
   * @param value - An array of SVG icons to be added to the cache.
   */
  add(workspace: Uri, value: SVGIcon[]): void {
    const currentKey = `[${this.kind}]-[${workspace.fsPath}]`

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

    const limit = this.savedIconLimit ?? newValue.length

    super.set(currentKey, newValue.slice(0, limit), 0)
  }

  /**
   * Removes an icon from the cache.
   *
   * @param key - The key under which the icon is cached.
   * @param workspace - The workspace URI to which the icon belongs.
   * @param icon - The icon to be removed from the cache.
   */
  remove(workspace: Uri, icon: SVGIcon): void {
    const currentKey = `[${this.kind}]-[${workspace.fsPath}]`
    const current = super.get(currentKey, 0) ?? []

    const newValue = current.filter(
      (item) =>
        item.name !== icon.name &&
        item.location.file.absolutePath !== icon.location.file.absolutePath
    )

    super.set(currentKey, newValue, 0)
  }

  /**
   * Sets a new value in the cache for the specified key.
   * Each icon in the value array is augmented with the current timestamp.
   *
   * @param key - The key under which the value should be stored.
   * @param workspace - The workspace URI to which the icons belong.
   * @param value - An array of SVGIcon objects to be stored in the cache.
   */
  public setIcons(workspace: Uri, value: SVGIcon[]): void {
    const newValue = value.map((icon) => ({ ...icon, dateAdd: Date.now() }))

    super.set(`[${this.kind}]-[${workspace.fsPath}]`, newValue, 0)
  }

  /**
   * Retrieves the cached value for the specified key.
   *
   * @param key - The key to look up in the cache.
   * @returns The cached value if found, or `undefined` if not found.
   */
  getIcons(workspace: Uri): SVGIconCache[] | undefined {
    return super.get(`[${this.kind}]-[${workspace.fsPath}]`, 0)
  }

  /**
   * Deletes the cache entry for the specified key.
   *
   * @param key - The key to delete from the cache.
   */
  deleteIcons(workspace: Uri): void {
    super.delete(`[${this.kind}]-[${workspace.fsPath}]`)
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
