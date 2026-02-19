import type { SVGLocation } from './location'

/**
 * Represents an error found in SVG processing
 */
export interface SVGErrors {
  /** Location where the error occurred (can be partial) */
  location: Partial<SVGLocation>
  /** Error message describing the issue */
  message: string
}
