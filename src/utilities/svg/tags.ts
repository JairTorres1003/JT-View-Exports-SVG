import * as t from '@babel/types'
import { camelCase } from 'lodash'

import { isEmpty } from '../misc'

import { SVG_TAGS } from '@/constants/svg/tags'
import type { SVGTagName, GetSVGTagName, GetTagName } from '@/interfaces/svg/tags'
import type { SVGLocation, SVGFile } from '@/interfaces/ViewExportsSVG'

/**
 * Retrieves the tag name from a JSXOpeningElement and provides additional information.
 * @param openingElement The JSXOpeningElement to extract the tag name from.
 * @returns An object containing the tag name, motion flag, location, and validity flag.
 */
export function getTagName(openingElement: t.JSXOpeningElement, file: SVGFile): GetTagName {
  const location: SVGLocation = {
    start: openingElement.loc?.start,
    end: openingElement.loc?.end,
    file,
  }
  let name: GetTagName['name'] = ''
  let isMotion = false

  if (t.isJSXIdentifier(openingElement.name)) {
    name = openingElement.name.name
  } else if (t.isJSXMemberExpression(openingElement.name)) {
    const objName = (openingElement.name.object as t.JSXIdentifier).name ?? ''
    name = openingElement.name.property.name
    isMotion = objName !== '' && objName === 'motion'
  }

  return {
    name,
    isMotion,
    location,
    isValid: name !== '',
  }
}

/**
 * Retrieves the SVG tag name from the JSX opening element.
 * @param openingElement The JSX opening element.
 * @returns An object containing the tag name, its camel-cased name, and a flag indicating its validity.
 */
export function getSVGTagName(openingElement: t.JSXOpeningElement, file: SVGFile): GetSVGTagName {
  const tag = getTagName(openingElement, file)
  const name = SVG_TAGS[camelCase(tag.name) as SVGTagName]

  return {
    ...tag,
    name: name ?? tag.name,
    isValid: !isEmpty(name),
  }
}
