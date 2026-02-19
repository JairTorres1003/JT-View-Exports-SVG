/**
 * Represents a position in a file (line, column, index)
 */
export interface Position {
  /** Line number (1-based) */
  line: number
  /** Column number (1-based) */
  column: number
  /** Character index in the file (0-based) */
  index: number
}

/**
 * Represents a location range in an SVG file
 */
export interface SVGLocation {
  /** Start position of the range */
  start?: Position
  /** End position of the range */
  end?: Position
  /** The file object containing the absolute and relative paths of the SVG file */
  file: import('./file').SVGFile
}
