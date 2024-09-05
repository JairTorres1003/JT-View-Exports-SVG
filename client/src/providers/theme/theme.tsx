import { SVGPostMessage, SVGReceiveMessage } from '@api/enums/ViewExportsSVG'
import { type VsCodeStyles } from '@api/interfaces/vscode'
import {
  accordionSummaryClasses,
  createTheme,
  inputBaseClasses,
  tooltipClasses,
  type Theme,
} from '@mui/material'
import { useEffect, useMemo } from 'react'
import { useDispatch } from 'react-redux'

import { setVsCodeStyles } from '../redux/features/VsCodeSlice'
import { useSelector } from '../redux/store'

import { IconForward } from '@/assets/icons/navigation'
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
          MuiAccordion: {
            defaultProps: {
              disableGutters: true,
              elevation: 0,
              square: true,
              slotProps: { heading: { component: 'div' } },
            },
            styleOverrides: {
              root: {
                backgroundColor: 'transparent',
                '&:before': {
                  opacity: 0.15,
                  backgroundColor: 'var(--vscode-input-foreground, #1e1e1e)',
                },
                [`& .${accordionSummaryClasses.content}`]: { maxWidth: '100%', overflow: 'hidden' },
              },
            },
          },
          MuiAccordionSummary: {
            defaultProps: { expandIcon: <IconForward size={24} /> },
            styleOverrides: {
              root: {
                flexDirection: 'row-reverse',
                gap: '4px',
                minHeight: 38,
                '&:hover': { backgroundColor: 'var(--vscode-list-hoverBackground, #2c313a)' },
              },
              content: { margin: 0 },
              expandIconWrapper: {
                [`&.${accordionSummaryClasses.expanded}`]: { transform: 'rotate(90deg)' },
              },
            },
          },
          MuiIconButton: {
            defaultProps: { size: 'small' },
          },
          MuiInputBase: {
            styleOverrides: {
              root: { fontFamily: styles.fontFamily?.toString() },
            },
          },
          MuiInputLabel: {
            styleOverrides: {
              root: { fontFamily: styles.fontFamily?.toString() },
            },
          },
          MuiTextField: {
            defaultProps: { size: 'small' },
            styleOverrides: {
              root: {
                [`& .${inputBaseClasses.root}`]: {
                  backgroundColor: 'var(--vscode-input-background, #fff)',
                  fieldset: { border: '1px solid var(--vscode-input-border, transparent)' },
                  [`&.${inputBaseClasses.focused} fieldset`]: {
                    borderWidth: 1,
                    borderColor: 'var(--vscode-focusBorder, var(--vscode-input-border))',
                  },
                  [`&:hover:not(.${inputBaseClasses.focused}) fieldset`]: {
                    borderColor: 'var(--vscode-input-border, transparent)',
                  },
                  [`&:not(:hover):not(.${inputBaseClasses.focused}) fieldset`]: {
                    borderColor: 'var(--vscode-input-border, transparent)',
                  },
                },
              },
            },
          },
          MuiTooltip: {
            defaultProps: {
              arrow: true,
              disableInteractive: true,
              enterDelay: 500,
              leaveDelay: 200,
            },
            styleOverrides: {
              tooltip: {
                backgroundColor: 'var(--vscode-editorHoverWidget-background, #616161eb)',
                border: '1px solid var(--vscode-editorHoverWidget-border)',
                color: 'var(--vscode-editorHoverWidget-foreground, #ffffff)',
                boxShadow: '0 2px 8px var(--vscode-widget-shadow)',
                padding: '2px 8px',
                fontSize: `${typeof styles.fontSize === 'number' ? styles.fontSize : 12}px`,
              },
              arrow: {
                top: 'initial',
                color: 'var(--vscode-editorHoverWidget-background, #616161eb)',
                '&:before': { border: '1px solid var(--vscode-editorHoverWidget-border)' },
              },
              popper: {
                [`&[data-popper-placement*="bottom"] div.${tooltipClasses.tooltip}`]: {
                  marginTop: '6px',
                  [`& .${tooltipClasses.arrow}`]: {
                    marginTop: '-4.6px',
                    width: '6.6px',
                    height: '4.6px',
                  },
                },
                [`&[data-popper-placement*="top"] div.${tooltipClasses.tooltip}`]: {
                  marginBottom: '6px',
                  [`& .${tooltipClasses.arrow}`]: {
                    marginBottom: '-4.6px',
                    width: '6.6px',
                    height: '4.6px',
                  },
                },
                [`&[data-popper-placement*="right"] div.${tooltipClasses.tooltip}`]: {
                  marginLeft: '6px',
                  [`& .${tooltipClasses.arrow}`]: {
                    marginLeft: '-4.6px',
                    width: '4.6px',
                    height: '6.6px',
                  },
                },
                [`&[data-popper-placement*="left"] div.${tooltipClasses.tooltip}`]: {
                  marginRight: '6px',
                  [`& .${tooltipClasses.arrow}`]: {
                    marginRight: '-4.6px',
                    width: '4.6px',
                    height: '6.6px',
                  },
                },
              },
            },
          },
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
  }, [])

  return { theme }
}
