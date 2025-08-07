import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-http-backend'
import { initReactI18next } from 'react-i18next'

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
    supportedLngs: [
      'cs',
      'de',
      'en',
      'es',
      'fr',
      'it',
      'ja',
      'ko',
      'pl',
      'pt-BR',
      'ru',
      'tr',
      'zh-CN',
      'zh-TW',
    ],
    interpolation: {
      escapeValue: false,
    },
    react: {
      transKeepBasicHtmlNodesFor: ['b', 'strong', 'i'],
    },
    backend: {
      loadPath: '/assets/locales/{{lng}}.json',
    },
  })
  .catch((err) => {
    console.error('i18n initialization failed', err)
  })

export default i18n
