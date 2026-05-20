import type { Plugin } from 'unified'
import { visit } from 'unist-util-visit'

import type { NodeParent, NodeTable, Row } from './types'
import { jsxAttr, parseRow, resolveRowColspans } from './utils'

const remarkAdvancedTablePlugin: Plugin = () => {
  return (tree) => {
    visit(tree, 'table', (node: NodeTable, index: number, parent: NodeParent) => {
      const [headerRow, ...bodyRows] = node.children

      const headerCells = parseRow(headerRow)
      const columns = resolveRowColspans(headerCells, node.align)

      const rowsCells = bodyRows.map(parseRow).map((cell) => resolveRowColspans(cell, node.align))
      const rows = rowsCells.map((cells, rowIndex) => {
        const rowObject: Row = { key: `row-${rowIndex}` }

        cells.forEach((cell) => {
          rowObject[cell.key] = cell
        })

        return rowObject
      })

      parent.children[index] = {
        type: 'mdxJsxFlowElement',
        name: 'AdvancedTable',
        attributes: [jsxAttr('columns', columns), jsxAttr('rows', rows)],
      }
    })
  }
}

export default remarkAdvancedTablePlugin
