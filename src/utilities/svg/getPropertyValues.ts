import * as t from '@babel/types'
import { camelCase } from 'lodash'

import { type Value } from '../../interfaces/exportParser'
import { defaultProps } from '../../constants/defaultProps'

/**
 * Performs a unary expression operation based on the provided operator and given value.
 * @param operator The unary expression operator (e.g., "!", "-", "typeof").
 * @param value The value on which the operation will be applied.
 * @returns The result of the unary operation or undefined if the operator is not valid.
 */
function getUnaryExpression(operator: t.UnaryExpression['operator'], value: any) {
  try {
    switch (operator) {
      case '+':
        return +value
      case '-':
        return -value
      case '!':
        return !value
      case '~':
        return ~value
      case 'typeof':
        return typeof value
      default:
        return undefined
    }
  } catch (error) {
    return undefined
  }
}

/**
 * Performs a binary expression operation based on the provided operator and the given left and right operands.
 * @param operator The binary expression operator (e.g., "+", "*", "==").
 * @param left The left operand.
 * @param right The right operand.
 * @returns The result of the binary operation or undefined if the operator is not valid.
 */
function getBinaryExpression(operator: t.BinaryExpression['operator'], left: any, right: any) {
  try {
    switch (operator) {
      case '+':
        return left + right
      case '-':
        return left - right
      case '/':
        return left / right
      case '%':
        return left % right
      case '*':
        return left * right
      case '**':
        return left ** right
      case '&':
        return left & right
      case '|':
        return left | right
      case '>>':
        return left >> right
      case '>>>':
        return left >>> right
      case '<<':
        return left << right
      case '^':
        return left ^ right
      case '==':
      case '===':
        return left === right
      case '!=':
      case '!==':
        return left !== right
      case 'in':
        return left in right
      case '>':
        return left > right
      case '<':
        return left < right
      case '>=':
        return left >= right
      case '<=':
        return left <= right
      default:
        return undefined
    }
  } catch (error) {
    return undefined
  }
}

/**
 * Performs a logical expression operation based on the provided operator and the given left and right operands.
 * @param operator The logical expression operator (e.g., "||", "&&", "??").
 * @param left The left operand.
 * @param right The right operand.
 * @returns The result of the logical operation or undefined if the operator is not valid.
 */
function getLogicalExpression(operator: t.LogicalExpression['operator'], left: any, right: any) {
  try {
    switch (operator) {
      case '||':
        return left || right
      case '&&':
        return left && right
      case '??':
        return left ?? right
      default:
        break
    }
  } catch (error) {
    return undefined
  }
}

/**
 * Extracts property values from a given value node.
 * @param {Value} value - The value node to extract the property from.
 * @param {ExportType["properties"]} properties - An object containing properties from the export type.
 * @returns {any | undefined} The extracted property value, or undefined if the value node type is not recognized.
 */
export function getPropertyValues(value: Value, properties: Record<string, any>): any | undefined {
  if (!value) {
    return
  }

  let argument: any
  let left: any
  let right: any
  let objectProps: Record<string, any> = {}
  let arrayProps: any[] = []
  let conditionValue: boolean

  switch (value.type) {
    case 'NumericLiteral':
    case 'BooleanLiteral':
    case 'StringLiteral':
      return value.value
    case 'Identifier':
      return properties[value.name] || defaultProps[value.name]
    case 'JSXExpressionContainer':
      return getPropertyValues(value.expression, properties)
    case 'AssignmentPattern':
      return getPropertyValues(value.right, properties)
    case 'UnaryExpression':
      argument = getPropertyValues(value.argument, properties)

      return getUnaryExpression(value.operator, argument)
    case 'BinaryExpression':
      left = getPropertyValues(value.left, properties)
      right = getPropertyValues(value.right, properties)

      return getBinaryExpression(value.operator, left, right)
    case 'LogicalExpression':
      left = getPropertyValues(value.left, properties)
      right = getPropertyValues(value.right, properties)

      return getLogicalExpression(value.operator, left, right)
    case 'ObjectExpression':
      objectProps = {}

      value.properties.forEach((property) => {
        if (t.isObjectProperty(property) && t.isIdentifier(property.key)) {
          const propKey = camelCase(property.key.name || '')
          objectProps[propKey] = getPropertyValues(property.value, properties)
        } else if (t.isSpreadElement(property)) {
          objectProps = { ...objectProps, ...getPropertyValues(property.argument, properties) }
        }
      })

      return objectProps
    case 'ArrayExpression':
      arrayProps = []

      value.elements.forEach((element) => {
        if (t.isSpreadElement(element)) {
          arrayProps.push(...getPropertyValues(element.argument, properties))
        } else {
          arrayProps.push(getPropertyValues(element, properties))
        }
      })

      return arrayProps
    case 'TemplateLiteral':
      return value.quasis.reduce((acc, quasi, i) => {
        acc += quasi.value.raw
        if (i < value.expressions.length) {
          acc += getPropertyValues(value.expressions[i], properties)
        }
        return acc
      }, '')
    case 'MemberExpression':
      if (t.isIdentifier(value.property)) {
        const objectValue = getPropertyValues(value.object, properties)

        if (objectValue && typeof objectValue === 'object') {
          const propertyName = value.property.name
          if (propertyName in objectValue) {
            return objectValue[propertyName]
          }
        }
      }
      return undefined
    case 'ConditionalExpression':
      conditionValue = getPropertyValues(value.test, properties)
      left = getPropertyValues(value.consequent, properties)
      right = getPropertyValues(value.alternate, properties)

      return conditionValue ? left : right
    default:
      return undefined
  }
}
