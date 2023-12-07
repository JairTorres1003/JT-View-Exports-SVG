import * as path from 'path'

import { LANGUAGES } from '../constants/fileLanguages'

/**
 * Retrieves the language of a file based on its extension.
 * @param fileName - The name of the file.
 * @returns The language of the file, or 'plaintext' if no matching language is found.
 */
export const getFileLanguage = (fileName: string) => {
  const fileExtension = path.extname(fileName).replace('.', '')
  const language = LANGUAGES.find((lang) => lang.extensions.includes(fileExtension))

  return language ? language.name : 'plaintext'
}
