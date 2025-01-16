// deno-lint-ignore-file no-explicit-any
// @ts-types="npm:@types/vscode@1.60.0"
import { Extension, ExtensionContext, ExtensionMode, ExtensionRuntime } from 'vscode'
import { existsSync } from 'fs'
import { Uri } from 'vscode'

import { createMockEnvironmentVariableCollection } from '@/mocks/EnvironmentVariableCollection.mock.ts'

/**
 * Creates a mock extension context for testing purposes.
 *
 * @param extension - The extension for which the mock context is being created.
 * @returns A mock implementation of the `ExtensionContext` interface.
 */
export function createMockExtensionContext(extension: Extension<any>): ExtensionContext {
  const subscriptions: { dispose(): any }[] = []

  const tempDir = Deno.makeTempDirSync({ prefix: extension.id })

  const globalStorageUri = createExtensionUri(`${tempDir}/mocks/globalStorage`)
  const logUri = createExtensionUri(`${tempDir}/mocks/logs`)
  const storageUri = createExtensionUri(`${tempDir}/mocks/workspaceStorage`)

  const environmentVariableCollection = createMockEnvironmentVariableCollection()

  return {
    subscriptions,
    extension,
    extensionMode: ExtensionMode.Development,
    extensionPath: extension.extensionPath,
    extensionUri: extension.extensionUri,
    globalStoragePath: globalStorageUri.fsPath,
    globalStorageUri,
    logPath: logUri.fsPath,
    logUri,
    storagePath: storageUri.fsPath,
    storageUri,
    asAbsolutePath: (relativePath: string) =>
      Uri.joinPath(extension.extensionUri, relativePath).fsPath,
    workspaceState: {
      get: (_, defaultValue = undefined) => defaultValue,
      update: async () => {},
      keys: () => [],
    },
    globalState: {
      get: (_, defaultValue = undefined) => defaultValue,
      update: async () => {},
      keys: () => [],
      setKeysForSync() {},
    },
    environmentVariableCollection: {
      ...environmentVariableCollection,
      getScoped: () => environmentVariableCollection,
    },
    secrets: {
      delete: async () => {},
      get: () => Promise.resolve(undefined),
      onDidChange: () => ({ dispose: () => {} }),
      store: async () => {},
    },
    languageModelAccessInformation: {
      canSendRequest: () => true,
      onDidChange: () => ({ dispose: () => {} }),
    },
    messagePassingProtocol: {
      onDidReceiveMessage: () => ({ dispose: () => {} }),
      postMessage: () => {},
    },
    extensionRuntime: ExtensionRuntime.Node,
  }
}

/**
 * Creates a URI for the given directory. If the directory does not exist, it will be created.
 *
 * @param directory - The path of the directory for which to create the URI.
 * @returns The URI of the specified directory.
 */
function createExtensionUri(directory: string): Uri {
  if (!existsSync(directory)) {
    Deno.mkdirSync(directory, { recursive: true })
  }

  return Uri.file(directory)
}
