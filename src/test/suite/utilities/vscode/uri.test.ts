import * as assert from 'assert'
import * as path from 'path'

import { Uri } from 'vscode'

import type { SVGFile } from '@/types/ViewExportsSVG'
import { svgFileToUri } from '@/utilities/vscode/uri'

import { testFolderUri } from '../../main.test'

suite('URI Utility', () => {
  const basename = 'test-2.tsx'
  const file = Uri.joinPath(testFolderUri, 'assets', basename).fsPath

  test('it should convert an SVGFile to a Uri', () => {
    const svgFile: SVGFile = {
      uri: `file://${file}`,
      absolutePath: file,
      basename,
      extension: 'tsx',
      dirname: path.dirname(file),
      relativePath: path.relative(testFolderUri.fsPath, file),
      language: 'typescript',
      isTemporary: false,
    }

    const result = svgFileToUri(svgFile)

    assert.strictEqual(result.fsPath, file)
  })

  test('it should convert an SVGFile to a Uri with a workspace path', () => {
    const svgFile: SVGFile = {
      uri: `file://${file}`,
      absolutePath: '',
      basename,
      extension: 'tsx',
      dirname: path.dirname(file),
      relativePath: path.relative(testFolderUri.fsPath, file),
      isTemporary: false,
    }

    const result = svgFileToUri(svgFile)

    assert.strictEqual(result.fsPath, file)
  })

  test('it should convert an SVGFile to a Uri with a workspace path (no relative path)', () => {
    const svgFile: SVGFile = {
      uri: `file://${file}`,
      absolutePath: '',
      basename,
      dirname: path.dirname(file),
      extension: 'tsx',
      relativePath: '',
      isTemporary: false,
    }

    const result = svgFileToUri(svgFile)

    assert.strictEqual(result.fsPath, file)
  })
})
