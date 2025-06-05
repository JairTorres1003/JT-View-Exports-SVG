import { SVGReceiveMessage, SVGPostMessage } from '@api/enums/ViewExportsSVG'
import type { SVGErrors, ViewExportSVG } from '@api/types/ViewExportsSVG'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { vscode } from '@/services/vscode'
import { setComponents, setErrors, setSearch } from '@/store/features/SVGSlice'

interface DashboardHook {
  loading: boolean
}

export const useDashboard = (): DashboardHook => {
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
    dispatch(setErrors())
    setLoading(false)
  }

  /**
   * Sets the loading state.
   *
   * @param state - The state to set.
   */
  const onRunExtraction = (state: boolean): void => {
    setLoading(state)
  }

  /**
   * Handles errors related to SVG components.
   *
   * @param {SVGErrors} [error] - Optional error object containing details about the SVG error.
   * @returns {void}
   */
  const onErrorSVGComponents = (error?: SVGErrors): void => {
    dispatch(setErrors(error))
    setLoading(false)
  }

  useEffect(() => {
    vscode.postMessage(SVGReceiveMessage.GetSVGComponents)
    vscode.onMessage(SVGPostMessage.SendSVGComponents, getSVGComponents)
    vscode.onMessage(SVGPostMessage.SendSVGError, onErrorSVGComponents)
    vscode.onMessage(SVGPostMessage.SendRunExtraction, onRunExtraction)

    return () => {
      vscode.unregisterMessage(SVGPostMessage.SendSVGComponents)
      vscode.unregisterMessage(SVGPostMessage.SendSVGError)
      vscode.unregisterMessage(SVGPostMessage.SendRunExtraction)
    }
  }, [])

  return {
    loading,
  }
}
