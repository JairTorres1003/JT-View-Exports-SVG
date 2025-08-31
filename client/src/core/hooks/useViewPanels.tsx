import { SVGPostMessage, SVGReceiveMessage } from '@api/enums/ViewExportsSVG'
import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import type { ImperativePanelHandle, PanelOnResize } from 'react-resizable-panels'

import { routes } from '@/config/routes/route'
import { vscode } from '@/services/vscode'
import { setIsOpenDevTools } from '@/store/features/PlaygroundSlice'
import { isEmpty } from '@/utils/misc'

export const useViewPanels = () => {
  const sidePanelRef = useRef<ImperativePanelHandle>(null)
  const isOpenDevTools = useSelector((state) => state.playground.isOpenDevTools)
  const renderPath = useSelector((state) => state.global.configuration.renderPath)
  const [isShowSidePanel, setIsShowSidePanel] = useState(true)

  const dispatch = useDispatch()

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
  const onResize: PanelOnResize = (size) => {
    if (size < 20) {
      vscode.postMessage(SVGReceiveMessage.ToggleOpenDevTools, false)
      dispatch(setIsOpenDevTools(false))
    } else if (size > 20 && !isOpenDevTools) {
      vscode.postMessage(SVGReceiveMessage.ToggleOpenDevTools, true)
      dispatch(setIsOpenDevTools(true))
    }
  }

  /**
   * Handles the change of path based on the provided new path.
   * @param newPath - The new path to navigate to.
   */
  const handleChangePath = (newPath: string) => {
    if (isEmpty(newPath)) return

    const route = routes.find((route) => route.path === newPath)
    setIsShowSidePanel(route?.devtools ?? false)
  }

  useEffect(() => {
    vscode.onMessage(SVGPostMessage.SendToggleOpenDevTools, toggleSidePanel)

    return () => {
      vscode.unregisterMessage(SVGPostMessage.SendToggleOpenDevTools)
    }
  }, [])

  useEffect(() => {
    if (isOpenDevTools && sidePanelRef.current) {
      sidePanelRef.current.expand()
      vscode.postMessage(SVGReceiveMessage.ToggleOpenDevTools, true)
    }
  }, [isOpenDevTools])

  useEffect(() => {
    handleChangePath(renderPath)
  }, [renderPath])
  return {
    sidePanelRef,
    onResize,
    toggleSidePanel,
    isShowSidePanel,
  }
}
