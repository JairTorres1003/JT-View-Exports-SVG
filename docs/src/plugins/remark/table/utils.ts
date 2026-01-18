import { valueToEstree } from 'estree-util-value-to-estree'
import type { Program } from 'estree'

import type { Align, Cell, NodeCell, NodeRow, ParsedCell, Row } from './types'

/**
 * Extracts plain text from cell nodes recursively
 */
function extractTextFromNodes(nodes: NodeCell['children']): string {
  return nodes
    .map((n) => {
      if (n.type === 'text') {
        return n.value ?? ''
      }
      if ('children' in n) {
        return extractTextFromNodes(n.children)
      }
      return ''
    })
    .join('')
    .trim()
}

/**
 * Cleans the children nodes by removing control characters from text nodes
 */
function cleanChildren(nodes: NodeCell['children']): NodeCell['children'] {
  return nodes.map((n) => {
    if (n.type === 'text' && n.value) {
      let cleanedValue = n.value.replace(/[<>]/g, '')

      // Clean col align symbols (:)
      cleanedValue = cleanedValue.replace(/^:/, '').replace(/:$/, '')

      return {
        ...n,
        value: cleanedValue,
      }
    }

    return n
  })
}

/**
 * Parses a table cell node and extracts its content and formatting information.
 *
 * @param node - The cell node to parse, containing raw cell data
 * @returns A parsed cell object containing the raw value, cleaned value, alignment, and colspan indicators
 */
export function parseCell(node: NodeCell): ParsedCell {
  const rawCell = extractTextFromNodes(node.children)
  let raw = rawCell.trim()

  const colspanStart = raw.includes('>')
  const colspanEnd = raw.includes('<')

  // Remove control symbols (> <)
  raw = raw.replace(/[<>]/g, '').trim()

  let align: Align | undefined = undefined

  const startsWithColon = raw.startsWith(':')
  const endsWithColon = raw.endsWith(':')

  if (startsWithColon && endsWithColon) align = 'center'
  else if (startsWithColon) align = 'left'
  else if (endsWithColon) align = 'right'

  // Clean value
  const value = raw.replace(/^:/, '').replace(/:$/, '').trim()

  return {
    raw: rawCell,
    value,
    children: cleanChildren(node.children),
    align,
    colspanStart,
    colspanEnd,
  }
}

/**
 * Parses a table row node and extracts its cells.
 *
 * @param node - The row node to parse, containing cell nodes
 * @returns An array of parsed cell objects for the row
 */
export function parseRow(node: NodeRow) {
  return node.children.map(parseCell)
}

/**
 * Resolves the colspans in a row of parsed cells and constructs the final cell representations.
 *
 * @param cells - An array of parsed cell objects for the row
 * @param aligns - An array of alignment values for the columns
 * @returns An array of cell objects with resolved colspans and styles
 */
export function resolveRowColspans(cells: ParsedCell[], aligns: Align[]): Cell[] {
  const result: Cell[] = []

  let i = 0

  while (i < cells.length) {
    const cell = cells[i]

    // Normal case: does not start colspan or is the last cell
    if (!cell.colspanStart || i === cells.length - 1) {
      result.push({
        key: `cell-${i}`,
        children: cell?.children,
        style: { textAlign: cell?.align || aligns?.[i] || 'left' },
      })
      i++
      continue
    }

    let colSpan = 1
    let j = i + 1

    // Advance to calculate the colspan
    while (j < cells.length) {
      colSpan++

      // If we find an explicit end "<"
      if (cells[j].colspanEnd) {
        break
      }

      j++
    }

    // Insert the main cell first
    result.push({
      key: `cell-${i}`,
      children: cell?.children,
      style: { textAlign: cell?.align || aligns?.[i] || 'left' },
      colSpan,
    })

    // Insert the span cells as hidden, IN ORDER
    for (let k = i + 1; k <= j && k < cells.length; k++) {
      result.push({
        key: `cell-${k}`,
        children: cells[k]?.children ?? [],
        style: { textAlign: cells[k]?.align || aligns?.[k] || 'left', display: 'none' },
      })
    }

    i = j + 1
  }

  return result
}

/**
 * Converts a JavaScript value into an ESTree expression wrapped in a Program node.
 *
 * @param value - The JavaScript value to convert
 * @returns An ESTree Program node representing the value as an expression
 */
export function expressionToEstree(value: unknown): Program {
  return {
    type: 'Program',
    sourceType: 'module',
    body: [
      {
        type: 'ExpressionStatement',
        expression: valueToEstree(value),
      },
    ],
  }
}

/**
 * Creates an MDX JSX attribute node with the given name and value.
 *
 * @param name - The name of the attribute
 * @param value - The value of the attribute, either an array of rows or cells
 * @returns An MDX JSX attribute node representing the attribute
 */
export function jsxAttr(name: string, value: Row[] | Cell[]) {
  const js = JSON.stringify(value ?? [])

  return {
    type: 'mdxJsxAttribute',
    name,
    value: {
      type: 'mdxJsxAttributeValueExpression',
      value: js,
      data: {
        estree: expressionToEstree(value ?? []),
      },
    },
  }
}
