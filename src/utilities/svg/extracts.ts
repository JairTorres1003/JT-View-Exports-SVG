import traverse from '@babel/traverse'
import * as t from '@babel/types'

import { parseFileContent, parserContent } from '../babelParser'
import { getUnknownError, isEmpty } from '../misc'
import { getProperties, propertyManager } from '../properties'

import { analyzeExportType } from './analyze'
import { getSVGComponent } from './SVGComponent'
import { getTagName } from './tags'

import { SVGTypeExport } from '@/enum/ViewExportsSVG'
import {
  type HandlersDeclaration,
  type DeclarationExport,
  type ExtractComponent,
} from '@/interfaces/svg/extracts'
import {
  type SVGComponent,
  type ExtractSVGExports,
  type SVGFile,
  type SVGLocation,
} from '@/interfaces/ViewExportsSVG'

/**
 * Extracts an SVG component from a declaration export.
 *
 * @param declaration - The declaration export to extract the SVG component from.
 * @param typeExport - The type of SVG export.
 * @param parameters - Optional parameters for the SVG component.
 * @returns A promise that resolves to the extracted SVG component, or undefined if extraction fails.
 */
export async function extractSVGComponent(
  declaration: DeclarationExport,
  typeExport: SVGTypeExport,
  file: SVGFile,
  parameters?: Record<string, unknown>
): Promise<SVGComponent | undefined> {
  if (t.isFunctionDeclaration(declaration) || t.isVariableDeclarator(declaration)) {
    const name = (declaration.id as t.Identifier)?.name ?? ''
    const location = { start: declaration.loc?.start, end: declaration.loc?.end, file }
    const node = t.isFunctionDeclaration(declaration) ? declaration : declaration.init

    propertyManager.clean()

    try {
      if (!isEmpty(node)) {
        const analysis = analyzeExportType(node, parameters)

        if (!isEmpty(analysis)) {
          const { isValid, ...component } = getSVGComponent(analysis, file)
          const result = {
            ...component,
            name,
            location,
            typeExport,
          }

          return isValid ? result : undefined
        }
      }
    } catch (error) {
      console.error('Error extracting SVG component:', error)
    }
  }

  return undefined
}

/**
 * Extracts SVG exports from a file.
 * @param file - The path to the file.
 * @returns A promise that resolves to an object containing the extracted SVG exports.
 */
export async function extractSVGExports(file: SVGFile): Promise<ExtractSVGExports> {
  try {
    const ast = parseFileContent(file.absolutePath)
    const base: ExtractSVGExports['base'] = {}
    const exportComponents: SVGComponent[] = []
    const noExportComponents: SVGComponent[] = []
    const identifiers = new Set<string>()

    /**
     * Handles the extraction of SVG exports.
     * @param svgResult - The SVG component to be extracted.
     * @param declaration - The declaration export.
     * @param isExported - A boolean indicating if the SVG component is exported.
     * @returns A promise that resolves to void.
     */
    const handleExtraction = async (
      declaration: DeclarationExport,
      isExported: boolean,
      svgResult?: SVGComponent
    ): Promise<void> => {
      if (!isEmpty(svgResult)) {
        if (isExported || identifiers.has(svgResult.name)) {
          exportComponents.push(svgResult)
          base[svgResult.name] = { declaration, params: svgResult.params }
        } else {
          noExportComponents.push(svgResult)
        }
      }
    }

    /**
     * Handlers for the different types of declarations.
     */
    const handlers: HandlersDeclaration = {
      FunctionDeclaration: async (declaration, isExported) => {
        extractSVGComponent(declaration, SVGTypeExport.Function, file)
          .then(async (result) => {
            await handleExtraction(declaration, isExported, result)
          })
          .catch(console.error)
      },
      VariableDeclaration: async (declaration, isExported) => {
        for (const d of declaration.declarations) {
          if (t.isIdentifier(d.id)) {
            extractSVGComponent(d, SVGTypeExport.Variable, file)
              .then(async (result) => {
                await handleExtraction(declaration, isExported, result)
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
    console.error('Failed to extract SVG exports.', error)
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
    let errors: ExtractComponent['errors']

    traverse(ast, {
      JSXElement(path) {
        const { node } = path

        if (!isEmpty(node.openingElement)) {
          tag = getTagName(node.openingElement, location.file)
          props = getProperties(node.openingElement.attributes, params)

          if (!tag.isValid) {
            hasErrors = true
            errors = { location: tag.location, message: 'Invalid SVG tag' }
          }
        }
      },
    })

    return { tag, props, hasErrors, errors }
  } catch (error) {
    console.error('Error during extraction of component:', error)
    return {
      tag,
      props: {},
      hasErrors: true,
      errors: { location, message: getUnknownError(error) },
    }
  }
}
