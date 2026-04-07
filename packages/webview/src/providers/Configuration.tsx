import { SVGPostMessage } from '@jt-view-exports-svg/core'
import { type FC, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { vscode } from '@/services/vscode'
import { setConfiguration, setRenderPath } from '@/store/features/GlobalSlice'

/**
 * ConfigurationProvider component is a context provider that listens for
 * configuration messages from VSCode and dispatches the configuration data
 * to the Redux store.
 */
export const ConfigurationProvider: FC<React.PropsWithChildren> = ({
  children,
}): React.ReactNode => {
  const dispatch = useDispatch()

  useEffect(() => {
    vscode.onMessage(SVGPostMessage.SendUpdateConfiguration, (data) => {
      dispatch(setConfiguration(data))
    })

    vscode.onMessage(SVGPostMessage.Navigate, (data) => {
      console.info('🚀 ~ ConfigurationProvider ~ data:', data)
      dispatch(setRenderPath(data))
    })

    return () => {
      vscode.unregisterMessage(SVGPostMessage.SendUpdateConfiguration)
      vscode.unregisterMessage(SVGPostMessage.Navigate)
    }
  }, [dispatch])

  return children
}
