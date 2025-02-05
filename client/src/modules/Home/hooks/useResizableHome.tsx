import { SVGPostMessage, SVGReceiveMessage } from '@api/enums/ViewExportsSVG'
import type { ResizeStartCallback, ResizeCallback } from 're-resizable'
import { useCallback, useEffect, useState } from 'react'

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

  const recentlySelected = useSelector((state) => state.global.recentlySelected)

  /**
   * Callback function to handle the default open dev tools event.
   */
  const onDefaultOpenDevTools = useCallback((data: boolean) => {
    setLastWidth(data ? '75%' : '100%')
  }, [])

  /**
   * Resets the size of the resizable element to its default value.
   */
  const onResetSize = useCallback(() => {
    setResizableWidth('100%')
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
    } else {
      onResetSize()
    }
  }

  useEffect(() => {
    if (recentlySelected !== undefined) {
      setResizableWidth(lastWidth)
    }
  }, [recentlySelected])

  useEffect(() => {
    vscode.postMessage(SVGReceiveMessage.InitDefaultOpenDevTools)
    vscode.onMessage(SVGPostMessage.SendOpenDevTools, onDefaultOpenDevTools)

    return () => {
      vscode.unregisterMessage(SVGPostMessage.SendOpenDevTools)
    }
  }, [])

  return {
    onResizeStart,
    resizableWidth,
    onResizeStop,
    onResetSize,
  }
}
