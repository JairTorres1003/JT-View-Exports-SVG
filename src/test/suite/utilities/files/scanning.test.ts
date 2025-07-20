import * as assert from 'node:assert'

import { scanningWorkspace } from '@/utilities/files'

suite('scanningWorkspace Utility Function', () => {
  test('should return a list of all files in the workspace', async () => {
    const files = await scanningWorkspace()
    assert.ok(files.length > 0)
  })
})
