import {
  ExtensionMessage,
  type FileIdentifier,
  type SVGErrors,
  type SVGFile,
  type ViewExportSVG,
  WebviewMessage,
} from '@jt-view-exports-svg/core'
import { useEffect } from 'react'

import { vscode } from '@/services/vscode'
import { setComponents, setErrors, setFiles, setSearch } from '@/store/features/svg/slice'
import { useAppDispatch } from '@/store/hooks'

export const useDashboard = () => {
  const dispatch = useAppDispatch()

  /**
   * Retrieves SVG components from the provided data and dispatches an action to set the components.
   *
   * @param data - An array of ViewExportSVG objects containing SVG data.
   */
  const getSVGComponents = (data: ViewExportSVG[]): void => {
    dispatch(setComponents(data))
    dispatch(setSearch(''))
    dispatch(setErrors())

    const ids = data.flatMap((component) => component.files)
    if (ids.length > 0) {
      vscode.postMessage(WebviewMessage.RequestFileMetadata, ids)
    }
  }

  /**
   * Handles errors related to SVG components.
   *
   * @param error - Optional error object containing details about the SVG error.
   */
  const onErrorSVGComponents = (error?: SVGErrors): void => {
    dispatch(setErrors(error))
  }

  /**
   * Handles the loading of file metadata.
   *
   * @param files - An object containing file metadata.
   */
  const onLoadMetadata = (files: Record<FileIdentifier, SVGFile>) => {
    dispatch(setFiles(files))
  }

  useEffect(() => {
    vscode.postMessage(WebviewMessage.RequestComponents)

    vscode.onMessage(ExtensionMessage.LoadComponents, getSVGComponents)
    vscode.onMessage(ExtensionMessage.OnErrorComponents, onErrorSVGComponents)
    vscode.onMessage(ExtensionMessage.LoadFileMetadata, onLoadMetadata)

    return () => {
      vscode.unregisterMessage(ExtensionMessage.LoadComponents)
      vscode.unregisterMessage(ExtensionMessage.LoadFileMetadata)
      vscode.unregisterMessage(ExtensionMessage.OnErrorComponents)
    }
  }, [])
}
