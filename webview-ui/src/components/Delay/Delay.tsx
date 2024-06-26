import { useState, type FC, useEffect } from 'react'

import { type DelayProps } from '../../interfaces/Delay'

/**
 * Renders the children component with a delay.
 * @param props - The component props.
 * @returns The delayed rendering of the children component.
 */
export const Delay: FC<DelayProps> = (props) => {
  const { children, delay = 300, mount = false, show = true } = props

  const [isShow, setIsShow] = useState<boolean>(show)

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null

    if (!show) {
      timer = setTimeout(() => {
        setIsShow(false)
      }, delay)
    }

    return () => {
      if (timer !== null) {
        clearTimeout(timer)
        setIsShow(true)
      }
    }
  }, [show])

  if (show && !mount) return children

  return isShow ? children : null
}
