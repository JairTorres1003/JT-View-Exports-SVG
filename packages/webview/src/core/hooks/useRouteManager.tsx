import { pathnames, WebviewMessage } from '@jt-view-exports-svg/core'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import type { Route } from '@/config/routes/route'
import { vscode } from '@/services/vscode'
import { setRenderRoute } from '@/store/features/global/slice'
import { setIsOpenDevTools, setRecentlySelected } from '@/store/features/playground/slice'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import type { RenderRouteState } from '@/store/types/global'
import isEmpty from '@/utils/is-empty'

import type { DraggableSpeedDialProps } from '../components/SpeedDial/DraggableSpeedDial/DraggableSpeedDial'

export const useRouteManager = () => {
  const [open, setOpen] = useState(false)

  const renderRoute = useAppSelector((state) => state.global.renderRoute)

  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  /**
   * Handles the change of path based on the provided new path.
   * @param newPath - The new path to navigate to.
   */
  const handleChangePath = (route: RenderRouteState) => {
    if (isEmpty(route.path)) return

    dispatch(setRecentlySelected())
    dispatch(setIsOpenDevTools(false))

    if (route.options?.reload) {
      onReload(route)
      return
    }

    void navigate(route.path, route.options)

    vscode.postMessage(WebviewMessage.ChangeViewPath, route.path)
  }

  const onOpen = () => {
    setOpen(true)
  }

  const onClose = () => {
    setOpen(false)
  }

  const onSelect: DraggableSpeedDialProps<Route>['onSelected'] = (_, { path }) => {
    dispatch(setRenderRoute({ path }))
  }

  const onReload = (route: RenderRouteState) => {
    void navigate(pathnames.main, route.options)

    setTimeout(() => {
      navigate(route.path, route.options)
    }, 100)
  }

  useEffect(() => {
    handleChangePath(renderRoute)
  }, [renderRoute])

  return { open, onClose, onOpen, onSelect }
}
