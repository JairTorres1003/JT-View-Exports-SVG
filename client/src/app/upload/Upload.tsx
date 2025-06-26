import { Stack } from '@mui/material'
import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const UploadPage: React.FC = () => {
  const { state } = useLocation()

  useEffect(() => {
    if (state) {
      console.info('Received state:', state)
    }
  }, [state])

  return (
    <Stack height='100%' overflow='hidden'>
      upload
    </Stack>
  )
}

export default UploadPage
