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
  private declarations: Record<FileIdentifier, PendingExtraction[]> = {}

  static getInstance(): ComponentDeclarationStore {
    if (!ComponentDeclarationStore.instance) {
      ComponentDeclarationStore.instance = new ComponentDeclarationStore()
    }
    return ComponentDeclarationStore.instance
  }

  get(fileId: FileIdentifier): PendingExtraction[] {
    return this.declarations[fileId] || []
  }

  set(fileId: FileIdentifier, declarations: PendingExtraction[]): void {
    this.declarations[fileId] = declarations
  }
}

export const componentDeclarationStore = ComponentDeclarationStore.getInstance()
