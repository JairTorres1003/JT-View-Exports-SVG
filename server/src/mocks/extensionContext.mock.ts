// biome-ignore-all lint/suspicious/noExplicitAny: This is a mock, so using `any` is acceptable in this context.
import { type Extension, type ExtensionContext, ExtensionMode, ExtensionRuntime, Uri } from 'vscode'

import { createMockEnvironmentVariableCollection } from '@/mocks/EnvironmentVariableCollection.mock.ts'
import { createExtensionUri } from '@/utilities/createExtensionUri.ts'

/**
 * Creates a mock extension context for testing purposes.
 *
 * @param extension - The extension for which the mock context is being created.
 * @returns A mock implementation of the `ExtensionContext` interface.
 */
export function createMockExtensionContext(
  extension: Extension<any>,
  tempDir: string
): ExtensionContext {
  const subscriptions: { dispose(): any }[] = []

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
      // @ts-expect-error - this is a mock
      getScoped: () => environmentVariableCollection,
    },
    secrets: {
      delete: async () => {},
      get: () => Promise.resolve(undefined),
      onDidChange: () => ({ dispose: () => null }),
      store: async () => {},
    },
    languageModelAccessInformation: {
      canSendRequest: () => true,
      onDidChange: () => ({ dispose: () => null }),
    },
    messagePassingProtocol: {
      onDidReceiveMessage: () => ({ dispose: () => null }),
      postMessage: () => null,
    },
    extensionRuntime: ExtensionRuntime.Node,
  }
}
