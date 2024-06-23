import traverse from '@babel/traverse'
import { isJSXIdentifier } from '@babel/types'

import { type ANY_TYPE } from '../../interfaces/misc'
import { parserContent } from '../babelParser'
import { getUnknownError } from '../misc'

import { setProperties } from './setProperties'

/**
 * Extracts a component from a given value and sets its attributes based on the provided parameters.
 *
 * @param value - The value to extract the component from.
 * @example Extract a component from a value:
 * ```tsx
 * '<ComponentName size={16} color="green" />'
 * ```
 * @param params - The parameters to set as attributes for the component.
 * @returns An object containing the extracted component name and its attributes.
 */
export async function extractComponent(
  value: string,
  params: Record<string, ANY_TYPE>
): Promise<{
  name: string
  attributes: Record<string, ANY_TYPE>
  error?: string
}> {
  try {
    const ast = parserContent(value)
    let name: string = ''
    let attributes: Record<string, ANY_TYPE> = {}

    traverse(ast, {
      JSXOpeningElement(path) {
        const { node } = path

        if (isJSXIdentifier(node.name)) {
          name = node.name.name
          attributes = setProperties(node.attributes, params)
        }
      },
    })

    return { name, attributes }
  } catch (error) {
    console.error('Error during extraction of component:', getUnknownError(error))
    return { name: '', attributes: {}, error: getUnknownError(error) }
  }
}
