import { Box, type BoxProps, styled } from '@mui/material'
import { forwardRef } from 'react'

import { editorClasses } from './Editor.classes'

export const BoxEditor = styled(
  forwardRef<HTMLDivElement, BoxProps>(function BoxEditor(props, ref) {
    return <Box ref={ref} {...props} />
  }),
  { name: editorClasses.root, target: editorClasses.root }
)(() => ({
  minHeight: 150,
  width: '100%',
  resize: 'vertical',
  overflow: 'auto',
  '--JT-SVG-monaco-margin': '10px',
}))
