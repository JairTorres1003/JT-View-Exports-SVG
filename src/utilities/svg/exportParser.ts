import * as t from '@babel/types'
import { camelCase } from 'lodash'

import { REST_PROPS_KEY } from '../../constants/misc'
import { SVG_TAGS } from '../../constants/svgTags'
import {
  type ChildAttributesResponse,
  type ComponentNameResponse,
  type ExportType,
  type ExportTypeNode,
  type IsSVGComponent,
} from '../../interfaces/exportParser'
import {
  type HasInvalidChild,
  type SvgComponent,
  type SvgComponentDetails,
} from '../../interfaces/svgExports'

import { propertyManager } from './propertyManager'
import { getPropertyValues } from './propertyValues'
import { setProperties } from './setProperties'

// Declaration properties
const properties = propertyManager

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
      const props = setProperties(openingElement.attributes, properties.get())

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
    const svgProps = setProperties(openingElement.attributes, properties.get())

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
    params.forEach((param) => {
      if (t.isObjectPattern(param) && param.properties) {
        param.properties.forEach((property) => {
          // Add the property to the properties object
          if (t.isObjectProperty(property) && t.isIdentifier(property.key)) {
            const { key, value } = property

            properties.set(key.name, getPropertyValues(value, {}))
          } else if (t.isRestElement(property) && t.isIdentifier(property.argument)) {
            properties.set(REST_PROPS_KEY, { [property.argument.name]: {} })
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
function analyzeExportType(
  node: ExportTypeNode,
  customParams?: Record<string, any>
): ExportType | undefined {
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

    // Extract properties from the parameters array
    if (customParams && Object.keys(customParams).length > 0) {
      properties.setAll(customParams)
    } else {
      getNodeParams(node.params)
    }
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
export async function extractSvgComponentFromNode(
  node: t.Node,
  typeExport: SvgComponent['typeExport'],
  customParams?: Record<string, any>
): Promise<SvgComponent | undefined> {
  let component: SvgComponent['component']
  let isAnimated: boolean = false
  let name: string = ''
  let location: SvgComponent['location'] = { start: undefined, end: undefined }

  if (t.isFunctionDeclaration(node) || t.isVariableDeclarator(node)) {
    // Extract the name and location of the function or variable.
    name = (node.id as t.Identifier).name || ''
    location = { start: node.loc?.start, end: node.loc?.end }

    try {
      // Analyze the export type and check if it's a valid SVG component.
      const nodeAnalyze = analyzeExportType(
        t.isFunctionDeclaration(node) ? node : node.init,
        customParams
      )

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
