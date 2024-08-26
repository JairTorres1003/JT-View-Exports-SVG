import * as assert from 'assert'
import * as path from 'path'

import * as vscode from 'vscode'

import { extensionUri } from '../../main.test'

import { type Translations } from '@/interfaces/i18n'
import { loadLanguage, getTranslations } from '@/utilities/vscode/language'

const i18nFolder = vscode.Uri.joinPath(extensionUri, 'src', 'i18n')

const translations: Array<Partial<keyof Translations>> = [
  'extensionTitle',
  'iconExtractionInProgress',
  'noExistedFile',
  'noFileSelected',
  'noIconsFound',
  'searchMinChars',
]

suite('Language Utility', () => {
  test('it should load language translations from a JSON file', async () => {
    const result = await loadLanguage(extensionUri)

    assert.ok(result)
  })

  test('it should return the currently loaded translations object', (done) => {
    const result = Object.keys(getTranslations())

    translations.forEach((translation) => {
      if (!result.includes(translation)) {
        done(new Error(`Missing translation: ${translation}`))
      }
    })

    done()
  })
})

vscode.workspace.fs.readDirectory(i18nFolder).then((result) => {
  suite('Language Utility (with language override)', () => {
    for (const [fileName, fileType] of result) {
      if (fileType === vscode.FileType.File) {
        const language = path.basename(fileName, '.json')

        test(`should load language translation (${language}) from a JSON file`, async () => {
          await loadLanguage(extensionUri, language)
          const result = Object.keys(getTranslations())

          translations.forEach((translation) => {
            if (!result.includes(translation)) {
              assert.fail(`Missing translation: ${translation}`)
            }
          })

          assert.ok(result)
        })
      }
    }
  })
}, console.error)
