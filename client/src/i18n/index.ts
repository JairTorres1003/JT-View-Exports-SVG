import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

const Backend = {
  type: 'backend' as const,
  read: (
    language: string,
    _namespace: string,
    callback: (error: Error | null, translations: unknown) => void
  ) => {
    import(`./locales/${language}.json`)
      .then((translations) => {
        callback(null, translations)
      })
      .catch((error) => {
        callback(error, null)
      })
  },
}

/**
 * Initializes the i18n library with the specified configuration.
 * @returns The initialized i18n instance.
 */
i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    react: {
      transKeepBasicHtmlNodesFor: ['b', 'strong', 'i'],
    },
  })
  .catch((err) => {
    console.error('i18n initialization failed', err)
  })

export default i18n
