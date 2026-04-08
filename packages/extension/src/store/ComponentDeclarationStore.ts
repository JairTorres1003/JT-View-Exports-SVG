import type * as t from '@babel/types'
import type { FileIdentifier, PendingExtraction } from '@jt-view-exports-svg/core'

/**
 * In-memory store (singleton) for component declarations extracted with Babel.
 *
 * @remarks
 * This class keeps, during the user's active session, the nodes/data extracted
 * from source code and organizes them by `FileIdentifier`. It does not persist
 * information to disk; its lifecycle depends on the extension's running process.
 */
class ComponentDeclarationStore {
  private static instance: ComponentDeclarationStore
  private declarations: Record<FileIdentifier, Record<string, PendingExtraction>> = {}

  static getInstance(): ComponentDeclarationStore {
    if (!ComponentDeclarationStore.instance) {
      ComponentDeclarationStore.instance = new ComponentDeclarationStore()
    }
    return ComponentDeclarationStore.instance
  }

  get(fileId: FileIdentifier): Record<string, PendingExtraction> | undefined {
    return this.declarations[fileId]
  }

  set(fileId: FileIdentifier, declarations: PendingExtraction[]): void {
    this.declarations[fileId] = declarations.reduce(
      (acc, decl) => {
        const name = (decl.node.id as t.Identifier)?.name || 'default'
        acc[name] = decl
        return acc
      },
      {} as Record<string, PendingExtraction>
    )
  }

  clear(): void {
    this.declarations = {}
  }
}

export const componentDeclarationStore = ComponentDeclarationStore.getInstance()
