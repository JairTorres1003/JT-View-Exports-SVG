import { SVGReceiveMessage } from '@api/enums/ViewExportsSVG'
import { useState } from 'react'

import type { TypeEditorRef } from '@/core/types/components/vs/Editor'
import { vscode } from '@/services/vscode'

interface MenuToolsHookProps {
  editorRef?: React.RefObject<TypeEditorRef>
  resetPlaygroundColor?: VoidFunction
}

export const useMenuTools = ({ resetPlaygroundColor = () => null }: MenuToolsHookProps) => {
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
   * Handles the reload action for the editor.
   * Sends a message to VSCode to reload the extension theme and closes the current menu or dialog.
   *
   * @remarks
   * This function utilizes the `vscode.postMessage` API to communicate with the VSCode extension host,
   * specifically triggering the `ReloadExtensionTheme` action. After sending the message, it invokes
   * `handleClose` to close the menu or dialog associated with the action.
   */
  const onReloadEditor = () => {
    vscode.postMessage(SVGReceiveMessage.ReloadExtensionTheme)
    handleClose()
  }

  return { open, anchorEl, handleClick, handleClose, onReloadEditor, onReloadPlayground }
}
