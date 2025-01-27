import { LoadingPage } from '@custom/components/LoadingPage'
import { ContainerComponents } from '@home/components/ContainerComponents'
import { SearchBar } from '@home/components/SearchBar'
import { useHome } from '@home/hooks/useHome'
import { Resizable } from 're-resizable'
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
      <Resizable
        minWidth='300'
        maxWidth='100%'
        minHeight='100%'
        maxHeight='100%'
        className='BoxHomePage__content'
        defaultSize={{ width: '100%', height: '100%' }}
      >
        <SearchBar />
        <ContainerComponents />
      </Resizable>
    </BoxHomePage>
  )
}

export default HomePage
