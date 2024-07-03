import { type Theme, createTheme } from '@mui/material'
import { type ResizeCallback } from 're-resizable'
import { useEffect, useMemo, useRef, useState } from 'react'

import i18n from '../i18n'
import { type SvgExport } from '../interfaces/svgExports'
import { useSvg } from '../provider/SvgProvider'
import { useVSCode } from '../provider/VSCodeProvider'
import { isEmpty } from '../utilities/misc'
import { vscode } from '../utilities/vscode'

interface AppHook {
  fileSelected: number | null | undefined
  handleExtractIcons: (fileList: FileList | null) => void
  handleHome: () => void
  handleOpenPanel: () => void
  handleResize: ResizeCallback
  handleResizeStop: ResizeCallback
  handleSvgComponents: (data: string) => void
  isLoading: boolean
  isPanelOpen: boolean
  refPortalButton: React.MutableRefObject<HTMLElement | null>
  resizableWidth: string
  showMessage: string | null
  svgComponents: SvgExport[]
  theme: Theme
}

const useApp = (): AppHook => {
  const [svgComponents, setSvgComponents] = useState<SvgExport[]>([])
  const [showMessage, setShowMessage] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [fileSelected, setFileSelected] = useState<number | null | undefined>(0)
  const [isPanelOpen, setIsPanelOpen] = useState<boolean>(false)
  const [resizableWidth, setResizableWidth] = useState<string>('100%')
  const refPortalButton = useRef<HTMLElement>(null)
  const {
    dispatch,
    state: { isScanning },
  } = useSvg()
  const {
    state: { theme: currentTheme, styles },
    dispatch: dispatchVSCode,
  } = useVSCode()

  /**
   * Handle the home button click event.
   */
  const handleHome = (): void => {
    setFileSelected(0)
    dispatch({ type: 'CLEAR_SELECTED' })
  }

  /**
   * Handle resizing of the panel.
   * @param e - The resize event.
   * @param direction - The resize direction (e.g., 'left', 'right').
   * @param ref - The reference to the resizable element.
   * @param d - The width and height changes during resizing.
   */
  const handleResize: ResizeCallback = (_, direction, ref, d) => {
    const newWidth = parseInt(ref.style.width, 10)

    if (!isPanelOpen && newWidth <= 95) {
      setIsPanelOpen(true)
      setResizableWidth('65%')
    } else if (isPanelOpen && newWidth > 95) {
      setIsPanelOpen(false)
    } else if (isPanelOpen && newWidth < 80) {
      setResizableWidth(`${newWidth}%`)
    }
  }

  /**
   * Handle the end of the resizing process.
   * @param e - The resize event.
   * @param direction - The resize direction (e.g., 'left', 'right').
   * @param ref - The reference to the resizable element.
   * @param d - The width and height changes during resizing.
   */
  const handleResizeStop: ResizeCallback = (_, direction, ref, d) => {
    const newWidth = parseInt(ref.style.width, 10)

    if ((isPanelOpen && newWidth >= 81) || (!isPanelOpen && newWidth > 95)) {
      setIsPanelOpen(false)
      setResizableWidth('100%')
    }
  }

  /**
   * Handle opening or closing the panel.
   */
  const handleOpenPanel = (): void => {
    setResizableWidth(`${!isPanelOpen ? 65 : 100}%`)
    setIsPanelOpen(!isPanelOpen)
  }

  /**
   * Handle the SVG components data received from the webview.
   * @param data The SVG components data.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSvgComponents = (data: any): void => {
    const response = JSON.parse(data)

    if (!isEmpty(response.messageError)) {
      setShowMessage(response.messageError)
      setFileSelected(response?.fileSelected)
    } else {
      setShowMessage(null)
      setSvgComponents(response)
      setFileSelected(response?.length)
    }

    setIsLoading(false)
    dispatch({ type: 'IS_SCANNING', payload: false })
  }

  /**
   * Handles the extraction of icons from a dropped file.
   * @param fileList The dropped files to extract icons from.
   */
  const handleExtractIcons = (fileList: FileList | null): void => {
    setIsLoading(true)
    dispatch({ type: 'CLEAR_SELECTED' })
    let fullPaths: string[] = []

    if (fileList !== null && fileList.length > 0) {
      const fileListArray = Array.from(fileList)

      // Create an array of full paths to the dropped files
      // Note: The 'path' property is available only in VS Code extensions
      fullPaths = fileListArray.map((file: File & { path?: string }) => file.path ?? '')
    }

    vscode.postMessage('extractIconsFile', fullPaths)
  }

  /**
   * Handles the configuration data received from VS Code.
   * @param data - The configuration data.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleConfigurationVsCode = (data: any): void => {
    const response = JSON.parse(data) ?? {}

    dispatchVSCode({ type: 'SET_STYLES', payload: response.styles })
    if (!isEmpty(response.themeData)) {
      dispatchVSCode({ type: 'SET_THEME_DATA', payload: response.themeData })
    }
  }

  /**
   * Handles the current theme and updates the application state.
   * @param theme The current theme ("dark" or "light").
   */
  const handleCurrentTheme = (theme: 'dark' | 'light'): void => {
    dispatchVSCode({ type: 'SET_THEME', payload: theme })
  }

  /**
   * Handles the selection of a language and sets the chosen language in the state.
   * @param {string} lang - The language code of the selected language.
   */
  const handleLanguage = (lang: string): void => {
    const language = lang.replace('-', '_')

    i18n.changeLanguage(language).catch((error) => {
      console.error('Failed to change language', error)
    })
  }

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: currentTheme,
          text: {
            disabled: 'rgba(var(--color-JT-view-export-svg2), 0.38)',
            primary: 'rgba(var(--color-JT-view-export-svg2), 0.87)',
            secondary: 'rgba(var(--color-JT-view-export-svg2), 0.6)',
          },
        },
        typography: { fontFamily: styles?.fontFamily, fontSize: styles?.fontSize },
        components: {
          MuiButton: {
            defaultProps: { size: 'small' },
            styleOverrides: {
              root: {
                fontFamily: styles?.fontFamily,
                fontSize: styles?.fontSize,
              },
            },
          },
          MuiCheckbox: {
            styleOverrides: {
              root: {
                color: 'var(--color-JT-view-export-svg)',
                '&.MuiCheckbox-root.Mui-checked': { color: 'var(--color-JT-view-export-svg)' },
                '&.MuiCheckbox-root.MuiCheckbox-indeterminate': {
                  color: 'var(--color-JT-view-export-svg)',
                },
              },
            },
          },
          MuiIconButton: {
            styleOverrides: { root: { color: 'var(--color-JT-view-export-svg)' } },
          },
        },
      }),
    [currentTheme, styles]
  )

  useEffect(() => {
    setIsLoading(true)
    // Request the extension
    vscode.postMessage('requestSvgComponents')
    vscode.postMessage('getConfigurationVsCode')
    vscode.postMessage('getCurrentTheme')
    vscode.postMessage('getTranslations')

    // Listen for messages
    vscode.onMessage('svgComponents', handleSvgComponents)
    vscode.onMessage('configurationVsCode', handleConfigurationVsCode)
    vscode.onMessage('currentTheme', handleCurrentTheme)
    vscode.onMessage('language', handleLanguage)

    // Clean up by removing the message handlers when the component is unmounted
    return () => {
      vscode.removeMessageHandler('currentTheme', handleCurrentTheme)
      vscode.removeMessageHandler('configurationVsCode', handleConfigurationVsCode)
      vscode.removeMessageHandler('language', handleLanguage)
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    if (isScanning) {
      setIsLoading(true)
    }
  }, [isScanning])

  return {
    fileSelected,
    handleExtractIcons,
    handleHome,
    handleOpenPanel,
    handleResize,
    handleResizeStop,
    handleSvgComponents,
    isLoading,
    isPanelOpen,
    refPortalButton,
    resizableWidth,
    showMessage,
    svgComponents,
    theme,
  }
}

export default useApp
