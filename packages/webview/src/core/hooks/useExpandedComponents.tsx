import { SVGPostMessage, SVGReceiveMessage, type ViewExportSVG } from '@jt-view-exports-svg/core'
import { type SyntheticEvent, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { vscode } from '@/services/vscode'
import { setRefreshComponents } from '@/store/features/SVGSlice'

interface ExpandedComponentsHook {
  isExpanded: string[]
  toggleExpanded: (panel: string) => (event: SyntheticEvent, expanded: boolean) => void
}

export const useExpandedComponents = (): ExpandedComponentsHook => {
  const [expandedItems, setExpandedItems] = useState<string[]>([])
  const { defaultExpandAll } = useSelector((state) => state.global.configuration)
  const { components } = useSelector((state) => state.svg)

  const dispatch = useDispatch()

  /**
   * Toggles the expanded state of a container component.
   *
   * @param panel - The panel to toggle.
   */
  const toggleExpanded = (panel: string) => (_: SyntheticEvent, expanded: boolean) => {
    setExpandedItems((prev) => {
      const newState = expanded ? [...prev, panel] : prev.filter((item) => item !== panel)

      if (newState.length === 0) {
        vscode.postMessage(SVGReceiveMessage.ToggleExpandIcon, false)
      }

      if (newState.length === 1) {
        vscode.postMessage(SVGReceiveMessage.ToggleExpandIcon, true)
      }

      return newState
    })
  }

  /**
   * Handles the expansion or collapse of all items in VS Code.
   *
   * @param isExpanded - A boolean indicating whether to expand or collapse all items.
   * If true, all items will be expanded. If false, all items will be collapsed.
   */
  const handleVsCodeExpandAll = (isExpanded: boolean): void => {
    if (isExpanded) {
      setExpandedItems(components.map((component) => component.groupKind.id))
    } else {
      setExpandedItems([])
    }
  }

  /**
   * Handles the refresh of SVG components.
   *
   * @param data - The data to refresh the SVG components with.
   */
  const handleRefreshSVGComponents = (data: ViewExportSVG[]): void => {
    dispatch(setRefreshComponents(data))
  }

  useEffect(() => {
    if (components.length >= 1 && defaultExpandAll) {
      handleVsCodeExpandAll(true)
    }
  }, [defaultExpandAll, components])

  useEffect(() => {
    vscode.onMessage(SVGPostMessage.SendExpandAllIcons, handleVsCodeExpandAll)
    vscode.onMessage(SVGPostMessage.SendRefreshSVGComponents, handleRefreshSVGComponents)

    return () => {
      vscode.unregisterMessage(SVGPostMessage.SendExpandAllIcons)
      vscode.unregisterMessage(SVGPostMessage.SendRefreshSVGComponents)
    }
  }, [])

  return {
    isExpanded: expandedItems,
    toggleExpanded,
  }
}
