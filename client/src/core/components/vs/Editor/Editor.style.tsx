import { Box, type BoxProps, styled } from '@mui/material'
import { forwardRef } from 'react'

export const BoxEditor = styled(
  forwardRef<HTMLDivElement, BoxProps>(function BoxEditor(props, ref) {
    return <Box ref={ref} {...props} />
  }),
  { name: 'Box-Editor' }
)(() => ({
  minHeight: 150,
  width: '100%',
  '--JT-SVG-monaco-margin': '10px',
}))
