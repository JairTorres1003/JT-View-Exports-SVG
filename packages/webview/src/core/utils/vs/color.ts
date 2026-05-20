import Colorize from 'color'
import type { AnyColor } from 'react-colorful'
import type { ColorizeOrderedList, ColorizeParam } from '@/core/types/components/vs/ColorPicker'
import { getUnknownError } from '@/utils/errors'

/**
 * Normalizes the alpha channel of a color object.
 * @param color - The color object or value to normalize
 * @returns A color parameter with the alpha channel normalized to a maximum of 3 decimal places if less than 1
 */
export function normalizeColorAlpha(color: AnyColor): ColorizeParam {
  if (typeof color === 'object' && 'a' in color) {
    const { a, ...rest } = color

    return {
      ...rest,
      alpha: a < 1 ? parseFloat(a.toFixed(3)) : a,
    }
  }

  return color
}

/**
 * Converts a color value to its string representation.
 * @param color - The color to convert, can be in any supported color format
 * @returns A string representation of the color in RGB or RGBA format
 */
export function convertToStringColor(color: AnyColor): string {
  const rgba = Colorize(normalizeColorAlpha(color)).rgb()

  return rgba.string()
}

export const ORDERED_LIST: ColorizeOrderedList = [
  (color) =>
    typeof color === 'object' && 'alpha' in color && color.alpha !== 1
      ? Colorize(color).hexa()
      : Colorize(color).hex(),
  (color) => Colorize(color).hsl(),
  (color) => Colorize(color).hwb(),
  (color) => Colorize(color).rgb(),
]

/**
 * Determines an appropriate text color based on the provided color and position.
 * @param color - The color to analyze. Can be any supported color format.
 * @param pos - The position index used to select from the ordered color list.
 * @returns An object containing the computed text color value and a flag indicating if the color is light.
 */
export function determineTextColor(
  color: AnyColor,
  pos: number
): { value: string; isLight: boolean } {
  try {
    const fixedColor = normalizeColorAlpha(color)

    const list = ORDERED_LIST[pos] ?? ORDERED_LIST[0]
    const isLight = Colorize(fixedColor).isLight()

    return {
      value: list(fixedColor).toString(),
      isLight,
    }
  } catch (error) {
    console.error(getUnknownError(error))
    return { value: '', isLight: false }
  }
}
