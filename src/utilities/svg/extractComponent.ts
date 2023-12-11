import traverse from '@babel/traverse'
import { isJSXIdentifier } from '@babel/types'

import { parserContent } from '../babelParser'
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
export async function extractComponent(value: string, params: Record<string, any>) {
  try {
    const ast = parserContent(value)
    let name: string = ''
    let attributes: Record<string, any> = {}

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
  } catch (error: any) {
    console.error('Error during extraction of component:', error?.message)
    return { name: '', attributes: {}, error: error?.message }
  }
}
