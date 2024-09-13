import React from 'react'
import { useTranslation } from 'react-i18next'

import { ContainerComponents } from '@/components/ContainerComponents'
import { LoadingPage } from '@/components/Custom/LoadingPage'
import { SearchBar } from '@/components/SearchBar'
import { useHome } from '@/hooks/pages/useHome'

const HomePage: React.FC = () => {
  const { loading } = useHome()
  const { t } = useTranslation(undefined, { keyPrefix: 'labels' })

  if (loading) {
    return <LoadingPage>{t('extractingComponents')}</LoadingPage>
  }

  return (
    <div>
      <div>
        <SearchBar />
        <ContainerComponents />
      </div>
      {/* <div>editor</div> */}
    </div>
  )
}

export default HomePage
