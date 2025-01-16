// deno-lint-ignore-file no-explicit-any
// @ts-types="npm:@types/vscode@1.60.0"
import { Extension, ExtensionContext, ExtensionMode, ExtensionRuntime } from 'vscode'
import { existsSync } from 'fs'
import * as path from 'path'
import { Uri } from 'vscode'

import { createMockEnvironmentVariableCollection } from '@/mocks/EnvironmentVariableCollection.mock.ts'

const BASE_PATH = Deno.env.get('BASE_PATH') ?? ''

/**
 * Creates a mock extension context for testing purposes.
 *
 * @param extension - The extension for which the mock context is being created.
 * @returns A mock implementation of the `ExtensionContext` interface.
 */
export function createMockExtensionContext(extension: Extension<any>): ExtensionContext {
  const subscriptions: { dispose(): any }[] = []

  const globalStorageUri = createExtensionUri(`mocks/globalStorage/${extension.id}/`)
  const logUri = createExtensionUri(`mocks/logs/${extension.id}/`)
  const storageUri = createExtensionUri(`mocks/workspaceStorage/${extension.id}/`)

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
 * Creates a URI for the specified directory within the extension's path.
 * If the directory does not exist, it will be created recursively.
 *
 * @param directory - The directory within the extension path to create a URI for.
 * @returns The URI of the specified directory.
 */
function createExtensionUri(directory: string): Uri {
  const pathToExtension = path.join(BASE_PATH, 'src', 'extension', directory)

  if (!existsSync(pathToExtension)) {
    Deno.mkdirSync(pathToExtension, { recursive: true })
  }

  return Uri.file(pathToExtension)
}
