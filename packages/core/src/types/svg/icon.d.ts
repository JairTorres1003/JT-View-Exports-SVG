import type { SVGLocation } from '../common'

/**
 * Represents a basic SVG icon reference
 */
export interface SVGIcon {
  /** The name of the SVG component */
  name: string
  /** The location of the SVG component in the file */
  location: SVGLocation
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
