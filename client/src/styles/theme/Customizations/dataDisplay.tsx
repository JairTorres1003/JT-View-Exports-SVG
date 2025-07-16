import { dividerClasses, menuItemClasses, tooltipClasses } from '@mui/material'

import { IconError, IconInfo, IconWarning } from '@/assets/icons/indicators'
import type { CustomizationsFunction } from '@/types/BaseProps'

/**
 * Customizations for data display in the theme.
 */
export const dataDisplayCustomizations: CustomizationsFunction = (styles) => ({
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
          backgroundColor:
            'var(--JT-SVG-vscode-notifications-background, var(--JT-SVG-palette-Alert-errorStandardBg))',
          color:
            'var(--JT-SVG-vscode-notifications-foreground, var(--JT-SVG-palette-Alert-errorColor))',
          '& .MuiAlert-icon': {
            color: 'var(--JT-SVG-vscode-notificationsErrorIcon-foreground)',
          },
        },
      },
      {
        props: { severity: 'info' },
        style: {
          backgroundColor:
            'var(--JT-SVG-vscode-notifications-background, var(--JT-SVG-palette-Alert-infoStandardBg))',
          color:
            'var(--JT-SVG-vscode-notifications-foreground, var(--JT-SVG-palette-Alert-infoColor))',
          '& .MuiAlert-icon': {
            color: 'var(--JT-SVG-vscode-notificationsInfoIcon-foreground)',
          },
        },
      },
      {
        props: { severity: 'success' },
        style: {
          backgroundColor:
            'var(--JT-SVG-vscode-notifications-background, var(--JT-SVG-palette-Alert-successStandardBg))',
          color:
            'var(--JT-SVG-vscode-notifications-foreground, var(--JT-SVG-palette-Alert-successColor))',
          '& .MuiAlert-icon': {
            color: 'var(--JT-SVG-vscode-notificationsSuccessIcon-foreground)',
          },
        },
      },
      {
        props: { severity: 'warning' },
        style: {
          backgroundColor:
            'var(--JT-SVG-vscode-notifications-background, var(--JT-SVG-palette-Alert-warningStandardBg))',
          color:
            'var(--JT-SVG-vscode-notifications-foreground, var(--JT-SVG-palette-Alert-warningColor))',
          '& .MuiAlert-icon': {
            color: 'var(--JT-SVG-vscode-notificationsWarningIcon-foreground)',
          },
        },
      },
    ],
  },
  MuiBadge: {
    defaultProps: {
      anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'right',
      },
    },
    styleOverrides: {
      badge: {
        backgroundColor: 'var(--JT-SVG-vscode-activityBarBadge-background)',
        color: 'var(--JT-SVG-vscode-activityBarBadge-foreground)',
        fontSize: '9px',
        fontWeight: 600,
        minWidth: '16px',
        height: '16px',
        lineHeight: '16px',
        padding: '0 4px',
        borderRadius: '20px',
        textAlign: 'center',
        boder: '1px solid var(--JT-SVG-vscode-panel-border)',
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
        padding: '4px 8px',
        fontSize: `${typeof styles.fontSize === 'number' ? styles.fontSize : 12}px`,
        maxWidth: 700,
        maxHeight: 540,
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
  MuiMenu: {
    defaultProps: {
      marginThreshold: 0,
    },
    styleOverrides: {
      paper: {
        borderRadius: '6px',
        backdropFilter: 'blur(5px)',
        background: 'rgba(227, 226, 229, 0.90)',
        border: '1px solid #BCBCBC',
        color: '#000',
      },
      list: ({ theme: { palette } }) => ({
        padding: '5px',
        [`& .${menuItemClasses.root}`]: {
          padding: '6px 10px',
          height: 26.5,
          borderRadius: '4px',
          minHeight: 0,
          fontFamily: 'var(--vscode-font-family)',
          fontWeight: 'var(--vscode-font-weight)',
          fontSize: 'calc(var(--vscode-font-size, 13px) + 1px)',
          '&:hover': {
            backgroundColor: palette.primary.main,
            color: palette.primary.contrastText,
          },
          [`&+.${dividerClasses.root}`]: {
            margin: '4px 10px',
          },
        },
      }),
    },
  },
})
