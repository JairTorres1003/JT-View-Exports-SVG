import { Box } from '@mui/material'
import type { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { BoxLoadingPage } from './LoadingPage.style'

import { isEmpty } from '@/utils/misc'

interface LoadingPageProps {
  className?: string
  children?: React.ReactNode
}

export const LoadingPage: FC<LoadingPageProps> = ({ className, children }) => {
  const { t } = useTranslation(undefined, { keyPrefix: 'labels' })

  return (
    <BoxLoadingPage className={className}>
      <Box className='Box-LoadingPage__codePad'>
        <Box className='Box-LoadingPage__codePad__content'>
          {isEmpty(children) ? t('Loading') : children}
        </Box>
      </Box>
    </BoxLoadingPage>
  )
}
