import React from 'react'
import { useTranslation } from 'react-i18next'

import { dashboardPageClasses } from './Dashboard.classes'
import { BoxDashboardPage } from './Dashboard.style'

import { LoadingPage } from '@/core/components/LoadingPage'
import ResizableBox from '@/core/components/Resizable/ResizableBox'
import { ContainerComponents } from '@/modules/dashboard/components/ContainerComponents'
import { DevTools } from '@/modules/dashboard/components/DevTools'
import { SearchBar } from '@/modules/dashboard/components/SearchBar'
import { useDashboard } from '@/modules/dashboard/hooks/useDashboard'

const devToolsPanelId = 'devTools-panel'

const DashboardPage: React.FC = () => {
  const { loading } = useDashboard()
  const { t } = useTranslation(undefined, { keyPrefix: 'labels' })

  if (loading) {
    return <LoadingPage>{t('ExtractingComponents')}</LoadingPage>
  }

  return (
    <BoxDashboardPage>
      <ResizableBox className={dashboardPageClasses.content} containerId={devToolsPanelId}>
        <SearchBar />
        <ContainerComponents />
      </ResizableBox>
      <DevTools id={devToolsPanelId} />
    </BoxDashboardPage>
  )
}

export default DashboardPage
