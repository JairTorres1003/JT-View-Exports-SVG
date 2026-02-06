import type React from 'react'
import { useCallback, useState } from 'react'
import { usePanelRef } from 'react-resizable-panels'

export const useDevTools = () => {
  const [expanded, setExpanded] = useState<string[]>(['playground-panel'])

  const refPanelPlayground = usePanelRef()
  const refPanelInfo = usePanelRef()

  /**
   * Checks if a panel is currently expanded in the DevTools.
   * @param panel - The panel identifier to check
   * @returns `true` if the panel is expanded, `false` otherwise
   */
  const watchExpanded = useCallback(
    (panel: string) => {
      return expanded.includes(panel)
    },
    [expanded]
  )

  /**
   * Handles the expansion state change for a panel in the DevTools.
   * @param panel - The identifier of the panel to expand or collapse
   * @returns A callback function that updates the expanded panels list
   * @param _ - React synthetic event (unused)
   * @param isExpanded - Boolean indicating whether the panel should be expanded
   */
  const handleExpanded = (panel: string) => (_: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded((prev) => (isExpanded ? [...prev, panel] : prev.filter((p) => p !== panel)))
  }

  return {
    expanded,
    handleExpanded,
    watchExpanded,
    ref: {
      playground: refPanelPlayground,
      info: refPanelInfo,
    },
  }
}
