import { l10n } from 'vscode'

import { getCacheManager } from '../cache'
import { getFileTimestamp } from '../files'
import { getUnknownError, isEmpty } from '../misc'

import { extractIconComponent, extractSVGComponent } from './extracts'

import { REST_PROPS_KEY } from '@/constants/misc'
import { type SVGErrors, type SVGComponent, type SVGPlayground } from '@/interfaces/ViewExportsSVG'

/**
 * Generates an SVG component or returns an error message based on the provided parameters.
 * @param options - The options for generating the SVG component.
 * @returns A promise that resolves to the generated SVG component or an error message.
 */
export async function playground(icon: SVGPlayground): Promise<SVGComponent | SVGErrors> {
  const { location, name, value } = icon

  try {
    const { DeclarationFileCache, SVGFileCache } = getCacheManager()
    const lastModified = getFileTimestamp(location.file.absolutePath)
    const declarationCache = DeclarationFileCache.get(location.file.absolutePath, lastModified)
    const componentsCache = SVGFileCache.get(location.file.absolutePath, lastModified)

    if (declarationCache?.[name] === undefined) {
      return {
        location,
        message: l10n.t('Declaration named {name} not found in file {file}', {
          name,
          file: location.file.absolutePath,
        }),
      }
    }

    if (isEmpty(componentsCache)) {
      return {
        location,
        message: l10n.t('SVG components not found in file {file}', {
          file: location.file.absolutePath,
        }),
      }
    }

    const originalComponent = componentsCache.components.find((c) => c.name === name)

    if (originalComponent === undefined) {
      return {
        location,
        message: l10n.t('SVG component named {name} not found in file {file}', {
          name,
          file: location.file.absolutePath,
        }),
      }
    }

    const { declaration, params } = declarationCache[name]

    const iconComponent = await extractIconComponent(value, location, params)
    const propsKeys = Object.keys(iconComponent.props)

    if (propsKeys.length > 0) {
      const restProps: Record<string, unknown> = {}

      for (const key of propsKeys) {
        if (!(key in params)) {
          restProps[key] = iconComponent.props[key]
        }
      }

      iconComponent.props[REST_PROPS_KEY] = restProps
    }

    const parameters = { ...params, ...iconComponent.props }
    const component = await extractSVGComponent(declaration, location.file, parameters)

    if (isEmpty(component)) {
      return {
        location: {},
        message: l10n.t('Error extracting SVG component: {name}', { name }),
      }
    }

    return { ...originalComponent, ...component }
  } catch (error) {
    return {
      message: l10n.t('Error generating SVG component: {error}', { error: getUnknownError(error) }),
      location: {},
    }
  }
}
