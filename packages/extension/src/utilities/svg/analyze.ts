import * as t from '@babel/types'
import type { ParamsTypes, SVGFile } from '@jt-view-exports-svg/core'
import { isEmpty } from 'lodash'

import { REST_PROPS_KEY } from '@/constants/misc'

import { propertyManager } from '../properties/propertyManager'
import { getPropertyValues } from '../properties/propertyValues'

import { getChildFragments } from './children'

/**
 * Analyzes the parameters of a node and performs certain actions based on the parameter type.
 * @param params - An array of parameters to analyze.
 */
export function getNodeParams(params: Array<t.Identifier | t.Pattern | t.RestElement>): void {
  params.forEach((param) => {
    if (t.isObjectPattern(param) && !isEmpty(param.properties)) {
      param.properties.forEach((property) => {
        if (t.isObjectProperty(property) && t.isIdentifier(property.key)) {
          const { key, value } = property

          propertyManager.set(key.name, getPropertyValues(value, {}))
        } else if (t.isRestElement(property) && t.isIdentifier(property.argument)) {
          propertyManager.set(REST_PROPS_KEY, { [property.argument.name]: {} })
        }
      })
    }
  })
}

/**
 * Recursively analyzes the structure of a given object and returns a mapping of its properties
 * to their types and default values.
 *
 * @param params - An object whose properties and types are to be analyzed.
 * @returns An object describing the types and default values of each property in the input object.
 * For nested objects, the structure is recursively described.
 */
export function getNodeTypes(params: Record<string, unknown>): ParamsTypes {
  const types: ParamsTypes = {}

  Object.entries(params).forEach(([key, value]) => {
    if (REST_PROPS_KEY === key) return

    if (typeof value === 'object' && !isEmpty(value)) {
      types[key] = {
        type: 'object',
        properties: getNodeTypes(value),
        default: value,
      }
    } else {
      types[key] = {
        type: typeof value,
        // biome-ignore lint/suspicious/noExplicitAny: It's a workaround for the type issue
        default: value as any,
      }
    }
  })

  return types
}

/**
 * Analyzes the export type of a function or expression and returns a JSX element if applicable.
 *
 * @param node - The function or expression to analyze.
 * @param params - Optional parameters to set before analyzing the node.
 * @returns The JSX element if the export type is valid, otherwise undefined.
 */
export function analyzeExportType(
  node: t.FunctionDeclaration | t.ArrowFunctionExpression | t.Expression,
  file: SVGFile,
  params?: Record<string, unknown>
): t.JSXElement | undefined {
  if (t.isArrowFunctionExpression(node) || t.isFunctionDeclaration(node)) {
    let element: t.JSXElement | undefined

    if (t.isJSXElement(node.body) || t.isJSXFragment(node.body)) {
      element = getChildFragments([node.body], file)[0]
    } else if (t.isBlockStatement(node.body)) {
      const body = [...node.body.body].reverse()
      const returnStatement = body.find((bd) => t.isReturnStatement(bd))

      if (
        !isEmpty(returnStatement) &&
        (t.isJSXElement(returnStatement.argument) || t.isJSXFragment(returnStatement.argument))
      ) {
        element = getChildFragments([returnStatement.argument], file)[0]
      }
    }

    if (!isEmpty(params)) {
      propertyManager.setAll(params)
    } else {
      getNodeParams(node.params ?? [])
    }

    return element
  }

  return undefined
}
