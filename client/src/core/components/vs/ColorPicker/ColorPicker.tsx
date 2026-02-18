import { Box, Typography } from '@mui/material'
import { forwardRef } from 'react'
import { RgbaColorPicker } from 'react-colorful'

import IconMode from '@/assets/icons/indicators/mode'
import { useColorPicker } from '@/core/hooks/vs/useColorPicker'
import type { ColorPickerProps } from '@/core/types/components/vs/ColorPicker'

import { colorPickerClasses } from './ColorPicker.classes'
import { BoxInfoPickerColor, ColorPickerBox } from './ColorPicker.style'
import { VerticalPickerSlider } from './VerticalPickerSlider'

const ColorPicker = forwardRef<HTMLDivElement, ColorPickerProps>(function ColorPicker(
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
  } = useColorPicker({ currentColor, onChange })

  return (
    <ColorPickerBox ref={ref} sx={sx} style={style} className={className}>
      <Box className={colorPickerClasses.header}>
        <BoxInfoPickerColor
          alpha={color.a}
          width='calc(100% - 74px)'
          bgColor={getStringColor(color)}
          isLight={currentValueColor.isLight}
          onClick={handleChangeList}
        >
          <IconMode size={16} />
          <Typography
            component='span'
            sx={{ color: 'currentColor' }}
            className={colorPickerClasses.textColor}
          >
            {currentValueColor.value}
          </Typography>
        </BoxInfoPickerColor>
        <BoxInfoPickerColor width={74} bgColor={getStringColor(oldColor)} onClick={applyOldColor} />
      </Box>
      <Box className={colorPickerClasses.body}>
        <RgbaColorPicker
          {...props}
          className={colorPickerClasses.picker}
          color={color}
          onChange={handleColorChange}
        />
        <Box className={colorPickerClasses.sliders}>
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

export default ColorPicker
