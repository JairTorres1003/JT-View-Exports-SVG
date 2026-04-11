import { type ExtensionManage, SVGPostMessage, SVGReceiveMessage } from '@jt-view-exports-svg/core'
import i18next from 'i18next'
import { useCallback, useEffect, useRef, useState } from 'react'
import { Trans, useTranslation } from 'react-i18next'

import { useAlert } from '@/core/hooks/useAlert'
import type { TypeEditorRef } from '@/core/types/components/vs/Editor'
import { vscode } from '@/services/vscode'
import { setEditorConfig, setExtensionTheme } from '@/store/features/vsCode/slice'
import { useAppDispatch } from '@/store/hooks'
import { copyToClipboard } from '@/utils/clipboard'
import { getUnknownError } from '@/utils/errors'

interface PlaygroundHook {
  backgroundColor: string
  expandedCode: boolean
  handleExpand: VoidFunction
  onChangeColor: (color: string) => void
  initialColor: string
  editorRef: React.RefObject<TypeEditorRef>
  svgRef: React.RefObject<SVGElement | null>
  handleCopyCode: VoidFunction
  handleResetCode: VoidFunction
  resetPlaygroundColor: VoidFunction
  valueColor: string
  onChangeCompleteColor: (color: string) => void
}

/**
 * CSS variables used to determine the initial playground background color.
 */
const CSS_VAR_MAIN = '--JT-SVG-vscode-sideBarTitle-background'
const CSS_VAR_SECONDARY = '--JT-SVG-vscode-sideBarSectionHeader-background'

export const usePlayground = (): PlaygroundHook => {
  const [backgroundColor, setBackgroundColor] = useState('#fff')
  const [expandedCode, setExpandedCode] = useState(true)
  const [initialColor, setInitialColor] = useState('#fff')
  const [valueColor, setValueColor] = useState('#fff')

  const { t } = useTranslation(undefined, { keyPrefix: 'labels' })
  const dispatch = useAppDispatch()
  const { onOpen } = useAlert()

  const editorRef = useRef<TypeEditorRef>(null)
  const svgRef = useRef<SVGElement>(null)

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
   * Handles the color change by updating the background color state and dispatching the setEditorConfig action.
   *
   * @param color - The new color to be set.
   */
  const onChangeCompleteColor = (color: string) => {
    setValueColor(color)
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
      const root = document.body || document.documentElement

      const mainColor = getComputedStyle(root).getPropertyValue(CSS_VAR_MAIN)
      const secondaryColor = getComputedStyle(root).getPropertyValue(CSS_VAR_SECONDARY)

      const canvas = document.createElement('canvas')
      canvas.width = 10
      canvas.height = 10

      const ctx = canvas.getContext('2d')
      if (!ctx) return

      ctx.fillStyle = mainColor || 'transparent'
      ctx.fillRect(0, 0, 10, 10)

      ctx.fillStyle = secondaryColor || 'transparent'
      ctx.fillRect(0, 0, 10, 10)

      const imageData = ctx.getImageData(5, 5, 1, 1)
      const [r, g, b, a] = imageData.data

      const initial = `rgba(${r}, ${g}, ${b}, ${a})`

      setInitialColor(initial)
      onChangeColor(initial)
      onChangeCompleteColor(initial)
    } catch (error) {
      setInitialColor('#fff')
      console.error(`${i18next.t('errors.ErrorApplyingInitialColor')}:`, getUnknownError(error))
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
    const editor = editorRef.current?.editor
    if (!editor) return

    const code = editor.getValue()
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

  /**
   * Resets the code in the editor to its initial value.
   */
  const handleResetCode = () => {
    editorRef.current?.editor?.resetValue()
  }

  useEffect(() => {
    applyInitialColor()

    vscode.postMessage(SVGReceiveMessage.RequestEditorConfig)
    vscode.postMessage(SVGReceiveMessage.RequestEditorExtensionTheme)

    vscode.onMessage(SVGPostMessage.LoadEditorConfig, handleEditorConfig)
    vscode.onMessage(SVGPostMessage.LoadExtensionTheme, handleExtensionTheme)

    return () => {
      vscode.unregisterMessage(SVGPostMessage.LoadEditorConfig)
      vscode.unregisterMessage(SVGPostMessage.LoadExtensionTheme)
    }
  }, [])

  return {
    backgroundColor,
    expandedCode,
    handleExpand,
    onChangeColor,
    initialColor,
    editorRef,
    svgRef,
    handleCopyCode,
    handleResetCode,
    valueColor,
    onChangeCompleteColor,
    resetPlaygroundColor: applyInitialColor,
  }
}
