import { useState } from 'react'

import type { TypeEditorRef } from '@/core/types/components/vs/Editor'

interface MenuToolsHookProps {
  editorRef?: React.RefObject<TypeEditorRef>
  resetPlaygroundColor?: VoidFunction
}

export const useMenuTools = ({
  editorRef,
  resetPlaygroundColor = () => null,
}: MenuToolsHookProps) => {
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

  /**
   * Reloads the playground by resetting the color and calling the reload method on the editor instance.
   */
  const onReloadPlayground = () => {
    resetPlaygroundColor()
    onReloadEditor()
  }

  /**
   * Reloads the editor by calling the reload method on the editor instance.
   */
  const onReloadEditor = () => {
    editorRef?.current?.editor?.reload()
    handleClose()
  }

  return { open, anchorEl, handleClick, handleClose, onReloadEditor, onReloadPlayground }
}
