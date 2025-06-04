import React from 'react'
import { useSelector } from 'react-redux'

import { homePageClasses } from './Home.classes'
import { BoxHomePage } from './Home.style'

import { LoadingPage } from '@/core/components/LoadingPage'
import ResizableBox from '@/core/components/Resizable/ResizableBox'
import { DevTools } from '@/modules/dashboard/components/DevTools'
import RecentFavoriteContainer from '@/modules/home/components/RecentFavoriteContainer/RecentFavoriteContainer'

const devToolsPanelId = 'devTools-home-panel'

const HomePage: React.FC = () => {
  const [loading, setLoading] = React.useState(true)
  const { showRecentIcons } = useSelector((state) => state.global.configuration)

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 300)
  }, [])

  if (loading) {
    return <LoadingPage />
  }

  return (
    <BoxHomePage>
      <ResizableBox
        className={homePageClasses.content}
        containerId={devToolsPanelId}
        hideCloseButton
      >
        {showRecentIcons && <RecentFavoriteContainer />}
      </ResizableBox>
      <DevTools id={devToolsPanelId} />
    </BoxHomePage>
  )
}

export default HomePage
