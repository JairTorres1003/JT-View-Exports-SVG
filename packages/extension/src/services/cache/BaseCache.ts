import * as vsc from 'vscode'
import xxhash from 'xxhashjs'

export interface CacheMetadata {
  mtime: number
  size: number
  hash: string
}

export abstract class BaseCache<T> {
  private readonly indexKey: string
  private readonly storageUri: vsc.Uri
  private index: Record<string, CacheMetadata>

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
   * Generates a safe and short filename using xxhash.
   */
  private createSafeFileName(identifier: string): string {
    const hash = xxhash.h64(identifier, 0xabcd).toString(36)
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

  public async get(identifier: string): Promise<T | undefined> {
    const meta = this.index[identifier]
    if (!meta) return undefined

    try {
      const fileUriInDisk = vsc.Uri.joinPath(this.storageUri, `${meta.hash}.json`)
      const content = await vsc.workspace.fs.readFile(fileUriInDisk)
      return JSON.parse(content.toString()) as T
    } catch (_err) {
      // If the file doesn't exist or is corrupted, clean up the index
      delete this.index[identifier]
      await this.persistIndex()
      return undefined
    }
  }

  public async set(identifier: string, data: T): Promise<void> {
    await this.ensureDirectory()

    const fileName = this.createSafeFileName(identifier)
    const fileUriInDisk = vsc.Uri.joinPath(this.storageUri, `${fileName}.json`)

    try {
      // Serialize and write
      const buffer = Buffer.from(JSON.stringify(data))
      await vsc.workspace.fs.writeFile(fileUriInDisk, buffer)

      // Update metadata
      this.index[identifier] = {
        mtime: Date.now(),
        size: buffer.length,
        hash: fileName,
      }

      await this.persistIndex()
    } catch (err) {
      console.error(`Error writing cache for ${identifier}:`, err)
    }
  }

  /**
   * Checks if an identifier exists in the cache index.
   */
  public has(identifier: string): boolean {
    return identifier in this.index
  }

  /**
   * Deletes a cache record and its physical file.
   */
  public async delete(identifier: string): Promise<void> {
    const meta = this.index[identifier]
    if (!meta) return

    try {
      const fileUriInDisk = vsc.Uri.joinPath(this.storageUri, `${meta.hash}.json`)
      await vsc.workspace.fs.delete(fileUriInDisk, { useTrash: false })
    } catch {
      // Ignore if the file no longer exists
    }

    delete this.index[identifier]
    await this.persistIndex()
  }

  /**
   * Saves the index to VS Code's persistent storage.
   */
  private async persistIndex() {
    await this.context.workspaceState.update(this.indexKey, this.index)
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
    await this.persistIndex()
  }
}
