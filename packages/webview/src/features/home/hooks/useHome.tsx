import { SVGPostMessage, SVGReceiveMessage, type ViewExportSVG } from '@jt-view-exports-svg/core'
import { useEffect } from 'react'

import { vscode } from '@/services/vscode'
import { setComponents, setFiles } from '@/store/features/svg/slice'
import { useAppDispatch } from '@/store/hooks'

export const useHome = () => {
  const dispatch = useAppDispatch()

  const handleRecentIcons = (data: ViewExportSVG[]) => {
    dispatch(setComponents(data))

    const ids = data.flatMap((component) => component.files)
    if (ids.length > 0) {
      vscode.postMessage(SVGReceiveMessage.RequestFileMetadata, ids)
    }
  }

  useEffect(() => {
    vscode.postMessage(SVGReceiveMessage.RequestUserComponents)
    vscode.onMessage(SVGPostMessage.LoadUserComponents, handleRecentIcons)
    vscode.onMessage(SVGPostMessage.LoadFileMetadata, (files) => {
      dispatch(setFiles(files))
    })

    return () => {
      vscode.unregisterMessage(SVGPostMessage.LoadUserComponents)
      vscode.unregisterMessage(SVGPostMessage.LoadFileMetadata)
    }
  }, [dispatch])
}
