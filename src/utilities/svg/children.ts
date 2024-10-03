import * as t from '@babel/types'
import { l10n } from 'vscode'

import { getUnknownError, isEmpty } from '../misc'
import { getProperties, getPropertyValues, propertyManager } from '../properties'

import { getSVGTagName } from './tags'

import { type GetChildAttributes } from '@/interfaces/svg/SVGComponent'
import { type SVGComponentProps, type SVGErrors, type SVGFile } from '@/interfaces/ViewExportsSVG'

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

/**
 * Retrieves the attributes of the child elements in an SVG component.
 *
 * @param children - The children of the SVG component.
 * @returns An object containing the attributes of the child elements.
 */
export function getChildAttributes(
  children: t.JSXElement['children'],
  file: SVGFile
): GetChildAttributes {
  const components: SVGComponentProps['children'] = []
  const params = (propertyManager.get() ?? {}) as Record<string, unknown>
  let errors: SVGErrors | undefined
  let hasErrors = false
  let isMotion = false

  /**
   * Processes a JSX element and extracts its properties, attributes, and children.
   * It validates the SVG tag name and checks for errors. If the tag is valid, it
   * pushes the processed component to the components array.
   *
   * @param element - The JSX element to process.
   */
  const processElement = (element: t.JSXElement): void => {
    const openingElement = element.openingElement
    const tag = getSVGTagName(openingElement, file)
    const props = getProperties(openingElement.attributes, params)
    const childAttrs = getChildAttributes(element.children, file)

    if (!hasErrors) {
      hasErrors = childAttrs.hasErrors
      errors = childAttrs.errors
    }

    isMotion = tag.isMotion || childAttrs.isMotion

    if (!tag.isValid || tag.name === 'Fragment' || isEmpty(tag.name)) {
      hasErrors = true
      errors = {
        message: l10n.t('Invalid SVG tag: {tag}', { tag: tag.name ?? 'undefined' }),
        location: tag.location,
      }
    } else {
      components.push({
        props,
        isMotion,
        tag: tag.name,
        children: childAttrs.children,
      })
    }
  }

  children.forEach((child) => {
    if (t.isJSXElement(child)) {
      processElement(child)
    } else if (t.isJSXText(child) && !isEmpty(child.value.trim())) {
      components.push(child.value)
    } else if (t.isJSXExpressionContainer(child)) {
      const value = getPropertyValues(child.expression, params) as
        | t.JSXElement
        | t.JSXFragment
        | string
        | number
        | boolean

      if (typeof value === 'object' && t.isJSXElement(value)) {
        processElement(value)
      } else {
        try {
          components.push(`${value as string}`)
        } catch (error) {
          hasErrors = true
          errors = {
            message: l10n.t('Error processing JSX expression container: {error}', {
              error: getUnknownError(error),
            }),
            location: { start: child.loc?.start, end: child.loc?.end },
          }
        }
      }
    }
  })

  return { children: components, isMotion, hasErrors, errors }
}
