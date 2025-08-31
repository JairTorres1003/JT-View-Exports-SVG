import { ThemeProvider } from '@mui/material'
import type { ReactNode, FC } from 'react'
import { Provider } from 'react-redux'

import { ConfigurationProvider, SnackbarProvider } from '@/providers'
import { store } from '@/store/store'
import { useCustomTheme } from '@/styles/theme/theme'
import type { ProviderProps } from '@/types/BaseProps'

/**
 * ReduxProvider component.
 *
 * @returns The JSX element representing the ReduxProvider.
 */
const ReduxProvider: FC<ProviderProps> = ({ children }) => {
  if (typeof window === 'undefined') return <>{children}</>

  return <Provider store={store}>{children}</Provider>
}

/**
 * MuiThemeProvider component.
 *
 * @returns The JSX element representing the MuiThemeProvider.
 */
const MuiThemeProvider: FC<ProviderProps> = ({ children }) => {
  const { theme } = useCustomTheme()

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

/**
 * Providers component.
 *
 * @returns The JSX element representing the Providers.
 */
export default function Providers({ children }: ProviderProps): ReactNode {
  return (
    <ReduxProvider>
      <MuiThemeProvider>
        <ConfigurationProvider>
          <SnackbarProvider>{children}</SnackbarProvider>
        </ConfigurationProvider>
      </MuiThemeProvider>
    </ReduxProvider>
  )
}
