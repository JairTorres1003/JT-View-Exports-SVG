import React from 'react'
import { Link } from 'react-router-dom'

const UploadsPage: React.FC = () => {
  return (
    <div>
      UploadsPage Component
      <br />
      <Link to='/settings'>Settings</Link>
      <br />
      <Link to='/'>home</Link>
    </div>
  )
}

export default UploadsPage
