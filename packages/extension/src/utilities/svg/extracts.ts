import traverse from '@babel/traverse'
import * as t from '@babel/types'
import {
  type ExtractComponent,
  type ExtractComponentExports,
  type ExtractNodeDeclarations,
  IconCollectionKind,
  type LocationIdentifier,
  type PendingExtraction,
  type ProcessComponent,
  type SVGComponent,
  SVGDeclaration,
  type SVGFile,
} from '@jt-view-exports-svg/core'
import * as vsc from 'vscode'

import { REST_PROPS_KEY } from '@/constants/misc'
import { getCache } from '@/services/cache/main'
import { propertyStore } from '@/store/PropertyStore'

import { parseFileContent, parserContent } from '../babelParser'
import { getUnknownError, isEmpty } from '../misc'
import { getProperties } from '../properties/getProperties'

import { analyzeExportType, getNodeTypes } from './analyze'
import { getSVGComponent } from './SVGComponent'
import { getTagName } from './tags'

/**
 * Parses a source file and extracts top-level declaration nodes and exported identifier names.
 *
 * This function traverses the file AST and collects:
 * - Function declarations and variable declarators as pending extraction entries.
 * - Identifier names referenced by export declarations (including specifiers and object-style exports).
 *
 * Only non-empty, top-level declarations are considered.
 *
 * @param uriFile - URI of the file to parse and analyze.
 */
export async function extractNodeDeclarations(uriFile: vsc.Uri): Promise<ExtractNodeDeclarations> {
  const ast = await parseFileContent(uriFile)

  const extractions: PendingExtraction[] = []
  const identifiers = new Set<string>()

  traverse(ast, {
    Declaration(path) {
      const { node, parent } = path
      if (!t.isProgram(parent) || isEmpty(node)) return

      const isNamedExport = t.isExportNamedDeclaration(node)
      const isDefaultExport = t.isExportDefaultDeclaration(node)
      const isExported = isNamedExport || isDefaultExport

      const declaration = isExported ? node.declaration : node

      if (t.isFunctionDeclaration(declaration)) {
        extractions.push({ node: declaration, isExported })
      } else if (t.isVariableDeclaration(declaration)) {
        declaration.declarations.forEach((d) => {
          if (t.isIdentifier(d.id)) extractions.push({ node: d, isExported })
        })
      } else if (t.isIdentifier(declaration)) {
        identifiers.add(declaration.name)
      } else if (t.isObjectExpression(declaration)) {
        declaration.properties.forEach((property) => {
          if (t.isObjectProperty(property) && t.isIdentifier(property.key)) {
            identifiers.add(property.key.name)
          }
        })
      } else if (isNamedExport && node.specifiers) {
        node.specifiers.forEach((s) => {
          if (t.isExportSpecifier(s) && t.isIdentifier(s.exported)) {
            identifiers.add(s.exported.name)
          }
        })
      }
    },
  })

  // Help the GC free the AST — on large objects this makes a difference
  // @ts-expect-error — explicit AST cleanup
  ast.program = null

  return { declarations: extractions, identifiers }
}

/**
 * Processes a component node and extracts SVG component information.
 */
export async function processComponent({
  file,
  identifiers,
  isExported,
  node,
  parameters,
}: ProcessComponent): Promise<SVGComponent | null> {
  const declaration = t.isFunctionDeclaration(node) ? node : node.init

  if (isEmpty(declaration)) return null

  try {
    const name = (node.id as t.Identifier)?.name ?? ''
    const analysis = analyzeExportType(declaration, file, name, parameters)
    if (isEmpty(analysis)) return null

    const { tag, ...component } = getSVGComponent(analysis, file, name)
    if (component.hasErrors && !tag?.isValid) return null

    const cache = getCache().get('icons')
    const currentWorkspace = vsc.workspace.workspaceFolders?.[0]
    const location = { id: file.id, start: declaration.loc?.start, end: declaration.loc?.end }

    const isFavorite = currentWorkspace
      ? await cache.hasIcon(currentWorkspace, {
          file,
          name,
          location,
          collection: IconCollectionKind.FAVORITE,
        })
      : false

    return {
      ...component,
      name,
      location,
      types: getNodeTypes(component.params),
      withRestProps: REST_PROPS_KEY in component.params,
      declaration: t.isFunctionDeclaration(declaration)
        ? SVGDeclaration.Function
        : SVGDeclaration.Variable,
      isExported: isExported || identifiers?.has(name) || false,
      isFavorite,
    }
  } catch (error) {
    console.error(
      vsc.l10n.t('Error extracting SVG component: {error}', { error: getUnknownError(error) })
    )
    return null
  }
}

/**
 * Extracts SVG component exports from a file by parsing its AST.
 *
 * Traverses the AST to identify and process function declarations, variable declarations,
 * and export specifiers. Separates components into exported and non-exported categories.
 *
 * @param file - The SVG file metadata containing component information
 * @param uriFile - The URI of the file to parse and extract components from
 * @returns A promise that resolves to an object containing:
 *   - `components`: An object with `exported` and `noExported` component arrays
 *   - `travel`: A mapping of exported component names to their declarations and parameters
 * @throws Does not throw; errors are caught and logged, returning empty components and travel
 */
export async function extractComponents(
  file: SVGFile,
  uriFile: vsc.Uri
): Promise<ExtractComponentExports> {
  try {
    const { declarations, identifiers } = await extractNodeDeclarations(uriFile)

    const exported: SVGComponent[] = []
    const noExported: SVGComponent[] = []

    propertyStore.clear()

    const results = await Promise.all(
      declarations.map((item) => processComponent({ ...item, file, identifiers }))
    )

    for (const result of results) {
      if (!result) continue

      if (result.isExported) {
        exported.push(result)
      } else {
        noExported.push(result)
      }
    }

    return { components: { exported, noExported }, declarations }
  } catch (error) {
    console.error(vsc.l10n.t('Failed to extract SVG exports: {0}', getUnknownError(error)))
    return { components: { exported: [], noExported: [] }, declarations: [] }
  }
}

/**
 * Extracts the icon component from the given icon component.
 * @param component - The icon component as a string.
 * @param location - The location of the icon component.
 * @param params - The parameters for the icon component.
 *
 * @returns A promise that resolves to an object containing the extracted component information.
 */
export async function extractIconComponentString(
  component: string,
  location: LocationIdentifier,
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

        if (isEmpty(node.openingElement)) return

        tag = getTagName(node.openingElement, location)
        props = getProperties(node.openingElement.attributes, params)

        if (!tag.isValid) {
          hasErrors = true
          errors = {
            location: tag.location,
            message: vsc.l10n.t('Invalid SVG tag: {tag}', { tag: tag.name ?? 'undefined' }),
          }
        }
      },
    })

    return { tag, props, hasErrors, errors }
  } catch (error) {
    console.error(
      vsc.l10n.t('Error extracting icon component: {error}', { error: getUnknownError(error) })
    )
    return {
      tag,
      props: {},
      hasErrors: true,
      errors: { location, message: getUnknownError(error) },
    }
  }
}
