import { SVGReceiveMessage, SVGPostMessage } from '@api/enums/ViewExportsSVG'
import { useEffect } from 'react'

import { vscode } from '@/services/vscode'

export const useHome = () => {
  useEffect(() => {
    vscode.postMessage(SVGReceiveMessage.GetSVGComponents)
    vscode.onMessage(SVGPostMessage.SendSVGComponents, console.info)
  }, [])
}
