import { type Declaration } from '@babel/types'

import { REST_PROPS_KEY } from '../../constants/misc'
import { type CustomSvgComponentData, type SvgComponent } from '../../interfaces/svgExports'
import { baseFileCache } from '../cache/baseFileCache'
import { getFileTimestamp } from '../cache/fileModifiedCache'
import { isEmpty } from '../misc'

import { extractSvgComponentFromNode } from './exportParser'
import { extractComponent } from './extractComponent'

/**
 * Retrieves a custom SVG component based on the provided data.
 * @param data - The data object containing the name, path, typeExport, params, and value of the SVG component.
 * @returns A Promise that resolves to the retrieved SvgComponent, undefined if not found, or an object with the name and error message.
 * @throws Error if the SVG component is not found.
 */
export async function customSvgComponent(
  data: CustomSvgComponentData
): Promise<SvgComponent | undefined> {
  const { name, path, typeExport, value } = data

  const lastModified = getFileTimestamp(path)
  const cachedValue = baseFileCache.get(path, lastModified)

  if (cachedValue === undefined) {
    throw new Error(`SVG component not found: ${name}`)
  }

  const { declaration, params } = cachedValue[name]

  const component = await extractComponent(value, params)

  if (!isEmpty(component.error)) {
    throw new Error(`Error extracting component: ${component.error}`)
  }

  const componentKeys = Object.keys(component.attributes)
  const firstRestParam = Object.keys(params[REST_PROPS_KEY] ?? {})[0]

  if (!isEmpty(firstRestParam) && componentKeys.length > 0) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const restProps: Record<string, any> = {}

    for (const key of componentKeys) {
      if (!(key in params)) {
        restProps[key] = component.attributes[key]
      }
    }

    // Add the rest properties to the component attributes
    component.attributes[REST_PROPS_KEY] = { [firstRestParam]: restProps }
  }

  const attributes = { ...params, ...component.attributes }

  const svgComponent = await extractSvgComponentFromNode(
    declaration as Declaration,
    typeExport,
    attributes
  )

  return !isEmpty(svgComponent) ? { ...svgComponent, params } : undefined
}
