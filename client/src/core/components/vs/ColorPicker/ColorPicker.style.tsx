import { Box, type BoxProps, styled, typographyClasses } from '@mui/material'
import type { ComponentType } from 'react'

import bgTransparent from '@/assets/images/bg-transparent.png'

export const ColorPickerBox = styled(Box, { name: 'ColorPicker-Box' })(({ theme: { shape } }) => ({
  backgroundColor: 'var(--JT-SVG-vscode-editorHoverWidget-background)',
  border: '1px solid var(--JT-SVG-vscode-editorHoverWidget-border, #2c313a)',
  borderRadius: `${shape.borderRadius}px`,
  color: 'var(--JT-SVG-vscode-editorHoverWidget-foreground)',
  maxWidth: '750px',
  maxHeight: '250px',
  '& .ColorPicker__header': {
    backgroundImage: `url('${bgTransparent}')`,
    backgroundSize: '9px 9px',
    display: 'flex',
    height: '24px',
    imageRendering: 'pixelated',
    position: 'relative',
  },
  '& .ColorPicker__body': {
    '--JT-SVG-max-height-picker': '150px',
    '--JT-SVG-space-picker': '8px',
    display: 'flex',
    padding: '8px',
    gap: 'var(--JT-SVG-space-picker)',
    position: 'relative',
    '& .ColorPicker__body__picker': {
      width: '100%',
      height: 'max-content',
      flexDirection: 'row',
      '& .react-colorful__saturation': {
        borderRadius: 0,
        overflow: 'hidden',
        height: 'var(--JT-SVG-max-height-picker)',
        minWidth: '220px',
        flex: 'initial',
        width: '100%',
      },
      '& .react-colorful__pointer-fill': {
        display: 'none',
      },
      '& .react-colorful__saturation-pointer': {
        border: '1px solid #fff',
        borderRadius: '100%',
        boxShadow: '0 0 2px rgba(0, 0, 0, .8)',
        height: '9px',
        margin: '0.5px 0 0 0.5px',
        position: 'absolute',
        width: '9px',
        backgroundColor: 'transparent',
      },
      '& .react-colorful__hue, & .react-colorful__alpha': {
        display: 'none',
        width: 0,
        height: 0,
        overflow: 'hidden',
        opacity: 0,
      },
    },
    '& .ColorPicker__body__slider': {
      height: 'var(--JT-SVG-max-height-picker)',
      display: 'flex',
      gap: 'var(--JT-SVG-space-picker)',
    },
  },
}))

export const BoxInfoPickerColor = styled<ComponentType<BoxProps & { bgColor: string }>>(
  ({ bgColor, style, ...props }) => (
    <Box
      {...props}
      style={{
        backgroundColor: bgColor,
        ...style,
      }}
    />
  ),
  { name: 'CurrentPickerColor-Box' }
)(() => ({
  alignItems: 'center',
  color: '#fff',
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'center',
  lineHeight: '24px',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  [`& .${typographyClasses.root}`]: {
    fontFamily: '-apple-system, "system-ui", sans-serif',
    marginLeft: '5px',
    marginRight: '5px',
    whiteSpace: 'nowrap',
  },
}))
