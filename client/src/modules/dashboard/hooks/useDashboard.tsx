import { SVGPostMessage, SVGReceiveMessage } from '@api/enums/ViewExportsSVG'
import type { SVGErrors, ViewExportSVG } from '@api/types/ViewExportsSVG'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { vscode } from '@/services/vscode'
import { setIsMounted, unsetInitLoading } from '@/store/features/GlobalSlice'
import { setComponents, setErrors, setSearch } from '@/store/features/SVGSlice'

interface DashboardHook {
  loading: boolean
}

export const useDashboard = (): DashboardHook => {
  const loading = useSelector((state) => state.global.loading)
  const isMounted = useSelector((state) => state.global.isMounted)
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
    dispatch(unsetInitLoading())
    dispatch(setIsMounted())
  }

  /**
   * Handles errors related to SVG components.
   *
   * @param error - Optional error object containing details about the SVG error.
   */
  const onErrorSVGComponents = (error?: SVGErrors): void => {
    dispatch(setErrors(error))
    dispatch(unsetInitLoading())
  }

  useEffect(() => {
    if (!isMounted) vscode.postMessage(SVGReceiveMessage.GetSVGComponents)
    vscode.onMessage(SVGPostMessage.SendSVGComponents, getSVGComponents)
    vscode.onMessage(SVGPostMessage.SendSVGError, onErrorSVGComponents)

    return () => {
      vscode.unregisterMessage(SVGPostMessage.SendSVGComponents)
      vscode.unregisterMessage(SVGPostMessage.SendSVGError)
    }
  }, [])

  return {
    loading,
  }
}
