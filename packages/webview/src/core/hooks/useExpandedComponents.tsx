import { ExtensionMessage, type ViewExportSVG, WebviewMessage } from '@jt-view-exports-svg/core'
import { useCallback, useEffect, useRef, useState } from 'react'

import { vscode } from '@/services/vscode'
import { setRefreshComponents } from '@/store/features/svg/slice'
import { useAppDispatch, useAppSelector } from '@/store/hooks'

interface ExpandedComponentsHook {
  isExpanded: string[]
  handleToggle: (panel: string) => (event: React.SyntheticEvent, expanded: boolean) => void
}

export const useExpandedComponents = (): ExpandedComponentsHook => {
  const [expandedItems, setExpandedItems] = useState<string[]>([])
  const { defaultExpandAll } = useAppSelector((state) => state.global.configuration)
  const { components } = useAppSelector((state) => state.svg)

  const dispatch = useAppDispatch()

  const hasInitialized = useRef(false)

  /**
   * Expands or collapses all components in the expanded items list.
   * @param isExpanded - If true, expands all components; if false, collapses all components.
   */
  const expandAll = useCallback(
    (isExpanded: boolean) => {
      setExpandedItems(isExpanded ? components.map((c) => c.groupKind.id) : [])
      vscode.postMessage(WebviewMessage.IsExpandComponents, isExpanded)
    },
    [components]
  )

  /**
   * Handles toggling the expanded state of a component panel.
   *
   * @param panel - The identifier of the panel to toggle
   * @returns A function that accepts a React synthetic event and expanded boolean state
   */
  const handleToggle = useCallback(
    (panel: string) => (_: React.SyntheticEvent, expanded: boolean) => {
      setExpandedItems((prev) => {
        const isAlreadyExpanded = prev.includes(panel)
        if (expanded === isAlreadyExpanded) return prev

        const newState = expanded ? [...prev, panel] : prev.filter((item) => item !== panel)

        if (prev.length === 0 && newState.length > 0)
          vscode.postMessage(WebviewMessage.IsExpandComponents, true)
        if (prev.length > 0 && newState.length === 0)
          vscode.postMessage(WebviewMessage.IsExpandComponents, false)

        return newState
      })
    },
    []
  )

  /**
   * Handles refreshing components by dispatching an action with the provided data.
   * @param data - Array of ViewExportSVG objects containing the component data to refresh
   */
  const handleRefresh = useCallback(
    (data: ViewExportSVG[]) => {
      dispatch(setRefreshComponents(data))
    },
    [dispatch]
  )

  useEffect(() => {
    if (components.length > 0 && defaultExpandAll && !hasInitialized.current) {
      expandAll(true)
      hasInitialized.current = true
    }

    return () => {
      hasInitialized.current = false
    }
  }, [components.length, defaultExpandAll, expandAll])

  useEffect(() => {
    vscode.onMessage(ExtensionMessage.ToggleExpandAllComponents, expandAll)
    vscode.onMessage(ExtensionMessage.OnReloadComponent, handleRefresh)

    return () => {
      vscode.unregisterMessage(ExtensionMessage.ToggleExpandAllComponents)
      vscode.unregisterMessage(ExtensionMessage.OnReloadComponent)
    }
  }, [expandAll, handleRefresh])

  return {
    isExpanded: expandedItems,
    handleToggle,
  }
}
