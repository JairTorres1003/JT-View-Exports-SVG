import * as t from '@babel/types'
import { camelCase } from 'lodash'

import { isEmpty } from '../misc'

import { SVG_TAGS } from '@/constants/svgTags'
import { type SVGTagName, type GetSVGTagName, type GetTagName } from '@/interfaces/svg/tags'

/**
 * Retrieves the tag name from a JSXOpeningElement and provides additional information.
 * @param openingElement The JSXOpeningElement to extract the tag name from.
 * @returns An object containing the tag name, motion flag, location, and validity flag.
 */
export function getTagName(openingElement: t.JSXOpeningElement): GetTagName {
  const location = {
    start: openingElement.loc?.start,
    end: openingElement.loc?.end,
  }
  let name: GetTagName['name'] = ''
  let isMotion: boolean = false

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
export function getSVGTagName(openingElement: t.JSXOpeningElement): GetSVGTagName {
  const tag = getTagName(openingElement)
  const name = SVG_TAGS[camelCase(tag.name) as SVGTagName]

  return {
    ...tag,
    name,
    isValid: !isEmpty(name),
  }
}
