import { SVGPostMessage, SVGReceiveMessage, type ViewExportSVG } from '@jt-view-exports-svg/core'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { vscode } from '@/services/vscode'
import { setComponents } from '@/store/features/SVGSlice'

export const useHome = () => {
  const dispatch = useDispatch()

  const handleRecentIcons = (data: ViewExportSVG[]) => {
    dispatch(setComponents(data))
  }

  useEffect(() => {
    vscode.postMessage(SVGReceiveMessage.RequestUserComponents)
    vscode.onMessage(SVGPostMessage.LoadUserComponents, handleRecentIcons)

    return () => {
      vscode.unregisterMessage(SVGPostMessage.LoadUserComponents)
    }
  }, [])
}
