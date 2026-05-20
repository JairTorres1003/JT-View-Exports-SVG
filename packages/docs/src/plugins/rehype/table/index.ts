import type { Root } from 'hast'
import { visit } from 'unist-util-visit'

import type { Cell, Row } from '../../remark/table/types'
import { expressionToEstree } from '../../remark/table/utils'
import { isValidAttribute, mapToHastCell } from './utils'

function rehypeAdvancedTablePlugin() {
  return (tree: Root) => {
    visit(tree, 'mdxJsxFlowElement', (node) => {
      if (node.name !== 'AdvancedTable') return

      for (const attr of node.attributes) {
        if (!isValidAttribute(attr)) continue

        const value = JSON.parse(attr.value.value)

        let newValue = value

        if (attr.name === 'rows') {
          newValue = (value as Row[]).map(({ key, ...rows }) => {
            const newRow: Row = { key }

            Object.entries(rows).forEach(([cellKey, cell]) => {
              newRow[cellKey] = mapToHastCell(cell)
            })
            return newRow
          })
        }

        if (attr.name === 'columns') {
          newValue = (value as Cell[]).map(mapToHastCell)
        }

        attr.value = {
          type: 'mdxJsxAttributeValueExpression',
          value: '',
          data: {
            estree: expressionToEstree(newValue),
          },
        }
      }
    })
  }
}

export default rehypeAdvancedTablePlugin
