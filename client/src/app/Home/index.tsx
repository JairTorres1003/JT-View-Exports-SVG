import React from 'react'
import { Link } from 'react-router-dom'

import { useHome } from '@/hooks/useHome'

const HomePage: React.FC = () => {
  useHome()

  return (
    <div>
      Home Component
      <br />
      <Link to='/settings'>Settings</Link>
      <br />
      <Link to='/uploads'>Uploads</Link>
    </div>
  )
}

export default HomePage
