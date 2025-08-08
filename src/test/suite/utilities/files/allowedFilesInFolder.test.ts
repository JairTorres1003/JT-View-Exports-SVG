import * as assert from 'assert'

import { Uri } from 'vscode'

import { testFolderUri } from '../../main.test'

import { allowedFilesInFolder } from '@/utilities/files/allowedFilesInFolder'

suite('allowedFilesInFolder Utility Function', () => {
  test('it should return an array of URIs representing the allowed files', async () => {
    const folderUri = Uri.joinPath(testFolderUri, 'assets')
    const allowedFiles = await allowedFilesInFolder(folderUri)

    assert.ok(Array.isArray(allowedFiles))
    assert.strictEqual(allowedFiles.length, 5)

    const [file1, file2, file3] = allowedFiles

    assert.strictEqual(file1.fsPath, Uri.joinPath(folderUri, 'subfolder', 'test-1.ts').fsPath)
    assert.strictEqual(file1.scheme, 'file')

    assert.strictEqual(file2.fsPath, Uri.joinPath(folderUri, 'subfolder', 'test-2.tsx').fsPath)
    assert.strictEqual(file2.scheme, 'file')

    assert.strictEqual(file3.fsPath, Uri.joinPath(folderUri, 'subfolder', 'test-3.js').fsPath)
    assert.strictEqual(file3.scheme, 'file')
  })
})
