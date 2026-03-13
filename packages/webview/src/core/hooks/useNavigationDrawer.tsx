import { SVGPostMessage } from '@jt-view-exports-svg/core'
import { useState } from 'react'
import { useSelector } from 'react-redux'

const useNavigationDrawer = () => {
  const { defaultExpandAll } = useSelector((state) => state.global.configuration)

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
