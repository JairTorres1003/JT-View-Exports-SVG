import { useEffect, useState } from 'react'

import { getUnknownError } from '@/utils/misc'

interface PlaygroundHook {
  backgroundColor: string
  expanded: boolean
  handleExpand: VoidFunction
  onChangeColor: (color: string) => void
  initialColor: string
}

const CSS_VAR_MAIN = '--JT-SVG-vscode-sideBarTitle-background'
const CSS_VAR_SECONDARY = '--JT-SVG-vscode-sideBarSectionHeader-background'

export const usePlayground = (): PlaygroundHook => {
  const [backgroundColor, setBackgroundColor] = useState('#fff')
  const [expanded, setExpanded] = useState(true)

  const [initialColor, setInitialColor] = useState('#fff')

  /**
   * Toggles the expanded state.
   *
   * This function updates the `expanded` state by inverting its current value.
   * It uses the previous state value to ensure the state is correctly toggled.
   */
  const handleExpand = () => {
    setExpanded((prevExpanded) => !prevExpanded)
  }

  /**
   * Updates the background color state with the provided color.
   *
   * @param {string} color - The new color to set as the background color.
   */
  const onChangeColor = (color: string) => {
    setBackgroundColor(color)
  }

  /**
   * Applies the initial color to the canvas by retrieving the main and secondary colors
   * from the CSS variables and setting them as the fill style for the canvas context.
   * The resulting color is then set as the initial color and triggers the onChangeColor callback.
   *
   * @throws Will log an error message if there is an issue applying the initial color.
   */
  const applyInitialColor = () => {
    try {
      const root = document.documentElement
      const mainColor = getComputedStyle(root).getPropertyValue(CSS_VAR_MAIN)
      const secondaryColor = getComputedStyle(root).getPropertyValue(CSS_VAR_SECONDARY)

      const canvas = document.createElement('canvas')
      canvas.width = 10
      canvas.height = 10
      const ctx = canvas.getContext('2d')

      if (ctx) {
        ctx.fillStyle = mainColor !== '' ? mainColor : 'transparent'
        ctx.fillRect(0, 0, 10, 10)

        ctx.fillStyle = secondaryColor !== '' ? secondaryColor : 'transparent'
        ctx.fillRect(0, 0, 10, 10)

        const imageData = ctx.getImageData(5, 5, 1, 1)
        const [r, g, b, a] = imageData.data
        const initialColor = `rgba(${r}, ${g}, ${b}, ${a})`

        setInitialColor(initialColor)
        onChangeColor(initialColor)
      }
    } catch (error) {
      console.error('Error applying initial color:', getUnknownError(error))
    }
  }

  useEffect(() => {
    applyInitialColor()
  }, [])

  return {
    backgroundColor,
    expanded,
    handleExpand,
    onChangeColor,
    initialColor,
  }
}
