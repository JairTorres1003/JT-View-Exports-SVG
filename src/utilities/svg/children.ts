import * as t from '@babel/types'

import { isEmpty } from '../misc'

import { getSVGTagName } from './tags'

import { type SVGFile } from '@/interfaces/ViewExportsSVG'

/**
 * Retrieves the first JSX element from an array of JSX elements' children that contains child fragments.
 *
 * @param children - The children of a JSX element.
 * @returns The first JSX element that contains child fragments, or undefined if none is found.
 */
export function getChildFragments(
  children: t.JSXElement['children'],
  file: SVGFile
): t.JSXElement | undefined {
  if (isEmpty(children)) return undefined

  let element: t.JSXElement | undefined

  for (const child of children) {
    if (!isEmpty(element)) {
      element = undefined
      break
    }

    if (t.isJSXElement(child) && child.children.length > 0) {
      const tag = getSVGTagName(child.openingElement, file)

      if (tag.name === 'Fragment') {
        element = getChildFragments(child.children, file)
      } else {
        element = child
      }
    } else if (t.isJSXFragment(child) && child.children.length > 0) {
      element = getChildFragments(child.children, file)
    }
  }

  return element
}
