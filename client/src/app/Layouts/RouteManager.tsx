import { SVGReceiveMessage } from '@api/enums/ViewExportsSVG'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'

import IconNavigateFill from '@/assets/icons/navigation/navigate-fill'
import IconClose from '@/assets/icons/functionalities/close'
import { routes } from '@/config/routes/route'
import DraggableSpeedDial, {
  type DraggableSpeedDialProps,
} from '@/core/components/SpeedDial/DraggableSpeedDial/DraggableSpeedDial'
import { vscode } from '@/services/vscode'
import { setRenderPath } from '@/store/features/GlobalSlice'
import { setIsOpenDevTools, setRecentlySelected } from '@/store/features/PlaygroundSlice'
import isEmpty from '@/utils/is-empty'

const useRouteManager = () => {
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

  const onOpen = () => {
    setOpen(true)
  }

  const onClose = () => {
    setOpen(false)
  }

  const onSelect: DraggableSpeedDialProps<(typeof routes)[number]>['onSelected'] = (
    _,
    { path }
  ) => {
    dispatch(setRenderPath({ path }))
  }

  useEffect(() => {
    handleChangePath(renderPath)
  }, [renderPath])

  return { open, onClose, onOpen, onSelect }
}

const RouteManager = () => {
  const { onClose, onOpen, open, onSelect } = useRouteManager()

  if (!import.meta.env.DEV) {
    return null
  }

  return (
    <DraggableSpeedDial
      actions={routes}
      storeKey='JT-SVG-speedDial-routeManager-position'
      ariaLabel='SpeedDial route manager'
      icon={<IconNavigateFill sx={{ transform: 'rotate(45deg) translate(0px, -2px)' }} />}
      openIcon={<IconClose />}
      open={open}
      onClose={onClose}
      onOpen={onOpen}
      onSelected={onSelect}
    />
  )
}

export default RouteManager
