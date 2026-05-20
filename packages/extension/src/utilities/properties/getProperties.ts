import * as t from '@babel/types'
import { camelCase, isArray } from 'lodash'

import { cssStringToObject } from '../css/cssStringToObject'
import { isEmpty } from '../misc'

import { getPropertyValues } from './propertyValues'

/**
 * Retrieves the properties from the JSX opening element attributes and merges them with default properties.
 * @param attributes - The attributes of the JSX opening element.
 * @param defaultProperties - The default properties to merge with the properties.
 * @returns The merged properties.
 */
export function getProperties(
  attributes: t.JSXOpeningElement['attributes'],
  defaultProperties: Record<string, unknown>
): Record<string, unknown> {
  let props: Record<string, unknown> = {}

  // Iterate over the attributes of the JSX element
  attributes.forEach((attr) => {
    if (t.isJSXAttribute(attr)) {
      const { name, value } = attr

      let propName = ''
      if (t.isJSXIdentifier(name)) {
        propName = name.name
      }

      const propKey = camelCase(propName)
      props[propKey] = getPropertyValues(value, defaultProperties)
    } else if (t.isJSXSpreadAttribute(attr)) {
      const restPros = getPropertyValues(attr.argument, defaultProperties) ?? {}
      props = { ...props, ...restPros }
    }
  })

  // Check if the "style" property exists in props
  if ('style' in props) {
    if (typeof props.style === 'string') {
      // Convert the "style" string to an object
      props.style = cssStringToObject(props.style)
    } else if (isEmpty(props.style) || typeof props.style !== 'object' || isArray(props.style)) {
      props.style = {}
    }
  }

  return props
}
