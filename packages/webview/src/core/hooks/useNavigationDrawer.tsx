import { SVGPostMessage } from '@jt-view-exports-svg/core'
import { useState } from 'react'

import { useAppSelector } from '@/store/hooks'

/**
 * Hook for managing navigation drawer state and interactions.
 *
 * @remarks
 * This hook is intended for development purposes only and should not be included in production builds.
 * It manages the open/closed state of a navigation drawer and the expanded/collapsed state of its components.
 */
const useNavigationDrawer = () => {
  const { defaultExpandAll } = useAppSelector((state) => state.global.configuration)

  const [isOpen, setIsOpen] = useState(false)
  const [isExpanded, setIsExpanded] = useState(defaultExpandAll)

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event &&
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return
    }
    setIsOpen(open)
  }

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded)
    window.postMessage({ type: SVGPostMessage.ToggleExpandAllComponents, data: !isExpanded }, '*')
  }

  return {
    isOpen,
    isExpanded,
    toggleDrawer,
    toggleExpanded,
  }
}

export default useNavigationDrawer
