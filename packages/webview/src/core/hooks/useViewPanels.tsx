import { ExtensionMessage, WebviewMessage } from '@jt-view-exports-svg/core'
import { useEffect, useState } from 'react'
import { type PanelProps, usePanelRef } from 'react-resizable-panels'

import { routes } from '@/config/routes/route'
import { vscode } from '@/services/vscode'
import { setIsOpenDevTools } from '@/store/features/playground/slice'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import isEmpty from '@/utils/is-empty'

export const useViewPanels = () => {
  const sidePanelRef = usePanelRef()

  const isOpenDevTools = useAppSelector((state) => state.playground.isOpenDevTools)
  const renderRoute = useAppSelector((state) => state.global.renderRoute)

  const [isShowSidePanel, setIsShowSidePanel] = useState(true)

  const dispatch = useAppDispatch()

  /**
   * Toggles the side panel for the developer tools.
   * @param open - If true, expands the side panel; if false, collapses it.
   */
  const toggleSidePanel = (open = false) => {
    const sidePanel = sidePanelRef.current
    if (!sidePanel) return

    if (open) {
      sidePanel.expand()
    } else {
      sidePanel.collapse()
    }

    dispatch(setIsOpenDevTools(open))
  }

  /**
   * Handles the resize event for a panel and toggles the developer tools panel based on the new size.
   */
  const onResize: PanelProps['onResize'] = (size) => {
    if (size.inPixels < 200) {
      vscode.postMessage(WebviewMessage.IsOpenDevTools, false)
      dispatch(setIsOpenDevTools(false))
    } else if (size.inPixels >= 200 && !isOpenDevTools) {
      vscode.postMessage(WebviewMessage.IsOpenDevTools, true)
      dispatch(setIsOpenDevTools(true))
    }
  }

  /**
   * Handles the change of path based on the provided new path.
   * @param newPath - The new path to navigate to.
   */
  const handleChangePath = (newPath: string) => {
    if (isEmpty(newPath)) return
    sidePanelRef.current?.collapse()

    const route = routes.find((route) => route.path === newPath)
    setIsShowSidePanel(route?.devtools ?? false)
  }

  useEffect(() => {
    vscode.onMessage(ExtensionMessage.ToggleOpenDevTools, toggleSidePanel)

    return () => {
      vscode.unregisterMessage(ExtensionMessage.ToggleOpenDevTools)
    }
  }, [])

  useEffect(() => {
    if (isOpenDevTools && sidePanelRef.current) {
      sidePanelRef.current.expand()
      vscode.postMessage(WebviewMessage.IsOpenDevTools, true)
    }
  }, [isOpenDevTools])

  useEffect(() => {
    handleChangePath(renderRoute.path)
  }, [renderRoute])

  return {
    sidePanelRef,
    onResize,
    toggleSidePanel,
    isShowSidePanel,
  }
}
