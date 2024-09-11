import { ThemeProvider } from '@mui/material'
import { type ReactNode, type FC } from 'react'
import { Provider } from 'react-redux'

import { SnackbarProvider } from './custom/Snackbar'
import { store } from './redux/store'
import { useCustomTheme } from './theme/theme'

import { type ProviderProps } from '@/interfaces/misc'

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
        <SnackbarProvider>{children}</SnackbarProvider>
      </MuiThemeProvider>
    </ReduxProvider>
  )
}
