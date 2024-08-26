/* eslint-disable @typescript-eslint/no-explicit-any */
import { type LogicalExpression } from '@babel/types'

/**
 * Performs a logical expression operation based on the provided operator and the given left and right operands.
 *
 * @param operator The logical expression operator (e.g., "||", "&&", "??").
 * @param left The left operand.
 * @param right The right operand.
 * @returns The result of the logical operation or undefined if the operator is not valid.
 */
export function getLogicalExpression(
  operator: LogicalExpression['operator'],
  left: any,
  right: any
): any {
  try {
    switch (operator) {
      case '||':
        // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
        return left || right
      case '&&':
        // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
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
