import { SVGPostMessage } from '@jt-view-exports-svg/core'
import { type FC, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { vscode } from '@/services/vscode'
import { setRenderPath } from '@/store/features/GlobalSlice'

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
    vscode.onMessage(SVGPostMessage.Navigate, (data) => {
      dispatch(setRenderPath(data))
    })

    return () => {
      vscode.unregisterMessage(SVGPostMessage.Navigate)
    }
  }, [dispatch])

  return children
}
