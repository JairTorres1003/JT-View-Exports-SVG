import { SVGPostMessage, SVGReceiveMessage } from '@api/enums/ViewExportsSVG'
import type { ViewExportSVG } from '@api/types/ViewExportsSVG'
import { useEffect, useState } from 'react'

import { vscode } from '@/services/vscode'

export const useRecentContainer = () => {
  const [icons, setIcons] = useState<ViewExportSVG[]>([])

  const handleRecentIcons = (data: ViewExportSVG[]) => {
    setIcons(data)
  }

  useEffect(() => {
    vscode.postMessage(SVGReceiveMessage.GetRecentIcons)
    vscode.onMessage(SVGPostMessage.SendRecentIcons, handleRecentIcons)

    return () => {
      vscode.unregisterMessage(SVGPostMessage.SendRecentIcons)
    }
  }, [])

  return { icons }
}
