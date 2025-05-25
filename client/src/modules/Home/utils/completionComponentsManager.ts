import type { ViewExportSVG } from '@api/interfaces/ViewExportsSVG'
import * as monaco from 'monaco-editor'

import { createInsertText, replaceSnippetValues } from '@/core/utils/vs/editor'
import i18next from '@/i18n'

/**
 * Creates a Monaco CompletionItemProvider for providing code completion suggestions
 * for SVG view export components in the Monaco editor.
 *
 * @param components - An array of `ViewExportSVG` objects, each containing a group of components
 *                     to be suggested in the editor.
 */
const completionComponentsManager = (
  components: ViewExportSVG[]
): monaco.languages.CompletionItemProvider => {
  const { t } = i18next
  const prefixT = 'DevTools.editor.suggestions.components'

  return {
    triggerCharacters: ['<'],
    provideCompletionItems: (model, position) => {
      const textUntilPosition = model.getValueInRange({
        startLineNumber: position.lineNumber,
        startColumn: 1,
        endLineNumber: position.lineNumber,
        endColumn: position.column,
      })

      const isValidPosition = isValidSuggestionPosition(textUntilPosition)
      if (!isValidPosition) {
        return { suggestions: [] }
      }

      const suggestions: monaco.languages.CompletionItem[] = []

      const word = model.getWordUntilPosition(position)
      const completeWord = model.getWordAtPosition(position)

      components.forEach((group) => {
        group.components.forEach((c) => {
          const property = Object.keys(c.types)[0]

          const translationKeys = {
            name: c.name,
            fileName: c.location.file.basename,
            filePath: c.location.file.absolutePath,
            link: monaco.Uri.parse(
              `command:${__APP_NAME}-default.action.clicLinkDocumentation?${encodeURIComponent(
                JSON.stringify({ location: c.location })
              )}`
            ),
            propertyValue: replaceSnippetValues(createInsertText(c.types[property], property), [
              '',
              c.types[property].default,
            ]),
          }

          suggestions.push({
            label: c.name,
            kind: monaco.languages.CompletionItemKind.Class,
            insertText: c.name,
            insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
            range: {
              startLineNumber: position.lineNumber,
              startColumn: completeWord?.startColumn ?? word.startColumn,
              endLineNumber: position.lineNumber,
              endColumn: completeWord?.endColumn ?? word.endColumn,
            },
            documentation: {
              value: t(
                `${prefixT}.${c.withRestProps ? 'documentation_withRestProps' : 'documentation'}`,
                { ...translationKeys, joinArrays: '\n' }
              ),
              isTrusted: true,
            },
            detail: t(`${prefixT}.details.${c.isAnimated ? 'animated' : 'static'}`),
            command: {
              id: `${__APP_NAME}-default.action.triggerSuggestComponents`,
              title: 'Select component',
              arguments: [c],
            },
          })
        })
      })

      return { suggestions }
    },
  }
}

/**
 * Determines if the current cursor position is valid for showing component suggestions.
 * Valid positions are:
 * 1. Right after typing '<'
 * 2. Inside or right after a component name (before any space or '>')
 *
 * @param textUntilPosition - The text from the beginning of the line to the cursor position
 * @returns boolean indicating if suggestions should be shown
 */
function isValidSuggestionPosition(textUntilPosition: string): boolean {
  // Case 1: Right after typing '<'
  if (textUntilPosition.trim().endsWith('<')) {
    return true
  }

  // Case 2: Inside a component tag, but before any space or closing bracket
  const tagMatch = /<([A-Za-z0-9_]*)$/.exec(textUntilPosition)

  return !!tagMatch
}

export default completionComponentsManager
