import type { LocationIdentifier } from './location'

/**
 * Represents an error found in SVG processing
 */
export interface SVGErrors {
  /** Location where the error occurred (can be partial) */
  location?: LocationIdentifier
  /** Error message describing the issue */
  message: string
}
