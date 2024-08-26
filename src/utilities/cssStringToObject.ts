import { camelCase } from 'lodash'

import { isEmpty } from './misc'

/**
 * Convert a CSS string to an object.
 * @param cssString The CSS string to convert.
 * @returns An object where CSS property names are converted to camelCase.
 */
export function cssStringToObject(
  cssString: string
): CSSStyleDeclaration | Record<string, unknown> {
  // Initialize an empty object to store CSS properties and values.
  const cssObj: CSSStyleDeclaration | Record<string, unknown> = {}

  // Split the CSS string into individual declarations based on semicolons.
  const declarations = cssString?.split(';')

  for (const declaration of declarations) {
    // Split each declaration into property and value based on colons.
    const [property, value] = declaration.split(':')

    if (!isEmpty(property) && !isEmpty(value)) {
      const camelCaseProperty = camelCase(property.trim())
      cssObj[camelCaseProperty] = value.trim()
    }
  }

  // Return the resulting object with camelCased property names.
  return cssObj
}
