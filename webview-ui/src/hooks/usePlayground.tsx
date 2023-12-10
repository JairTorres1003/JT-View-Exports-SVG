import { useState, useEffect } from 'react'
import { type Monaco, type EditorProps, loader } from '@monaco-editor/react'
import * as monaco from 'monaco-editor'

import { useSvg } from '../provider/SvgProvider'

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
  const [completionDisposable, setCompletionDisposable] = useState<monaco.IDisposable | null>(null)
  const {
    state: { selectedSvgLanguage, selectedSvg },
  } = useSvg()

  const OPTIONS: EditorProps['options'] = {
    automaticLayout: true,
    minimap: { enabled: false },
    lineNumbers: 'off',
    language: selectedSvgLanguage,
    fontFamily: 'monospace',
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
        return `"${value}"`
      case 'object':
        // format object in multiline to prevent monaco from adding a semicolon
        return JSON.stringify(value, null, 2).replace(/"([^"]+)":/g, '$1:')
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
    const { languages } = monaco
    const properties = selectedSvg?.params ?? {}

    const existingLangId = languages.getEncodedLanguageId(selectedSvgLanguage)
    const langDef = languages.getLanguages()[existingLangId - 1]
    const languageExtensionPoint = { ...langDef, id: selectedSvgLanguage }

    // Register a new language
    languages.register(languageExtensionPoint)

    // Register a tokens provider for the language
    const register = languages.registerCompletionItemProvider(selectedSvgLanguage, {
      provideCompletionItems: (model, position) => {
        const word = model.getWordUntilPosition(position)
        const range = {
          startLineNumber: position.lineNumber,
          endLineNumber: position.lineNumber,
          startColumn: word.startColumn,
          endColumn: word.endColumn,
        }
        const suggestions = Object.keys(properties).map((key) => ({
          label: key,
          kind: languages.CompletionItemKind.Snippet,
          documentation: `@default: ${defaultInsertText(properties[key])}`,
          insertText: `${key}=`,
          range,
        }))

        return { suggestions, incomplete: true }
      },
    })

    return register
  }

  useEffect(() => {
    return () => {
      completionDisposable?.dispose()
    }
  }, [completionDisposable])

  return {
    initializeEditor,
    OPTIONS,
    setCompletionDisposable,
  }
}

export default usePlayground
