import { Box, Typography } from '@mui/material'
import { forwardRef } from 'react'
import { RgbaColorPicker } from 'react-colorful'

import IconMode from '@/assets/icons/indicators/mode'
import { useColorPicker } from '@/core/hooks/vs/useColorPicker'
import type { ColorPickerProps } from '@/core/types/components/vs/ColorPicker'
import { convertToStringColor } from '@/core/utils/vs/color'

import { colorPickerClasses } from './ColorPicker.classes'
import { BoxInfoPickerColor, ColorPickerBox } from './ColorPicker.style'
import { VerticalPickerSlider } from './VerticalPickerSlider'

const ColorPicker = forwardRef<HTMLDivElement, ColorPickerProps>(function ColorPicker(
  { className, onChange = () => null, currentColor, style, sx, ...props },
  ref
) {
  const {
    color,
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
          bgColor={convertToStringColor(color)}
          isLight={currentValueColor.isLight}
          onClick={handleChangeList}
          sx={{ width: 'calc(100% - 74px)' }}
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
        <BoxInfoPickerColor
          sx={{ width: 74 }}
          onClick={applyOldColor}
          bgColor={convertToStringColor(oldColor)}
        />
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
            alphaColor={convertToStringColor(color)}
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
