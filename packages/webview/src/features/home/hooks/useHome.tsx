import { SVGPostMessage, SVGReceiveMessage, type ViewExportSVG } from '@jt-view-exports-svg/core'
import { useEffect } from 'react'

import { vscode } from '@/services/vscode'
import { setComponents } from '@/store/features/svg/slice'
import { useAppDispatch } from '@/store/hooks'

export const useHome = () => {
  const dispatch = useAppDispatch()

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
