import type { ViewExportSVG } from '@jt-view-exports-svg/core'
import { minimatch } from 'minimatch'

import { GroupPatternsController } from '@/controllers/config'

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

/**
 * Groups SVG exports by matching their groupKind with predefined patterns.
 *
 * @param SVGExports - The array of SVG exports to be grouped.
 */
export function groupIconsByPattern(SVGExports: ViewExportSVG[]): ViewExportSVG[] {
  const groupPatterns = new GroupPatternsController()._patternsArray

  if (groupPatterns.length === 0) return SVGExports

  const groupedIcons = new Map<string, ViewExportSVG>()

  SVGExports.forEach((exportSVG) => {
    const { groupKind } = exportSVG
    let matchedGroup = false

    for (const [patternKey, patternLabel] of groupPatterns) {
      const auxPatternKey = patternKey === '*' ? '**' : patternKey
      const auxPatternLabel = isEmpty(patternLabel) ? auxPatternKey : patternLabel

      if (minimatch(groupKind.id, auxPatternKey)) {
        const current = groupedIcons.get(auxPatternLabel)
        const value = assignValues({ current, exportSVG, patternKey, auxPatternLabel })
        groupedIcons.set(auxPatternLabel, value)

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
