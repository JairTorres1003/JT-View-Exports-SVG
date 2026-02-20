import { SVGPostMessage, SVGReceiveMessage, type ViewExportSVG } from '@jt-view-exports-svg/core'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { vscode } from '@/services/vscode'
import { setComponents } from '@/store/features/SVGSlice'

export const useHome = (type: 'recent' | 'favorite' = 'recent') => {
  const [loading, setLoading] = useState<boolean>(true)
  const dispatch = useDispatch()

  const handleRecentIcons = (data: ViewExportSVG[]) => {
    dispatch(setComponents(data))
    setLoading(false)
  }

  useEffect(() => {
    vscode.postMessage(SVGReceiveMessage.GetHomeIcons)
    vscode.onMessage(SVGPostMessage.SendHomeIcons, handleRecentIcons)

    return () => {
      vscode.unregisterMessage(SVGPostMessage.SendHomeIcons)
    }
  }, [type])

  return { loading }
}
