import { Button, Stack, Typography } from '@mui/material'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { routes } from '@/config/routes/route'
import { setIsOpenDevTools, setRecentlySelected } from '@/store/features/PlaygroundSlice'
import { isEmpty } from '@/utils/misc'

const RouteManager = () => {
  const { renderPath } = useSelector((state) => state.global.configuration)
  const renderOptions = useSelector((state) => state.global.renderOptions)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  /**
   * Handles the change of path based on the provided new path.
   * @param newPath - The new path to navigate to.
   */
  const handleChangePath = (newPath: string) => {
    if (isEmpty(newPath)) return

    dispatch(setRecentlySelected())
    dispatch(setIsOpenDevTools(false))

    void navigate(newPath, renderOptions)
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

export default RouteManager
