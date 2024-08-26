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
   * Sets a new cache entry or updates an existing one.
   * @param key - The key (file path) under which to store the value.
   * @param value - The value to be cached.
   * @param lastModified - The last modification timestamp of the associated file.
   */
  set(key: string, value: T, lastModified: number): void {
    this.cache[key] = { value, lastModified }
  }

  /**
   * Retrieves a cached value if it exists and if the file's last modification timestamp matches or is more recent than `lastModified`.
   * @param key - The key (file path) to look up in the cache.
   * @param lastModified - The last modification timestamp of the file that is compared against the cache entry.
   * @returns The cached value if valid, or `undefined` if not found or invalid.
   */
  get(key: string, lastModified: number): T | undefined {
    const item = this.cache[key]

    if (item === undefined) {
      return undefined // Cache entry not found
    }

    if (lastModified > item.lastModified) {
      if (key in this.cache) {
        // Remove the entry if file has been modified
        const { [key]: omitted, ...rest } = this.cache
        this.cache = rest
      }

      return undefined // Cache entry is no longer valid
    }

    return item.value // Return the cached value
  }

  /**
   * Deletes a cache entry for the specified key (file path).
   * @param key - The key (file path) to delete from the cache.
   */
  delete(key: string): void {
    const { [key]: omitted, ...rest } = this.cache
    this.cache = rest
  }
}
