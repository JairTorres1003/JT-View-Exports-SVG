import * as fs from 'fs'

import { Uri, env } from 'vscode'

// Object to store the loaded translations
let i18n: Record<string, string> = {}

/**
 * Load language translations from a JSON file.
 * @param extensionUri The Uri of the extension.
 * @returns An object containing the loaded language translations.
 */
export async function loadLanguage(extensionUri: Uri): Promise<Record<string, string>> {
  const editorLanguage = env.language ?? 'en'

  try {
    // Build the path of the language file based on the editor's language
    const fileUri = Uri.joinPath(extensionUri, 'src', 'i18n', `${editorLanguage}.json`)
    const content = fs.readFileSync(fileUri.fsPath, 'utf-8')
    i18n = JSON.parse(content)

    return i18n
  } catch (error) {
    console.error('Error loading language file:', error)

    // Reset the 'i18n' object to an empty object and return an empty object
    i18n = {}
    return {}
  }
}

/**
 * Get the currently loaded translations object.
 * @returns The currently loaded translations object.
 */
export function getTranslations(): Record<string, string> {
  return i18n
}
