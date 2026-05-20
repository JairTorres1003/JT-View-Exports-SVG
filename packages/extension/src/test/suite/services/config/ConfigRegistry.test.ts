import * as assert from 'assert'
import * as sinon from 'sinon'
import * as vsc from 'vscode'

import { ConfigManager } from '@/services/config/base/ConfigManager'
import { type ConfigMap, ConfigRegistry } from '@/services/config/base/ConfigRegistry'

class TestConfig extends ConfigManager<string> {
  readonly section = 'testSection'
  readonly defaultValue = 'default'
}

function makeContext(): vsc.ExtensionContext {
  return {
    subscriptions: { push: sinon.stub() },
  } as unknown as vsc.ExtensionContext
}

function resetRegistry() {
  ;(ConfigRegistry as unknown as { _instance: null })._instance = null
}

suite('ConfigRegistry', () => {
  setup(() => {
    resetRegistry()
    sinon
      .stub(vsc.workspace, 'onDidChangeConfiguration')
      .returns({ dispose: sinon.stub() } as vsc.Disposable)
  })

  teardown(() => {
    sinon.restore()
    resetRegistry()
  })

  test('getInstance throws before init', () => {
    assert.throws(() => ConfigRegistry.getInstance<ConfigMap>(), /ConfigRegistry not initialized/)
  })

  test('getInstance returns registry after init', () => {
    const configs = { test: new TestConfig() }
    const registry = ConfigRegistry.init(configs, makeContext())

    assert.strictEqual(ConfigRegistry.getInstance<typeof configs>(), registry)
  })

  test('get returns a registered config by key', () => {
    const config = new TestConfig()
    const registry = ConfigRegistry.init({ test: config }, makeContext())

    assert.strictEqual(registry.get('test'), config)
  })

  test('get throws for an unknown key', () => {
    const registry = ConfigRegistry.init({ test: new TestConfig() }, makeContext())

    assert.throws(() => registry.get('missing' as 'test'), /No config found for key: missing/)
  })
})
