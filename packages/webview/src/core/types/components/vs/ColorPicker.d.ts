import type { SliderProps, SxProps } from '@mui/material'
import type Colorize from 'color'
import type { ColorInstance } from 'color'
import type {
  AnyColor,
  ColorPickerBaseProps,
  RgbaColor,
} from 'node_modules/react-colorful/dist/types'

export type ColorizeParam = Parameters<typeof Colorize>[0]

export type ColorizeOrderedList = Array<
  ((color: ColorizeParam) => string) | ((color: ColorizeParam) => ColorInstance)
>

export interface ColorPickerHook {
  oldColor: RgbaColor
  color: RgbaColor
  getStringColor: (color: AnyColor) => string
  currentHue: number
  handleColorChange: (newColor: RgbaColor) => void
  applyOldColor: VoidFunction
  handleChangeList: VoidFunction
  currentValueColor: {
    value: string
    isLight: boolean
  }
  handleHueChange: (color: RgbaColor) => (event: Event, newHue: number | number[]) => void
}

export interface ColorPickerHookProps {
  currentColor?: AnyColor
  onChange?: (color: RgbaColor, stringColor: string) => void
}

export interface ColorPickerProps
  extends Omit<Partial<ColorPickerBaseProps<RgbaColor>>, 'onChange'> {
  currentColor?: AnyColor
  onChange?: (color: RgbaColor, stringColor: string) => void
  sx?: SxProps
}

export interface VerticalPickerSliderProps
  extends Omit<SliderProps, 'orientation' | 'max' | 'min'> {
  /**
   * The variant of the slider.
   * @default 'hue'
   */
  variant?: 'hue' | 'alpha'

  /**
   * The color of the alpha slider.
   */
  alphaColor?: string
}
