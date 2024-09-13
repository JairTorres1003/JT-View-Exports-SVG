import { SVGReceiveMessage, SVGPostMessage } from '@api/enums/ViewExportsSVG'
import { type ViewExportSVG } from '@api/interfaces/ViewExportsSVG'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { setComponents, setSearch } from '@/providers/redux/features/SVGSlice'
import { vscode } from '@/services/vscode'

interface HomeHook {
  loading: boolean
}

export const useHome = (): HomeHook => {
  const [loading, setLoading] = useState<boolean>(true)
  const dispatch = useDispatch()

  /**
   * Retrieves SVG components from the provided data and dispatches an action to set the components.
   *
   * @param data - An array of ViewExportSVG objects containing SVG data.
   */
  const getSVGComponents = (data: ViewExportSVG[]): void => {
    dispatch(setComponents(data))
    dispatch(setSearch(''))
    setLoading(false)
  }

  const onRunExtraction = (state: boolean): void => {
    setLoading(state)
  }

  useEffect(() => {
    vscode.postMessage(SVGReceiveMessage.GetSVGComponents)
    vscode.onMessage(SVGPostMessage.SendSVGComponents, getSVGComponents)
    vscode.onMessage(SVGPostMessage.SendRunExtraction, onRunExtraction)

    return () => {
      vscode.unregisterMessage(SVGPostMessage.SendSVGComponents)
      vscode.unregisterMessage(SVGPostMessage.SendRunExtraction)
    }
  }, [])

  return {
    loading,
  }
}
