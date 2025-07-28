import { SVGReceiveMessage } from '@api/enums/ViewExportsSVG'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { IconClose, IconNavigateFill } from '@/assets/icons/functionalities'
import { routes } from '@/config/routes/route'
import DraggableSpeedDial from '@/core/components/SpeedDial/DraggableSpeedDial/DraggableSpeedDial'
import { vscode } from '@/services/vscode'
import { setRenderPath } from '@/store/features/GlobalSlice'
import { setIsOpenDevTools, setRecentlySelected } from '@/store/features/PlaygroundSlice'
import { isEmpty } from '@/utils/misc'

const RouteManager = () => {
  const [open, setOpen] = useState(false)

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

    vscode.postMessage(SVGReceiveMessage.ViewRenderPath, newPath)
  }

  useEffect(() => {
    handleChangePath(renderPath)
  }, [renderPath])

  if (process.env.NODE_ENV !== 'development') {
    return null
  }

  return (
    <DraggableSpeedDial
      actions={routes}
      ariaLabel='SpeedDial route manager'
      icon={<IconNavigateFill sx={{ transform: 'rotate(45deg) translate(0px, -2px)' }} />}
      openIcon={<IconClose />}
      open={open}
      onClose={() => {
        setOpen(false)
      }}
      onOpen={() => {
        setOpen(true)
      }}
      onSelected={(_, action) => {
        dispatch(setRenderPath({ path: action.path }))
      }}
    />
  )
}

export default RouteManager
