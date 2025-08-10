import * as assert from 'assert'
import * as fs from 'fs'
import * as path from 'path'

import * as sinon from 'sinon'
import { Uri, window } from 'vscode'

import { testFolderUri } from '../../main.test'

import type { SVGFile } from '@/types/ViewExportsSVG'
import {
  getFileTimestamp,
  getLanguageFromFile,
  pathToSVGFile,
  openFile,
} from '@/utilities/files/misc'

suite('getFileTimestamp Utility Function', () => {
  const folderUri = Uri.joinPath(testFolderUri, 'assets')
  let statSyncStub: sinon.SinonStub | undefined = undefined

  setup(() => {
    statSyncStub = sinon.stub(fs, 'statSync')
  })

  teardown(() => {
    statSyncStub?.restore()
  })

  test('it should return the last modification timestamp of a file', async () => {
    const filePath1 = Uri.joinPath(folderUri, 'test-1.js').fsPath
    const expectedTimestamp1 = 1754596807997
    const timestamp = await getFileTimestamp(filePath1)

    statSyncStub?.withArgs(filePath1).returns({ mtime: { getTime: () => expectedTimestamp1 } })
    assert.strictEqual(timestamp, expectedTimestamp1)
  })

  test('it should return 0 if the file does not exist', async () => {
    const filePath2 = Uri.joinPath(folderUri, 'nonexistent.ts').fsPath
    const timestamp = await getFileTimestamp(filePath2)

    statSyncStub?.withArgs(filePath2).throws(new Error('File not found'))
    assert.strictEqual(timestamp, 0)
  })
})

suite('getLanguageFromFile Utility Function', () => {
  const file1 = Uri.joinPath(testFolderUri, 'assets', 'subfolder', 'test-2.tsx').fsPath
  const file2 = Uri.joinPath(testFolderUri, 'assets', 'subfolder', 'test-3.js').fsPath

  test('it should return the language of a file based on its extension 1', async () => {
    assert.strictEqual(await getLanguageFromFile(Uri.file(file1)), 'typescriptreact')
  })

  test('it should return the language of a file based on its extension 2', async () => {
    assert.strictEqual(await getLanguageFromFile(Uri.file(file2)), 'javascript')
  })
})

suite('pathToSVGFile Utility Function', () => {
  const basename = 'test-2.tsx'
  const tempFile = Uri.joinPath(testFolderUri, 'assets', 'subfolder', basename).fsPath

  const relativePath = path.relative(testFolderUri.fsPath, tempFile)
  const expectedSVGFile: SVGFile = {
    uri: `file://${tempFile}`,
    absolutePath: tempFile,
    basename,
    dirname: path.dirname(tempFile),
    relativePath,
    language: 'typescriptreact',
    isTemporary: false,
    extension: 'tsx',
  }

  test('it should convert an absolute file path to an SVGFile object', async () => {
    assert.deepStrictEqual(await pathToSVGFile(tempFile), expectedSVGFile)
  })

  test('it should convert a relative file path to an SVGFile object', async () => {
    assert.deepStrictEqual(await pathToSVGFile(relativePath), expectedSVGFile)
  })
})

suite('openFile Utility Function', () => {
  const basename = 'test-1.js'
  const currentFile = Uri.joinPath(testFolderUri, 'assets', basename).fsPath

  const file: SVGFile = {
    uri: `file://${currentFile}`,
    absolutePath: currentFile,
    basename,
    dirname: path.dirname(currentFile),
    relativePath: path.relative(testFolderUri.fsPath, currentFile),
    isTemporary: false,
    extension: 'js',
  }

  openFile({ file, position: { column: 14, line: 43, index: 3 } })

  test('it should open a file in the editor at the specified position', () => {
    const editor = window.activeTextEditor

    assert.strictEqual(editor?.document.fileName, currentFile)
  })
})
