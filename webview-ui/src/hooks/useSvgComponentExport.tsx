import { useState } from 'react'

import { type SvgFile, type SvgComponent } from '../interfaces/svgExports'
import { useSvg } from '../provider/SvgProvider'
import { vscode } from '../utilities/vscode'

const useSvgComponentExport = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(true)

  const { dispatch } = useSvg()

  /**
   * Toggles the expansion state.
   * @returns {void}
   */
  const handleExpanded = (): void => {
    setIsExpanded((previousState) => !previousState)
  }

  /**
   * Copies the provided text to the clipboard and displays a snackbar notification.
   * @param {string} text - The text to be copied to the clipboard.
   * @returns {void}
   */
  const handleCopy = (text: string): void => {
    navigator.clipboard.writeText(text).catch((error) => {
      dispatch({
        type: 'SNACKBAR',
        payload: { open: true, text: error.message },
      })
    })
    dispatch({ type: 'SNACKBAR', payload: { open: true, text } })
  }

  /**
   * Updates the selected SVG component.
   * @param {SvgComponent} item - The SVG component to be selected.
   * @returns {void}
   */
  const handleSelected = (item: SvgComponent, file: SvgFile): void => {
    const name = item.name
    const path = file.absolutePath
    const language = file.language ?? 'plaintext'

    dispatch({ type: 'SELECTED', payload: { item, name, path, language } })
  }

  /**
   * Handles opening a file.
   * @param path - The path of the file to open.
   */
  const handleOpenFile = (path: string) => {
    vscode.postMessage('openFile', path)
  }

  return {
    handleCopy,
    handleExpanded,
    handleSelected,
    handleOpenFile,
    isExpanded,
  }
}

export default useSvgComponentExport
