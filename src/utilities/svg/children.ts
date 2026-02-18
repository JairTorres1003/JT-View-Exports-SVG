import * as t from '@babel/types'
import { l10n } from 'vscode'

import type { GetChildAttributes, IValue } from '@/types/svg/SVGComponent'
import type { SVGComponentProps, SVGErrors, SVGFile } from '@/types/ViewExportsSVG'

import { isEmpty } from '../misc'
import { getProperties } from '../properties/getProperties'
import { propertyManager } from '../properties/propertyManager'
import { getPropertyValues } from '../properties/propertyValues'

import { isElementAnimated } from './is-animate'
import { getSVGTagName } from './tags'

/**
 * Recursively retrieves all non-Fragment JSX elements from a given array of JSX children.
 * If a Fragment is encountered, its children are flattened into the result.
 *
 * @param children - The array of JSX children to process.
 * @param file - The SVG file context used for tag name resolution.
 * @returns An array of JSX elements, excluding Fragments, with nested children flattened.
 */
export function getChildFragments(
  children: t.JSXElement['children'],
  file: SVGFile
): t.JSXElement[] {
  if (isEmpty(children)) return []

  const element: t.JSXElement[] = []

  for (const child of children) {
    if (t.isJSXElement(child)) {
      const tag = getSVGTagName(child.openingElement, file)

      if (tag.name === 'Fragment') {
        element.push(...getChildFragments(child.children, file))
      } else {
        element.push(child)
      }
    } else if (t.isJSXFragment(child) && child.children.length > 0) {
      element.push(...getChildFragments(child.children, file))
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
  const params = propertyManager.get()
  let errors: SVGErrors | undefined
  let hasErrors = false
  let isMotion = false
  let isAnimated = false

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

    const internalAnimation = isElementAnimated({ tag, props, childAttrs })
    const internalMotion = tag.isMotion || childAttrs.isMotion

    isAnimated ||= internalAnimation
    isMotion ||= internalMotion

    if (!tag.isValid || tag.name === 'Fragment' || isEmpty(tag.name)) {
      hasErrors = true
      errors = {
        message: l10n.t('Invalid SVG tag: {tag}', { tag: tag.name ?? 'undefined' }),
        location: tag.location,
      }
    } else {
      components.push({
        props,
        isMotion: internalMotion,
        isAnimated: internalAnimation,
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
      const value = getPropertyValues(child.expression, params) as IValue

      if (typeof value === 'object' && t.isJSXElement(value)) {
        processElement(value)
      } else if (typeof value === 'object' && t.isJSXFragment(value)) {
        const childs = getChildFragments(value.children, file)
        components.push(...getChildAttributes(childs, file).children)
      } else if (typeof value === 'string') {
        components.push(value)
      } else if (!['undefined', 'null', 'boolean'].includes(typeof value)) {
        hasErrors = true
        errors = {
          message: l10n.t('Error processing JSX expression container: {error}', {
            error: typeof value,
          }),
          location: { start: child.loc?.start, end: child.loc?.end },
        }
      }
    }
  })

  return { children: components, isMotion, hasErrors, errors, isAnimated }
}
