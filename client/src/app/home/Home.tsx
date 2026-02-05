import { Stack } from '@mui/material'
import React from 'react'

import { LoadingPage } from '@/core/components/LoadingPage'
import ContainerIcons from '@/features/home/components/ContainerIcons/ContainerIcons'
import DropZone from '@/features/home/components/DropZone/DropZone'
import { useHome } from '@/features/home/hooks/useHome'

const HomePage: React.FC = () => {
  const { loading } = useHome()

  if (loading) {
    return <LoadingPage />
  }

  return (
    <Stack height='100%' overflow='hidden'>
      <DropZone />
      <ContainerIcons />
    </Stack>
  )
}

export default HomePage
