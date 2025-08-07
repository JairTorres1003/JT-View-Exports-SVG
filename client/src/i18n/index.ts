import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import cs from './cs.json'
import de from './de.json'
import en from './en.json'
import es from './es.json'
import fr from './fr.json'
import it from './it.json'
import ja from './ja.json'
import ko from './ko.json'
import pl from './pl.json'
import pt_br from './pt-br.json'
import ru from './ru.json'
import tr from './tr.json'
import zh_cn from './zh-cn.json'
import zh_tw from './zh-tw.json'

/**
 * Initializes the i18n library with the specified configuration.
 * @returns The initialized i18n instance.
 */
i18n
  .use(initReactI18next)
  .init({
    resources: {
      cs: { translation: cs },
      de: { translation: de },
      en: { translation: en },
      es: { translation: es },
      fr: { translation: fr },
      it: { translation: it },
      ja: { translation: ja },
      ko: { translation: ko },
      pl: { translation: pl },
      pt_br: { translation: pt_br },
      ru: { translation: ru },
      tr: { translation: tr },
      zh_cn: { translation: zh_cn },
      zh_tw: { translation: zh_tw },
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
