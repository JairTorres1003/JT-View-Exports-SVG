import { SVGPostMessage, SVGReceiveMessage } from '@api/enums/ViewExportsSVG'
import type { ExtensionManage } from '@api/interfaces/vscode'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Trans, useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'

import { useAlert } from '@/core/hooks/useAlert'
import type { TypeEditorRef } from '@/core/interfaces/components/vs/Editor'
import { setEditorConfig, setExtensionTheme } from '@/providers/redux/features/VsCodeSlice'
import { vscode } from '@/services/vscode'
import { copyToClipboard, getUnknownError } from '@/utils/misc'

interface PlaygroundHook {
  backgroundColor: string
  expandedCode: boolean
  handleExpand: VoidFunction
  onChangeColor: (color: string) => void
  initialColor: string
  defaultValue: string
  editorRef: React.RefObject<TypeEditorRef>
  handleCopyCode: VoidFunction
  handleResetCode: VoidFunction
  resetPlaygroundColor: VoidFunction
  valueColor: string
  onChangeCompleteColor: (color: string) => void
}

const CSS_VAR_MAIN = '--JT-SVG-vscode-sideBarTitle-background'
const CSS_VAR_SECONDARY = '--JT-SVG-vscode-sideBarSectionHeader-background'

export const usePlayground = (): PlaygroundHook => {
  const [backgroundColor, setBackgroundColor] = useState('#fff')
  const [expandedCode, setExpandedCode] = useState(true)
  const [initialColor, setInitialColor] = useState('#fff')
  const [valueColor, setValueColor] = useState('#fff')

  const { t } = useTranslation(undefined, { keyPrefix: 'labels' })
  const { onOpen } = useAlert()

  const recentlySelected = useSelector((state) => state.playground.recentlySelected)
  const dispatch = useDispatch()

  const editorRef = useRef<TypeEditorRef>(null)

  const defaultValue = useMemo(() => {
    if (!recentlySelected) return ''

    return `<${recentlySelected.name} />\n`
  }, [recentlySelected])

  /**
   * Toggles the expanded state.
   *
   * This function updates the `expanded` state by inverting its current value.
   * It uses the previous state value to ensure the state is correctly toggled.
   */
  const handleExpand = () => {
    setExpandedCode((prevExpanded) => !prevExpanded)
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
  const applyInitialColor = useCallback(() => {
    try {
      setInitialColor('#fff')
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
        const initial = `rgba(${r}, ${g}, ${b}, ${a})`

        setInitialColor(initial)
        onChangeColor(initial)
        onChangeCompleteColor(initial)
      }
    } catch (error) {
      console.error('Error applying initial color:', getUnknownError(error))
    }
  }, [])

  /**
   * Handles the editor configuration by dispatching the setEditorConfig action with the provided data.
   *
   * @param data - A record containing the editor configuration settings.
   */
  const handleEditorConfig = (data: Record<string, unknown>) => {
    dispatch(setEditorConfig(data))
  }

  /**
   * Handles the color change by updating the background color state and dispatching the setEditorConfig action.
   *
   * @param color - The new color to be set.
   */
  const onChangeCompleteColor = (color: string) => {
    setValueColor(color)
  }

  /**
   * Handles the extension theme by dispatching an action to set the extension theme.
   *
   * @param theme - The theme to be set for the extension.
   */
  const handleExtensionTheme = (theme?: ExtensionManage): void => {
    dispatch(setExtensionTheme(theme))
  }

  /**
   * Handles the copying of code from the editor to the clipboard.
   */
  const handleCopyCode = () => {
    if (editorRef.current?.editor) {
      const code = editorRef.current.editor.getValue()
      copyToClipboard(code)
        .then(() => {
          onOpen(<Trans t={t} i18nKey='Copied {{value}} to clipboard' values={{ value: '' }} />, {
            severity: 'success',
          })
        })
        .catch((error) => {
          onOpen(getUnknownError(error), { severity: 'error' })
        })
    }
  }

  /**
   * Resets the code in the editor to its initial value.
   */
  const handleResetCode = () => {
    if (editorRef.current?.editor) {
      editorRef.current.editor.resetValue()
    }
  }

  useEffect(() => {
    applyInitialColor()

    vscode.postMessage(SVGReceiveMessage.GetEditorConfig)
    vscode.postMessage(SVGReceiveMessage.GetExtensionTheme)
    vscode.onMessage(SVGPostMessage.SendEditorConfig, handleEditorConfig)
    vscode.onMessage(SVGPostMessage.SendExtensionTheme, handleExtensionTheme)

    return () => {
      vscode.unregisterMessage(SVGPostMessage.SendEditorConfig)
      vscode.unregisterMessage(SVGPostMessage.SendExtensionTheme)
    }
  }, [])

  return {
    backgroundColor,
    expandedCode,
    handleExpand,
    onChangeColor,
    initialColor,
    defaultValue,
    editorRef,
    handleCopyCode,
    handleResetCode,
    valueColor,
    onChangeCompleteColor,
    resetPlaygroundColor: applyInitialColor,
  }
}
