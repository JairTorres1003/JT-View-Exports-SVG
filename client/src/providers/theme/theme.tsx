import { createTheme, type Theme } from '@mui/material'

export const theme = (): Theme =>
  createTheme({
    cssVariables: { cssVarPrefix: 'JT-SVG' },
    components: {
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
      MuiIconButton: {
        defaultProps: { size: 'small' },
      },
    },
  })
