import type { FileIdentifier, SVGIconCollection } from '@jt-view-exports-svg/core'
import { IconCollectionKind } from '@jt-view-exports-svg/core'
import * as assert from 'assert'
import * as sinon from 'sinon'
import * as vsc from 'vscode'

import { IconCollectionCache } from '@/services/cache/IconCollectionCache'
import { ConfigRegistry } from '@/services/config/base/ConfigRegistry'
import { IconCollectionConfig } from '@/services/config/IconCollectionConfig'
import { fsAdapter } from '@/test/adapters/fsAdapter'

function makeCtx(): vsc.ExtensionContext {
  return {
    globalStorageUri: vsc.Uri.file('/tmp/test-icon-collection'),
    workspaceState: {
      get: () => undefined,
      update: () => Promise.resolve(),
    },
    subscriptions: { push: sinon.stub() },
  } as unknown as vsc.ExtensionContext
}

function makeWorkspace(name = 'ws'): vsc.WorkspaceFolder {
  return { uri: vsc.Uri.file(`/workspace/${name}`), name, index: 0 }
}

function resetRegistry() {
  ;(ConfigRegistry as unknown as { _instance: null })._instance = null
}

function stubLimits(limits: Partial<Record<IconCollectionKind, number>>) {
  sinon.stub(vsc.workspace, 'getConfiguration').returns({
    inspect: () => ({ workspaceValue: limits }),
    update: sinon.stub().resolves(),
  } as unknown as vsc.WorkspaceConfiguration)
}

function makeIcon(name: string, fileId: string, collection: IconCollectionKind): SVGIconCollection {
  return {
    name,
    location: { id: fileId as FileIdentifier } as SVGIconCollection['location'],
    collection,
  }
}

suite('IconCollectionCache', () => {
  let cache: IconCollectionCache
  let workspace: vsc.WorkspaceFolder

  setup(() => {
    sinon.useFakeTimers()
    sinon.stub(fsAdapter, 'writeFile').resolves()
    sinon.stub(fsAdapter, 'readFile').rejects(new Error('not found'))
    sinon.stub(fsAdapter, 'createDirectory').resolves()
    sinon
      .stub(vsc.workspace, 'onDidChangeConfiguration')
      .returns({ dispose: sinon.stub() } as vsc.Disposable)

    const ctx = makeCtx()
    ConfigRegistry.init({ iconCollection: new IconCollectionConfig() }, ctx)
    cache = new IconCollectionCache(ctx)
    workspace = makeWorkspace()
  })

  teardown(() => {
    sinon.restore()
    resetRegistry()
  })

  test('add enforces limit from iconCollection config', async () => {
    stubLimits({ [IconCollectionKind.RECENT]: 2 })

    await cache.add(workspace, makeIcon('icon-a', 'file-1', IconCollectionKind.RECENT))
    await cache.add(workspace, makeIcon('icon-b', 'file-1', IconCollectionKind.RECENT))
    await cache.add(workspace, makeIcon('icon-c', 'file-1', IconCollectionKind.RECENT))

    const entry = await cache.get([workspace, IconCollectionKind.RECENT])
    assert.strictEqual(entry?.data.length, 2)
    assert.strictEqual(entry?.data[0].name, 'icon-c')
    assert.strictEqual(entry?.data[1].name, 'icon-b')
  })

  test('add does not trim when limit is 0', async () => {
    stubLimits({ [IconCollectionKind.RECENT]: 0 })

    await cache.add(workspace, makeIcon('icon-a', 'file-1', IconCollectionKind.RECENT))
    await cache.add(workspace, makeIcon('icon-b', 'file-1', IconCollectionKind.RECENT))
    await cache.add(workspace, makeIcon('icon-c', 'file-1', IconCollectionKind.RECENT))

    const entry = await cache.get([workspace, IconCollectionKind.RECENT])
    assert.strictEqual(entry?.data.length, 3)
  })

  test('enforces different limits per collection kind', async () => {
    stubLimits({ [IconCollectionKind.RECENT]: 1, [IconCollectionKind.FAVORITE]: 3 })

    await cache.add(workspace, makeIcon('icon-a', 'file-1', IconCollectionKind.RECENT))
    await cache.add(workspace, makeIcon('icon-b', 'file-1', IconCollectionKind.RECENT))
    await cache.add(workspace, makeIcon('icon-a', 'file-1', IconCollectionKind.FAVORITE))
    await cache.add(workspace, makeIcon('icon-b', 'file-1', IconCollectionKind.FAVORITE))
    await cache.add(workspace, makeIcon('icon-c', 'file-1', IconCollectionKind.FAVORITE))
    await cache.add(workspace, makeIcon('icon-d', 'file-1', IconCollectionKind.FAVORITE))

    const recentEntry = await cache.get([workspace, IconCollectionKind.RECENT])
    const favoriteEntry = await cache.get([workspace, IconCollectionKind.FAVORITE])
    assert.strictEqual(recentEntry?.data.length, 1)
    assert.strictEqual(favoriteEntry?.data.length, 3)
  })

  test('defaults to 0 (no trim) for unconfigured collection kind', async () => {
    stubLimits({})

    await cache.add(workspace, makeIcon('icon-a', 'file-1', IconCollectionKind.RECENT))
    await cache.add(workspace, makeIcon('icon-b', 'file-1', IconCollectionKind.RECENT))

    const entry = await cache.get([workspace, IconCollectionKind.RECENT])
    assert.strictEqual(entry?.data.length, 2)
  })
})
