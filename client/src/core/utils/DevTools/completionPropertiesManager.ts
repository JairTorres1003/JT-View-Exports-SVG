import type { SVGComponent } from '@api/types/ViewExportsSVG'
import * as monaco from 'monaco-editor'

import { createInsertText } from '@/core/utils/vs/Editor'
import i18next from '@/i18n'

const tagParsingCache = new Map<string, { isInside: boolean; tagContent: string }>()

const completionPropertiesManager = (
  component: SVGComponent
): monaco.languages.CompletionItemProvider => {
  const { t } = i18next
  const prefixT = 'DevTools.editor.suggestions.properties'

  clearCompletionCache()

  return {
    provideCompletionItems: (model, position) => {
      const fullText = model.getValue()
      const cursorOffset = model.getOffsetAt(position)

      const cacheKey = `${fullText.slice(Math.max(0, cursorOffset - 100), cursorOffset + 100)}-${cursorOffset}-${component.name}`

      let insideComponentInfo = tagParsingCache.get(cacheKey)
      if (!insideComponentInfo) {
        insideComponentInfo = isInsideComponentTag(fullText, cursorOffset, component.name)
        tagParsingCache.set(cacheKey, insideComponentInfo)

        if (tagParsingCache.size > 50) {
          const firstKey = tagParsingCache.keys().next().value
          if (firstKey) tagParsingCache.delete(firstKey)
        }
      }

      // If not inside the correct component tag, return empty suggestions
      if (!insideComponentInfo.isInside) {
        return { suggestions: [] }
      }

      if (
        isInsideValueZone(
          insideComponentInfo.tagContent,
          cursorOffset - model.getValue().indexOf(insideComponentInfo.tagContent)
        )
      ) {
        return { suggestions: [] }
      }

      const suggestions: monaco.languages.CompletionItem[] = []

      const word = model.getWordUntilPosition(position)
      const completeWord = model.getWordAtPosition(position)

      const usedProperties = getUsedProperties(insideComponentInfo.tagContent)
      const currentWord = completeWord?.word ?? word.word ?? ''

      const hasEqualSign =
        completeWord &&
        model.getValueInRange({
          startLineNumber: position.lineNumber,
          startColumn: completeWord.endColumn,
          endLineNumber: position.lineNumber,
          endColumn: completeWord.endColumn + 1,
        }) === '='

      Object.entries(component.types).forEach(([propName, propInfo]) => {
        if (usedProperties.has(propName) && currentWord !== propName) return

        const insertText = hasEqualSign ? propName : createInsertText(propInfo, propName)

        suggestions.push({
          label: propName,
          kind: monaco.languages.CompletionItemKind.Field,
          insertText,
          insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          range: {
            startLineNumber: position.lineNumber,
            startColumn: completeWord?.startColumn ?? word.startColumn,
            endLineNumber: position.lineNumber,
            endColumn: completeWord?.endColumn ?? word.endColumn,
          },
          detail: t(`${prefixT}.details.static`, {
            name: propName,
            type: propInfo.required ? propInfo.type : `${propInfo.type} | undefined`,
          }),
          sortText: propInfo.required ? `0${propName}` : `1${propName}`,
        })
      })

      return { suggestions }
    },
  }
}

/**
 * Determines whether the cursor is currently inside the opening tag of a specified component
 * within a given text, and returns the content of that tag if so.
 *
 * @param fullText - The complete text in which to search for the component tag.
 * @param cursorOffset - The current cursor position (as a character offset) within the text.
 * @param componentName - The name of the component tag to check for.
 * @returns An object containing:
 *   - `isInside`: `true` if the cursor is inside the opening tag of the specified component, otherwise `false`.
 *   - `tagContent`: The content of the tag if the cursor is inside, otherwise an empty string.
 */
function isInsideComponentTag(
  fullText: string,
  cursorOffset: number,
  componentName: string
): {
  isInside: boolean
  tagContent: string
} {
  const beforeCursor = fullText.substring(0, cursorOffset)
  const openTagRegex = new RegExp(`<${componentName}(?=\\s|>|/>)`, 'g')

  if (fullText[cursorOffset] === '>' && fullText[cursorOffset - 1] === '/') {
    return { isInside: false, tagContent: '' }
  }

  let lastOpenTag: RegExpExecArray | null = null
  let match: RegExpExecArray | null = null

  while ((match = openTagRegex.exec(beforeCursor)) !== null) {
    lastOpenTag = match
  }

  if (!lastOpenTag) {
    return { isInside: false, tagContent: '' }
  }

  const tagStartOffset = lastOpenTag.index

  const textBetween = fullText.substring(tagStartOffset, cursorOffset)
  const hasClosingTag = new RegExp(`</${componentName}>|/>`).test(textBetween)

  if (hasClosingTag) {
    return { isInside: false, tagContent: '' }
  }

  const tagEndOffset = findTagEnd(fullText, tagStartOffset, componentName)

  if (tagEndOffset === -1 || cursorOffset > tagEndOffset) {
    return { isInside: false, tagContent: '' }
  }

  const tagContent = fullText.substring(tagStartOffset, tagEndOffset)
  return { isInside: true, tagContent }
}

/**
 * Finds the end index of a JSX-like tag in the given text, starting from a specified offset.
 * Handles nested curly braces and string literals to avoid premature termination.
 *
 * @param text - The full text containing the tag.
 * @param startOffset - The index in `text` where the tag starts.
 * @param componentName - The name of the component/tag to search for its closing tag.
 * @returns The index of the last character of the tag (either `>` or `/>`), or -1 if not found.
 */
function findTagEnd(text: string, startOffset: number, componentName: string): number {
  let i = startOffset
  let bracketDepth = 0
  let inString = false
  let stringChar = ''

  while (i < text.length) {
    const char = text[i]
    const nextChar = text[i + 1]

    if (!inString && (char === '"' || char === "'" || char === '`')) {
      inString = true
      stringChar = char
    } else if (inString && char === stringChar && text[i - 1] !== '\\') {
      inString = false
      stringChar = ''
    }

    if (!inString) {
      if (char === '{') {
        bracketDepth += 1
      } else if (char === '}') {
        bracketDepth -= 1
      } else if (bracketDepth === 0) {
        if (char === '/' && nextChar === '>') {
          return i + 1
        }
        if (char === '>') {
          const closeTagPattern = `</${componentName}>`
          const closeIndex = text.indexOf(closeTagPattern, i)
          return closeIndex !== -1 ? closeIndex + closeTagPattern.length - 1 : -1
        }
      }
    }

    i += 1
  }

  return -1
}

/**
 * Extracts and returns a set of property names (attributes) used in the opening tag of an HTML or JSX element.
 *
 * @param tagContent - The string content of the tag, including the opening angle bracket and attributes.
 * @returns A set containing the names of all properties (attributes) found in the tag.
 *
 * @example
 * ```typescript
 * const tag = '<MyComponent prop1="foo" prop2={bar} />';
 * const used = getUsedProperties(tag); // used contains: 'prop1', 'prop2'
 * ```
 */
function getUsedProperties(tagContent: string): Set<string> {
  const usedProps = new Set<string>()

  const attributesMatch = /^<[A-Za-z0-9_]+(.*)$/s.exec(tagContent)
  if (!attributesMatch) return usedProps

  const attributesText = attributesMatch[1]

  const propPattern = /\s([a-zA-Z_][a-zA-Z0-9_]*)\s*(?==|(?=\s)|(?=$)|(?=\/>)|(?=>))/g
  let match: RegExpExecArray | null = null

  while ((match = propPattern.exec(attributesText)) !== null) {
    usedProps.add(match[1])
  }

  return usedProps
}

/**
 * Detect if the cursor is inside a value zone: `prop=...` (in quotes, braces, etc)
 */
function isInsideValueZone(tagContent: string, relativeCursorOffset: number): boolean {
  const uptoCursor = tagContent.slice(0, relativeCursorOffset)
  const assignmentRegex = /([a-zA-Z_][a-zA-Z0-9_]*)\s*=\s*("[^"]*|'[^']*|\{[^}]*\}?|\{{[^}]*\}}?)$/g
  let match: RegExpExecArray | null = null
  while ((match = assignmentRegex.exec(uptoCursor)) !== null) {
    const start = match.index + match[0].indexOf('=') + 1
    const end = relativeCursorOffset
    if (end > start) {
      return true
    }
  }
  return false
}

/**
 * Clears the completion cache to free up memory.
 * This is useful when the cache grows too large or when you want to reset the state.
 */
export function clearCompletionCache(): void {
  tagParsingCache.clear()
}

export default completionPropertiesManager
