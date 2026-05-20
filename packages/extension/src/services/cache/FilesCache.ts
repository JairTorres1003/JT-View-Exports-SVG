import type { FileIdentifier, SVGFile } from '@jt-view-exports-svg/core'
import type * as vsc from 'vscode'

import { BaseCache } from './BaseCache'

type FilesScope = vsc.WorkspaceFolder | 'global'

export class FilesCache extends BaseCache<Record<FileIdentifier, SVGFile>, FilesScope> {
  constructor(ctx: vsc.ExtensionContext) {
    super(ctx, 'files')
  }

  protected override getIdentifier(id: FilesScope): string {
    return typeof id === 'string' ? id : id.uri.toString()
  }

  async upsert(workspace: FilesScope, file: SVGFile): Promise<void> {
    const entry = (await this.get(workspace)) ?? ({} as Record<FileIdentifier, SVGFile>)
    entry[file.id] = file
    this.set(workspace, entry)
  }

  async getFile(workspace: FilesScope, id: FileIdentifier): Promise<SVGFile | undefined> {
    const entry = await this.get(workspace)
    return entry?.[id]
  }

  async isStale(workspace: FilesScope, file: SVGFile): Promise<boolean> {
    const cached = await this.getFile(workspace, file.id)
    if (!cached) return true
    return file.lastModified > cached.lastModified
  }

  async removeByIds(workspace: FilesScope, ids: FileIdentifier[]): Promise<void> {
    const entry = await this.get(workspace)
    if (!entry) return
    for (const id of ids) {
      delete entry[id]
    }
    this.set(workspace, entry)
  }

  async pruneUnreferenced(workspace: FilesScope, referencedIds: FileIdentifier[]): Promise<void> {
    const entry = await this.get(workspace)
    if (!entry) return
    const refSet = new Set(referencedIds)
    for (const id of Object.keys(entry) as FileIdentifier[]) {
      if (!refSet.has(id)) {
        delete entry[id]
      }
    }
    this.set(workspace, entry)
  }
}
