import { type UnaryExpression } from '@babel/types'

/**
 * Gets the result of a unary expression.
 *
 * @param operator - The operator of the unary expression.
 * @param value - The value of the unary expression.
 * @returns The result of the unary expression, or undefined if the result cannot be determined.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getUnaryExpression(operator: UnaryExpression['operator'], value: any): any {
  try {
    switch (operator) {
      case '+':
        return +value
      case '-':
        return -value
      case '!':
        // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
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
