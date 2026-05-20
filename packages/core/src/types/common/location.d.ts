import type { FileIdentifier } from './file'

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

interface LocationBase {
  /** Start position of the range */
  start?: Position
  /** End position of the range */
  end?: Position
}

export interface LocationIdentifier extends LocationBase {
  /** A unique identifier for the location, which can be used for caching or referencing */
  id: FileIdentifier
}
