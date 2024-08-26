import * as assert from 'assert'

import { type UnaryExpression } from '@babel/types'

import { getUnaryExpression } from '@/utilities/properties/unaryExpression'

suite('Unary Expression Utility', () => {
  test('it should return the result of a unary expression with the "+" operator', () => {
    assert.strictEqual(getUnaryExpression('+', 5), 5)
    assert.strictEqual(getUnaryExpression('+', -10), -10)
    assert.strictEqual(getUnaryExpression('+', '5'), 5)
  })

  test('it should return the result of a unary expression with the "-" operator', () => {
    assert.strictEqual(getUnaryExpression('-', 5), -5)
    assert.strictEqual(getUnaryExpression('-', -10), 10)
    assert.strictEqual(getUnaryExpression('-', 'abc'), NaN)
  })

  test('it should return the result of a unary expression with the "!" operator', () => {
    assert.strictEqual(getUnaryExpression('!', true), false)
    assert.strictEqual(getUnaryExpression('!', false), true)
    assert.strictEqual(getUnaryExpression('!', 0), true)
  })

  test('it should return the result of a unary expression with the "~" operator', () => {
    assert.strictEqual(getUnaryExpression('~', 5), -6)
    assert.strictEqual(getUnaryExpression('~', -10), 9)
    assert.strictEqual(getUnaryExpression('~', '5'), -6)
  })

  test('it should return the result of a unary expression with the "typeof" operator', () => {
    assert.strictEqual(getUnaryExpression('typeof', 5), 'number')
    assert.strictEqual(getUnaryExpression('typeof', 'hello'), 'string')
    assert.strictEqual(getUnaryExpression('typeof', true), 'boolean')
  })

  test('it should return undefined for unknown operators', () => {
    assert.strictEqual(getUnaryExpression('*' as UnaryExpression['operator'], 5), undefined)
    assert.strictEqual(getUnaryExpression('?' as UnaryExpression['operator'], 'hello'), undefined)
  })
})
