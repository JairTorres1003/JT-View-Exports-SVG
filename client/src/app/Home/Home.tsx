import React from 'react'
import { useTranslation } from 'react-i18next'

import { BoxHomePage } from './Home.style'

import { LoadingPage } from '@/core/components/LoadingPage'
import { ContainerComponents } from '@/modules/Home/components/ContainerComponents'
import { DevTools } from '@/modules/Home/components/DevTools'
import { ResizableHome } from '@/modules/Home/components/Resizable'
import { SearchBar } from '@/modules/Home/components/SearchBar'
import { useHome } from '@/modules/Home/hooks/useHome'

const HomePage: React.FC = () => {
  const { loading } = useHome()
  const { t } = useTranslation(undefined, { keyPrefix: 'labels' })

  if (loading) {
    return <LoadingPage>{t('Extracting components')}</LoadingPage>
  }

  return (
    <BoxHomePage>
      <ResizableHome className='BoxHomePage__content' devTootsId='devTools-panel'>
        <SearchBar />
        <ContainerComponents />
      </ResizableHome>
      <DevTools id='devTools-panel' />
    </BoxHomePage>
  )
}

export default HomePage
