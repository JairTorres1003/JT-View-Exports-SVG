import * as t from '@babel/types'

import { isEmpty } from '../misc'
import { getProperties, propertyManager } from '../properties'
import { translate } from '../vscode'

import { getSVGTagName } from './tags'

import { type GetChildAttributes, type GetSVGComponent } from '@/interfaces/svg/SVGComponent'
import { type SVGErrors, type SVGComponentProps, type SVGFile } from '@/interfaces/ViewExportsSVG'

/**
 * Retrieves the attributes of the child elements in an SVG component.
 *
 * @param children - The children of the SVG component.
 * @returns An object containing the attributes of the child elements.
 */
function getChildAttributes(children: t.JSXElement['children'], file: SVGFile): GetChildAttributes {
  const components: SVGComponentProps[] = []
  let errors: SVGErrors | undefined
  let hasErrors = false
  let isMotion = false

  children.forEach((child) => {
    if (t.isJSXElement(child)) {
      const openingElement = child.openingElement
      const params = (propertyManager.get() ?? {}) as Record<string, unknown>
      const props = getProperties(openingElement.attributes, params)
      const childAttrs = getChildAttributes(child.children, file)
      const tag = getSVGTagName(openingElement, file)

      isMotion = tag.isMotion || childAttrs.isMotion

      if (!hasErrors) {
        hasErrors = childAttrs.hasErrors
        errors = childAttrs.errors
      }

      if (!tag.isValid || tag.name === 'Fragment' || isEmpty(tag.name)) {
        hasErrors = true
        errors = {
          message: translate('invalidSvgTag', { tag: tag.name ?? 'undefined' }),
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
  })

  return { children: components, isMotion, hasErrors, errors }
}

/**
 * Retrieves the SVG component from a JSX element.
 * @param element The JSX element to extract the SVG component from.
 * @returns An object containing the SVG component, animation flag, validity flag, and parameters.
 */
export function getSVGComponent(element: t.JSXElement, file: SVGFile): GetSVGComponent {
  const { openingElement, children } = element
  const params = (propertyManager.get() ?? {}) as Record<string, unknown>
  let isAnimated = false
  let hasErrors = false
  let component: SVGComponentProps = { children: [], isMotion: false, props: {}, tag: 'svg' }
  let errors: SVGErrors | undefined

  if (!isEmpty(openingElement)) {
    const svgProps = getProperties(openingElement.attributes, params)
    const tag = getSVGTagName(openingElement, file)

    if (svgProps.xmlns !== 'http://www.w3.org/2000/svg') {
      hasErrors = true
      errors = {
        message: translate('invalidAttribute', {
          attr: 'xmlns',
          expected: 'http://www.w3.org/2000/svg',
          actual: svgProps.xmlns?.toString() ?? 'undefined',
        }),
        location: { start: openingElement.loc?.start, end: openingElement.loc?.end },
      }
    } else if (!tag.isValid || tag.name === 'Fragment' || isEmpty(tag.name)) {
      hasErrors = true
      errors = {
        message: translate('invalidSvgTag', { tag: tag.name ?? 'undefined' }),
        location: tag.location,
      }
    } else if (children.length > 0) {
      const child = getChildAttributes(children, file)

      isAnimated = tag.isMotion || child.isMotion
      hasErrors = child.hasErrors
      errors = child.errors
      component = {
        tag: tag.name,
        props: svgProps,
        isMotion: tag.isMotion,
        children: child.children,
      }
    }
  }

  return {
    component,
    isAnimated,
    params,
    hasErrors,
    errors,
  }
}
