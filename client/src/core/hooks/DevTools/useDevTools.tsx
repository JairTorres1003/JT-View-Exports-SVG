import type React from 'react'
import { useRef, useState } from 'react'
import type { ImperativePanelHandle } from 'react-resizable-panels'

import { devToolsClasses } from '@/core/components/DevTools/DevTools.classes'

export const useDevTools = () => {
  const [expanded, setExpanded] = useState<string[]>(['playground-panel'])

  const refPanelPlayground = useRef<ImperativePanelHandle>(null)
  const refPanelInfo = useRef<ImperativePanelHandle>(null)

  /**
   * Handles the expansion and collapse of a specified panel within the DevTools UI.
   *
   * @param panel - The identifier of the panel to expand or collapse.
   * @returns An event handler function that takes a React synthetic event and a boolean indicating expansion state.
   *
   * @remarks
   * - When a panel is expanded or collapsed, the function updates the expanded panels state.
   * - It applies a transition class to all panels for a smooth animation.
   * - Depending on which panel is being expanded or collapsed, it resizes the playground and info panels.
   * - After a short delay, it removes the transition class from all panels.
   */
  const handleExpanded = (panel: string) => (_: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded((prev) => {
      const newValue = isExpanded ? [...prev, panel] : prev.filter((p) => p !== panel)

      const panel1 = document.getElementById('playground-panel')
      const panel2 = document.getElementById('info-panel')

      panel1?.classList.add(devToolsClasses.panelTransition)
      panel2?.classList.add(devToolsClasses.panelTransition)
      panel1?.classList.remove(devToolsClasses.panelMinHeight)
      panel2?.classList.remove(devToolsClasses.panelMinHeight)

      if (!newValue.includes('playground-panel')) {
        refPanelPlayground.current?.resize(0)
        refPanelInfo.current?.resize(100)
      } else if (panel === 'playground-panel') {
        refPanelPlayground.current?.resize(!newValue.includes('info-panel') ? 100 : 70)
      } else if (panel === 'info-panel') {
        refPanelInfo.current?.resize(
          isExpanded ? (newValue.includes('playground-panel') ? 30 : 100) : 0
        )
      }

      setTimeout(() => {
        panel1?.classList.remove(devToolsClasses.panelTransition)
        panel2?.classList.remove(devToolsClasses.panelTransition)

        if (newValue.includes('playground-panel')) {
          panel1?.classList.add(devToolsClasses.panelMinHeight)
        }

        if (newValue.includes('info-panel')) {
          panel2?.classList.add(devToolsClasses.panelMinHeight)
        }
      }, 200)

      return newValue
    })
  }

  return {
    expanded,
    handleExpanded,
    ref: {
      playground: refPanelPlayground,
      info: refPanelInfo,
    },
  }
}
