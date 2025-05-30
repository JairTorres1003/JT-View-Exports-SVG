import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { isEmpty } from '@/utils/misc'

export const RouteManager = () => {
  const { renderPath } = useSelector((state) => state.global.configuration)

  const navigate = useNavigate()

  /**
   * Handles the change of path based on the provided new path.
   * @param newPath - The new path to navigate to.
   */
  const handleChangePath = (newPath: string) => {
    if (isEmpty(newPath)) return

    void navigate(newPath)
  }

  useEffect(() => {
    handleChangePath(renderPath)
  }, [renderPath])

  return <></>
}
