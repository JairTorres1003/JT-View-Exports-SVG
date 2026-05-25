/* biome-ignore-all lint/suspicious/noTemplateCurlyInString: These strings are used as templates for dynamic group labels, not as literal strings. */
import * as assert from 'assert'

import {
  buildCaptureRegex,
  globSegmentToRegex,
  isCapturePattern,
  substituteCaptures,
} from '@/utilities/files/capturePattern'

suite('capturePattern', () => {
  suite('globSegmentToRegex', () => {
    test('**/ at start -> (?:[^/]+/)*', () => {
      assert.strictEqual(globSegmentToRegex('**/'), '(?:[^/]+/)*')
    })

    test('**/ prefix with literal path', () => {
      assert.strictEqual(globSegmentToRegex('**/packages/webview/'), '(?:[^/]+/)*packages/webview/')
    })

    test('/** at end -> /.*', () => {
      assert.strictEqual(globSegmentToRegex('/**'), '/.*')
    })

    test('/**/ in middle converts to /(?:[^/]+/)*', () => {
      assert.strictEqual(globSegmentToRegex('/src/**/icons/'), '/src/(?:[^/]+/)*icons/')
    })

    test('* wildcard -> [^/]*', () => {
      assert.strictEqual(globSegmentToRegex('prefix/*/suffix/'), 'prefix/[^/]*/suffix/')
    })

    test('? wildcard -> [^/]', () => {
      assert.strictEqual(globSegmentToRegex('file?/'), 'file[^/]/')
    })

    test('literal dot is escaped', () => {
      assert.strictEqual(globSegmentToRegex('file.tsx/'), 'file\\.tsx/')
    })

    test('empty string -> empty string', () => {
      assert.strictEqual(globSegmentToRegex(''), '')
    })

    test('literal path segment with no wildcards', () => {
      assert.strictEqual(
        globSegmentToRegex('packages/webview/src/assets/icons/'),
        'packages/webview/src/assets/icons/'
      )
    })
  })

  suite('isCapturePattern', () => {
    test('returns true when pattern contains ${0}', () => {
      assert.strictEqual(isCapturePattern('**/icons/${0}/**'), true)
    })

    test('returns true for multi-capture pattern', () => {
      assert.strictEqual(isCapturePattern('**/packages/${0}/src/${1}/**'), true)
    })

    test('returns false for plain glob pattern', () => {
      assert.strictEqual(isCapturePattern('**/icons/**'), false)
    })

    test('returns false for empty string', () => {
      assert.strictEqual(isCapturePattern(''), false)
    })
  })

  suite('buildCaptureRegex', () => {
    test('single capture: correct regex source', () => {
      const { regex } = buildCaptureRegex('**/packages/webview/src/assets/icons/${0}/**')
      assert.strictEqual(
        regex.source,
        '^(?:[^/]+\\/)*packages\\/webview\\/src\\/assets\\/icons\\/([^/]+)\\/.*$'
      )
    })

    test('single capture: captureMap maps 0 -> group 1', () => {
      const { captureMap } = buildCaptureRegex('**/packages/webview/src/assets/icons/${0}/**')
      assert.strictEqual(captureMap.size, 1)
      assert.strictEqual(captureMap.get(0), 1)
    })

    test('single capture: extracts correct segment from path', () => {
      const { regex, captureMap } = buildCaptureRegex(
        '**/packages/webview/src/assets/icons/${0}/**'
      )
      const match = 'packages/webview/src/assets/icons/files/react.tsx'.match(regex)
      assert.ok(match, 'path should match')
      assert.strictEqual(match?.[captureMap.get(0) ?? -1], 'files')
    })

    test('multi-capture: captureMap maps 0->1 and 1->2', () => {
      const { captureMap } = buildCaptureRegex('**/packages/${0}/src/${1}/**')
      assert.strictEqual(captureMap.get(0), 1)
      assert.strictEqual(captureMap.get(1), 2)
    })

    test('multi-capture: extracts both segments', () => {
      const { regex, captureMap } = buildCaptureRegex('**/packages/${0}/src/${1}/**')
      const match = 'packages/webview/src/assets/react.tsx'.match(regex)
      assert.ok(match, 'path should match')
      assert.strictEqual(match?.[captureMap.get(0) ?? -1], 'webview')
      assert.strictEqual(match?.[captureMap.get(1) ?? -1], 'assets')
    })

    test('non-matching path returns null', () => {
      const { regex } = buildCaptureRegex('**/icons/${0}/**')
      assert.strictEqual('completely/different/path.tsx'.match(regex), null)
    })

    test('${N} does not match across slashes', () => {
      const { regex, captureMap } = buildCaptureRegex('**/icons/${0}/**')
      const match = 'icons/a/b/react.tsx'.match(regex)
      if (match) {
        assert.ok(!captureMap.get(0) || !match[captureMap.get(0) ?? -1]?.includes('/'))
      }
    })
  })

  suite('substituteCaptures', () => {
    test('substitutes single known capture index', () => {
      const { regex, captureMap } = buildCaptureRegex('**/icons/${0}/**')
      const match = 'icons/files/react.tsx'.match(regex)
      assert.ok(match)
      assert.strictEqual(
        substituteCaptures('Icons (${0})', match as RegExpMatchArray, captureMap),
        'Icons (files)'
      )
    })

    test('unknown capture index produces empty string', () => {
      const { regex, captureMap } = buildCaptureRegex('**/icons/${0}/**')
      const match = 'icons/files/react.tsx'.match(regex)
      assert.ok(match)
      assert.strictEqual(
        substituteCaptures('Icons (${99})', match as RegExpMatchArray, captureMap),
        'Icons ()'
      )
    })

    test('multi-capture substitution replaces all placeholders', () => {
      const { regex, captureMap } = buildCaptureRegex('**/packages/${0}/src/${1}/**')
      const match = 'packages/webview/src/assets/react.tsx'.match(regex)
      assert.ok(match)
      assert.strictEqual(
        substituteCaptures('${0}/${1}', match as RegExpMatchArray, captureMap),
        'webview/assets'
      )
    })

    test('label with no placeholders is returned unchanged', () => {
      const { regex, captureMap } = buildCaptureRegex('**/icons/${0}/**')
      const match = 'icons/files/react.tsx'.match(regex)
      assert.ok(match)
      assert.strictEqual(
        substituteCaptures('Static Label', match as RegExpMatchArray, captureMap),
        'Static Label'
      )
    })
  })
})
