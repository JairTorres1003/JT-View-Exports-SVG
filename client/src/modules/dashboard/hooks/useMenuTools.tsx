import { SVGReceiveMessage } from '@api/enums/ViewExportsSVG'
import * as monaco from 'monaco-editor'
import { useEffect, useState } from 'react'

import type { TypeEditorRef } from '@/core/types/components/vs/Editor'
import { vscode } from '@/services/vscode'

interface MenuToolsHookProps {
  editorRef?: React.RefObject<TypeEditorRef>
  resetPlaygroundColor?: VoidFunction
}

export const useMenuTools = ({
  resetPlaygroundColor = () => null,
  editorRef,
}: MenuToolsHookProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const [isWordWrap, setIsWordWrap] = useState(false)
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

  /**
   * Toggles the word wrap option in the editor.
   * If the editor reference is available, it updates the word wrap option based on the current state.
   * Closes the menu after toggling.
   */
  const toogleWordWrap = () => {
    if (editorRef?.current) {
      editorRef.current?.editor?.updateOptions({
        wordWrap: isWordWrap ? 'off' : 'on',
      })
    }
    handleClose()
  }

  useEffect(() => {
    if (editorRef?.current) {
      const { editor } = editorRef.current
      const currentOption = monaco.editor.EditorOption.wordWrap
      setIsWordWrap(editor?.getOption(currentOption) === 'on')

      editor?.onDidChangeConfiguration((e) => {
        if (e.hasChanged(currentOption)) {
          setIsWordWrap(editor.getOption(currentOption) === 'on')
        }
      })
    }
  }, [editorRef?.current])

  return {
    open,
    anchorEl,
    handleClick,
    handleClose,
    onReloadEditor,
    onReloadPlayground,
    toogleWordWrap,
    isWordWrap,
  }
}
