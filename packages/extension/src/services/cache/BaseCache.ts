import * as vsc from 'vscode'
import xxhash from 'xxhashjs'

export interface CacheMetadata {
  mtime: number
  size: number
  hash: string
}

export abstract class BaseCache<T, Tidentifier = string> {
  private readonly indexKey: string
  private readonly storageUri: vsc.Uri
  private index: Record<string, CacheMetadata>

  // Layer 1: In-memory cache for fast access
  private memoryCache = new Map<string, T>()

  // Debounce drivers for disk writing
  private writeTimers = new Map<string, NodeJS.Timeout>()

  constructor(
    protected context: vsc.ExtensionContext,
    protected cacheId: string
  ) {
    this.indexKey = `jt.cache.index.${cacheId}`
    this.storageUri = vsc.Uri.joinPath(context.globalStorageUri, 'cache', cacheId)

    // Load the index from the global workspace state
    this.index = this.context.workspaceState.get<Record<string, CacheMetadata>>(this.indexKey) || {}
  }

  /**
   * Converts an identifier to its string representation.
   * @param id - The identifier to convert, which can be a string or an object.
   */
  protected getIdentifier(id: Tidentifier): string {
    return typeof id === 'string' ? id : JSON.stringify(id)
  }

  /**
   * Generates a safe and short filename using xxhash.
   */
  private createSafeFileName(name: string): string {
    const hash = xxhash.h64(name, 0xabcd).toString(36)
    return `cache-${hash}`
  }

  /**
   * Ensures the cache directory exists.
   */
  private async ensureDirectory() {
    try {
      await vsc.workspace.fs.createDirectory(this.storageUri)
    } catch (error) {
      console.error(`Error ensuring cache directory for ${this.cacheId}:`, error)
    }
  }

  /**
   * Saves the index to VS Code's persistent storage.
   */
  private persistIndex() {
    this.context.workspaceState.update(this.indexKey, this.index).then(undefined, (err) => {
      console.error(`Error persisting cache index for ${this.cacheId}:`, err)
    })
  }

  /**
   * Flushes data to disk and updates the cache index.
   */
  private async flushToDisk(id: string, data: T): Promise<void> {
    await this.ensureDirectory()

    const fileName = this.createSafeFileName(id)
    const fileUriInDisk = vsc.Uri.joinPath(this.storageUri, `${fileName}.json`)

    const buffer = Buffer.from(JSON.stringify(data))
    await vsc.workspace.fs.writeFile(fileUriInDisk, buffer)

    this.index[id] = {
      mtime: Date.now(),
      size: buffer.length,
      hash: fileName,
    }

    this.persistIndex()
  }

  public set(identifier: Tidentifier, data: T): void {
    const id = this.getIdentifier(identifier)

    this.memoryCache.set(id, data)

    if (this.writeTimers.has(id)) {
      clearTimeout(this.writeTimers.get(id))
    }

    const timer = setTimeout(() => {
      this.flushToDisk(id, data).catch((err) => {
        console.error(`Error flushing cache to disk for ${id}:`, err)
      })
      this.writeTimers.delete(id)
    }, 2500)

    this.writeTimers.set(id, timer)
  }

  public async get(identifier: Tidentifier): Promise<T | undefined> {
    const id = this.getIdentifier(identifier)

    if (this.memoryCache.has(id)) {
      return this.memoryCache.get(id)
    }

    const meta = this.index[id]
    if (!meta) return undefined

    try {
      const fileUriInDisk = vsc.Uri.joinPath(this.storageUri, `${meta.hash}.json`)
      const content = await vsc.workspace.fs.readFile(fileUriInDisk)
      const data = JSON.parse(content.toString()) as T

      // Store in memory cache for faster future access
      this.memoryCache.set(id, data)
      return data
    } catch {
      delete this.index[id]
      this.persistIndex()
      return undefined
    }
  }

  public has(identifier: Tidentifier): boolean {
    const id = this.getIdentifier(identifier)
    return this.memoryCache.has(id) || id in this.index
  }

  public async delete(identifier: Tidentifier): Promise<void> {
    const id = this.getIdentifier(identifier)

    this.memoryCache.delete(id)

    if (this.writeTimers.has(id)) {
      clearTimeout(this.writeTimers.get(id))
      this.writeTimers.delete(id)
    }

    const meta = this.index[id]
    if (!meta) return

    try {
      const fileUriInDisk = vsc.Uri.joinPath(this.storageUri, `${meta.hash}.json`)
      await vsc.workspace.fs.delete(fileUriInDisk, { useTrash: false })
    } catch {
      // Ignore if the file no longer exists
    }

    delete this.index[id]
    this.persistIndex()
  }

  /**
   * Clears all cache of this type.
   */
  public async clear(): Promise<void> {
    try {
      await vsc.workspace.fs.delete(this.storageUri, { recursive: true, useTrash: false })
    } catch {
      // Ignore if the directory doesn't exist
    }
    this.index = {}
    this.persistIndex()
  }
}
