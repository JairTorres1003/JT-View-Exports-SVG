import { SVGPostMessage } from '@api/enums/ViewExportsSVG'
import { type FC, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { setConfiguration } from '../redux/features/GlobalSlice'

import type { ProviderProps } from '@/interfaces/misc'
import { vscode } from '@/services/vscode'

/**
 * ConfigurationProvider component is a context provider that listens for
 * configuration messages from VSCode and dispatches the configuration data
 * to the Redux store.
 */
export const ConfigurationProvider: FC<ProviderProps> = ({ children }): React.ReactNode => {
  const dispatch = useDispatch()

  useEffect(() => {
    vscode.onMessage(SVGPostMessage.SendInitConfiguration, (data) => {
      dispatch(setConfiguration(data))
    })

    return () => {
      vscode.unregisterMessage(SVGPostMessage.SendInitConfiguration)
    }
  }, [dispatch])

  return children
}
