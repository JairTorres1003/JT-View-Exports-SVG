// biome-ignore-all lint/suspicious/noExplicitAny: This file is responsible for creating a context for the extension, and using `any` allows for flexibility in the implementation without strict type constraints.
import path from 'node:path'
import { EventEmitter, type ExtensionContext, ExtensionMode, Uri } from 'vscode'

function createFileSystemContext(workspaceUri: Uri): ExtensionContext {
  const storagePath = Uri.joinPath(workspaceUri, 'storage')
  const globalStoragePath = Uri.joinPath(workspaceUri, 'global-storage')
  const logPath = Uri.joinPath(workspaceUri, 'logs')

  return {
    extensionUri: workspaceUri,
    extensionPath: workspaceUri.fsPath,
    storageUri: storagePath,
    globalStorageUri: globalStoragePath,
    logUri: logPath,

    workspaceState: {
      get: () => undefined,
      update: () => Promise.resolve(),
      keys: () => [],
    },
    globalState: {
      get: () => undefined,
      update: () => Promise.resolve(),
      keys: () => [],
      setKeysForSync: () => {},
    },

    subscriptions: [],

    asAbsolutePath: (relativePath: string) => path.join(workspaceUri.fsPath, relativePath),

    extensionMode: ExtensionMode.Development,
    secrets: {
      keys: () => Promise.resolve([]),
      get: () => Promise.resolve(undefined),
      store: () => Promise.resolve(),
      delete: () => Promise.resolve(),
      onDidChange: new EventEmitter<any>().event,
    },
    environmentVariableCollection: {} as any,
    extension: { id: 'jt-server-ext' } as any,
  } as unknown as ExtensionContext
}

export default createFileSystemContext
