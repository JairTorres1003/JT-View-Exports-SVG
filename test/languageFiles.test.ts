import * as fs from 'fs'
import * as path from 'path'

const languageFiles = fs.readdirSync(path.join(__dirname, '../src/i18n'))
const keysI18n = ['panelTitle', 'progressTitle', 'NoIconsFound', 'NoFileSelected', 'PleaseSearch']

describe('language files', () => {
  languageFiles.forEach((file) => {
    if (path.extname(file) === '.json') {
      const language = path.basename(file, '.json')
      const languagePath = path.join(__dirname, `../src/i18n/${file}`)
      const languageFile = fs.readFileSync(languagePath, 'utf8')
      const languageJson = JSON.parse(languageFile)

      describe(`language file: ${language}`, () => {
        it('should have the same keys as the default language', () => {
          keysI18n.forEach((key) => {
            expect(languageJson).toHaveProperty(key)
          })
        })
      })
    }
  })
})
