/* eslint-disable @typescript-eslint/require-await -- This function is designed to be asynchronous */
import traverse from '@babel/traverse'
import * as t from '@babel/types'
import { l10n, workspace } from 'vscode'

import { parseFileContent, parserContent } from '../babelParser'
import { getUnknownError, isEmpty } from '../misc'
import { getProperties, propertyManager } from '../properties'

import { analyzeExportType, getNodeTypes } from './analyze'
import { getSVGComponent } from './SVGComponent'
import { getTagName } from './tags'

import { REST_PROPS_KEY } from '@/constants/misc'
import { getCacheManager } from '@/controllers/cache'
import { SVGDeclaration } from '@/enum/ViewExportsSVG'
import type { HandlersDeclaration, DeclarationExport, ExtractComponent } from '@/types/svg/extracts'
import type { SVGComponent, ExtractSVGExports, SVGFile, SVGLocation } from '@/types/ViewExportsSVG'

/**
 * Extracts an SVG component from a declaration export.
 *
 * @param declaration - The declaration export to extract the SVG component from.
 * @param parameters - Optional parameters for the SVG component.
 * @returns A promise that resolves to the extracted SVG component, or undefined if extraction fails.
 */
export async function extractSVGComponent(
  declaration: DeclarationExport,
  file: SVGFile,
  parameters?: Record<string, unknown>
): Promise<Omit<SVGComponent, 'declaration' | 'isExported'> | undefined> {
  if (t.isFunctionDeclaration(declaration) || t.isVariableDeclarator(declaration)) {
    const name = (declaration.id as t.Identifier)?.name ?? ''
    const location = { start: declaration.loc?.start, end: declaration.loc?.end, file }
    const node = t.isFunctionDeclaration(declaration) ? declaration : declaration.init

    propertyManager.clean()

    try {
      if (!isEmpty(node)) {
        const analysis = analyzeExportType(node, file, parameters)

        if (!isEmpty(analysis)) {
          const component = getSVGComponent(analysis, file)
          const types = getNodeTypes(component.params)
          const withRestProps = REST_PROPS_KEY in component.params

          return { ...component, name, location, types, withRestProps }
        }
      }
    } catch (error) {
      console.error(
        l10n.t('Error extracting SVG component: {error}', { error: getUnknownError(error) })
      )
    }
  }

  return undefined
}

/**
 * Extracts the SVG from the given file.
 * @param file - The path to the file.
 * @returns A promise that resolves to an object containing the extracted SVG.
 */
export async function extractSVGData(file: SVGFile): Promise<ExtractSVGExports> {
  try {
    const ast = parseFileContent(file.absolutePath)
    const base: ExtractSVGExports['base'] = {}
    const exportComponents: SVGComponent[] = []
    const noExportComponents: SVGComponent[] = []
    const identifiers = new Set<string>()

    /**
     * Handles the extraction of SVG.
     * @param declaration - The declaration.
     * @param SVGdeclaration - The type of SVG declaration.
     * @param isExported - A boolean indicating if the SVG component is exported.
     * @param svgResult - The SVG component to be extracted.
     * @returns A promise that resolves to void.
     */
    const handleExtraction = async (
      declaration: DeclarationExport,
      SVGdeclaration: SVGDeclaration,
      isExported: boolean,
      svgResult?: Omit<SVGComponent, 'declaration' | 'isExported'>
    ): Promise<void> => {
      if (!isEmpty(svgResult)) {
        const { FavoritesIconCache } = getCacheManager()
        let isFavorite = false

        if (!isEmpty(workspace.workspaceFolders)) {
          isFavorite = FavoritesIconCache.hasIcon(workspace.workspaceFolders[0].uri, {
            location: svgResult.location,
            name: svgResult.name,
          })
        }

        const result: SVGComponent = {
          ...svgResult,
          declaration: SVGdeclaration,
          isExported,
          isFavorite,
        }

        if (isExported || identifiers.has(svgResult.name)) {
          exportComponents.push(result)
          base[svgResult.name] = { declaration, params: svgResult.params }
        } else {
          noExportComponents.push(result)
        }
      }
    }

    /**
     * Handlers for the different types of declarations.
     */
    const handlers: HandlersDeclaration = {
      FunctionDeclaration: async (declaration, isExported) => {
        extractSVGComponent(declaration, file)
          .then(async (result) => {
            await handleExtraction(declaration, SVGDeclaration.Function, isExported, result)
          })
          .catch(console.error)
      },
      VariableDeclaration: async (declaration, isExported) => {
        for (const d of declaration.declarations) {
          if (t.isIdentifier(d.id)) {
            extractSVGComponent(d, file)
              .then(async (result) => {
                await handleExtraction(d, SVGDeclaration.Variable, isExported, result)
              })
              .catch(console.error)
          }
        }
      },
      Identifier: (declaration) => {
        identifiers.add(declaration.name)
      },
      ObjectExpression: (declaration) => {
        declaration.properties.forEach((property) => {
          if (t.isObjectProperty(property) && t.isIdentifier(property.key)) {
            identifiers.add(property.key.name)
          }
        })
      },
      ExportNamedDeclaration: (declaration) => {
        if (!isEmpty(declaration.specifiers)) {
          declaration.specifiers.forEach((specifier) => {
            if (t.isExportSpecifier(specifier) && t.isIdentifier(specifier.exported)) {
              identifiers.add(specifier.exported.name)
            }
          })
        }
      },
    }

    // Traverse the AST to find export declarations
    traverse(ast, {
      Declaration(path) {
        const { node, parent } = path

        if (t.isProgram(parent) && !isEmpty(node)) {
          const validExport = t.isExportNamedDeclaration(node) || t.isExportDefaultDeclaration(node)

          let declaration: DeclarationExport = node
          let isExported = false

          if (validExport && !isEmpty(node.declaration)) {
            declaration = node.declaration
            isExported = true
          }

          if (t.isFunctionDeclaration(declaration)) {
            handlers.FunctionDeclaration(declaration, isExported).catch(console.error)
          } else if (t.isVariableDeclaration(declaration)) {
            handlers.VariableDeclaration(declaration, isExported).catch(console.error)
          } else if (t.isIdentifier(declaration)) {
            handlers.Identifier(declaration)
          } else if (t.isObjectExpression(declaration)) {
            handlers.ObjectExpression(declaration)
          } else if (t.isExportNamedDeclaration(declaration)) {
            handlers.ExportNamedDeclaration(declaration)
          }
        }
      },
    })

    return { svg: { exportComponents, noExportComponents }, base }
  } catch (error) {
    console.error(
      l10n.t('Failed to extract SVG exports: {error}', { error: getUnknownError(error) })
    )
    return { svg: { exportComponents: [], noExportComponents: [] }, base: {} }
  }
}

/**
 * Extracts the icon component from the given icon component.
 * @param component - The icon component as a string.
 * @param location - The location of the icon component.
 * @param params - The parameters for the icon component.
 * @returns A promise that resolves to an object containing the extracted component information.
 */
export async function extractIconComponent(
  component: string,
  location: SVGLocation,
  params: SVGComponent['params']
): Promise<ExtractComponent> {
  let tag: ExtractComponent['tag'] = { name: '', isMotion: false, location, isValid: false }
  let props: ExtractComponent['props'] = {}

  try {
    const ast = parserContent(component)
    let hasErrors = false
    let errors: ExtractComponent['errors'] = undefined

    traverse(ast, {
      JSXElement(path) {
        const { node } = path

        if (!isEmpty(node.openingElement)) {
          tag = getTagName(node.openingElement, location.file)
          props = getProperties(node.openingElement.attributes, params)

          if (!tag.isValid) {
            hasErrors = true
            errors = {
              location: tag.location,
              message: l10n.t('Invalid SVG tag: {tag}', { tag: tag.name ?? 'undefined' }),
            }
          }
        }
      },
    })

    return { tag, props, hasErrors, errors }
  } catch (error) {
    console.error(
      l10n.t('Error extracting icon component: {error}', { error: getUnknownError(error) })
    )
    return {
      tag,
      props: {},
      hasErrors: true,
      errors: { location, message: getUnknownError(error) },
    }
  }
}
