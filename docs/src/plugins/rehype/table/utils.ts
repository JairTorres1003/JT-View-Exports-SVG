import { toHast } from 'mdast-util-to-hast'

import { Attr, IMdxJsxAttribute } from './types'
import { Cell } from '../../remark/table/types'

const propsToParse = ['columns', 'rows']

/**
 * Checks if an attribute is a valid MDX JSX attribute for parsing.
 *
 * @param attr - The attribute to validate
 * @returns True if the attribute is a valid MDX JSX attribute with a name in propsToParse and a non-string value, false otherwise
 */
export const isValidAttribute = (attr: Attr): attr is IMdxJsxAttribute => {
  return (
    attr.type === 'mdxJsxAttribute' &&
    propsToParse.includes(attr.name) &&
    typeof attr.value !== 'string'
  )
}

/**
 * Maps a Cell from remark table to a HAST-compatible cell.
 *
 * @param cell - The Cell object to map
 * @returns A new Cell object with children converted to HAST nodes
 */
export function mapToHastCell(cell: Cell) {
  return {
    ...cell,
    children: toHast({ type: 'root', children: cell.children || [] }, { allowDangerousHtml: true }),
  }
}
