import { Box, type SxProps, Typography } from '@mui/material'
import type {
  ColorPickerBaseProps,
  AnyColor,
  RgbaColor,
} from 'node_modules/react-colorful/dist/types'
import { forwardRef } from 'react'
import { RgbaColorPicker } from 'react-colorful'

import { BoxInfoPickerColor, ColorPickerBox } from './ColorPicker.style'
import { VerticalPickerSlider } from './VerticalPickerSlider'

import { IconMode } from '@/assets/icons/indicators'
import { useColorPicker } from '@/core/hooks/vs/useColorPicker'

interface ColorPickerProps extends Omit<Partial<ColorPickerBaseProps<RgbaColor>>, 'onChange'> {
  currentColor?: AnyColor
  onChange?: (color: RgbaColor, stringColor: string) => void
  sx?: SxProps
}

export const ColorPicker = forwardRef<HTMLDivElement, ColorPickerProps>(function ColorPicker(
  { className, onChange = () => null, currentColor, style, sx, ...props },
  ref
) {
  const {
    color,
    getStringColor,
    currentHue,
    oldColor,
    handleColorChange,
    applyOldColor,
    currentValueColor,
    handleChangeList,
    handleHueChange,
  } = useColorPicker({ currentColor })

  return (
    <ColorPickerBox ref={ref} sx={sx} style={style} className={className}>
      <Box className='ColorPicker__header'>
        <BoxInfoPickerColor
          alpha={color.a}
          width='calc(100% - 74px)'
          bgColor={getStringColor(color)}
          isLight={currentValueColor.isLight}
          onClick={handleChangeList}
        >
          <IconMode size={16} />
          <Typography component='span' sx={{ color: 'currentColor' }}>
            {currentValueColor.value}
          </Typography>
        </BoxInfoPickerColor>
        <BoxInfoPickerColor width={74} bgColor={getStringColor(oldColor)} onClick={applyOldColor} />
      </Box>
      <Box className='ColorPicker__body'>
        <RgbaColorPicker
          {...props}
          className='ColorPicker__body__picker'
          color={color}
          onChange={(newColor) => {
            handleColorChange(newColor)
            onChange(newColor, getStringColor(newColor))
          }}
        />
        <Box className='ColorPicker__body__slider'>
          <VerticalPickerSlider
            variant='alpha'
            alphaColor={getStringColor(color)}
            value={color.a * 100}
            onChange={(_, a) => {
              handleColorChange({ ...color, a: (Array.isArray(a) ? a[0] : a) / 100 })
            }}
          />
          <VerticalPickerSlider value={currentHue} onChange={handleHueChange(color)} />
        </Box>
      </Box>
    </ColorPickerBox>
  )
})
