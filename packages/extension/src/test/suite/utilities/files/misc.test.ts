import type { FileIdentifier, SVGFile } from '@jt-view-exports-svg/core'
import * as assert from 'assert'
import * as path from 'path'
import * as sinon from 'sinon'
import * as vsc from 'vscode'

import {
  getFileTimestamp,
  getLanguageFromExtension,
  openFile,
  pathToSVGFile,
} from '@/utilities/files/misc'
import { matchesPattern } from '@/utilities/misc'

import { testFolderUri } from '../../../helpers'

suite('getFileTimestamp', () => {
  teardown(() => sinon.restore())

  test('returns mtime for an existing file', async () => {
    const fileUri = vsc.Uri.joinPath(testFolderUri, 'assets', 'test-1.js')
    const result = await getFileTimestamp(fileUri)
    assert.ok(typeof result === 'number' && result > 0)
  })

  test('returns 0 when file does not exist', async () => {
    const fileUri = vsc.Uri.joinPath(testFolderUri, 'assets', 'nonexistent.ts')
    const result = await getFileTimestamp(fileUri)
    assert.strictEqual(result, 0)
  })
})

suite('getLanguageFromExtension', () => {
  test('returns "javascript" for .js', () => {
    assert.strictEqual(getLanguageFromExtension('.js'), 'javascript')
  })

  test('returns "javascriptreact" for .jsx', () => {
    assert.strictEqual(getLanguageFromExtension('.jsx'), 'javascriptreact')
  })

  test('returns "typescript" for .ts', () => {
    assert.strictEqual(getLanguageFromExtension('.ts'), 'typescript')
  })

  test('returns "typescriptreact" for .tsx', () => {
    assert.strictEqual(getLanguageFromExtension('.tsx'), 'typescriptreact')
  })

  test('returns "unknown" for unrecognized extension', () => {
    assert.strictEqual(getLanguageFromExtension('.py'), 'unknown')
  })
})

suite('pathToSVGFile', () => {
  const basename = 'test-2.tsx'
  const tempUri = vsc.Uri.joinPath(testFolderUri, 'assets', 'subfolder', basename)

  test('returns SVGFile with correct structural fields', async () => {
    const result = await pathToSVGFile(tempUri.fsPath)
    assert.strictEqual(result.basename, basename)
    assert.strictEqual(result.extension, 'tsx')
    assert.strictEqual(result.language, 'typescriptreact')
    assert.strictEqual(result.absolutePath, tempUri.fsPath)
    assert.strictEqual(result.isTemporary, false)
    assert.ok(/^file-/.test(result.id), `id should start with "file-", got: ${result.id}`)
    assert.ok(typeof result.lastModified === 'number', 'lastModified should be a number')
  })

  test('relativePath is not absolute', async () => {
    const result = await pathToSVGFile(tempUri.fsPath)
    assert.ok(!path.isAbsolute(result.relativePath), 'relativePath should not be absolute')
  })
})

suite('openFile', () => {
  const basename = 'test-1.js'
  const currentFile = vsc.Uri.joinPath(testFolderUri, 'assets', basename).fsPath

  const file: SVGFile = {
    id: 'file-test' as FileIdentifier,
    uri: `file://${currentFile}`,
    absolutePath: currentFile,
    basename,
    dirname: path.dirname(currentFile),
    relativePath: path.relative(testFolderUri.fsPath, currentFile),
    isTemporary: false,
    extension: 'js',
    lastModified: 0,
  }

  test('opens file in editor at specified position', async () => {
    await openFile(file, { column: 14, line: 43, index: 3 })
    const editor = vsc.window.activeTextEditor
    assert.strictEqual(editor?.document.fileName, currentFile)
  })
})

suite('matchesPattern', () => {
  test('returns true when path matches a ** glob pattern', () => {
    assert.strictEqual(matchesPattern(['**/node_modules'], '/project/node_modules/'), true)
  })

  test('returns false when path does not match any pattern', () => {
    assert.strictEqual(matchesPattern(['**/node_modules', '**/dist'], '/project/src/'), false)
  })

  test('returns true when path matches any of multiple patterns', () => {
    assert.strictEqual(matchesPattern(['**/dist', '**/.git'], '/project/.git/'), true)
  })

  test('returns false for empty patterns array', () => {
    assert.strictEqual(matchesPattern([], '/project/node_modules/'), false)
  })

  test('returns true with trailing path separator stripped', () => {
    assert.strictEqual(matchesPattern(['**/coverage'], '/project/coverage/'), true)
  })
})
