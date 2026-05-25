export function globSegmentToRegex(segment: string): string {
  let result = ''
  let i = 0

  if (segment.startsWith('**/')) {
    result += '(?:[^/]+/)*'
    i = 3
  }

  while (i < segment.length) {
    const ch = segment[i]

    if (ch === '/') {
      const rest = segment.slice(i)
      if (rest.startsWith('/**/')) {
        result += '/(?:[^/]+/)*'
        i += 4
      } else if (rest === '/**') {
        result += '/.*'
        i += 3
      } else {
        result += '/'
        i++
      }
    } else if (ch === '*') {
      result += '[^/]*'
      i++
    } else if (ch === '?') {
      result += '[^/]'
      i++
    } else if (/[.+^${}()|[\]\\]/.test(ch)) {
      result += `\\${ch}`
      i++
    } else {
      result += ch
      i++
    }
  }

  return result
}

export function isCapturePattern(pattern: string): boolean {
  return /\$\{\d+\}/.test(pattern)
}

export function buildCaptureRegex(pattern: string): {
  regex: RegExp
  captureMap: Map<number, number>
} {
  const parts = pattern.split(/\$\{(\d+)\}/)
  const captureMap = new Map<number, number>()
  let regexStr = '^'
  let groupCounter = 0

  for (let i = 0; i < parts.length; i++) {
    if (i % 2 === 0) {
      regexStr += globSegmentToRegex(parts[i])
    } else {
      const captureIdx = parseInt(parts[i], 10)
      groupCounter++
      captureMap.set(captureIdx, groupCounter)
      regexStr += '([^/]+)'
    }
  }

  regexStr += '$'
  return { regex: new RegExp(regexStr), captureMap }
}

/**
 * Substitutes capture group references in a template with matched values.
 *
 * @param template - The template string containing `${N}` placeholders
 * @param match - The RegExp match array with captured groups
 * @param captureMap - Map from template indices to regex group positions
 * @returns The template with placeholders replaced by matched values
 */
export function substituteCaptures(
  template: string,
  match: RegExpMatchArray,
  captureMap: Map<number, number>
): string {
  return template.replace(/\$\{(\d+)\}/g, (_, idx) => {
    const groupPos = captureMap.get(parseInt(idx, 10))
    return groupPos !== undefined ? (match[groupPos] ?? '') : ''
  })
}
