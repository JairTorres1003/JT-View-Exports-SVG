import { Stack } from '@mui/material'
import { useTranslation } from 'react-i18next'

import { LoadingPage } from '@/core/components/LoadingPage'
import { ContainerComponents } from '@/features/dashboard/components/ContainerComponents'
import { SearchBar } from '@/features/dashboard/components/SearchBar'
import { useDashboard } from '@/features/dashboard/hooks/useDashboard'

const DashboardPage: React.FC = () => {
  const { loading } = useDashboard()
  const { t } = useTranslation(undefined, { keyPrefix: 'labels' })

  if (loading) {
    return <LoadingPage>{t('ExtractingComponents')}</LoadingPage>
  }

  return (
    <Stack height='100%' overflow='hidden'>
      <SearchBar />
      <ContainerComponents />
    </Stack>
  )
}

export default DashboardPage
