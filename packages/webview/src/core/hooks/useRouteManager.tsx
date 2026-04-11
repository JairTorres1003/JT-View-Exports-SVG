import { SVGReceiveMessage } from '@jt-view-exports-svg/core'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import type { Route } from '@/config/routes/route'
import { vscode } from '@/services/vscode'
import { setRenderPath } from '@/store/features/global/slice'
import { setIsOpenDevTools, setRecentlySelected } from '@/store/features/playground/slice'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import isEmpty from '@/utils/is-empty'

import type { DraggableSpeedDialProps } from '../components/SpeedDial/DraggableSpeedDial/DraggableSpeedDial'

export const useRouteManager = () => {
  const [open, setOpen] = useState(false)

  const { renderPath } = useAppSelector((state) => state.global.configuration)
  const renderOptions = useAppSelector((state) => state.global.renderOptions)

  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  /**
   * Handles the change of path based on the provided new path.
   * @param newPath - The new path to navigate to.
   */
  const handleChangePath = (newPath: string) => {
    if (isEmpty(newPath)) return

    dispatch(setRecentlySelected())
    dispatch(setIsOpenDevTools(false))

    void navigate(newPath, renderOptions)

    vscode.postMessage(SVGReceiveMessage.ChangeViewPath, newPath)
  }

  const onOpen = () => {
    setOpen(true)
  }

  const onClose = () => {
    setOpen(false)
  }

  const onSelect: DraggableSpeedDialProps<Route>['onSelected'] = (_, { path }) => {
    dispatch(setRenderPath({ path }))
  }

  useEffect(() => {
    handleChangePath(renderPath)
  }, [renderPath])

  return { open, onClose, onOpen, onSelect }
}
