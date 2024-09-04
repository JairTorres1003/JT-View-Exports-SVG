import * as fs from 'fs'

import { Uri, env } from 'vscode'

import { type TranslationOptions, type Translations } from '@/interfaces/i18n'

// Object to store the loaded translations
let i18n: Translations

/**
 * Load language translations from a JSON file.
 * @param extensionUri The Uri of the extension.
 * @returns An object containing the loaded language translations.
 */
export async function loadLanguage(extensionUri: Uri, language?: string): Promise<Translations> {
  const editorLanguage = language ?? env.language ?? 'en'
  let content: string

  try {
    // Build the path of the language file based on the editor's language
    const fileUri = Uri.joinPath(extensionUri, 'src', 'i18n', `${editorLanguage}.json`)
    content = fs.readFileSync(fileUri.fsPath, 'utf-8')
  } catch (error) {
    console.error('Error loading language file:', error)
    const fileUri = Uri.joinPath(extensionUri, 'src', 'i18n', 'en.json')
    content = fs.readFileSync(fileUri.fsPath, 'utf-8')
  }

  i18n = JSON.parse(content) as Translations
  return i18n
}

/**
 * Get the currently loaded translations object.
 * @returns The currently loaded translations object.
 */
export function getTranslations(): Translations {
  return i18n
}

/**
 * Translates the given key using the provided options.
 *
 * @param key - The key to be translated.
 * @param options - The options to be used for translation.
 * @returns The translated string.
 */
export function translate<K extends keyof Translations>(
  key: K,
  options?: TranslationOptions<K>
): string {
  const translation = i18n[key]

  if (options !== undefined) {
    let translated: string = translation

    for (const [optKey, value] of Object.entries(options as Record<string, string>)) {
      translated = translated.replace(`{${optKey}}`, value)
    }

    return translated
  }

  return translation
}
