import type { IconCollectionKind } from '../../constants/collection'
import type { LocationIdentifier } from '../common'

/**
 * Represents a basic SVG icon reference
 */
export interface SVGIcon {
  /** The name of the SVG component */
  name: string
  /** The location of the SVG component in the file */
  location: LocationIdentifier
}

/**
 * Represents an SVG icon in the playground with editable code
 */
export interface SVGPlayground extends SVGIcon {
  /**
   * The SVG component in use and edited
   * @example
   * ```tsx
   * <ComponentName
   *   color="red"
   *   fill="blue"
   *   size={24}
   *   className="custom-class"
   *   style={{ border: '1px solid black' }}
   * />
   * ```
   */
  value: string
}

/**
 * Represents an SVG icon that belongs to a specific collection (e.g., favorites, recent)
 */
export interface SVGIconCollection extends SVGIcon {
  /** The collection this icon belongs to (e.g., 'favorite', 'recent') */
  collection: IconCollectionKind
  /** Optional flag to indicate if more icons can be added to the collection beyond the configured limit */
  allowMoreIcons?: boolean
}
