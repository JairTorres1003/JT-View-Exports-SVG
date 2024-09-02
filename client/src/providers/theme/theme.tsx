import { vscode } from '@/services/vscode'
import { SVGPostMessage, SVGReceiveMessage } from '@api/enums/ViewExportsSVG'
import { createTheme, type Theme } from '@mui/material'
import { useEffect, useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from '../redux/store'
import { setVsCodeStyles } from '../redux/features/VsCodeSlice'
import { VsCodeStyles } from '@api/interfaces/vscode'

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
          MuiIconButton: {
            defaultProps: { size: 'small' },
          },
          MuiTextField: {
            defaultProps: { size: 'small' },
            styleOverrides: {
              root: {
                '& .MuiInputBase-root': {
                  backgroundColor: 'var(--vscode-input-background)',
                  '&.Mui-focused fieldset': { borderWidth: 1 },
                  '&:not(:hover):not(.Mui-focused) fieldset': {
                    borderColor: 'var(--vscode-input-background)',
                  },
                },
              },
            },
          },
          MuiInputLabel: {
            styleOverrides: {
              root: { fontFamily: styles.fontFamily?.toString() },
            },
          },
          MuiInputBase: {
            styleOverrides: {
              root: { fontFamily: styles.fontFamily?.toString() },
            },
          },
        },
        typography: {
          fontFamily: styles.fontFamily?.toString(),
          fontSize: parseInt(styles.fontSize?.toString() || '12', 10),
          allVariants: {
            lineHeight: 1.2,
            tabSize: styles.tabSize?.toString(),
            fontWeight: styles.fontWeight?.toString(),
            letterSpacing: styles.letterSpacing?.toString(),
            fontFeatureSettings: styles.fontFeatureSettings?.toString(),
          },
        },
      }),
    [styles]
  )

  /**
   * Handles the VS Code styles.
   *
   * @param data - The data to set the VS Code styles.
   */
  const handleVsCodeStyles = (data: VsCodeStyles) => {
    dispatch(setVsCodeStyles(data))
  }

  useEffect(() => {
    vscode.postMessage(SVGReceiveMessage.GetVsCodeStyles)
    vscode.onMessage(SVGPostMessage.SendVsCodeStyles, handleVsCodeStyles)
  }, [])

  return { theme }
}
