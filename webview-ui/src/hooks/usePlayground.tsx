import { useState, useEffect } from 'react'
import { type Monaco, type EditorProps } from '@monaco-editor/react'

import { useSvg } from '../provider/SvgProvider'

const usePlayground = () => {
  const [completionDisposable, setCompletionDisposable] = useState<any>(null)
  const {
    state: { selectedSvgLanguage, selectedSvg },
  } = useSvg()

  const OPTIONS: EditorProps['options'] = {
    automaticLayout: true,
    minimap: { enabled: false },
    lineNumbers: 'off',
    language: `JT-${selectedSvgLanguage}`,
  }

  /**
   * Initializes the editor for a specific language.
   *
   * @param monaco - The Monaco editor instance.
   * @returns The completion item provider registration.
   */
  function initializeEditor(monaco: Monaco) {
    const { languages } = monaco
    const customLangId = `JT-${selectedSvgLanguage}`
    const properties = selectedSvg?.params ?? {}

    const existingLangId = languages.getEncodedLanguageId(selectedSvgLanguage)
    const langDef = languages.getLanguages()[existingLangId - 1]
    const languageExtensionPoint = { ...langDef, id: customLangId }

    // Register a new language
    languages.register(languageExtensionPoint)

    // Register a tokens provider for the language
    const register = languages.registerCompletionItemProvider(`JT-${selectedSvgLanguage}`, {
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
          documentation: `@default: ${properties[key]}`,
          insertText: `${key}={$1}`,
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
