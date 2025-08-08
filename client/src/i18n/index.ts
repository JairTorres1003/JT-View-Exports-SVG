import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const Backend = {
  type: 'backend' as const,
  read: (
    language: string,
    _namespace: string,
    callback: (error: Error | null, translations: unknown) => void
  ) => {
    import(`./locales/${language?.toLowerCase()}.json`)
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
  .use(initReactI18next)
  .init({
    lng: window.ViewExportsSVG.initConfiguration._LANGUAGE || 'en',
    fallbackLng: window.ViewExportsSVG.initConfiguration._LANGUAGE || 'en',
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
