import { ThemeProvider } from '@mui/material'
import type { FC, ReactNode } from 'react'
import { Provider } from 'react-redux'

import { ConfigurationProvider, SnackbarProvider } from '@/providers'
import { store } from '@/store/store'
import { useCustomTheme } from '@/styles/theme/theme'

/**
 * ReduxProvider component.
 *
 * @returns The JSX element representing the ReduxProvider.
 */
const ReduxProvider: FC<React.PropsWithChildren> = ({ children }) => {
  if (typeof window === 'undefined') return <>{children}</>

  return <Provider store={store}>{children}</Provider>
}

/**
 * MuiThemeProvider component.
 *
 * @returns The JSX element representing the MuiThemeProvider.
 */
const MuiThemeProvider: FC<React.PropsWithChildren> = ({ children }) => {
  const { theme } = useCustomTheme()

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

/**
 * Providers component.
 *
 * @returns The JSX element representing the Providers.
 */
export default function Providers({ children }: React.PropsWithChildren): ReactNode {
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
