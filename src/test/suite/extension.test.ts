import * as assert from 'node:assert'

import * as extension from '@/extension'

suite('Start extension', () => {
  test('it should be present extension', () => {
    assert.ok(extension)
  })

  test('it should activate', () => {
    assert.ok(extension.activate)
  })

  test('it should deactivate', () => {
    assert.ok(extension.deactivate)
  })
})
