import type { FileIdentifier, SVGFile } from '@jt-view-exports-svg/core'
import * as assert from 'assert'
import * as sinon from 'sinon'
import * as vsc from 'vscode'

import { FilesCache } from '@/services/cache/FilesCache'
import { fsAdapter } from '@/test/adapters/fsAdapter'

function makeCtx(): vsc.ExtensionContext {
  return {
    globalStorageUri: vsc.Uri.file('/tmp/test-cache'),
    workspaceState: {
      get: () => undefined,
      update: () => Promise.resolve(),
    },
  } as unknown as vsc.ExtensionContext
}

function makeWorkspace(name = 'ws'): vsc.WorkspaceFolder {
  return {
    uri: vsc.Uri.file(`/workspace/${name}`),
    name,
    index: 0,
  }
}

function makeFile(id: string, lastModified = 1000): SVGFile {
  return {
    id: `file-${id}` as FileIdentifier,
    uri: `/workspace/src/${id}.tsx`,
    absolutePath: `/workspace/src/${id}.tsx`,
    relativePath: `src/${id}.tsx`,
    basename: `${id}.tsx`,
    extension: '.tsx',
    dirname: '/workspace/src',
    isTemporary: false,
    lastModified,
  }
}

suite('FilesCache', () => {
  let cache: FilesCache
  let workspace: vsc.WorkspaceFolder

  setup(() => {
    sinon.stub(fsAdapter, 'writeFile').resolves()
    sinon.stub(fsAdapter, 'readFile').rejects(new Error('not found'))
    sinon.stub(fsAdapter, 'createDirectory').resolves()
    cache = new FilesCache(makeCtx())
    workspace = makeWorkspace()
  })

  teardown(() => sinon.restore())

  test('upsert stores a file and getFile retrieves it', async () => {
    const file = makeFile('icon-a')
    await cache.upsert(workspace, file)
    const result = await cache.getFile(workspace, file.id)
    assert.deepStrictEqual(result, file)
  })

  test('getFile returns undefined for unknown id', async () => {
    const result = await cache.getFile(workspace, 'file-unknown' as FileIdentifier)
    assert.strictEqual(result, undefined)
  })

  test('isStale returns true when file not in cache', async () => {
    const file = makeFile('icon-b')
    const stale = await cache.isStale(workspace, file)
    assert.strictEqual(stale, true)
  })

  test('isStale returns false when cached lastModified equals file lastModified', async () => {
    const file = makeFile('icon-c', 5000)
    await cache.upsert(workspace, file)
    const stale = await cache.isStale(workspace, file)
    assert.strictEqual(stale, false)
  })

  test('isStale returns true when file is newer than cached entry', async () => {
    const old = makeFile('icon-d', 1000)
    await cache.upsert(workspace, old)
    const updated = makeFile('icon-d', 9999)
    const stale = await cache.isStale(workspace, updated)
    assert.strictEqual(stale, true)
  })

  test('removeByIds removes specified files', async () => {
    const fileA = makeFile('icon-e')
    const fileB = makeFile('icon-f')
    await cache.upsert(workspace, fileA)
    await cache.upsert(workspace, fileB)
    await cache.removeByIds(workspace, [fileA.id])
    assert.strictEqual(await cache.getFile(workspace, fileA.id), undefined)
    assert.deepStrictEqual(await cache.getFile(workspace, fileB.id), fileB)
  })

  test('pruneUnreferenced removes entries not in referencedIds', async () => {
    const fileA = makeFile('icon-g')
    const fileB = makeFile('icon-h')
    await cache.upsert(workspace, fileA)
    await cache.upsert(workspace, fileB)
    await cache.pruneUnreferenced(workspace, [fileB.id])
    assert.strictEqual(await cache.getFile(workspace, fileA.id), undefined)
    assert.deepStrictEqual(await cache.getFile(workspace, fileB.id), fileB)
  })

  test('upsert and getFile work with global scope', async () => {
    const file = makeFile('icon-global')
    await cache.upsert('global', file)
    const result = await cache.getFile('global', file.id)
    assert.deepStrictEqual(result, file)
  })

  test('global scope is isolated from workspace scope', async () => {
    const file = makeFile('icon-iso')
    await cache.upsert('global', file)
    const result = await cache.getFile(workspace, file.id)
    assert.strictEqual(result, undefined)
  })
})
