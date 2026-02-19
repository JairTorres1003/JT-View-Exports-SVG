/**
 * Represents an SVG file with metadata
 */
export interface SVGFile {
  /** URI of the file */
  uri: string
  /** The absolute path of the SVG file */
  absolutePath: string
  /** The relative path of the SVG file */
  relativePath: string
  /** The basename of the SVG file */
  basename: string
  /** The extension of the SVG file */
  extension: string
  /** The dirname of the SVG file */
  dirname: string
  /**
   * The language of the SVG file
   * @default 'javascript'
   */
  language?: string
  /** Indicates whether the file is located in a temporary directory */
  isTemporary: boolean
}

/**
 * Represents a file to be opened with optional position
 */
export interface OpenFile {
  /** The SVG file to open */
  file: SVGFile
  /** Optional position to navigate to */
  position?: import('./location').Position
}

/**
 * Represents a temporary file with content
 */
export interface FileTemporary {
  /** Name of the temporary file */
  name: string
  /** Content of the file (can be binary or text) */
  content: ArrayBuffer | string
}
