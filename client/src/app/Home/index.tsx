import React from 'react'

import { ContainerComponents } from '@/components/ContainerComponents'
import { SearchBar } from '@/components/SearchBar'
import { useHome } from '@/hooks/pages/useHome'

const HomePage: React.FC = () => {
  useHome()

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
