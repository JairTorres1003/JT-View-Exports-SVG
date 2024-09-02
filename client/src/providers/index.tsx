import { ThemeProvider } from '@mui/material'
import { Provider } from 'react-redux'

import { store } from './redux/store'
import { useCustomTheme } from './theme/theme'

import { type ProviderProps } from '@/interfaces/misc'

/**
 * ReduxProvider component.
 *
 * @returns The JSX element representing the ReduxProvider.
 */
const ReduxProvider = ({ children }: ProviderProps): React.JSX.Element => {
  if (typeof window === 'undefined') return <>{children}</>

  return <Provider store={store}>{children}</Provider>
}

/**
 * MuiThemeProvider component.
 *
 * @returns The JSX element representing the MuiThemeProvider.
 */
const MuiThemeProvider = ({ children }: ProviderProps): React.JSX.Element => {
  const { theme } = useCustomTheme()

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

/**
 * Providers component.
 *
 * @returns The JSX element representing the Providers.
 */
export default function Providers({ children }: ProviderProps): React.JSX.Element {
  return (
    <ReduxProvider>
      <MuiThemeProvider>{children}</MuiThemeProvider>
    </ReduxProvider>
  )
}
