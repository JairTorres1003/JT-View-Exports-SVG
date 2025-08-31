import { useEffect, useRef, useState } from 'react'

interface SelectPickerColorHookProps {
  initialColor?: string
  onChangeComplete?: (color: string) => void
  value?: string
}

export const useSelectPickerColor = ({
  onChangeComplete = () => null,
  initialColor = '#fff',
  value,
}: SelectPickerColorHookProps) => {
  const [currentColor, setCurrentColor] = useState('#fff')
  const [newColor, setNewColor] = useState('#fff')
  const [open, setOpen] = useState(false)

  const anchorEl = useRef<HTMLButtonElement>(null)

  /**
   * Handle the toggle of the color picker
   */
  const handleToggle = () => {
    setOpen((prev) => !prev)
  }

  /**
   * Handle the click away of the color picker
   */
  const handleClickAway = () => {
    setOpen(false)
    setCurrentColor(newColor)
    onChangeComplete(newColor)
  }

  /**
   * Handle the change of the color
   * @param color - The new color
   */
  const handleChangeColor = (color: string) => {
    setNewColor(color)
  }

  useEffect(() => {
    setCurrentColor(initialColor)
    setNewColor(initialColor)
  }, [initialColor])

  useEffect(() => {
    if (value) {
      setCurrentColor(value)
      setNewColor(value)
    }
  }, [value])

  return {
    open,
    anchorEl,
    currentColor,
    handleToggle,
    handleClickAway,
    handleChangeColor,
  }
}
