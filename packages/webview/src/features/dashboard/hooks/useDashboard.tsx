import {
  type SVGErrors,
  SVGPostMessage,
  SVGReceiveMessage,
  type ViewExportSVG,
} from '@jt-view-exports-svg/core'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { vscode } from '@/services/vscode'
import { setComponents, setErrors, setSearch } from '@/store/features/SVGSlice'

export const useDashboard = () => {
  const dispatch = useDispatch()

  /**
   * Retrieves SVG components from the provided data and dispatches an action to set the components.
   *
   * @param data - An array of ViewExportSVG objects containing SVG data.
   */
  const getSVGComponents = (data: ViewExportSVG[]): void => {
    dispatch(setComponents(data))
    dispatch(setSearch(''))
    dispatch(setErrors())
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

    return () => {
      vscode.unregisterMessage(SVGPostMessage.LoadComponents)
      vscode.unregisterMessage(SVGPostMessage.OnErrorComponents)
    }
  }, [])
}
