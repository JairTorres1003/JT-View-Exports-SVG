import type { ParamDefinition } from '@api/interfaces/misc'

/**
 * Generates a snippet string for inserting a property into code,
 * with placeholders for user input, based on the property's type.
 *
 * @param property - The parameter definition object describing the property's type.
 * @param propName - The name of the property to insert.
 * @returns A snippet string with placeholders for the property value,
 *          formatted according to its type.
 */
export function createInsertText(property: ParamDefinition, propName: string): string {
  if (!property) return ''

  if (property.type === 'string') return `${propName}="$1"$0`

  return `${propName}={$1}$0`
}

/**
 * Replaces placeholders in a snippet string with the provided values.
 *
 * @param snippet - The snippet string containing placeholders (e.g., $0, $1, $2, ...).
 * @param values - An array of values to replace the placeholders with.
 * @returns The modified snippet string with placeholders replaced by values.
 */
export function replaceSnippetValues(
  snippet: string,
  values: Array<ParamDefinition['default']>
): string {
  let result = snippet

  values.forEach((value, index) => {
    if (typeof value === 'object') {
      result = result.replace(
        `$${index}`,
        JSON.stringify(value, null, 2).replace(/"([^"]+)":/g, '$1:')
      )
    } else {
      result = result.replace(`$${index}`, value?.toString() || '')
    }
  })

  return result
}
