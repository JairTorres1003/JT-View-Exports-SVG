import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

type PortalProps = React.PropsWithChildren<{
  container?: HTMLElement | null
}>

export function Portal({ children, container }: PortalProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    return () => {
      setMounted(false)
    }
  }, [])

  if (!mounted) {
    return null
  }

  return createPortal(children, container ?? document.body)
}
