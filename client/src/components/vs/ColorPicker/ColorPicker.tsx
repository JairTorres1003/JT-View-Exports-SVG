import { Box, Typography } from '@mui/material'
import {
  type ColorPickerBaseProps,
  type AnyColor,
  type RgbaColor,
} from 'node_modules/react-colorful/dist/types'
import { type FC } from 'react'
import { RgbaColorPicker } from 'react-colorful'

import { BoxInfoPickerColor, ColorPickerBox } from './ColorPicker.style'
import { VerticalPickerSlider } from './VerticalPickerSlider'

import { IconMode } from '@/assets/icons/indicators'
import { useColorPicker } from '@/hooks/components/vs/useColorPicker'

interface ColorPickerProps extends Partial<ColorPickerBaseProps<RgbaColor>> {
  currentColor?: AnyColor
}

export const ColorPicker: FC<ColorPickerProps> = ({
  className,
  onChange = () => {},
  currentColor,
  ...props
}) => {
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
  } = useColorPicker({
    currentColor,
  })

  return (
    <ColorPickerBox className={className}>
      <Box className='ColorPicker__header'>
        <BoxInfoPickerColor
          width='calc(100% - 74px)'
          bgcolor={getStringColor(color)}
          onClick={handleChangeList}
          style={{ color: currentValueColor.isLight ? '#000' : '#fff' }}
        >
          <IconMode size={16} />
          <Typography component='span' sx={{ color: 'currentColor' }}>
            {currentValueColor.value ?? 'No color'}
          </Typography>
        </BoxInfoPickerColor>
        <BoxInfoPickerColor width={74} bgcolor={getStringColor(oldColor)} onClick={applyOldColor} />
      </Box>
      <Box className='ColorPicker__body'>
        <RgbaColorPicker
          {...props}
          className='ColorPicker__body__picker'
          color={color}
          onChange={(newColor) => {
            handleColorChange(newColor)
            onChange(newColor)
          }}
        />
        <Box className='ColorPicker__body__slider'>
          <VerticalPickerSlider
            variant='alpha'
            alphaColor={getStringColor(color)}
            value={color.a * 100}
            onChange={(_, a) => {
              handleColorChange({ ...color, a: (a as number) / 100 })
            }}
          />
          <VerticalPickerSlider value={currentHue} onChange={handleHueChange(color)} />
        </Box>
      </Box>
    </ColorPickerBox>
  )
}
