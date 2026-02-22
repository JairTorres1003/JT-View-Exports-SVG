/* biome-ignore-all lint/suspicious/noExplicitAny: This function is designed to handle various types of inputs, including numbers, strings, and booleans. */
import type { LogicalExpression } from '@babel/types'

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
        return left || right
      case '&&':
        return left && right
      case '??':
        return left ?? right
    }
  } catch {
    return undefined
  }
}
