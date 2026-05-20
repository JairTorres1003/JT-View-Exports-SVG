import * as vsc from 'vscode'

import type { BaseCache } from './BaseCache'
import type { CacheFactoryMap } from './createFactories'

export class CacheManager<TFactories extends CacheFactoryMap> {
  private static instance: CacheManager<CacheFactoryMap> | null = null
  private readonly cacheMap = new Map<string, BaseCache<unknown>>()

  constructor(factories: TFactories) {
    for (const [key, factory] of Object.entries(factories)) {
      this.cacheMap.set(key, factory)
    }
  }

  /**
   * Initializes the CacheManager singleton instance with the provided cache factories.
   *
   * @template T - The type of the cache factory map
   * @param factories - The cache factories to initialize the manager with
   */
  public static init<T extends CacheFactoryMap>(factories: T): CacheManager<T> {
    if (!CacheManager.instance) {
      CacheManager.instance = new CacheManager(factories)
    }

    return CacheManager.instance as CacheManager<T>
  }

  /**
   * Gets the singleton instance of the CacheManager.
   *
   * @template T - The cache factory map type extending CacheFactoryMap
   * @throws  When CacheManager has not been initialized
   */
  public static getInstance<T extends CacheFactoryMap>(): CacheManager<T> {
    if (!CacheManager.instance) {
      throw new Error(vsc.l10n.t('CacheManager not initialized.'))
    }
    return CacheManager.instance as CacheManager<T>
  }

  /**
   * Retrieves a cached value by key.
   *
   * @template K - The key type, must be a key of TFactories
   * @param key - The cache key to retrieve
   * @returns The cached value associated with the key
   * @throws If no cache is found for the provided key
   */
  public get<K extends keyof TFactories>(key: K): TFactories[K] {
    const cache = this.cacheMap.get(key as string)

    if (!cache) {
      throw new Error(vsc.l10n.t('No cache found for key: {key}', { key: key as string }))
    }

    return cache as TFactories[K]
  }

  /**
   * Clears all caches managed by this CacheManager.
   * @returns A promise that resolves when all caches have been cleared.
   */
  public async clearAll(): Promise<void> {
    const clearActions = Array.from(this.cacheMap.values()).map((cache) =>
      Promise.resolve(cache.clear())
    )

    await Promise.all(clearActions)
  }

  /**
   * Clears specific caches based on the provided keys.
   * @param keys - An array of keys corresponding to the caches to clear
   */
  public async clear<K extends keyof TFactories>(keys: K[]): Promise<void> {
    const clearActions = keys.map((key) => this.get(key).clear())

    await Promise.all(clearActions)
  }
}
