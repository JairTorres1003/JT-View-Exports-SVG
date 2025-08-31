import { inputBaseClasses } from '@mui/material'

import type { CustomizationsFunction } from '@/types/BaseProps'

/**
 * Customizations for inputs in the theme.
 */
export const inputsCustomizations: CustomizationsFunction = (styles) => ({
  MuiIconButton: {
    defaultProps: { size: 'small', disableRipple: true },
    styleOverrides: {
      root: {
        borderRadius: '5px',
        '&:hover': {
          backgroundColor: 'var(--JT-SVG-vscode-toolbar-hoverBackground)',
          outline: '1px dashed var(--JT-SVG-vscode-toolbar-hoverOutline)',
          outlineOffset: '-1px',
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
  MuiButton: {
    defaultProps: { variant: 'outlined' },
    styleOverrides: {
      root: {
        textTransform: 'capitalize',
        fontWeight: 'bold',
      },
    },
    variants: [
      {
        props: { size: 'large' },
        style: { padding: '12px 16px', fontSize: 16 },
      },
      {
        props: { variant: 'outlined' },
        style: {
          background: 'var(--JT-SVG-vscode-sideBarSectionHeader-background)',
          border:
            '1px solid var(--JT-SVG-vscode-sideBarSectionHeader-border, rgb(255 255 255 / 16%))',
          '&:before': {
            content: '""',
            position: 'absolute',
            inset: 0,
            background: 'rgb(255 255 255 / 2%)',
            borderRadius: 'inherit',
          },
          '&:hover:before': {
            background: 'rgb(255 255 255 / 6%)',
          },
        },
      },
      {
        props: { variant: 'contained' },
        style: {
          background: 'var(--JT-SVG-vscode-button-background)',
          border: 'none',
          color: 'var(--JT-SVG-vscode-button-foreground)',
          '&:hover': {
            background: 'var(--JT-SVG-vscode-button-hoverBackground)',
          },
        },
      },
    ],
  },
})
