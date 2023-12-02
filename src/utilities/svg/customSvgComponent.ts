import { type Declaration } from '@babel/types'
import { type SvgComponent } from '../../interfaces/svgExports'
import { baseFileCache } from './baseFileCache'
import { extractSvgComponentFromNode } from './exportParser'
import { getFileTimestamp } from './fileModifiedCache'

/**
 * Retrieves a custom SVG component based on the provided data.
 * @param data - The data object containing the name, path, typeExport, and params of the SVG component.
 * @returns A Promise that resolves to the custom SVG component, or undefined if not found, or an error message if an error occurs.
 */
export async function customSvgComponent(data: {
  name: string
  path: string
  typeExport: SvgComponent['typeExport']
  params: { custom: Record<string, any>; default: Record<string, any> }
}): Promise<SvgComponent | undefined | { name: string; message: string }> {
  const { name, path, typeExport, params } = data

  const lastModified = getFileTimestamp(path)
  const cachedValue = baseFileCache.get(path, lastModified)

  if (!cachedValue) {
    throw new Error(`SVG component not found: ${name}`)
  }

  const declaration = cachedValue[name]
  const svgComponent = await extractSvgComponentFromNode(
    declaration as Declaration,
    typeExport,
    params.custom
  )

  return svgComponent
}
