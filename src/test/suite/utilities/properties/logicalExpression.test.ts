import * as assert from 'node:assert'

import type { LogicalExpression } from '@babel/types'

import { getLogicalExpression } from '@/utilities/properties/logicalExpression'

suite('Logical Expression Utility', () => {
  test('it should return the result of logical OR operation', () => {
    assert.strictEqual(getLogicalExpression('||', true, false), true)
    assert.strictEqual(getLogicalExpression('||', false, false), false)
    assert.strictEqual(getLogicalExpression('||', false, true), true)
  })

  test('it should return the result of logical AND operation', () => {
    assert.strictEqual(getLogicalExpression('&&', true, false), false)
    assert.strictEqual(getLogicalExpression('&&', true, true), true)
    assert.strictEqual(getLogicalExpression('&&', false, false), false)
  })

  test('it should return the result of nullish coalescing operation', () => {
    assert.strictEqual(getLogicalExpression('??', null, 'default'), 'default')
    assert.strictEqual(getLogicalExpression('??', undefined, 'default'), 'default')
    assert.strictEqual(getLogicalExpression('??', 'value', 'default'), 'value')
  })

  test('it should return undefined for invalid operators', () => {
    assert.strictEqual(
      getLogicalExpression('+' as LogicalExpression['operator'], true, false),
      undefined
    )
    assert.strictEqual(
      getLogicalExpression('-' as LogicalExpression['operator'], true, true),
      undefined
    )
    assert.strictEqual(
      getLogicalExpression('*' as LogicalExpression['operator'], false, false),
      undefined
    )
  })
})
