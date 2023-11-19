import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import de from './de.json'
import en from './en.json'
import es from './es.json'
import fr from './fr.json'
import ja from './ja.json'
import pt_br from './pt-br.json'
import pt_pt from './pt-pt.json'
import ru from './ru.json'
import zh_cn from './zh-cn.json'
import zh_tw from './zh-tw.json'

// Configuration for i18next
i18n
  .use(initReactI18next)
  .init({
    resources: {
      de: { translation: de },
      en: { translation: en },
      es: { translation: es },
      fr: { translation: fr },
      ja: { translation: ja },
      pt_br: { translation: pt_br },
      pt_pt: { translation: pt_pt },
      ru: { translation: ru },
      zh_cn: { translation: zh_cn },
      zh_tw: { translation: zh_tw },
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  })
  .catch((err) => {
    console.error('i18n initialization failed', err)
  })

export default i18n
