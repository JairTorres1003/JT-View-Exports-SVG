import React from 'react'
import { Link } from 'react-router-dom'

const SettingsPage: React.FC = () => {
  return (
    <div>
      SettingsPage Component
      <br />
      <Link to='/'>home</Link>
      <br />
      <Link to='/uploads'>Uploads</Link>
    </div>
  )
}

export default SettingsPage
