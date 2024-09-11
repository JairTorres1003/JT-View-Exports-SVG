import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import en from './en.json'

/**
 * Initializes the i18n library with the specified configuration.
 * @returns The initialized i18n instance.
 */
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
    },
    lng: 'en',
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
