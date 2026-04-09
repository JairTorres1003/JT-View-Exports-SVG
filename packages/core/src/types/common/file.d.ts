export type FileIdentifier = `file-${string}`

/**
 * Represents an SVG file with metadata
 */
export interface SVGFile {
  /** Unique identifier for the file, formatted as 'file-{hash}' */
  id: FileIdentifier
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
  /** Timestamp of the last modification */
  lastModified: number
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
