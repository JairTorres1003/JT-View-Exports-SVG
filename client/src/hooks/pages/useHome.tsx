import { SVGReceiveMessage, SVGPostMessage } from '@api/enums/ViewExportsSVG'
import { type ViewExportSVG } from '@api/interfaces/ViewExportsSVG'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { setComponents } from '@/providers/redux/features/SVGSlice'
import { vscode } from '@/services/vscode'

export const useHome = (): void => {
  const dispatch = useDispatch()

  /**
   * Retrieves SVG components from the provided data and dispatches an action to set the components.
   *
   * @param data - An array of ViewExportSVG objects containing SVG data.
   */
  const getSVGComponents = (data: ViewExportSVG[]): void => {
    dispatch(setComponents(data))
  }

  useEffect(() => {
    vscode.postMessage(SVGReceiveMessage.GetSVGComponents)
    vscode.onMessage(SVGPostMessage.SendSVGComponents, getSVGComponents)
  }, [])
}
