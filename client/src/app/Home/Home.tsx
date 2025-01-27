import { LoadingPage } from '@custom/components/LoadingPage'
import { ContainerComponents } from '@home/components/ContainerComponents'
import { DevTools } from '@home/components/DevTools'
import { Resizable } from '@home/components/Resizable'
import { SearchBar } from '@home/components/SearchBar'
import { useHome } from '@home/hooks/useHome'
import React from 'react'
import { useTranslation } from 'react-i18next'

import { BoxHomePage } from './Home.style'

const HomePage: React.FC = () => {
  const { loading } = useHome()
  const { t } = useTranslation(undefined, { keyPrefix: 'labels' })

  if (loading) {
    return <LoadingPage>{t('extractingComponents')}</LoadingPage>
  }

  return (
    <BoxHomePage>
      <Resizable className='BoxHomePage__content'>
        <SearchBar />
        <ContainerComponents />
      </Resizable>
      <DevTools />
    </BoxHomePage>
  )
}

export default HomePage
