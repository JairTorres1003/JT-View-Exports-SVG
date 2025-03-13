import { SVGPostMessage, SVGReceiveMessage } from '@api/enums/ViewExportsSVG'
import type { ResizeStartCallback, ResizeCallback } from 're-resizable'
import { useCallback, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { setIsSelecting } from '@/providers/redux/features/PlaygroundSlice'
import { useSelector } from '@/providers/redux/store'
import { vscode } from '@/services/vscode'

interface ResizableHomeHook {
  resizableWidth: string
  onResizeStart: ResizeStartCallback
  onResizeStop: ResizeCallback
  onResetSize: VoidFunction
}

interface ResizableHomeHookProps {
  readonly devTootsId: string
}

export const useResizableHome = ({ devTootsId }: ResizableHomeHookProps): ResizableHomeHook => {
  const [resizableWidth, setResizableWidth] = useState('100%')
  const [lastWidth, setLastWidth] = useState('75%')

  const isSelecting = useSelector((state) => state.playground.isSelecting)

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
   * Callback function to handle the default open dev tools event.
   */
  const onDefaultOpenDevTools = useCallback((data: boolean) => {
    setLastWidth(data ? '75%' : '100%')
  }, [])

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
    vscode.postMessage(SVGReceiveMessage.InitDefaultOpenDevTools)
    vscode.onMessage(SVGPostMessage.SendDefaultOpenDevTools, onDefaultOpenDevTools)
    vscode.onMessage(SVGPostMessage.SendToggleOpenDevTools, onToggleOpenDevTools)

    return () => {
      vscode.unregisterMessage(SVGPostMessage.SendDefaultOpenDevTools)
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
