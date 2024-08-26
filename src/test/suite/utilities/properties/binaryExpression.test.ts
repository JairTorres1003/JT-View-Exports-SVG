/* eslint-disable @typescript-eslint/no-explicit-any */
import * as assert from 'assert'

import { type BinaryExpression } from '@babel/types'

import { getBinaryExpression } from '@/utilities/properties/binaryExpression'

interface OperatorTest {
  /**
   * The binary operator.
   */
  operator: BinaryExpression['operator']
  /**
   * The left operand.
   */
  left: any
  /**
   * The right operand.
   */
  right: any
  /**
   * The expected result of the binary expression.
   */
  result: any
}

/**
 * Array of OperatorTest objects representing various binary expressions and their expected results.
 */
const operatorsTest: OperatorTest[] = [
  { operator: '+', left: 2, right: 3, result: 5 },
  { operator: '-', left: 5, right: 3, result: 2 },
  { operator: '/', left: 10, right: 2, result: 5 },
  { operator: '%', left: 10, right: 3, result: 1 },
  { operator: '*', left: 2, right: 3, result: 6 },
  { operator: '**', left: 2, right: 3, result: 8 },
  { operator: '&', left: 2, right: 3, result: 2 },
  { operator: '|', left: 2, right: 3, result: 3 },
  { operator: '>>', left: 2, right: 3, result: 0 },
  { operator: '>>>', left: 2, right: 3, result: 0 },
  { operator: '<<', left: 2, right: 3, result: 16 },
  { operator: '^', left: 2, right: 3, result: 1 },
  { operator: '==', left: 2, right: 3, result: false },
  { operator: '===', left: 2, right: 3, result: false },
  { operator: '!=', left: 2, right: 3, result: true },
  { operator: '!==', left: 2, right: 3, result: true },
  { operator: 'in', left: 'a', right: { a: 1 }, result: true },
  { operator: '>', left: 2, right: 3, result: false },
  { operator: '<', left: 2, right: 3, result: true },
  { operator: '>=', left: 2, right: 3, result: false },
  { operator: '<=', left: 2, right: 3, result: true },
  { operator: 'in', left: 2, right: 3, result: undefined },
]

suite('Binary Expression Utility', () => {
  test('it should perform a binary expression operation', (done) => {
    operatorsTest.forEach((test) => {
      const result = getBinaryExpression(test.operator, test.left, test.right)

      assert.strictEqual(
        result,
        test.result,
        `Expected ${test.result} but got ${result} for operator (${test.operator})`
      )
    })

    done()
  })
})
