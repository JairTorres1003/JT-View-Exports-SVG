import {
  getBuiltinExtensions,
  type IExtensionManifest,
} from '@codingame/monaco-vscode-api/extensions'

function getExtensionId(publisher: string, name: string): string {
  return `${publisher}.${name}`
}

/**
 * Checks if an extension is already installed in the builtin extensions.
 * @param manifest - The extension manifest containing publisher and name information
 * @returns True if an extension with the same identifier already exists, false otherwise
 */
export default function isExtensionAlreadyInstalled(manifest: IExtensionManifest): boolean {
  const extensionId = getExtensionId(manifest.publisher, manifest.name)
  const existingExtensions = getBuiltinExtensions()

  return existingExtensions.some((ext) => ext.identifier.id === extensionId)
}
