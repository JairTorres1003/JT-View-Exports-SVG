import { useCallback, useEffect, useRef, useState } from 'react'
import { usePanelRef } from 'react-resizable-panels'

type PanelKey = 'playground-panel' | 'info-panel'

export const useDevTools = () => {
  const [expanded, setExpanded] = useState<PanelKey[]>(['playground-panel'])

  const refPanelPlayground = usePanelRef()
  const refPanelInfo = usePanelRef()

  const prevSizesCollapse = useRef<Record<PanelKey, number> | null>(null)
  const prevSizes = useRef<Record<PanelKey, number>>({
    'playground-panel': 0,
    'info-panel': 0,
  })

  /**
   * Checks if a panel is currently expanded in the DevTools.
   * @param panel - The panel identifier to check
   * @returns `true` if the panel is expanded, `false` otherwise
   */
  const checkPanelExpanded = useCallback((panel: PanelKey) => expanded.includes(panel), [expanded])

  /**
   * Handles the expansion state change for a panel in the DevTools.
   * @param panel - The identifier of the panel to expand or collapse
   * @returns A callback function that updates the expanded panels list
   * @param _ - React synthetic event (unused)
   * @param isExpanded - Boolean indicating whether the panel should be expanded
   */
  const handleExpanded = (panel: PanelKey) => (_: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded((prev) => (isExpanded ? [...prev, panel] : prev.filter((p) => p !== panel)))
  }

  /**
   * Schedules the provided callback function to be executed on the next animation frame.
   *
   * @param fn - The callback function to execute during the next animation frame.
   */
  const resizeNextFrame = (fn: () => void) => {
    requestAnimationFrame(fn)
  }

  /**
   * Applies the layout logic for the DevTools panels based on their expanded or collapsed state.
   */
  const applyLayout = () => {
    const playground = refPanelPlayground.current
    const info = refPanelInfo.current

    if (!playground || !info) return

    const isExpandedPlayground = expanded.includes('playground-panel')
    const isExpandedInfo = expanded.includes('info-panel')

    const prev = prevSizes.current

    if (!isExpandedPlayground && !isExpandedInfo) {
      prevSizesCollapse.current = prev
      return
    }

    if (!isExpandedPlayground) {
      resizeNextFrame(() => info.resize('100%'))
      return
    }

    if (!isExpandedInfo) {
      resizeNextFrame(() => playground.resize('100%'))
      return
    }

    const size = prev['info-panel'] || 200
    resizeNextFrame(() => info.resize(size))
  }

  /**
   * Saves the current sizes of the playground and info panels.
   */
  const saveSizes = () => {
    const playground = refPanelPlayground.current
    const info = refPanelInfo.current

    if (!playground || !info) return

    let infoSize = info.getSize().inPixels

    if (prevSizesCollapse.current && expanded.length === 1) {
      const prevCollapse = prevSizesCollapse.current

      infoSize = prevCollapse['info-panel']

      prevSizesCollapse.current = null
    }

    prevSizes.current = {
      'playground-panel': playground.getSize().inPixels,
      'info-panel': infoSize,
    }
  }

  useEffect(() => {
    applyLayout()
    saveSizes()
  }, [expanded])

  return {
    expanded,
    handleExpanded,
    checkPanelExpanded,
    ref: {
      playground: refPanelPlayground,
      info: refPanelInfo,
    },
  }
}
