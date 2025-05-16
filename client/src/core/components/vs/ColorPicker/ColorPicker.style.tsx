import { Box, type BoxProps, styled, typographyClasses } from '@mui/material'
import type { ComponentType } from 'react'

import { colorPickerClasses, reactColorfulClasses } from './ColorPicker.classes'

import bgTransparent from '@/assets/images/bg-transparent.png'

export const ColorPickerBox = styled(Box, {
  name: colorPickerClasses.root,
  target: colorPickerClasses.root,
})(({ theme: { shape } }) => ({
  backgroundColor: 'var(--JT-SVG-vscode-editorHoverWidget-background)',
  border: '1px solid var(--JT-SVG-vscode-editorHoverWidget-border, #2c313a)',
  borderRadius: `${shape.borderRadius}px`,
  color: 'var(--JT-SVG-vscode-editorHoverWidget-foreground)',
  maxWidth: '750px',
  maxHeight: '250px',
  [`& .${colorPickerClasses.header}`]: {
    backgroundImage: `url('${bgTransparent}')`,
    backgroundSize: '9px 9px',
    display: 'flex',
    height: '24px',
    imageRendering: 'pixelated',
    position: 'relative',
  },
  [`& .${colorPickerClasses.body}`]: {
    '--JT-SVG-max-height-picker': '150px',
    '--JT-SVG-space-picker': '8px',
    display: 'flex',
    padding: '8px',
    gap: 'var(--JT-SVG-space-picker)',
    position: 'relative',
    [`& .${colorPickerClasses.picker}`]: {
      width: '100%',
      height: 'max-content',
      flexDirection: 'row',
      [`& .${reactColorfulClasses.saturation}`]: {
        borderRadius: 0,
        overflow: 'hidden',
        height: 'var(--JT-SVG-max-height-picker)',
        minWidth: '220px',
        flex: 'initial',
        width: '100%',
      },
      [`& .${reactColorfulClasses.saturationPointer}`]: {
        border: '1px solid #fff',
        borderRadius: '100%',
        boxShadow: '0 0 2px rgba(0, 0, 0, .8)',
        height: '9px',
        margin: '0.5px 0 0 0.5px',
        position: 'absolute',
        width: '9px',
        backgroundColor: 'transparent',
      },
      [`& .${reactColorfulClasses.fill}`]: {
        display: 'none',
      },
      [`& .${reactColorfulClasses.hue}, & .${reactColorfulClasses.alpha}`]: {
        display: 'none',
        width: 0,
        height: 0,
        overflow: 'hidden',
        opacity: 0,
      },
    },
    [`& .${colorPickerClasses.sliders}`]: {
      height: 'var(--JT-SVG-max-height-picker)',
      display: 'flex',
      gap: 'var(--JT-SVG-space-picker)',
    },
  },
}))

interface BoxInfoPickerColorProps extends BoxProps {
  bgColor: string
  /**
   * If the color is light, the text will be black
   * @default false
   */
  isLight?: boolean
  /**
   * The alpha value of the color
   * @default 1
   */
  alpha?: number
}

export const BoxInfoPickerColor = styled<ComponentType<BoxInfoPickerColorProps>>(
  ({ bgColor, isLight = false, alpha = 1, style, ...props }) => (
    <Box
      {...props}
      style={{
        backgroundColor: bgColor,
        color: alpha < 0.5 ? undefined : isLight ? '#000' : '#fff',
        ...style,
      }}
    />
  ),
  { name: colorPickerClasses.pad, target: colorPickerClasses.pad }
)(({ theme: { vars } }) => ({
  alignItems: 'center',
  color: vars.palette.text.primary,
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'center',
  lineHeight: '24px',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  [`& .${typographyClasses.root}.${colorPickerClasses.textColor}`]: {
    fontFamily: '-apple-system, "system-ui", sans-serif',
    marginLeft: '5px',
    marginRight: '5px',
    whiteSpace: 'nowrap',
  },
}))
