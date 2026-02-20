import { useState } from 'react'

export const useMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  /**
   * Opens the menu by setting the anchor element to the current target of the event.
   * @param event - The mouse event that triggered the menu opening.
   */
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  /**
   * Closes the menu by setting the anchor element to null.
   */
  const handleClose = () => {
    setAnchorEl(null)
  }

  return {
    anchorEl,
    handleClick,
    handleClose,
    open,
  }
}
