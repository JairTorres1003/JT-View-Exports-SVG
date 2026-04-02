import type {
  DeclarationType,
  LocationIdentifier,
  SVGComponent,
  SVGErrors,
  SVGFile,
} from '@jt-view-exports-svg/core'
import * as vsc from 'vscode'

import { REST_PROPS_KEY } from '@/constants/misc'
import { componentDeclarationStore } from '@/store/ComponentDeclarationStore'
import { svgFileToUri } from '@/utilities/vscode/uri'
import { getUnknownError, isEmpty } from '../utilities/misc'
import {
  extractIconComponentString,
  extractNodeDeclarations,
  processComponent,
} from '../utilities/svg/extracts'

interface PlaygroundComponentParameters {
  file: SVGFile
  value: string
  component: SVGComponent
  location: LocationIdentifier
}

async function getComponentNode(component: SVGComponent, file: SVGFile): Promise<DeclarationType> {
  let declaration = componentDeclarationStore.get(file.id)

  if (!declaration) {
    const uriFile = svgFileToUri(file)
    const data = await extractNodeDeclarations(uriFile)

    componentDeclarationStore.set(file.id, data.declarations)

    declaration = componentDeclarationStore.get(file.id)
  }

  const node = declaration?.[component.name]

  if (!node) {
    throw new Error(`Node for component '${component.name}' not found`)
  }

  return node.node
}

export async function playgroundComponent({
  file,
  value,
  component,
  location,
}: PlaygroundComponentParameters): Promise<SVGComponent | SVGErrors> {
  try {
    const iconComponent = await extractIconComponentString(value, location, component.params)

    if (iconComponent.hasErrors && iconComponent.errors) return iconComponent.errors

    const paramsObj = (component.params?.[REST_PROPS_KEY] ?? {}) as Record<string, unknown>
    const restPropKey = Object.keys(paramsObj)[0]
    const propsKeys = Object.keys(iconComponent.props)

    if (propsKeys.length > 0 && !isEmpty(restPropKey)) {
      const restProps: Record<string, unknown> = {}

      for (const key of propsKeys) {
        if (!(key in component.params)) {
          restProps[key] = iconComponent.props[key]
        }
      }

      iconComponent.props[REST_PROPS_KEY] = { [restPropKey]: restProps }
    }

    const node = await getComponentNode(component, file)

    const parameters = { ...component.params, ...iconComponent.props }
    const newComponent = await processComponent({
      file,
      node,
      parameters,
      isExported: component.isExported,
    })

    if (!newComponent) {
      return {
        message: vsc.l10n.t('Error processing SVG component in playground.'),
      }
    }

    return {
      ...component,
      ...newComponent?.component,
      types: component.types,
    }
  } catch (error) {
    return {
      message: vsc.l10n.t('Error generating SVG component in playground: {error}', {
        error: getUnknownError(error),
      }),
    }
  }
}
