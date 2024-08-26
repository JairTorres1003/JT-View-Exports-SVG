import * as t from '@babel/types'
import { isEmpty } from 'lodash'

import { getPropertyValues, propertyManager } from '../properties'

import { getChildFragments } from './children'

import { REST_PROPS_KEY } from '@/constants/misc'

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
 * Analyzes the export type of a function or expression and returns a JSX element if applicable.
 *
 * @param node - The function or expression to analyze.
 * @param params - Optional parameters to set before analyzing the node.
 * @returns The JSX element if the export type is valid, otherwise undefined.
 */
export function analyzeExportType(
  node: t.FunctionDeclaration | t.ArrowFunctionExpression | t.Expression,
  params?: Record<string, unknown>
): t.JSXElement | undefined {
  if (t.isArrowFunctionExpression(node) || t.isFunctionDeclaration(node)) {
    let element: t.JSXElement | undefined

    if (t.isJSXElement(node.body) || t.isJSXFragment(node.body)) {
      element = getChildFragments([node.body])
    } else if (t.isBlockStatement(node.body)) {
      const body = [...node.body.body].reverse()
      const returnStatement = body.find((bd) => t.isReturnStatement(bd))

      if (
        !isEmpty(returnStatement) &&
        (t.isJSXElement(returnStatement.argument) || t.isJSXFragment(returnStatement.argument))
      ) {
        element = getChildFragments([returnStatement.argument])
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
