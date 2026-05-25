import type { ViewExportSVG } from '@jt-view-exports-svg/core'
import micromatch from 'micromatch'

import { getConfig } from '@/services/config'
import {
  buildCaptureRegex,
  isCapturePattern,
  substituteCaptures,
} from '@/utilities/files/capturePattern'

import { isEmpty } from '../misc'

interface AssignValuesParams {
  current?: ViewExportSVG
  exportSVG?: ViewExportSVG
  patternKey: string
  auxPatternLabel: string
}

/**
 * Retrieve a property value from a possibly undefined ViewExportSVG object,
 * falling back to a provided default when the object or property is not present.
 *
 * @typeParam T - A key of ViewExportSVG to read; the returned type is ViewExportSVG[T].
 * @param exportSVG - The source ViewExportSVG object, or undefined.
 * @param key - The property key to retrieve from exportSVG.
 * @param defaultValue - The value to return when exportSVG is undefined or when the property value is nullish (null or undefined).
 * @returns The value of exportSVG[key] when available and not nullish; otherwise returns defaultValue.
 */
function getValue<T extends keyof ViewExportSVG>(
  exportSVG: ViewExportSVG | undefined,
  key: T,
  defaultValue: ViewExportSVG[T]
): ViewExportSVG[T] {
  return exportSVG?.[key] ?? defaultValue
}

/**
 * Assigns and combines values from the current and new exportSVG objects based on the provided pattern.
 *
 * @param params - The parameters for assigning values.
 * @returns A new ViewExportSVG object with combined values.
 */
function assignValues({ current, exportSVG, patternKey, auxPatternLabel }: AssignValuesParams) {
  return {
    components: [...getValue(current, 'components', []), ...getValue(exportSVG, 'components', [])],
    groupKind: { id: patternKey, label: auxPatternLabel },
    totalExports: getValue(current, 'totalExports', 0) + getValue(exportSVG, 'totalExports', 0),
    totalNoExports:
      getValue(current, 'totalNoExports', 0) + getValue(exportSVG, 'totalNoExports', 0),
    totalSVG: getValue(current, 'totalSVG', 0) + getValue(exportSVG, 'totalSVG', 0),
    files: [...getValue(current, 'files', []), ...getValue(exportSVG, 'files', [])],
    isShowNoExports:
      getValue(current, 'isShowNoExports', false) || getValue(exportSVG, 'isShowNoExports', false),
  }
}

type ProcessedPattern =
  | { type: 'micromatch'; key: string; label: string }
  | { type: 'capture'; key: string; label: string; regex: RegExp; captureMap: Map<number, number> }

/**
 * Groups SVG exports by matching their groupKind with predefined patterns.
 *
 * @param SVGExports - The array of SVG exports to be grouped.
 */
export function groupIconsByPattern(SVGExports: ViewExportSVG[]): ViewExportSVG[] {
  const groupPatterns = getConfig().get('groupPatterns').patternsArray

  if (groupPatterns.length === 0) return SVGExports

  const processedPatterns: ProcessedPattern[] = groupPatterns.map(([key, label]) => {
    const auxLabel = isEmpty(label) ? key : label
    if (isCapturePattern(key)) {
      const { regex, captureMap } = buildCaptureRegex(key)
      return { type: 'capture', key, label: auxLabel, regex, captureMap }
    }
    return { type: 'micromatch', key, label: auxLabel }
  })

  const groupedIcons = new Map<string, ViewExportSVG>()

  SVGExports.forEach((exportSVG) => {
    const { groupKind } = exportSVG
    let matchedGroup = false

    for (const pattern of processedPatterns) {
      if (pattern.type === 'capture') {
        const match = groupKind.label.match(pattern.regex)
        if (match) {
          const resolvedLabel = substituteCaptures(pattern.label, match, pattern.captureMap)
          const current = groupedIcons.get(resolvedLabel)
          const value = assignValues({
            current,
            exportSVG,
            patternKey: `${pattern.key} => ${resolvedLabel}`,
            auxPatternLabel: resolvedLabel,
          })
          groupedIcons.set(resolvedLabel, value)

          matchedGroup = true
          break
        }
      } else if (micromatch.isMatch(groupKind.label, pattern.key, { bash: true })) {
        const current = groupedIcons.get(pattern.label)
        const value = assignValues({
          current,
          exportSVG,
          patternKey: pattern.key,
          auxPatternLabel: pattern.label,
        })
        groupedIcons.set(pattern.label, value)

        matchedGroup = true
        break
      }
    }

    if (!matchedGroup) {
      if (!groupedIcons.has(groupKind.label)) {
        groupedIcons.set(groupKind.label, exportSVG)
      }
    }
  })

  const result = groupedIcons.size > 0 ? [...groupedIcons.values()] : SVGExports

  // sort by groupKind
  result.sort((a, b) => a.groupKind.label.localeCompare(b.groupKind.label))

  // sort components by name
  result.forEach((item) => {
    item.components.sort((a, b) => a.name.localeCompare(b.name))
  })

  return result
}
