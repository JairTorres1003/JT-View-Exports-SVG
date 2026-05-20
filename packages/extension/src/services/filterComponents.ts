import type { ViewExportSVG } from '@jt-view-exports-svg/core'

/**
 * Filters components by name using a search query.
 */
export function filterComponents(components: ViewExportSVG[], query: string): ViewExportSVG[] {
  const term = query.trim().toLowerCase()

  if (!term) return components

  return components.flatMap((group) => {
    const filtered = group.components.filter((component) =>
      component.name.toLowerCase().includes(term)
    )

    return filtered.length > 0 ? [{ ...group, components: filtered }] : []
  })
}
