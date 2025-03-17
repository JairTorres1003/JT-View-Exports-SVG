import { SVGPostMessage, SVGReceiveMessage } from '@api/enums/ViewExportsSVG'
import type { VsCodeStyles } from '@api/interfaces/vscode'
import { createTheme, type Theme } from '@mui/material'
import type {} from '@mui/material/themeCssVarsAugmentation'
import { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { setVsCodeStyles } from '../redux/features/VsCodeSlice'

import {
  dataDisplayCustomizations,
  inputsCustomizations,
  surfacesCustomizations,
} from './Customizations'

import { vscode } from '@/services/vscode'

/**
 * Returns the current theme based on the VS Code styles.
 *
 * @returns The current theme.
 */
export const useCustomTheme = (): { theme: Theme } => {
  const { styles } = useSelector((state) => state.vsCode)

  const dispatch = useDispatch()

  const theme = useMemo(
    () =>
      createTheme({
        cssVariables: { cssVarPrefix: 'JT-SVG' },
        components: {
          ...dataDisplayCustomizations(styles),
          ...inputsCustomizations(styles),
          ...surfacesCustomizations(styles),
        },
        typography: {
          fontFamily: styles.fontFamily?.toString(),
          fontSize: typeof styles.fontSize === 'number' ? styles.fontSize : 12,
          allVariants: {
            lineHeight: 1.2,
            tabSize: styles.tabSize?.toString(),
            fontFamily: styles.fontFamily?.toString(),
            fontSize: `${typeof styles.fontSize === 'number' ? styles.fontSize : 12}px`,
            fontWeight: styles.fontWeight?.toString(),
            letterSpacing: styles.letterSpacing?.toString(),
            fontFeatureSettings: styles.fontFeatureSettings?.toString(),
          },
        },
        shape: {
          borderRadius: 3,
        },
      }),
    [styles]
  )

  /**
   * Handles the VS Code styles.
   *
   * @param data - The data to set the VS Code styles.
   */
  const handleVsCodeStyles = (data: VsCodeStyles): void => {
    dispatch(setVsCodeStyles(data))
  }

  useEffect(() => {
    vscode.postMessage(SVGReceiveMessage.GetVsCodeStyles)
    vscode.onMessage(SVGPostMessage.SendVsCodeStyles, handleVsCodeStyles)

    return () => {
      vscode.unregisterMessage(SVGPostMessage.SendVsCodeStyles)
    }
  }, [])

  return { theme }
}
