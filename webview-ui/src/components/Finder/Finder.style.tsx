import { Box, TextField as TextFieldMui, styled } from '@mui/material'

export const BoxFinder = styled(Box)(() => ({
  width: '100%',
  display: 'flex',
  marginBottom: 16,
  justifyContent: 'center',
}))

export const TextField = styled(TextFieldMui)(() => ({
  maxWidth: 600,
  '& .MuiButtonBase-root': { color: 'rgba(var(--color-JT-view-export-svg), 0.67)' },
  fieldset: {
    borderColor: 'rgba(var(--color-JT-view-export-svg), 0.23)',
    'legend span': {
      top: 0,
      left: '-5px',
      display: 'block',
      overflow: 'hidden',
      color: 'transparent',
      whiteSpace: 'nowrap',
      position: 'absolute',
      transformOrigin: 'left',
      textOverflow: 'ellipsis',
      maxWidth: 'calc(133% - 32px)',
      background: 'var(--vscode-editor-background)',
      transform: 'translate(14px, -9px) scale(0.75)',
    },
  },
  '& .MuiFormLabel-finder': {
    gap: '10px',
    display: 'flex',
    alignItems: 'center',
  },
  '& .MuiInputBase-root.Mui-focused legend span, & .MuiFormLabel-filled + .MuiInputBase-root legend span':
    {
      opacity: 1,
      svg: { display: 'none' },
    },
  '.MuiFormLabel-root.Mui-focused .MuiFormLabel-finder svg, & .MuiFormLabel-filled .MuiFormLabel-finder svg':
    {
      display: 'none',
    },
}))
