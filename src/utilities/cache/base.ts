/**
 * A base cache class that stores key-value pairs.
 * @template T The type of values stored in the cache.
 */
export class BaseCache<T> {
  private cache: Record<string, T> = {}

  /**
   * Sets a value in the cache with the specified key.
   * @param key The key to associate with the value.
   * @param value The value to be stored in the cache.
   */
  set(key: string, value: T): void {
    this.cache[key] = value
  }

  /**
   * Retrieves the value associated with the specified key from the cache.
   * @param key The key of the value to retrieve.
   * @returns The value associated with the key, or undefined if the key is not found in the cache.
   */
  get(key: string): T | undefined {
    return this.cache[key]
  }

  /**
   * Deletes the value associated with the specified key from the cache.
   * @param key The key of the value to delete.
   */
  delete(key: string): void {
    const { [key]: omitted, ...rest } = this.cache
    this.cache = rest
  }

  /**
   * Clears the cache, removing all key-value pairs.
   */
  clear(): void {
    this.cache = {}
  }

  /**
   * Checks if the cache contains a value associated with the specified key.
   * @param key The key to check.
   * @returns True if the cache contains the key, false otherwise.
   */
  has(key: string): boolean {
    return key in this.cache
  }
}
