import * as assert from 'assert'
import * as sinon from 'sinon'
import * as vsc from 'vscode'

import { ConfigManager } from '@/services/config/base/ConfigManager'

class TestConfig extends ConfigManager<string> {
  readonly section = 'testSection'
  readonly defaultValue = 'default'
}

class NotifiableConfig extends ConfigManager<boolean> {
  readonly section = 'notifiable'
  readonly defaultValue = false
  readonly notification = { message: 'Changed!' }
}

function makeInspect(workspaceValue?: string, globalValue?: string) {
  return sinon.stub(vsc.workspace, 'getConfiguration').returns({
    inspect: () => ({ workspaceValue, globalValue }),
    update: sinon.stub().resolves(),
  } as unknown as vsc.WorkspaceConfiguration)
}

suite('ConfigManager', () => {
  teardown(() => sinon.restore())

  test('getValue returns workspaceValue when present', () => {
    makeInspect('workspace-val', 'global-val')
    assert.strictEqual(new TestConfig().getValue(), 'workspace-val')
  })

  test('getValue returns globalValue when workspaceValue is undefined', () => {
    makeInspect(undefined, 'global-val')
    assert.strictEqual(new TestConfig().getValue(), 'global-val')
  })

  test('getValue returns defaultValue when both are undefined', () => {
    makeInspect(undefined, undefined)
    assert.strictEqual(new TestConfig().getValue(), 'default')
  })

  test('_invalidate is a no-op by default', () => {
    const config = new TestConfig()
    assert.doesNotThrow(() => config._invalidate())
  })

  test('notification is undefined by default', () => {
    assert.strictEqual(new TestConfig().notification, undefined)
  })

  test('notification is defined when declared', () => {
    assert.deepStrictEqual(new NotifiableConfig().notification, { message: 'Changed!' })
  })
})
