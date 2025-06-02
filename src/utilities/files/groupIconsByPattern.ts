import { minimatch } from 'minimatch'

import { isEmpty } from '../misc'

import { GroupPatternsController } from '@/controllers/config'
import type { ViewExportSVG } from '@/interfaces/ViewExportsSVG'

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
    const { groupKind, components, ...rest } = exportSVG
    let matchedGroup = false

    for (const [patternKey, patternLabel] of groupPatterns) {
      const auxPatternKey = patternKey === '*' ? '**' : patternKey
      const auxPatternLabel = isEmpty(patternLabel) ? auxPatternKey : patternLabel

      if (minimatch(groupKind.id, auxPatternKey)) {
        const current = groupedIcons.get(auxPatternLabel)

        groupedIcons.set(auxPatternLabel, {
          ...(current ?? rest),
          components: [...(current?.components ?? []), ...components],
          groupKind: { id: patternKey, label: auxPatternLabel },
          totalExports: (current?.totalExports ?? 0) + rest.totalExports,
          totalNoExports: (current?.totalNoExports ?? 0) + rest.totalNoExports,
          totalSVG: (current?.totalSVG ?? 0) + rest.totalSVG,
        })

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
