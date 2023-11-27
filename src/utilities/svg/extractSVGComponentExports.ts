/* eslint-disable @typescript-eslint/naming-convention */
import * as fs from 'fs'
import * as babelParser from '@babel/parser'
import traverse from '@babel/traverse'
import * as t from '@babel/types'

import { type SvgComponent, type SvgExport } from '../../interfaces/svgExports'
import { extractSvgComponentFromNode } from './exportParser'

/**
 * Parse the content of a file and return the AST (Abstract Syntax Tree).
 * @param {string} filePath - The path to the file.
 * @returns {t.Node} The AST representing the file content.
 */
function parseFileContent(filePath: string): t.Node {
  // Read the file content synchronously
  const fileContent = fs.readFileSync(filePath, 'utf8')

  // Parse the file content using Babel parser
  return babelParser.parse(fileContent, {
    sourceType: 'module',
    plugins: ['jsx', 'typescript'],
  })
}

/**
 * Extract SVG component exports from a file.
 * @param {string} filePath - The file path of the TypeScript/JavaScript file to parse.
 * @returns {Promise<SvgExport>} A promise that resolves to an object containing the extracted SVG component exports.
 */
export async function extractSVGComponentExports(
  filePath: string
): Promise<{ result: SvgExport; base: Record<string, any> }> {
  try {
    // Parse the file content into an AST (Abstract Syntax Tree)
    const ast = parseFileContent(filePath)
    const baseExports: Record<string, any> = {}
    const exports: SvgComponent[] = []
    const notExports: SvgComponent[] = []
    const identifiers = new Set<string>()
    let lengthExports: number = 0

    // Traverse the AST to find export declarations
    traverse(ast, {
      Declaration(path) {
        const { node, parent } = path

        if (t.isProgram(parent) && node) {
          let declaration: any = node
          let isExported = false

          if (
            (t.isExportNamedDeclaration(node) || t.isExportDefaultDeclaration(node)) &&
            node.declaration
          ) {
            declaration = node.declaration
            isExported = true
          }

          if (t.isFunctionDeclaration(declaration)) {
            extractSvgComponentFromNode(declaration as t.Declaration, 'function')
              .then((result) => {
                if (result) {
                  // Exported function declaration 'export function functionName() {}'
                  if (isExported || identifiers.has(result.name)) {
                    lengthExports++
                    exports.push(result)
                    baseExports[result.name] = declaration
                  } else {
                    // Function declaration 'function functionName() {}'
                    notExports.push(result)
                  }
                }
              })
              .catch((error) => {
                console.error(`Error extracting variable declaration: ${error}`)
              })
          } else if (t.isVariableDeclaration(declaration)) {
            declaration.declarations.forEach((d) => {
              if (t.isIdentifier(d.id)) {
                extractSvgComponentFromNode(d, 'variable')
                  .then((result) => {
                    if (result) {
                      // Exported variable declaration 'export const variableName = value;'
                      if (isExported || identifiers.has(result.name)) {
                        lengthExports++
                        exports.push(result)
                        baseExports[result.name] = d
                      } else {
                        // Variable declaration 'const variableName = value;'
                        notExports.push(result)
                      }
                    }
                  })
                  .catch((error) => {
                    console.error(`Error extracting variable declaration: ${error}`)
                  })
              }
            })
          } else if (t.isIdentifier(declaration)) {
            identifiers.add(declaration.name)
          } else if (t.isObjectExpression(declaration)) {
            declaration.properties.forEach((property) => {
              if (t.isObjectProperty(property) && t.isIdentifier(property.key)) {
                identifiers.add(property.key.name)
              }
            })
          } else if (t.isExportNamedDeclaration(declaration) && declaration.specifiers) {
            declaration.specifiers.forEach((specifier) => {
              if (t.isExportSpecifier(specifier) && t.isIdentifier(specifier.exported)) {
                identifiers.add(specifier.exported.name)
              }
            })
          }
        }
      },
    })

    const result: SvgExport = { lengthExports, lengthSvg: exports.length, svgComponents: exports }
    // Return an object containing the extracted SVG component exports and their lengths
    return { result, base: baseExports }
  } catch (error) {
    console.error('Error during extraction:', error)
    return { result: { lengthExports: 0, lengthSvg: 0, svgComponents: [] }, base: {} }
  }
}
