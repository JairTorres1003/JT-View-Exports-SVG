import * as fs from 'fs'

import { translate } from '../vscode'

/**
 * A caching mechanism for values associated with files using their modification timestamps.
 * @template T - The type of the cached value.
 */
export class FileModifiedCache<T> {
  /**
   * The cache stores data as an object where keys are file paths, and values are objects containing `value` and `lastModified`.
   */
  private cache: Record<string, { value: T; lastModified: number }> = {}
  /**
   * The file path of the cache file.
   */
  private readonly cacheFilePath: string

  /**
   * Loads the cache from the cache file.
   */
  constructor(cacheFilePath: string) {
    this.cacheFilePath = cacheFilePath
    this.loadCache()
  }

  /**
   * Sets a new cache entry or updates an existing one.
   * @param key - The key (file path) under which to store the value.
   * @param value - The value to be cached.
   * @param lastModified - The last modification timestamp of the associated file.
   */
  set(key: string, value: T, lastModified: number): void {
    this.cache[key] = { value, lastModified }
    this.saveCache()
  }

  /**
   * Retrieves a cached value if it exists and if the file's last modification timestamp matches or is more recent than `lastModified`.
   * @param key - The key (file path) to look up in the cache.
   * @param lastModified - The last modification timestamp of the file that is compared against the cache entry.
   * @returns The cached value if valid, or `undefined` if not found or invalid.
   */
  get(key: string, lastModified: number): T | undefined {
    const item = this.cache[key]

    if (item === undefined) return

    if (lastModified > item.lastModified) {
      if (key in this.cache) {
        // Remove the entry if file has been modified
        const { [key]: omitted, ...rest } = this.cache
        this.cache = rest
        this.saveCache()
      }

      return
    }

    return item.value
  }

  /**
   * Deletes a cache entry for the specified key (file path).
   * @param key - The key (file path) to delete from the cache.
   */
  delete(key: string): void {
    const { [key]: omitted, ...rest } = this.cache
    this.cache = rest
    this.saveCache()
  }

  /**
   * Saves the current cache to a file.
   *
   * This method serializes the cache object to a JSON string and writes it to the file
   * specified by `this.cacheFilePath`. If an error occurs during the write operation,
   * it logs an error message to the console.
   *
   * @throws Will log an error message if the file write operation fails.
   */
  private saveCache(): void {
    try {
      fs.writeFileSync(this.cacheFilePath, JSON.stringify(this.cache), 'utf-8')
    } catch (error) {
      console.error(`${translate('errorSavingCache')}:`, error)
    }
  }

  /**
   * Loads the cache from the file system if it exists.
   *
   * This method checks if the cache file exists at the specified path. If it does,
   * it reads the file content, parses it as JSON, and assigns it to the cache.
   * If an error occurs during this process, it logs an error message.
   *
   * @throws Will log an error message if there is an issue reading or parsing the cache file.
   */
  private loadCache(): void {
    try {
      if (fs.existsSync(this.cacheFilePath)) {
        const data = fs.readFileSync(this.cacheFilePath, 'utf-8')
        this.cache = JSON.parse(data)
      }
    } catch (error) {
      console.error(`${translate('errorLoadingCache')}:`, error)
    }
  }
}
