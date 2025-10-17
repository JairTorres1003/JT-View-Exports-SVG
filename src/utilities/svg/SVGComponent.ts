import type * as t from '@babel/types'
import { l10n } from 'vscode'

import type { GetSVGComponent, ValidationResult } from '@/types/svg/SVGComponent'
import type { GetSVGTagName, SVGTagName } from '@/types/svg/tags'
import type { SVGComponentProps, SVGFile } from '@/types/ViewExportsSVG'

import { isEmpty } from '../misc'
import { getProperties } from '../properties/getProperties'
import { propertyManager } from '../properties/propertyManager'

import { getChildAttributes } from './children'
import { getSVGTagName } from './tags'

/**
 * Validates the opening element of a JSX element to ensure it's a valid SVG.
 * It checks for a valid SVG tag and the presence of the `xmlns` attribute.
 * @param openingElement - The JSX opening element to validate.
 * @param file - The file context for location information.
 * @returns A validation result object. If validation fails, `isValid` is false and an `error` object is included.
 * If successful, `isValid` is true and it includes the extracted tag, properties, and parameters.
 */
function validateOpeningElement(
  openingElement: t.JSXOpeningElement,
  file: SVGFile
): ValidationResult {
  const tag = getSVGTagName(openingElement, file)

  if (!tag.isValid || tag.name === 'Fragment' || isEmpty(tag.name)) {
    return {
      isValid: false,
      tag,
      error: {
        location: tag.location,
        message: l10n.t('Invalid SVG tag: {tag}', { tag: tag.name ?? 'undefined' }),
      },
    }
  }

  const params = propertyManager.get()
  const props = getProperties(openingElement.attributes, params)
  if (props.xmlns !== 'http://www.w3.org/2000/svg') {
    return {
      isValid: false,
      tag,
      error: {
        location: { start: openingElement.loc?.start, end: openingElement.loc?.end },
        message: l10n.t('Invalid {attr} attribute, expected "{expected}" but got {actual}', {
          attr: 'xmlns',
          expected: 'http://www.w3.org/2000/svg',
          actual: props.xmlns?.toString() ?? 'undefined',
        }),
      },
    }
  }

  return { isValid: true, tag, props, params }
}

/**
 * Creates a default SVG component structure, typically used for error cases.
 * @param file - The file context for location information.
 * @param tag - The SVG tag name.
 * @param attr - Optional partial attributes to override the default component structure.
 * @returns A default `GetSVGComponent` object representing an empty or invalid component, with `hasErrors` set to true.
 */
function defaultSvgComponent(
  file: SVGFile,
  tag?: Partial<GetSVGTagName>,
  attr?: Partial<GetSVGComponent>
): GetSVGComponent {
  const params = propertyManager.get()
  const location = {
    file,
    start: { column: 0, index: 0, line: 0 },
    end: { column: 0, index: 0, line: 0 },
  }

  return {
    component: {
      children: [],
      isAnimated: false,
      isMotion: false,
      props: {},
      tag: (tag?.name ?? 'Fragment') as SVGTagName,
    },
    tag: {
      isMotion: false,
      location,
      isValid: false,
    },
    isAnimated: false,
    params,
    hasErrors: true,
    errors: {
      message: l10n.t('Empty opening element'),
      location,
    },
    ...attr,
  }
}

/**
 * Analyzes a JSX element and extracts its structure into a serializable SVG component representation.
 * It processes the main SVG tag, its properties, and its children recursively.
 * @param element - The root JSX element of the SVG component.
 * @param file - The file context for location and tag resolution.
 * @returns An object representing the structured SVG component. This includes the component's
 * structure (`component`), its animation status (`isAnimated`), its parameters (`params`),
 * and any errors encountered (`hasErrors`, `errors`).
 */
export function getSVGComponent(element: t.JSXElement, file: SVGFile): GetSVGComponent {
  const { openingElement, children } = element

  if (isEmpty(openingElement)) {
    return defaultSvgComponent(file)
  }

  const validation = validateOpeningElement(openingElement, file)
  if (!validation.isValid) {
    return defaultSvgComponent(file, validation.tag, { errors: validation.error })
  }

  const childInfo = getChildAttributes(children, file)

  const { tag, props, params } = validation
  const isAnimated = tag.isMotion || childInfo.isMotion || childInfo.isAnimated

  const component: SVGComponentProps = {
    tag: tag.name as SVGTagName,
    props,
    isMotion: tag.isMotion,
    isAnimated,
    children: childInfo.children,
  }

  if (childInfo.hasErrors) {
    return {
      component,
      isAnimated,
      params,
      hasErrors: true,
      errors: childInfo.errors,
      tag,
    }
  }

  return {
    component,
    isAnimated,
    params,
    hasErrors: false,
    errors: undefined,
    tag,
  }
}
