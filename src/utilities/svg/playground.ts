import { l10n } from 'vscode'

import { REST_PROPS_KEY } from '@/constants/misc'
import { REGEX_TAG_NAME } from '@/constants/regex'
import { getCacheManager } from '@/controllers/cache'
import type { SVGComponent, SVGErrors, SVGPlayground } from '@/types/ViewExportsSVG'

import { getFileTimestamp } from '../files/misc'
import { getUnknownError, isEmpty } from '../misc'

import { extractIconComponent, extractSVGComponent } from './extracts'

/**
 * Generates an SVG component or returns an error message based on the provided parameters.
 * @param options - The options for generating the SVG component.
 * @returns A promise that resolves to the generated SVG component or an error message.
 */
export async function playground(icon: SVGPlayground): Promise<SVGComponent | SVGErrors> {
  const { location, name, value } = icon

  try {
    const { DeclarationFileCache, ComponentsFileCache } = getCacheManager()
    const lastModified = await getFileTimestamp(location.file.uri)
    const declarationCache = DeclarationFileCache.get(location.file.uri, lastModified)
    const componentsCache = ComponentsFileCache.get(location.file.uri, lastModified)

    let currentName = name
    const tagName = value.match(REGEX_TAG_NAME)?.[1] ?? ''
    if (currentName !== tagName) {
      currentName = tagName
    }

    if (!declarationCache?.[currentName]) {
      return {
        location,
        message: l10n.t('Declaration named {name} not found in file {file}', {
          name: currentName,
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

    const originalComponent = componentsCache.components.find((c) => c.name === currentName)

    if (!originalComponent) {
      return {
        location,
        message: l10n.t('SVG component named {name} not found in file {file}', {
          name: currentName,
          file: location.file.absolutePath,
        }),
      }
    }

    const { declaration, params } = declarationCache[currentName]

    const iconComponent = await extractIconComponent(value, location, params)

    if (iconComponent.errors) {
      return iconComponent.errors
    }

    const propsKeys = Object.keys(iconComponent.props)
    const paramsObj = originalComponent.params?.[REST_PROPS_KEY] ?? {}
    const restPropKey = Object.keys(paramsObj as Record<string, unknown>)[0]

    if (propsKeys.length > 0 && !isEmpty(restPropKey)) {
      const restProps: Record<string, unknown> = {}

      for (const key of propsKeys) {
        if (!(key in params)) {
          restProps[key] = iconComponent.props[key]
        }
      }

      iconComponent.props[REST_PROPS_KEY] = { [restPropKey]: restProps }
    }

    const parameters = { ...params, ...iconComponent.props }
    const component = await extractSVGComponent(declaration, location.file, parameters)

    if (isEmpty(component)) {
      return {
        location: {},
        message: l10n.t('Error extracting SVG component: {name}', { name: currentName }),
      }
    }

    return { ...originalComponent, ...component, types: originalComponent.types }
  } catch (error) {
    return {
      message: l10n.t('Error generating SVG component: {error}', { error: getUnknownError(error) }),
      location: {},
    }
  }
}
