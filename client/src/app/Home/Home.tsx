import React from 'react'
import { useTranslation } from 'react-i18next'

import { homePageClasses } from './Home.classes'
import { BoxHomePage } from './Home.style'

import { LoadingPage } from '@/core/components/LoadingPage'
import { ContainerComponents } from '@/modules/home/components/ContainerComponents'
import { DevTools } from '@/modules/home/components/DevTools'
import ResizableHome from '@/modules/home/components/Resizable/ResizableHome'
import { SearchBar } from '@/modules/home/components/SearchBar'
import { useHome } from '@/modules/home/hooks/useHome'

const devToolsPanelId = 'devTools-panel'

const HomePage: React.FC = () => {
  const { loading } = useHome()
  const { t } = useTranslation(undefined, { keyPrefix: 'labels' })

  if (loading) {
    return <LoadingPage>{t('ExtractingComponents')}</LoadingPage>
  }

  return (
    <BoxHomePage>
      <ResizableHome className={homePageClasses.content} devTootsId={devToolsPanelId}>
        <SearchBar />
        <ContainerComponents />
      </ResizableHome>
      <DevTools id={devToolsPanelId} />
    </BoxHomePage>
  )
}

export default HomePage
