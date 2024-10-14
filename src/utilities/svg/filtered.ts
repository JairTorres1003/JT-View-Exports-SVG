import { l10n } from 'vscode'

import { type SVGComponent, type SVGErrors, type ViewExportSVG } from '@/interfaces/ViewExportsSVG'

/**
 * Filters the array of `SVGComponent` objects based on the provided query.
 *
 * @param components - The array of `SVGComponent` objects to filter.
 * @param query - The query string to filter the array.
 */
const filter = (components: SVGComponent[], query: string): SVGComponent[] => {
  return components.filter((component) =>
    component.name.toLowerCase().includes(query.toLowerCase())
  )
}

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
  // If the query is empty, returns the original array.
  if (query.trim().length === 0) return viewExportSVG

  // If the query has less than 3 characters, returns an object with an error message.
  if (query.trim().length < 3) {
    return { location: {}, message: l10n.t('Please enter at least 3 characters to search...') }
  }

  const filtered = viewExportSVG.flatMap((view) => {
    const components = filter(view.components, query)

    return components.length > 0 ? [{ ...view, components }] : []
  })

  return filtered.length > 0 ? filtered : { location: {}, message: l10n.t('No results found...') }
}
