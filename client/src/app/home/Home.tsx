import { Box } from '@mui/material'
import React from 'react'

import { LoadingPage } from '@/core/components/LoadingPage'

const HomePage: React.FC = () => {
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 300)
  }, [])

  if (loading) {
    return <LoadingPage />
  }

  return <Box>Home</Box>
}

export default HomePage
