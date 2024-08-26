import { getTranslations } from '../vscode'

import { type SVGErrors, type ViewExportSVG } from '@/interfaces/ViewExportsSVG'

/**
 * Filters the array of `ViewExportSVG` objects based on the provided query.
 *
 * @param viewExportSVG - The array of `ViewExportSVG` objects to filter.
 * @param query - The query string to filter the array.
 * @returns The filtered array of `ViewExportSVG` objects or an object with an error message.
 */
export function filteredExports(
  viewExportSVG: ViewExportSVG[],
  query: string
): ViewExportSVG[] | SVGErrors {
  const i18n = getTranslations()

  // If the query is empty, returns the original array.
  if (query.trim().length === 0) return viewExportSVG

  // If the query has less than 3 characters, returns an object with an error message.
  if (query.trim().length < 3) {
    return { message: i18n.searchMinChars, location: {} }
  }

  const filtered = viewExportSVG.flatMap((view) => {
    const exportComponents = view.exportComponents.filter((component) =>
      component.name.toLowerCase().includes(query.toLowerCase())
    )

    const noExportComponents = view.noExportComponents.filter((component) =>
      component.name.toLowerCase().includes(query.toLowerCase())
    )

    return exportComponents.length > 0 || noExportComponents.length > 0
      ? [{ ...view, exportComponents, noExportComponents }]
      : []
  })

  return filtered.length > 0 ? filtered : { message: i18n.noIconsFound, location: {} }
}
