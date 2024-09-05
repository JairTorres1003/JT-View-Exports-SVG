import { type SyntheticEvent, useState } from 'react'

interface ContainerComponentsHook {
  isExpanded: string[]
  toggleExpanded: (panel: string) => (event: SyntheticEvent, expanded: boolean) => void
}

export const useContainerComponents = (): ContainerComponentsHook => {
  const [expandedItems, setExpandedItems] = useState<string[]>([])

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

  return {
    isExpanded: expandedItems,
    toggleExpanded,
  }
}
