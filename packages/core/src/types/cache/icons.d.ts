import type { SVGIcon } from '../svg'

/**
 * Cached SVG icon with timestamp
 */
export interface SVGIconCache extends SVGIcon {
  /** Timestamp when the icon was added to cache */
  dateAdd: number
}
