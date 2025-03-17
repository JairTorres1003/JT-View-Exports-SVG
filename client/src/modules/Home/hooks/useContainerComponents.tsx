import { SVGPostMessage, SVGReceiveMessage } from '@api/enums/ViewExportsSVG'
import { type SyntheticEvent, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import { vscode } from '@/services/vscode'

interface ContainerComponentsHook {
  isExpanded: string[]
  toggleExpanded: (panel: string) => (event: SyntheticEvent, expanded: boolean) => void
}

export const useContainerComponents = (): ContainerComponentsHook => {
  const [expandedItems, setExpandedItems] = useState<string[]>([])
  const { defaultExpandAll } = useSelector((state) => state.global.configuration)
  const { components } = useSelector((state) => state.svg)

  /**
   * Toggles the expanded state of a container component.
   *
   * @param panel - The panel to toggle.
   */
  const toggleExpanded = (panel: string) => (_: SyntheticEvent, expanded: boolean) => {
    setExpandedItems((prev) =>
      expanded ? [...prev, panel] : prev.filter((item) => item !== panel)
    )
  }

  /**
   * Handles the expansion or collapse of all items in VS Code.
   *
   * @param {boolean} isExpanded - A boolean indicating whether to expand or collapse all items.
   * If true, all items will be expanded. If false, all items will be collapsed.
   *
   * @returns {void}
   */
  const handleVsCodeExpandAll = (isExpanded: boolean): void => {
    if (isExpanded) {
      setExpandedItems(components.map((component) => component.groupKind.id))
    } else {
      setExpandedItems([])
    }
  }

  useEffect(() => {
    if (expandedItems.length === 0 && components.length >= 1) {
      vscode.postMessage(SVGReceiveMessage.ToggleExpandIcon, false)
    } else if (expandedItems.length === 1) {
      vscode.postMessage(SVGReceiveMessage.ToggleExpandIcon, true)
    }
  }, [expandedItems])

  useEffect(() => {
    if (components.length >= 1 && defaultExpandAll) {
      handleVsCodeExpandAll(true)
    }
  }, [defaultExpandAll, components])

  useEffect(() => {
    vscode.onMessage(SVGPostMessage.SendExpandAllIcons, handleVsCodeExpandAll)

    return () => {
      vscode.unregisterMessage(SVGPostMessage.SendExpandAllIcons)
    }
  }, [])

  return {
    isExpanded: expandedItems,
    toggleExpanded,
  }
}
