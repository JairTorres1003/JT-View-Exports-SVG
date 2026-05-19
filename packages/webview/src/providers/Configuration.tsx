import { ExtensionMessage } from '@jt-view-exports-svg/core'
import { type FC, useEffect } from 'react'

import { vscode } from '@/services/vscode'
import { setRenderRoute } from '@/store/features/global/slice'
import { useAppDispatch } from '@/store/hooks'

/**
 * ConfigurationProvider component is a context provider that listens for
 * configuration messages from VSCode and dispatches the configuration data
 * to the Redux store.
 */
export const ConfigurationProvider: FC<React.PropsWithChildren> = ({
  children,
}): React.ReactNode => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    vscode.onMessage(ExtensionMessage.Navigate, (data) => {
      dispatch(setRenderRoute(data))
    })

    return () => {
      vscode.unregisterMessage(ExtensionMessage.Navigate)
    }
  }, [dispatch])

  return children
}
