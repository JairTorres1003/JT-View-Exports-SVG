import { Button, Stack, Typography } from '@mui/material'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { routes } from '@/config/routes/route'
import { isEmpty } from '@/utils/misc'

export const RouteManager = () => {
  const { renderPath } = useSelector((state) => state.global.configuration)

  const navigate = useNavigate()

  /**
   * Handles the change of path based on the provided new path.
   * @param newPath - The new path to navigate to.
   */
  const handleChangePath = (newPath: string) => {
    if (isEmpty(newPath)) return

    void navigate(newPath)
  }

  useEffect(() => {
    handleChangePath(renderPath)
  }, [renderPath])

  if (process.env.NODE_ENV !== 'development') {
    return null
  }

  return (
    <Stack
      p={1}
      spacing={1}
      width='100%'
      direction='row'
      alignItems='center'
      borderBottom='1px solid var(--JT-SVG-vscode-panel-border, #ccc)'
    >
      <Typography variant='h1' color='textSecondary' fontWeight='bold'>
        Route Manager
      </Typography>
      <Stack spacing={1} direction='row'>
        {routes.map((route) => (
          <Button
            size='small'
            key={route.path}
            variant='outlined'
            sx={{ minWidth: '100px' }}
            onClick={() => {
              handleChangePath(route.path)
            }}
          >
            {route.name}
          </Button>
        ))}
      </Stack>
    </Stack>
  )
}
