import { type ResizeCallback } from 're-resizable'
import { useState } from 'react'

interface ResizableHook {
  resizableWidth: string
  onResizeStop: ResizeCallback
  onResetSize: VoidFunction
  buttonContainer: HTMLElement | null
}

const ELEMENT_DEVTOOLS = 'BoxDevTools'

export const useResizable = (): ResizableHook => {
  const [resizableWidth, setResizableWidth] = useState('100%')

  /**
   * Resets the size of the resizable element to its default value.
   */
  const onResetSize = (): void => {
    setResizableWidth('100%')
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
      setResizableWidth(`${100 - percentage}%`)
    } else {
      onResetSize()
    }
  }

  return {
    resizableWidth,
    onResizeStop,
    onResetSize,
    buttonContainer: document.getElementById(`${ELEMENT_DEVTOOLS}-buttonClose`) ?? null,
  }
}
