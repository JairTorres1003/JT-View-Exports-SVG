import * as t from '@babel/types'
import { camelCase, isArray } from 'lodash'

import { cssStringToObject } from './cssStringToObject'
import { getPropertyValues } from './propertyValues'

/**
 * Sets the properties of a JSX element based on the provided attributes and default properties.
 * @param attributes The attributes of the JSX opening element.
 * @param defaultProperties The default properties to be used if an attribute is not present.
 * @returns The updated properties object.
 */
export function setProperties(
  attributes: t.JSXOpeningElement['attributes'],
  defaultProperties: Record<string, any>
): Record<string, any> {
  let props: Record<string, any> = {}

  // Iterate over the attributes of the JSX element
  attributes.forEach((attr) => {
    if (t.isJSXAttribute(attr)) {
      const { name, value } = attr

      // Store the attribute value in the props object using camelCase format for the attribute name
      const propKey = camelCase(((name.name || '') as string).toString())
      props[propKey] = getPropertyValues(value, defaultProperties)
    } else if (t.isJSXSpreadAttribute(attr)) {
      props = { ...props, ...getPropertyValues(attr.argument, defaultProperties) }
    }
  })

  // Check if the "style" property exists in props
  if ('style' in props) {
    if (typeof props.style === 'string') {
      // Convert the "style" string to an object
      props.style = cssStringToObject(props.style)
    } else if (!props.style || typeof props.style !== 'object' || isArray(props.style)) {
      props.style = {}
    }
  }

  return props
}
