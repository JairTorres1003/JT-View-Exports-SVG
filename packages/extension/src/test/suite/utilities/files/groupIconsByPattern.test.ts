import type { ViewExportSVG } from '@jt-view-exports-svg/core'
import * as assert from 'assert'
import * as sinon from 'sinon'

import * as configModule from '@/services/config'
import { groupIconsByPattern } from '@/utilities/files/groupIconsByPattern'

function stubPatterns(patterns: Record<string, string>) {
  sinon.stub(configModule, 'getConfig').returns({
    get: (_key: string) => ({ patternsArray: Object.entries(patterns) }),
  } as ReturnType<typeof configModule.getConfig>)
}

function makeExport(label: string): ViewExportSVG {
  return {
    components: [],
    groupKind: { id: label, label },
    totalExports: 1,
    totalNoExports: 0,
    totalSVG: 1,
    files: [label as never],
    isShowNoExports: false,
  }
}

suite('groupIconsByPattern', () => {
  teardown(() => sinon.restore())

  test('returns ungrouped exports unchanged when no patterns configured', () => {
    stubPatterns({})
    const input = [makeExport('Button.tsx'), makeExport('Icon.tsx')]
    const result = groupIconsByPattern(input)
    assert.strictEqual(result.length, 2)
  })

  test('basename pattern *.tsx matches file anywhere in the path', () => {
    stubPatterns({ '*.tsx': 'TypeScript Icons' })
    const input = [makeExport('src/components/Button.tsx')]
    const result = groupIconsByPattern(input)
    assert.strictEqual(result.length, 1)
    assert.strictEqual(result[0].groupKind.label, 'TypeScript Icons')
  })

  test('*on*.jsx matches basename containing "on" from a nested path', () => {
    stubPatterns({ '*on*.jsx': 'JS Icons' })
    const input = [makeExport('src/icons/Button.jsx'), makeExport('src/icons/Action.jsx')]
    const result = groupIconsByPattern(input)
    assert.strictEqual(result.length, 1)
    assert.strictEqual(result[0].groupKind.label, 'JS Icons')
    assert.strictEqual(result[0].totalExports, 2)
  })

  test('* as catch-all groups every file into one group', () => {
    stubPatterns({ '*': 'All Icons' })
    const input = [makeExport('src/Button.tsx'), makeExport('src/Icon.jsx')]
    const result = groupIconsByPattern(input)
    assert.strictEqual(result.length, 1)
    assert.strictEqual(result[0].groupKind.label, 'All Icons')
    assert.strictEqual(result[0].totalExports, 2)
  })

  test('folder segment pattern icons/** groups only matching paths', () => {
    stubPatterns({ 'icons/**': 'Icons Folder' })
    const input = [makeExport('icons/Button.tsx'), makeExport('src/Other.tsx')]
    const result = groupIconsByPattern(input)
    const grouped = result.find((r) => r.groupKind.label === 'Icons Folder')
    const unmatched = result.find((r) => r.groupKind.label === 'src/Other.tsx')
    assert.ok(grouped, 'matched group should exist')
    assert.ok(unmatched, 'unmatched export should pass through unchanged')
  })

  test('unmatched export passes through with its original groupKind label', () => {
    stubPatterns({ '*.tsx': 'TypeScript Icons' })
    const input = [makeExport('Button.jsx')]
    const result = groupIconsByPattern(input)
    assert.strictEqual(result.length, 1)
    assert.strictEqual(result[0].groupKind.label, 'Button.jsx')
  })

  test('result is sorted by groupKind label', () => {
    stubPatterns({ '*.tsx': 'Z Group', '*.jsx': 'A Group' })
    const input = [makeExport('Icon.tsx'), makeExport('Button.jsx')]
    const result = groupIconsByPattern(input)
    assert.strictEqual(result[0].groupKind.label, 'A Group')
    assert.strictEqual(result[1].groupKind.label, 'Z Group')
  })

  test('multiple exports matching same pattern are merged', () => {
    stubPatterns({ '*.tsx': 'TypeScript Icons' })
    const input = [makeExport('Button.tsx'), makeExport('Icon.tsx')]
    const result = groupIconsByPattern(input)
    assert.strictEqual(result.length, 1)
    assert.strictEqual(result[0].totalExports, 2)
  })
})
