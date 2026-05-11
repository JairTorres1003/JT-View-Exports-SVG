import { IconCollectionKind } from '@jt-view-exports-svg/core'
import * as assert from 'assert'
import * as sinon from 'sinon'
import * as vsc from 'vscode'

import { IconCollectionConfig } from '@/services/config/IconCollectionConfig'

function stubGetConfiguration(workspaceValue?: unknown, globalValue?: unknown) {
  return sinon.stub(vsc.workspace, 'getConfiguration').returns({
    inspect: () => ({ workspaceValue, globalValue }),
    update: sinon.stub().resolves(),
  } as unknown as vsc.WorkspaceConfiguration)
}

suite('IconCollectionConfig', () => {
  teardown(() => sinon.restore())

  test('section is "iconCollection"', () => {
    assert.strictEqual(new IconCollectionConfig().section, 'iconCollection')
  })

  test('defaultValue is { recent: 10, favorite: 10 }', () => {
    assert.deepStrictEqual(new IconCollectionConfig().defaultValue, {
      [IconCollectionKind.RECENT]: 10,
      [IconCollectionKind.FAVORITE]: 10,
    })
  })

  test('getValue returns defaultValue when no workspace or global override', () => {
    stubGetConfiguration(undefined, undefined)
    assert.deepStrictEqual(new IconCollectionConfig().getValue(), {
      [IconCollectionKind.RECENT]: 10,
      [IconCollectionKind.FAVORITE]: 10,
    })
  })

  test('getValue returns workspaceValue when present', () => {
    const override = { [IconCollectionKind.RECENT]: 5, [IconCollectionKind.FAVORITE]: 0 }
    stubGetConfiguration(override, undefined)
    assert.deepStrictEqual(new IconCollectionConfig().getValue(), override)
  })

  test('getValue returns globalValue when workspaceValue is absent', () => {
    const override = { [IconCollectionKind.RECENT]: 20 }
    stubGetConfiguration(undefined, override)
    assert.deepStrictEqual(new IconCollectionConfig().getValue(), override)
  })
})
