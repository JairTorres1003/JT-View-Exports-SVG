import { type SyntheticEvent, useEffect, useState } from 'react'

import { useSelector } from '@/providers/redux/store'

interface ContainerComponentsHook {
  isExpanded: string[]
  toggleExpanded: (panel: string) => (event: SyntheticEvent, expanded: boolean) => void
}

export const useContainerComponents = (): ContainerComponentsHook => {
  const [expandedItems, setExpandedItems] = useState<string[]>([])
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

  useEffect(() => {
    if (components.length >= 1) {
      setExpandedItems([components[0].groupKind])
    }
  }, [components])

  return {
    isExpanded: expandedItems,
    toggleExpanded,
  }
}
