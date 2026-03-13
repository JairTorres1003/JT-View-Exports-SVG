import { SVGPostMessage } from '@jt-view-exports-svg/core'
import { type FC, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { vscode } from '@/services/vscode'
import { setConfiguration, setInitLoading, setRenderPath } from '@/store/features/GlobalSlice'

/**
 * ConfigurationProvider component is a context provider that listens for
 * configuration messages from VSCode and dispatches the configuration data
 * to the Redux store.
 */
export const ConfigurationProvider: FC<React.PropsWithChildren> = ({
  children,
}): React.ReactNode => {
  // const [refresh, setRefresh] = useState<{ loading: boolean; message?: string }>({ loading: false })
  const dispatch = useDispatch()

  /**
   * handleReload function is called when a reload message is received from VSCode.
   * It sets the loading state to true and displays a message, then resets the loading state after 1 second.
   *
   * @param {string} message - The message to display while reloading.
   */
  // const handleReload = (message: string) => {
  //   setRefresh({ loading: true, message })
  //   dispatch(setRenderPath({ path: pathnames.home }))

  //   setTimeout(() => {
  //     setRefresh({ loading: false })
  //   }, 1000)
  // }

  useEffect(() => {
    vscode.onMessage(SVGPostMessage.SendUpdateConfiguration, (data) => {
      dispatch(setConfiguration(data))
    })

    vscode.onMessage(SVGPostMessage.SendRunLoading, (path: string) => {
      dispatch(setInitLoading(path))
    })

    // vscode.onMessage(SVGPostMessage.SendReloadWebview, handleReload)

    vscode.onMessage(SVGPostMessage.Navigate, (data) => {
      console.info('🚀 ~ ConfigurationProvider ~ data:', data)
      dispatch(setRenderPath(data))
    })

    return () => {
      vscode.unregisterMessage(SVGPostMessage.SendUpdateConfiguration)
      vscode.unregisterMessage(SVGPostMessage.SendRunLoading)
      vscode.unregisterMessage(SVGPostMessage.SendReloadWebview)
    }
  }, [dispatch])

  return children
}
