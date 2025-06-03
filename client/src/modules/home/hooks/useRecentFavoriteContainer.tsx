import { SVGPostMessage, SVGReceiveMessage } from '@api/enums/ViewExportsSVG'
import type { ViewExportSVG } from '@api/types/ViewExportsSVG'
import { useEffect, useState } from 'react'

import { vscode } from '@/services/vscode'

export const useRecentFavoriteContainer = (type: 'recent' | 'favorite' = 'recent') => {
  const [icons, setIcons] = useState<ViewExportSVG[]>([])

  const handleRecentIcons = (data: ViewExportSVG[]) => {
    setIcons(data)
  }

  useEffect(() => {
    if (type === 'recent') {
      vscode.postMessage(SVGReceiveMessage.GetRecentIcons)
      vscode.onMessage(SVGPostMessage.SendRecentIcons, handleRecentIcons)
    } else {
      vscode.postMessage(SVGReceiveMessage.GetFavoriteIcons)
      vscode.onMessage(SVGPostMessage.SendFavoriteIcons, handleRecentIcons)
    }

    return () => {
      vscode.unregisterMessage(
        type === 'recent' ? SVGPostMessage.SendRecentIcons : SVGPostMessage.SendFavoriteIcons
      )
    }
  }, [type])

  return { icons }
}
