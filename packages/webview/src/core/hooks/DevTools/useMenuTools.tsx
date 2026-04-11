import { SVGReceiveMessage } from '@jt-view-exports-svg/core'
import { useState } from 'react'

import type { TypeEditorRef } from '@/core/types/components/vs/Editor'
import { vscode } from '@/services/vscode'

import { useMenu } from '../useMenu'

interface MenuToolsHookProps {
  editorRef?: React.RefObject<TypeEditorRef>
  resetPlaygroundColor?: VoidFunction
}

export const useMenuTools = ({
  resetPlaygroundColor = () => null,
  editorRef,
}: MenuToolsHookProps) => {
  const { handleClick: openMenu, handleClose, ...restMenu } = useMenu()

  const [isWordWrap, setIsWordWrap] = useState(false)
  const [hasEditor, setHasEditor] = useState(false)

  /**
   * Reloads the playground by resetting the color and calling the reload method on the editor instance.
   */
  const onReloadPlayground = () => {
    resetPlaygroundColor()
    onReloadEditor()
  }

  /**
   * Handles the reload action for the editor.
   */
  const onReloadEditor = () => {
    vscode.postMessage(SVGReceiveMessage.ReloadEditorExtensionTheme)
    handleClose()
  }

  /**
   * Toggles the word wrap option in the editor.
   * If the editor reference is available, it updates the word wrap option based on the current state.
   * Closes the menu after toggling.
   */
  const toggleWordWrap = () => {
    const editor = editorRef?.current?.editor
    if (editor) {
      editor.updateOptions({
        wordWrap: isWordWrap ? 'off' : 'on',
      })
    }
    handleClose()
  }

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const editor = editorRef?.current?.editor
    setHasEditor(Boolean(editor))
    setIsWordWrap(editor?.getRawOptions().wordWrap === 'on')
    openMenu(event)
  }

  return {
    ...restMenu,
    handleClick,
    handleClose,
    onReloadEditor,
    onReloadPlayground,
    toggleWordWrap,
    isWordWrap,
    hasEditor,
  }
}
