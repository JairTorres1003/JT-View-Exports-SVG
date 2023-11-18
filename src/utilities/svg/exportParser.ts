/* eslint-disable @typescript-eslint/naming-convention */
import * as fs from 'fs'
import * as babelParser from '@babel/parser'
import traverse from '@babel/traverse'
import * as t from '@babel/types'
import { camelCase, isArray } from 'lodash'

import {
  type HasInvalidChild,
  type SvgComponent,
  type SvgComponentDetails,
  type SvgExport,
} from '../../interfaces/svgExports'
import {
  type ChildAttributesResponse,
  type ComponentNameResponse,
  type ExportType,
  type ExportTypeNode,
  type IsSVGComponent,
} from '../../interfaces/exportParser'
import { SVG_TAGS } from './svgTags'
import { cssStringToObject } from './cssStringToObject'
import { getPropertyValues } from './getPropertyValues'
import { propertyManager } from './propertyManager'

// Declaration properties
const properties = propertyManager

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
 * Convert JSX element properties into a properties object.
 * @param {t.JSXOpeningElement["attributes"]} attributes - The properties of the JSX element.
 * @returns {{ [key: string]: any }} An object containing the properties.
 */
function setProperties(attributes: t.JSXOpeningElement['attributes']): Record<string, any> {
  let props: Record<string, any> = {}
  const propsValue = properties.get()

  // Iterate over the attributes of the JSX element
  attributes.forEach((attr) => {
    if (t.isJSXAttribute(attr)) {
      const { name, value } = attr

      // Store the attribute value in the props object using camelCase format for the attribute name
      const propKey = camelCase(((name.name || '') as string).toString())
      props[propKey] = getPropertyValues(value, propsValue)
    } else if (t.isJSXSpreadAttribute(attr)) {
      props = { ...props, ...getPropertyValues(attr.argument, propsValue) }
    }
  })

  // Check if the "style" property exists in props
  if ('style' in props) {
    if (typeof props.style === 'string') {
      // Convert the "style" string to an object
      props.style = cssStringToObject(props.style)
    } else if (!props.style || typeof props.style !== 'object' || isArray(props.style)) {
      props.style = {}
    }
  }

  return props
}

/**
 * Recursively extracts attributes from JSXElement children.
 * @param {t.JSXElement["children"]} children - The children of the JSXElement.
 * @returns {ChildAttributesResponse} An object with the extracted child components and a boolean flag indicating if animation is present.
 */
function getChildAttributes(children: t.JSXElement['children']): ChildAttributesResponse {
  const components: SvgComponentDetails[] = []
  let hasInvalidChild: HasInvalidChild | null = null
  let isAnimated: boolean = false

  children.forEach((child) => {
    // Check if the child is a JSXElement
    if (t.isJSXElement(child)) {
      const openingElement = child.openingElement
      const props = setProperties(openingElement.attributes)

      // Recursively extract child components
      const childComponents = getChildAttributes(child.children).children

      // Check if childComponents is an array or contains an error
      if (!Array.isArray(childComponents) && childComponents.error) {
        // Handle the case of an invalid child component
        if (hasInvalidChild === null) {
          hasInvalidChild = { error: 'HasInvalidChild', location: child.loc?.start }
        }
        return
      }

      // Get the name of the JSX component from the opening element
      const componentName = getComponentName(openingElement)

      // Check if the component name is a string (valid)
      if (typeof componentName.tag !== 'string') {
        // Handle the case of an invalid child component
        if (hasInvalidChild === null) {
          hasInvalidChild = componentName.tag
        }
        return
      }

      if (componentName.isMotion) {
        isAnimated = true
      }

      // Add the child component to the components array
      components.push({
        ...componentName,
        children: childComponents,
        props,
      })
    }
  })

  // Return the error if an invalid child component is found
  if (hasInvalidChild) {
    return { children: hasInvalidChild, isAnimated }
  }

  // Return the array of extracted components
  return { children: components, isAnimated }
}

/**
 * Extracts the component tag name from a JSX opening element and checks if it's a motion component.
 * @param {t.JSXOpeningElement} openingElement - The JSX opening element to analyze.
 * @returns {ComponentNameResponse} An object containing the component tag name and a flag indicating if it's a motion component.
 */
function getComponentName(openingElement: t.JSXOpeningElement): ComponentNameResponse {
  // Create a special object representing an error
  const error: HasInvalidChild = {
    error: 'HasInvalidChild',
    location: openingElement.name.loc?.start,
  }
  let tag: string | undefined
  let isMotion: boolean = false

  // Check if the opening element is a JSXIdentifier (for regular components)
  if (t.isJSXIdentifier(openingElement.name)) {
    tag = SVG_TAGS[camelCase(openingElement.name.name)]
  } else if (t.isJSXMemberExpression(openingElement.name)) {
    // Check if the opening element is a JSXMemberExpression (for components with namespaces)
    const objectName = (openingElement.name.object as t.JSXIdentifier).name || ''
    const propertyName = openingElement.name.property.name

    tag = propertyName === 'Fragment' ? 'Fragment' : SVG_TAGS[camelCase(propertyName)]
    isMotion = objectName !== '' && objectName === 'motion'
  }

  return { tag: tag || error, isMotion }
}

/**
 * Check if a JSXElement represents an SVG component and extract relevant information.
 * @param {t.JSXElement} argument - The JSXElement to check.
 * @returns {IsSVGComponent} An object indicating whether the JSXElement is an SVG component and the extracted component details.
 */
function isSVGComponent(argument: t.JSXElement): IsSVGComponent {
  let validate: boolean = false
  let component: IsSVGComponent['component']
  let isAnimated: boolean = false
  const { openingElement, children } = argument
  let childrenDetails: { children: SvgComponentDetails['children']; isAnimated: boolean } = {
    children: [],
    isAnimated: false,
  }

  // Check if the node has an opening element
  if (openingElement) {
    const svgProps = setProperties(openingElement.attributes)

    // Check if the attribute is 'xmlns' and its value is 'http://www.w3.org/2000/svg'
    if (svgProps.xmlns === 'http://www.w3.org/2000/svg') {
      // Set the validation flag to true
      validate = true
    }

    // If it's a valid SVG component with children
    if (validate && children.length > 0) {
      // Recursively extract child attributes
      childrenDetails = getChildAttributes(children)
      const componentName = getComponentName(openingElement)
      isAnimated = childrenDetails.isAnimated || componentName.isMotion

      // Create the component object with the component name, children, and props
      component = {
        ...componentName,
        children: childrenDetails.children,
        props: svgProps,
      }
    }
  }

  // Return the result indicating whether it's an SVG component and the extracted component details
  return { validate, component, isAnimated }
}

/**
 * Get the first JSX element or fragment from the given children array.
 * @param {t.JSXElement["children"] | undefined} children - The array of JSX elements and fragments to search in.
 * @returns {t.JSXElement | null} The first JSX element or fragment found, or null if multiple elements are found or none is found.
 */
function getChildFragments(children: t.JSXElement['children'] | undefined): t.JSXElement | null {
  if (!children) {
    return null
  }

  let jsxElementsCount: number = 0
  let jsxElement: t.JSXElement | null = null

  for (const child of children) {
    // If more than one JSX element is found, set jsxElement to null and break the loop.
    if (jsxElementsCount > 1) {
      jsxElement = null
      break
    }

    // Check if the child is a JSX element with children.
    if (t.isJSXElement(child) && child.children.length > 0) {
      const componentName = getComponentName(child.openingElement)

      if (jsxElementsCount === 0) {
        // If it is the first JSX element found, check if it is a Fragment
        if (componentName.tag === 'Fragment') {
          jsxElement = getChildFragments(child.children)
        } else {
          jsxElement = child
        }
      }

      jsxElementsCount++
    } else if (t.isJSXFragment(child) && child.children.length > 0) {
      if (jsxElementsCount === 0) {
        jsxElement = getChildFragments(child.children)
      }
      jsxElementsCount++
    }
  }

  return jsxElement
}

/**
 * Extracts properties from the parameters array, especially from object patterns.
 * @param {(t.Identifier | t.Pattern | t.RestElement)[]} params - An array of parameters, including object patterns.
 */
function getNodeParams(params: Array<t.Identifier | t.Pattern | t.RestElement>) {
  // Initialize declaration properties
  properties.clean()
  // Check if there are parameters with object patterns
  if (params && params.length > 0) {
    params.forEach((param: any) => {
      if (t.isObjectPattern(param) && param.properties) {
        param.properties.forEach((property) => {
          if (t.isObjectProperty(property)) {
            const { key, value } = property

            if (t.isIdentifier(key)) {
              // Add the property to the properties object
              properties.set(key.name, getPropertyValues(value, {}))
            }
          }
        })
      }
    })
  }
}

/**
 * Analyze the export type of a node and extract relevant information.
 * @param {ExportTypeNode} node - The export type node to analyze.
 * @returns {ExportType | undefined} An object representing the analyzed export type, or undefined if the export type is not JSXElement.
 */
function analyzeExportType(node: ExportTypeNode): ExportType | undefined {
  // Initialize variables
  let argument = node as t.JSXElement
  let type = node?.type

  // Check if the node represents an arrow function or function declaration with a block statement body
  if (node && (t.isArrowFunctionExpression(node) || t.isFunctionDeclaration(node))) {
    if (t.isJSXElement(node.body) || t.isJSXFragment(node.body)) {
      const childFragment = getChildFragments([node.body])
      if (childFragment) {
        argument = childFragment
        type = childFragment.type
      }
    } else if (t.isBlockStatement(node.body)) {
      // Reverse iterate over the body statements
      const body = [...node.body.body].reverse()
      const findReturn = body.find((bd) => t.isReturnStatement(bd) && type !== 'Identifier')

      if (
        t.isReturnStatement(findReturn) &&
        (t.isJSXElement(findReturn.argument) || t.isJSXFragment(findReturn.argument))
      ) {
        const childFragment = getChildFragments([findReturn.argument])
        if (childFragment) {
          argument = childFragment
          type = childFragment.type
        }
      }
    }

    getNodeParams(node.params)
  }

  // Check if the export type is JSXElement and the opening element's name is JSXIdentifier or JSXMemberExpression
  if (
    type === 'JSXElement' &&
    (t.isJSXIdentifier(argument?.openingElement?.name) ||
      t.isJSXMemberExpression(argument?.openingElement?.name))
  ) {
    return { argument }
  }

  // Return undefined if the export type is not JSXElement
  return undefined
}

/**
 * Extracts SVG component details from the provided node.
 * @param {t.Node} node - The AST node representing the function declaration or variable declarator.
 * @param {SvgComponent["typeExport"]} typeExport - The type of export (function or variable).
 * @returns {Promise<SvgComponent | undefined>} A promise that resolves to the extracted SVG component object or undefined if no SVG component is found.
 */
async function extractSvgComponentFromNode(
  node: t.Node,
  typeExport: SvgComponent['typeExport']
): Promise<SvgComponent | undefined> {
  let component: SvgComponent['component']
  let isAnimated: boolean = false
  let name: string = ''
  let location: SvgComponent['location']

  if (t.isFunctionDeclaration(node) || t.isVariableDeclarator(node)) {
    // Extract the name and location of the function or variable.
    name = (node.id as t.Identifier).name || ''
    location = node.id?.loc?.start

    try {
      // Analyze the export type and check if it's a valid SVG component.
      const nodeAnalyze = analyzeExportType(t.isFunctionDeclaration(node) ? node : node.init)

      if (nodeAnalyze) {
        const SVGComponent = isSVGComponent(nodeAnalyze.argument)
        if (SVGComponent.validate) {
          component = SVGComponent.component
          isAnimated = SVGComponent.isAnimated
        }
      }
    } catch (error) {
      console.error(`Error reading ${typeExport}: ${name}`)
    }
  }

  if (component) {
    return { component, name, location, typeExport, isAnimated, params: properties.get() }
  } else {
    return undefined
  }
}

/**
 * Extract SVG component exports from a file.
 * @param {string} filePath - The file path of the TypeScript/JavaScript file to parse.
 * @returns {Promise<SvgExport>} A promise that resolves to an object containing the extracted SVG component exports.
 */
export async function extractSVGComponentExports(filePath: string): Promise<SvgExport> {
  try {
    // Parse the file content into an AST (Abstract Syntax Tree)
    const ast = parseFileContent(filePath)
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
    return result
  } catch (error) {
    console.error('Error during extraction:', error)
    return { lengthExports: 0, lengthSvg: 0, svgComponents: [] }
  }
}
