import { SVGPostMessage, SVGReceiveMessage } from '@api/enums/ViewExportsSVG'
import type { ResizeStartCallback, ResizeCallback } from 're-resizable'
import { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { vscode } from '@/services/vscode'
import { setIsSelecting } from '@/store/features/PlaygroundSlice'

interface ResizableDashboardHook {
  resizableWidth: string
  onResizeStart: ResizeStartCallback
  onResizeStop: ResizeCallback
  onResetSize: VoidFunction
}

interface ResizableDashboardHookProps {
  readonly devTootsId: string
}

export const useResizableDashboard = ({
  devTootsId,
}: ResizableDashboardHookProps): ResizableDashboardHook => {
  const [resizableWidth, setResizableWidth] = useState('100%')
  const [lastWidth, setLastWidth] = useState('75%')

  const isSelecting = useSelector((state) => state.playground.isSelecting)
  const { defaultClicToOpenDevTools } = useSelector((state) => state.global.configuration)

  const dispatch = useDispatch()

  /**
   * Resets the size of the resizable element to its default value.
   */
  const onResetSize = useCallback(() => {
    setResizableWidth('100%')
    dispatch(setIsSelecting(false))
    vscode.postMessage(SVGReceiveMessage.ToggleOpenDevTools, false)
  }, [])

  /**
   * Callback function to handle the start of a resize event.
   */
  const onResizeStart: ResizeStartCallback = (_, __, ref) => {
    setLastWidth(ref.style.width)
  }

  /**
   * Handles the stop event of the resize action.
   *
   * This function calculates the new width of the resized element as a percentage of the window's inner width.
   * If the remaining width of the window (after resizing) is greater than a minimum expander value, it adjusts the resizable width.
   * Otherwise, it resets the size to its default value.
   */
  const onResizeStop: ResizeCallback = (_, __, ref) => {
    const width = (window.innerWidth * parseFloat(ref.style.width)) / 100
    const minExpander = 80

    if (window.innerWidth - width > minExpander) {
      const minWidth = document.getElementById(devTootsId)?.clientWidth ?? 170
      const percentage = (minWidth * 100) / window.innerWidth
      const newWidth = 100 - percentage
      setResizableWidth(`${newWidth}%`)
      setLastWidth(newWidth < 100 ? `${newWidth}%` : lastWidth)
      vscode.postMessage(SVGReceiveMessage.ToggleOpenDevTools, newWidth < 100)
    } else {
      onResetSize()
    }
  }

  /**
   * Toggles the open state of the developer tools and adjusts the resizable width accordingly.
   *
   * @param data - A boolean indicating whether the developer tools should be open.
   */
  const onToggleOpenDevTools = useCallback(
    (data: boolean) => {
      setResizableWidth(data ? lastWidth : '100%')
      if (!data) dispatch(setIsSelecting(false))
    },
    [lastWidth]
  )

  useEffect(() => {
    if (isSelecting) {
      onToggleOpenDevTools(true)
      vscode.postMessage(SVGReceiveMessage.ToggleOpenDevTools, true)
    }
  }, [isSelecting])

  useEffect(() => {
    setLastWidth(defaultClicToOpenDevTools ? '75%' : '100%')
  }, [])

  useEffect(() => {
    vscode.onMessage(SVGPostMessage.SendToggleOpenDevTools, onToggleOpenDevTools)

    return () => {
      vscode.unregisterMessage(SVGPostMessage.SendToggleOpenDevTools)
    }
  }, [])

  return {
    onResizeStart,
    resizableWidth,
    onResizeStop,
    onResetSize,
  }
}
