/* eslint-disable @typescript-eslint/no-explicit-any */
import { type BinaryExpression } from '@babel/types'

/**
 * Performs a binary expression operation based on the provided operator and the given left and right operands.
 *
 * @param operator The binary expression operator (e.g., "+", "*", "==").
 * @param left The left operand.
 * @param right The right operand.
 * @returns The result of the binary operation or undefined if the operator is not valid.
 */
export function getBinaryExpression(
  operator: BinaryExpression['operator'],
  left: any,
  right: any
): any {
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
