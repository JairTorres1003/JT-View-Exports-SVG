import * as assert from 'node:assert'
import * as path from 'node:path'

import { Uri } from 'vscode'

import { testFolderUri } from '../../main.test'

import type { SVGFile } from '@/types/ViewExportsSVG'
import { svgFileToUri } from '@/utilities/vscode/uri'

suite('URI Utility', () => {
  const basename = 'test-2.tsx'
  const file = Uri.joinPath(testFolderUri, 'assets', basename).fsPath

  test('it should convert an SVGFile to a Uri', () => {
    const svgFile: SVGFile = {
      absolutePath: file,
      basename,
      dirname: path.dirname(file),
      relativePath: path.relative(testFolderUri.fsPath, file),
      language: 'typescript',
    }

    const result = svgFileToUri(svgFile)

    assert.strictEqual(result.fsPath, file)
  })

  test('it should convert an SVGFile to a Uri with a workspace path', () => {
    const svgFile: SVGFile = {
      absolutePath: '',
      basename,
      dirname: path.dirname(file),
      relativePath: path.relative(testFolderUri.fsPath, file),
    }

    const result = svgFileToUri(svgFile)

    assert.strictEqual(result.fsPath, file)
  })

  test('it should convert an SVGFile to a Uri with a workspace path (no relative path)', () => {
    const svgFile: SVGFile = {
      absolutePath: '',
      basename,
      dirname: path.dirname(file),
      relativePath: '',
    }

    const result = svgFileToUri(svgFile)

    assert.strictEqual(result.fsPath, file)
  })
})
