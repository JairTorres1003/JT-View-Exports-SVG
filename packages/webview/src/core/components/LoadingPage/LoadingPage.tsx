import { Box, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'

import isEmpty from '@/utils/is-empty'

import { loadingPageClasses } from './LoadingPage.classes'
import { BoxLoadingPage } from './LoadingPage.style'

interface LoadingPageProps {
  className?: string
  children?: React.ReactNode
}

const LoadingPage: React.FC<LoadingPageProps> = ({ className, children }) => {
  const { t } = useTranslation()

  return (
    <BoxLoadingPage className={className}>
      <Box className={loadingPageClasses.codePad}>
        <Typography className={loadingPageClasses.codePadContent}>
          {isEmpty(children) ? t('loading') : children}
        </Typography>
      </Box>
    </BoxLoadingPage>
  )
}

export default LoadingPage
