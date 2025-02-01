import { type ResizeStartCallback, type ResizeCallback } from 're-resizable'
import { useEffect, useState } from 'react'

import { useSelector } from '@/providers/redux/store'

interface ResizableHook {
  resizableWidth: string
  onResizeStart: ResizeStartCallback
  onResizeStop: ResizeCallback
  onResetSize: VoidFunction
  buttonContainer: HTMLElement | null
}

const ELEMENT_DEVTOOLS = 'BoxDevTools'

export const useResizable = (): ResizableHook => {
  const [resizableWidth, setResizableWidth] = useState('100%')
  const [lastWidth, setLastWidth] = useState('75%')

  const recentlySelected = useSelector((state) => state.global.recentlySelected)

  /**
   * Resets the size of the resizable element to its default value.
   */
  const onResetSize = (): void => {
    setResizableWidth('100%')
  }

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
      const minWidth = document.getElementById(ELEMENT_DEVTOOLS)?.clientWidth ?? 170
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

  return {
    onResizeStart,
    resizableWidth,
    onResizeStop,
    onResetSize,
    buttonContainer: document.getElementById(`${ELEMENT_DEVTOOLS}-buttonClose`) ?? null,
  }
}
