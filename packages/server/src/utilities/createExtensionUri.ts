import { existsSync } from 'node:fs'
import { Uri } from 'vscode'

/**
 * Creates a URI for the given directory. If the directory does not exist, it will be created.
 *
 * @param directory - The path of the directory for which to create the URI.
 * @returns The URI of the specified directory.
 */
export function createExtensionUri(directory: string): Uri {
  if (!existsSync(directory)) {
    Deno.mkdirSync(directory, { recursive: true })
  }

  return Uri.file(directory)
}
