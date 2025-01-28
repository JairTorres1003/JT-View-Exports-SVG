import { SVGPostMessage, SVGReceiveMessage } from '@api/enums/ViewExportsSVG'
import { type VsCodeStyles } from '@api/interfaces/vscode'
import {
  accordionSummaryClasses,
  createTheme,
  inputBaseClasses,
  tooltipClasses,
  type Theme,
} from '@mui/material'
import type {} from '@mui/material/themeCssVarsAugmentation'
import { useEffect, useMemo } from 'react'
import { useDispatch } from 'react-redux'

import { setVsCodeStyles } from '../redux/features/VsCodeSlice'
import { useSelector } from '../redux/store'

import { IconError, IconInfo, IconWarning } from '@/assets/icons/indicators'
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
                  backgroundColor: 'var(--JT-SVG-vscode-input-foreground)',
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
                '&:hover': { backgroundColor: 'var(--JT-SVG-vscode-list-hoverBackground)' },
              },
              content: { margin: 0 },
              expandIconWrapper: {
                [`&.${accordionSummaryClasses.expanded}`]: { transform: 'rotate(90deg)' },
              },
            },
          },
          MuiAlert: {
            defaultProps: {
              iconMapping: {
                error: <IconError size={20} />,
                info: <IconInfo size={20} />,
                warning: <IconWarning size={20} />,
              },
            },
            styleOverrides: {
              root: {
                alignItems: 'center',
                '& .MuiAlert-icon': { marginBottom: 'auto' },
              },
            },
            variants: [
              {
                props: { severity: 'error' },
                style: {
                  backgroundColor: 'var(--JT-SVG-vscode-notifications-background)',
                  color: 'var(--JT-SVG-vscode-notifications-foreground)',
                  '& .MuiAlert-icon': {
                    color: 'var(--JT-SVG-vscode-notificationsErrorIcon-foreground)',
                  },
                },
              },
              {
                props: { severity: 'info' },
                style: {
                  backgroundColor: 'var(--JT-SVG-vscode-notifications-background)',
                  color: 'var(--JT-SVG-vscode-notifications-foreground)',
                  '& .MuiAlert-icon': {
                    color: 'var(--JT-SVG-vscode-notificationsInfoIcon-foreground)',
                  },
                },
              },
              {
                props: { severity: 'success' },
                style: {
                  backgroundColor: 'var(--JT-SVG-vscode-notifications-background)',
                  color: 'var(--JT-SVG-vscode-notifications-foreground)',
                  '& .MuiAlert-icon': {
                    color: 'var(--JT-SVG-vscode-notificationsSuccessIcon-foreground)',
                  },
                },
              },
              {
                props: { severity: 'warning' },
                style: {
                  backgroundColor: 'var(--JT-SVG-vscode-notifications-background)',
                  color: 'var(--JT-SVG-vscode-notifications-foreground)',
                  '& .MuiAlert-icon': {
                    color: 'var(--JT-SVG-vscode-notificationsWarningIcon-foreground)',
                  },
                },
              },
            ],
          },
          MuiIconButton: {
            defaultProps: { size: 'small', disableRipple: true },
            styleOverrides: {
              root: {
                borderRadius: '5px',
                '&:hover': {
                  backgroundColor: 'var(--JT-SVG-vscode-button-hoverBackground)',
                },
              },
              sizeSmall: { padding: '3px' },
            },
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
                  backgroundColor: 'var(--JT-SVG-vscode-input-background, #fff)',
                  fieldset: { border: '1px solid var(--JT-SVG-vscode-input-border, transparent)' },
                  [`&.${inputBaseClasses.focused} fieldset`]: {
                    borderWidth: 1,
                    borderColor: 'var(--JT-SVG-vscode-focusBorder)',
                  },
                  [`&:hover:not(.${inputBaseClasses.focused}) fieldset`]: {
                    borderColor: 'var(--JT-SVG-vscode-input-border, transparent)',
                  },
                  [`&:not(:hover):not(.${inputBaseClasses.focused}) fieldset`]: {
                    borderColor: 'var(--JT-SVG-vscode-input-border, transparent)',
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
                backgroundColor: 'var(--JT-SVG-vscode-editorHoverWidget-background)',
                border: '1px solid var(--JT-SVG-vscode-editorHoverWidget-border)',
                color: 'var(--JT-SVG-vscode-editorHoverWidget-foreground, #ffffff)',
                boxShadow: '0 2px 8px var(--JT-SVG-vscode-widget-shadow)',
                padding: '2px 8px',
                fontSize: `${typeof styles.fontSize === 'number' ? styles.fontSize : 12}px`,
              },
              arrow: {
                top: 'initial',
                color: 'var(--JT-SVG-vscode-editorHoverWidget-background)',
                '&:before': { border: '1px solid var(--JT-SVG-vscode-editorHoverWidget-border)' },
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
