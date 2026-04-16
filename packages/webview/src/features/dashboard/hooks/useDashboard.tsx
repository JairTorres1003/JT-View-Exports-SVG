import {
  type SVGErrors,
  SVGPostMessage,
  SVGReceiveMessage,
  type ViewExportSVG,
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
      vscode.postMessage(SVGReceiveMessage.RequestFileMetadata, ids)
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

  useEffect(() => {
    vscode.postMessage(SVGReceiveMessage.RequestComponents)

    vscode.onMessage(SVGPostMessage.LoadComponents, getSVGComponents)
    vscode.onMessage(SVGPostMessage.OnErrorComponents, onErrorSVGComponents)
    vscode.onMessage(SVGPostMessage.LoadFileMetadata, (files) => {
      dispatch(setFiles(files))
    })

    return () => {
      vscode.unregisterMessage(SVGPostMessage.LoadComponents)
      vscode.unregisterMessage(SVGPostMessage.LoadFileMetadata)
      vscode.unregisterMessage(SVGPostMessage.OnErrorComponents)
    }
  }, [dispatch])
}
