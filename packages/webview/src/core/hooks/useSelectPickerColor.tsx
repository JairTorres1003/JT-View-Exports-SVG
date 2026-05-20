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
   * Handle the closing of the color picker
   */
  const onClose = () => {
    setOpen(false)
    setCurrentColor(newColor)
    onChangeComplete(newColor)
  }

  /**
   * Handle the key down events
   * @param event - The keyboard event
   */
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (['Escape', 'Enter', 'Tab'].includes(event.key)) onClose()
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
    handleKeyDown,
    handleClickAway: onClose,
    handleChangeColor,
  }
}
