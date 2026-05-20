import * as assert from 'assert'
import * as sinon from 'sinon'
import { Uri } from 'vscode'

import { allowedFilesInFolder } from '@/services/allowedFilesInFolder'
import * as configModule from '@/services/config'

import { testFolderUri } from '../../../helpers'

function stubIgnoreDirectories(patterns: string[] = []) {
  sinon.stub(configModule, 'getConfig').returns({
    get: (_key: string) => ({ allDirectories: patterns }),
  } as ReturnType<typeof configModule.getConfig>)
}

suite('allowedFilesInFolder Utility Function', () => {
  teardown(() => sinon.restore())

  test('returns URIs for all allowed files in folder', async () => {
    stubIgnoreDirectories([])

    const folderUri = Uri.joinPath(testFolderUri, 'assets')
    const allowedFiles = await allowedFilesInFolder(folderUri)

    assert.ok(Array.isArray(allowedFiles))

    const paths = new Set(allowedFiles.map((f) => f.fsPath))

    assert.ok(paths.has(Uri.joinPath(folderUri, 'subfolder', 'test-1.ts').fsPath))
    assert.ok(paths.has(Uri.joinPath(folderUri, 'subfolder', 'test-2.tsx').fsPath))
    assert.ok(paths.has(Uri.joinPath(folderUri, 'subfolder', 'test-3.js').fsPath))
    assert.ok(paths.has(Uri.joinPath(folderUri, 'test-1.js').fsPath))
    assert.ok(paths.has(Uri.joinPath(folderUri, 'test-2.tsx').fsPath))
  })
})
