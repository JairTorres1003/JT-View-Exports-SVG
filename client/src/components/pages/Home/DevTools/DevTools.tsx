import { useTranslation } from 'react-i18next'

import { BoxDevTools } from './DevTools.style'

export const DevTools = (): React.ReactNode => {
  const { t } = useTranslation(undefined, { keyPrefix: 'DevTools' })

  return <BoxDevTools id='BoxDevTools'>{t('title')}</BoxDevTools>
}
