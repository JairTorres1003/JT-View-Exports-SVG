import Colorize from 'color'
import { useEffect, useState } from 'react'
import type { AnyColor, RgbaColor } from 'react-colorful'

import type { ColorPickerHook, ColorPickerHookProps } from '@/core/types/components/vs/ColorPicker'
import {
  convertToStringColor,
  determineTextColor,
  normalizeColorAlpha,
  ORDERED_LIST,
} from '@/core/utils/vs/color'
import isEmpty from '@/utils/is-empty'

const INITIAL_COLOR = { r: 255, g: 255, b: 255, a: 1 }

export const useColorPicker = ({
  currentColor = INITIAL_COLOR,
  onChange: onChangeCallback = () => null,
}: ColorPickerHookProps): ColorPickerHook => {
  const [color, setColor] = useState<RgbaColor>(INITIAL_COLOR)
  const [oldColor, setOldColor] = useState<RgbaColor>(INITIAL_COLOR)
  const [currentHue, setCurrentHue] = useState<number>(0)
  const [currentList, setCurrentList] = useState(0)
  const [currentValueColor, setCurrentValueColor] = useState<{ value: string; isLight: boolean }>({
    value: '',
    isLight: false,
  })

  /**
   * Handles the change of hue in the color picker.
   *
   * @param {RgbaColor} color - The current RGBA color object.
   * @returns A function that takes an event and a new hue value, and updates the color with the new hue.
   */
  const handleHueChange = (color: RgbaColor) => (_: Event, newHue: number | number[]) => {
    const valueHue = Array.isArray(newHue) ? newHue[0] : newHue
    const newColor = Colorize(normalizeColorAlpha(color))
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
    onChangeCallback(newColor, convertToStringColor(newColor))
  }

  /**
   * Restores the color to its previous value.
   */
  const applyOldColor = (): void => {
    handleColorChange(oldColor)
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
    setCurrentValueColor(determineTextColor(color, currentList))
  }

  useEffect(() => {
    if (!isEmpty(currentColor)) {
      const convertedColor = Colorize(normalizeColorAlpha(currentColor)).rgb()
      const valueHue = Colorize(normalizeColorAlpha(currentColor)).hue()

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
    currentHue,
    handleColorChange,
    applyOldColor,
    handleChangeList,
    currentValueColor,
    handleHueChange,
  }
}
