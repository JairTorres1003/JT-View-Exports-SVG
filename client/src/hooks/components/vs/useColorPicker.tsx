import Colorize from 'color'
import { type AnyColor, type RgbaColor } from 'node_modules/react-colorful/dist/types'
import { useEffect, useState } from 'react'

import { getUnknownError, isEmpty } from '@/utils/misc'

type ColorizeParam = Parameters<typeof Colorize>[0]

interface ColorPickerHook {
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

interface ColorPickerHookProps {
  currentColor?: AnyColor
}

const INITIAL_COLOR = { r: 255, g: 255, b: 255, a: 1 }

const ORDERED_LIST = [
  (color: ColorizeParam) =>
    typeof color === 'object' && 'alpha' in color && color.alpha !== 1
      ? Colorize(color).hexa()
      : Colorize(color).hex(),
  (color: ColorizeParam) => Colorize(color).hsl(),
  (color: ColorizeParam) => Colorize(color).hwb(),
  (color: ColorizeParam) => Colorize(color).rgb(),
]

export const useColorPicker = ({
  currentColor = INITIAL_COLOR,
}: ColorPickerHookProps): ColorPickerHook => {
  const [oldColor, setOldColor] = useState<RgbaColor>(INITIAL_COLOR)
  const [color, setColor] = useState<RgbaColor>(INITIAL_COLOR)
  const [currentList, setCurrentList] = useState(0)
  const [currentValueColor, setCurrentValueColor] = useState<{ value: string; isLight: boolean }>({
    value: '',
    isLight: false,
  })
  const [currentHue, setCurrentHue] = useState<number>(0)

  /**
   * Adjusts the color object to ensure it has the correct structure for the Colorize function.
   * Specifically, if the color object contains an 'a' property (representing alpha), it renames it to 'alpha'.
   *
   * @param color - The color object to be fixed. It can be of any type that conforms to the AnyColor type.
   * @returns The adjusted color object with the 'a' property renamed to 'alpha', if applicable.
   */
  const fixedColorize = (color: AnyColor): ColorizeParam => {
    if (typeof color === 'object' && 'a' in color) {
      const { a, ...rest } = color

      return {
        ...rest,
        alpha: color.a < 1 ? parseFloat(color.a.toFixed(3)) : color.a,
      }
    }

    return color
  }

  /**
   * Converts a given color to its string representation in RGBA format.
   *
   * @param color - The color to be converted. It can be of any type that is compatible with the `Colorize` function.
   * @returns The RGBA string representation of the given color.
   */
  const getStringColor = (color: AnyColor): string => {
    const rgba = Colorize(fixedColorize(color)).rgb()

    return rgba.string()
  }

  /**
   * Handles the change of hue in the color picker.
   *
   * @param {RgbaColor} color - The current RGBA color object.
   * @returns A function that takes an event and a new hue value, and updates the color with the new hue.
   */
  const handleHueChange = (color: RgbaColor) => (_: Event, newHue: number | number[]) => {
    const valueHue = Array.isArray(newHue) ? newHue[0] : newHue
    const newColor = Colorize(fixedColorize(color))
      .hue(valueHue * -1)
      .rgb()

    handleColorChange({
      r: newColor.red(),
      g: newColor.green(),
      b: newColor.blue(),
      a: newColor.alpha(),
    })
    setCurrentHue(valueHue)
  }

  /**
   * Handles the color change event.
   *
   * @param newColor - The new color value in RGBA format.
   * @returns void
   */
  const handleColorChange = (newColor: RgbaColor): void => {
    setColor(newColor)
  }

  /**
   * Restores the color to its previous value.
   */
  const applyOldColor = (): void => {
    setColor(oldColor)
  }

  /**
   * Changes the current list of color representations.
   */
  const handleChangeList = (): void => {
    setCurrentList((prev) => (prev + 1) % ORDERED_LIST.length)
  }

  /**
   * Handles the text color change by fixing the color, determining if it is light or dark,
   * and setting the current value color state.
   *
   * @param {AnyColor} color - The color to be processed.
   * @throws Will log an error if an unknown error occurs during processing.
   */
  const handleTextColor = (color: AnyColor): void => {
    try {
      const fixedColor = fixedColorize(color)

      const list = ORDERED_LIST[currentList] ?? ORDERED_LIST[0]
      const isLight = Colorize(fixedColor).isLight()

      setCurrentValueColor({
        value: list(fixedColor)?.toString(),
        isLight,
      })
    } catch (error) {
      console.error(getUnknownError(error))
    }
  }

  useEffect(() => {
    if (!isEmpty(currentColor)) {
      const convertedColor = Colorize(fixedColorize(currentColor)).rgb()
      const valueHue = Colorize(fixedColorize(currentColor)).hue()

      const newColor = {
        r: convertedColor.red(),
        g: convertedColor.green(),
        b: convertedColor.blue(),
        a: convertedColor.alpha(),
      }

      setOldColor(newColor)
      setColor(newColor)
      setCurrentHue(valueHue * -1)
    }
  }, [currentColor])

  useEffect(() => {
    handleTextColor(color)
  }, [color, currentList])

  return {
    oldColor,
    color,
    getStringColor,
    currentHue,
    handleColorChange,
    applyOldColor,
    handleChangeList,
    currentValueColor,
    handleHueChange,
  }
}
