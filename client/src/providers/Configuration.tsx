import { SVGPostMessage } from '@api/enums/ViewExportsSVG'
import { type FC, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { pathnames } from '@/config/routes/route'
import { LoadingPage } from '@/core/components/LoadingPage'
import { vscode } from '@/services/vscode'
import { setConfiguration, setInitLoading, setRenderPath } from '@/store/features/GlobalSlice'
import type { ProviderProps } from '@/types/BaseProps'

/**
 * ConfigurationProvider component is a context provider that listens for
 * configuration messages from VSCode and dispatches the configuration data
 * to the Redux store.
 */
export const ConfigurationProvider: FC<ProviderProps> = ({ children }): React.ReactNode => {
  const [refresh, setRefresh] = useState<{ loading: boolean; message?: string }>({ loading: false })
  const dispatch = useDispatch()

  /**
   * handleReload function is called when a reload message is received from VSCode.
   * It sets the loading state to true and displays a message, then resets the loading state after 1 second.
   *
   * @param {string} message - The message to display while reloading.
   */
  const handleReload = (message: string) => {
    setRefresh({ loading: true, message })
    dispatch(setRenderPath({ path: pathnames.home }))

    setTimeout(() => {
      setRefresh({ loading: false })
    }, 1000)
  }

  useEffect(() => {
    vscode.onMessage(SVGPostMessage.SendUpdateConfiguration, (data) => {
      dispatch(setConfiguration(data))
    })

    vscode.onMessage(SVGPostMessage.SendRunLoading, (path: string) => {
      dispatch(setInitLoading(path))
    })

    vscode.onMessage(SVGPostMessage.SendReloadWebview, handleReload)

    return () => {
      vscode.unregisterMessage(SVGPostMessage.SendUpdateConfiguration)
      vscode.unregisterMessage(SVGPostMessage.SendRunLoading)
      vscode.unregisterMessage(SVGPostMessage.SendReloadWebview)
    }
  }, [dispatch])

  if (refresh.loading) return <LoadingPage>{refresh.message}</LoadingPage>

  return children
}
