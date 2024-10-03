import { type Uri } from 'vscode'

import { translate } from '../vscode'

import { FileModifiedCache } from './FileModifiedCache'

import { type CacheIconKind } from '@/enum/cache'
import { type SVGIconCache } from '@/interfaces/cache'
import { type SVGIcon } from '@/interfaces/ViewExportsSVG'

export class IconCache extends FileModifiedCache<SVGIconCache[]> {
  /**
   * The maximum number of saved icons.
   */
  private readonly savedIconLimit?: number

  /**
   * Constructs an instance of the IconCache.
   *
   * @param cacheFilePath - The file path where the cache is stored.
   * @param savedIconLimit - Optional limit on the number of saved icons.
   */
  constructor(cacheFilePath: string, savedIconLimit?: number) {
    super(cacheFilePath)
    this.savedIconLimit = savedIconLimit
  }

  /**
   * Adds a list of SVG icons to the cache under the specified key.
   * If an icon with the same name already exists in the cache, it will not be added again.
   *
   * @param key - The key under which the icons will be cached.
   * @param workspace - The workspace URI to which the icons belong.
   * @param value - An array of SVG icons to be added to the cache.
   */
  add(key: CacheIconKind, workspace: Uri, value: SVGIcon[]): void {
    const currentKey = `${key}-${workspace.fsPath}`

    const current = super.get(currentKey, 0) ?? []
    const newValue = current

    value.forEach((icon) => {
      const existing = current.some(
        (item) =>
          item.name === icon.name &&
          item.location.file.absolutePath === icon.location.file.absolutePath
      )

      if (!existing) {
        newValue.unshift({ ...icon, dateAdd: Date.now() })
      }
    })

    const limit = this.savedIconLimit ?? newValue.length

    super.set(currentKey, newValue.slice(-limit), 0)
  }

  /**
   * Removes an icon from the cache.
   *
   * @param key - The key under which the icon is cached.
   * @param workspace - The workspace URI to which the icon belongs.
   * @param icon - The icon to be removed from the cache.
   */
  remove(key: CacheIconKind, workspace: Uri, icon: SVGIcon): void {
    const currentKey = `${key}-${workspace.fsPath}`
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
  public setIcons(key: CacheIconKind, workspace: Uri, value: SVGIcon[]): void {
    const newValue = value.map((icon) => ({ ...icon, dateAdd: Date.now() }))

    super.set(`${key}-${workspace.fsPath}`, newValue, 0)
  }

  /**
   * Retrieves the cached value for the specified key.
   *
   * @param key - The key to look up in the cache.
   * @returns The cached value if found, or `undefined` if not found.
   */
  getIcon(key: CacheIconKind, workspace: Uri): SVGIconCache[] | undefined {
    return super.get(`${key}-${workspace.fsPath}`, 0)
  }

  /**
   * Deletes the cache entry for the specified key.
   *
   * @param key - The key to delete from the cache.
   */
  deleteIcon(key: CacheIconKind, workspace: Uri): void {
    super.delete(`${key}-${workspace.fsPath}`)
  }

  set(): void {
    throw new Error(translate('methodNotImplemented'))
  }

  get(): SVGIconCache[] | undefined {
    throw new Error(translate('methodNotImplemented'))
  }

  delete(): void {
    throw new Error(translate('methodNotImplemented'))
  }
}
