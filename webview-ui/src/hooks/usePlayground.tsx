import { useState, useEffect } from 'react'
import { type Monaco, type EditorProps, loader } from '@monaco-editor/react'
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api'

import useDebounce from './useDebounce'

import { type CustomSvgComponentData } from '../interfaces/svgExports'
import { useSvg } from '../provider/SvgProvider'
import { useVSCode } from '../provider/VSCodeProvider'
import { vscode } from '../utilities/vscode'
import { ATTR_TAG_REGEX, JSON_REGEX, TAG_REGEX } from '../constants/regex'
import { REST_PROPS_KEY } from '../constants/misc'

loader.config({ monaco })

loader.init().catch((error) => {
  console.error('An error occurred during initialization of Monaco: ', error)
})

/**
 * Hook to handle the playground.
 *
 * @returns The playground hook.
 */
const usePlayground = () => {
  const {
    state: { selectedSvgLanguage, selectedSvgName, selectedSvgPath, selectedSvg },
    dispatch,
  } = useSvg()
  const {
    state: { styles, themeData },
  } = useVSCode()

  const DEFAULT_SVG: CustomSvgComponentData = {
    name: selectedSvgName,
    path: selectedSvgPath ?? '',
    typeExport: selectedSvg?.typeExport ?? 'variable',
    value: `<${selectedSvgName} />`,
  }

  const [completionDisposable, setCompletionDisposable] = useState<monaco.IDisposable | null>(null)
  const [editorValue, setEditorValue] = useState<string>(DEFAULT_SVG.value)
  const [dataComponent, setDataComponent] = useState<CustomSvgComponentData>(DEFAULT_SVG)

  const debounce = useDebounce(dataComponent, 600)

  const OPTIONS: EditorProps['options'] = {
    automaticLayout: true,
    minimap: { enabled: false, scale: 0, size: undefined },
    lineNumbers: 'off',
    language: selectedSvgLanguage,
    fontFamily: 'monospace',
    ...styles,
    tabSize: 2,
    detectIndentation: true,
    padding: { top: 0, bottom: 0 },
    acceptSuggestionOnCommitCharacter: false,
    scrollbar: { verticalScrollbarSize: 6, horizontalScrollbarSize: 6 },
    bracketPairColorization: { enabled: true },
    colorDecorators: true,
    theme: themeData.themeName,
  }

  /**
   * Returns the default insert text for a given value.
   *
   * @param value - The value to generate the insert text for.
   * @returns The default insert text as a string.
   */
  const defaultInsertText = (value: any): string => {
    const type = typeof value

    switch (type) {
      case 'string':
        return `'${value}'`
      case 'object':
        // format object in multiline to prevent monaco from adding a semicolon
        return JSON.stringify(value, null, 2).replace(JSON_REGEX, '$1:')
      default:
        return value.toString()
    }
  }

  /**
   * Initializes the editor for a specific language.
   *
   * @param monaco - The Monaco editor instance.
   * @returns The completion item provider registration.
   */
  function initializeEditor(monaco: Monaco) {
    const { languages, editor } = monaco
    const properties: Record<string, any> = selectedSvg?.params ?? {}

    // Remove the custom property from the object
    if (REST_PROPS_KEY in properties) {
      const { [REST_PROPS_KEY]: omitted, ...rest } = properties
      properties[REST_PROPS_KEY] = rest
    }

    const existingLangId = languages.getEncodedLanguageId(selectedSvgLanguage)
    const langDef = languages.getLanguages()[existingLangId - 1]
    const languageExtensionPoint = { ...langDef, id: selectedSvgLanguage }

    // Register a new language
    languages.register(languageExtensionPoint)

    // Register a tokens provider for the language
    const register = languages.registerCompletionItemProvider(selectedSvgLanguage, {
      provideCompletionItems: (model, position) => {
        const { column, lineNumber } = position
        // find out if we are completing a property in a tag '<tag |'
        const textUntilPosition = model.getValueInRange({
          startLineNumber: lineNumber,
          endLineNumber: 1,
          startColumn: 1,
          endColumn: column,
        })
        const match = textUntilPosition.match(TAG_REGEX)

        if (!match) {
          return { suggestions: [] }
        }

        const word = model.getWordUntilPosition(position)
        const usedProperties: string[] = textUntilPosition.match(ATTR_TAG_REGEX) ?? []
        const remainingProperties = Object.keys(properties).filter(
          (key) => !usedProperties.join(' ').includes(key)
        )

        const range = {
          startLineNumber: lineNumber,
          endLineNumber: lineNumber,
          startColumn: word.startColumn,
          endColumn: word.endColumn,
        }
        const suggestions = remainingProperties.map((key) => ({
          label: key,
          kind: languages.CompletionItemKind.Property,
          documentation: `(property) ${key}\n@default:\n${defaultInsertText(properties[key])}`,
          insertText: key,
          range,
        }))

        return { suggestions, incomplete: true }
      },
    })

    if (themeData.themeName !== '') {
      editor.defineTheme(themeData.themeName, themeData.themeData)
      editor.setTheme(themeData.themeName)
    }

    return register
  }

  /**
   * Handles the change event of the editor.
   * @param value - The new value of the editor.
   */
  const handleEditorChange = (value?: string) => {
    setEditorValue(value ?? '')
    setDataComponent({
      name: selectedSvgName,
      path: selectedSvgPath ?? '',
      typeExport: selectedSvg?.typeExport ?? 'variable',
      value: value ?? '',
    })
  }

  /**
   * Handles the change event for the SVG data.
   * @param data - The SVG data as a string.
   */
  const handleChangeSvg = (data: string) => {
    const response = JSON.parse(data) || {}

    if (response && Object.keys(response).length > 0) {
      if (response?.type === 'error') {
        dispatch({
          type: 'SNACKBAR_PLAYGROUND',
          payload: {
            open: true,
            text: response?.message ?? 'Error on playground',
            severity: 'error',
          },
        })
        return
      }

      dispatch({ type: 'UPDATE_PLAYGROUND', payload: response })
    }
  }

  useEffect(() => {
    return () => {
      completionDisposable?.dispose()
    }
  }, [completionDisposable])

  useEffect(() => {
    if (selectedSvgLanguage && completionDisposable) {
      completionDisposable?.dispose()
      setCompletionDisposable(initializeEditor(monaco))
    }
  }, [selectedSvgLanguage])

  useEffect(() => {
    if (selectedSvgName) {
      setEditorValue(DEFAULT_SVG.value)

      if (completionDisposable) {
        completionDisposable?.dispose()
        setCompletionDisposable(initializeEditor(monaco))
      }
    }
  }, [selectedSvgName])

  useEffect(() => {
    // Request the extension
    vscode.postMessage('playgroundSvgComponents', JSON.stringify(debounce))

    // Listen for messages
    vscode.onMessage('customSvgComponent', handleChangeSvg)

    // Cleanup function to remove the message handler when the component unmounts or dependencies change
    return () => {
      vscode.removeMessageHandler('customSvgComponent', handleChangeSvg)
    }
  }, [debounce])

  return {
    editorValue,
    handleEditorChange,
    initializeEditor,
    OPTIONS,
    setCompletionDisposable,
  }
}

export default usePlayground
