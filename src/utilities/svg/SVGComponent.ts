import type * as t from '@babel/types'
import { l10n } from 'vscode'

import { isEmpty } from '../misc'
import { getProperties, propertyManager } from '../properties'

import { getChildAttributes } from './children'
import { getSVGTagName } from './tags'

import type { GetSVGComponent } from '@/types/svg/SVGComponent'
import type { SVGErrors, SVGComponentProps, SVGFile } from '@/types/ViewExportsSVG'

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
  let errors: SVGErrors | undefined = undefined

  if (!isEmpty(openingElement)) {
    const svgProps = getProperties(openingElement.attributes, params)
    const tag = getSVGTagName(openingElement, file)

    if (svgProps.xmlns !== 'http://www.w3.org/2000/svg') {
      hasErrors = true
      errors = {
        location: { start: openingElement.loc?.start, end: openingElement.loc?.end },
        message: l10n.t('Invalid {attr} attribute, expected "{expected}" but got {actual}', {
          attr: 'xmlns',
          expected: 'http://www.w3.org/2000/svg',
          actual: svgProps.xmlns?.toString() ?? 'undefined',
        }),
      }
    } else if (!tag.isValid || tag.name === 'Fragment' || isEmpty(tag.name)) {
      hasErrors = true
      errors = {
        location: tag.location,
        message: l10n.t('Invalid SVG tag: {tag}', { tag: tag.name ?? 'undefined' }),
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
