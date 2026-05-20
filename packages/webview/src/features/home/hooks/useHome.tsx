import { ExtensionMessage, type ViewExportSVG, WebviewMessage } from '@jt-view-exports-svg/core'
import { useEffect } from 'react'

import { vscode } from '@/services/vscode'
import { setComponents, setFiles } from '@/store/features/svg/slice'
import { useAppDispatch } from '@/store/hooks'

export const useHome = () => {
  const dispatch = useAppDispatch()

  const handleUserComponents = (data: ViewExportSVG[]) => {
    dispatch(setComponents(data))

    const ids = data.flatMap((component) => component.files)
    if (ids.length > 0) {
      vscode.postMessage(WebviewMessage.RequestFileMetadata, ids)
    }
  }

  useEffect(() => {
    vscode.postMessage(WebviewMessage.RequestUserComponents)
    vscode.onMessage(ExtensionMessage.LoadUserComponents, handleUserComponents)
    vscode.onMessage(ExtensionMessage.LoadFileMetadata, (files) => {
      dispatch(setFiles(files))
    })

    return () => {
      vscode.unregisterMessage(ExtensionMessage.LoadUserComponents)
      vscode.unregisterMessage(ExtensionMessage.LoadFileMetadata)
    }
  }, [dispatch])
}
