import type { FileIdentifier, SVGFile } from '../common'
import type { GetChildAttributes, SVGComponent } from './component'
import type { DeclarationType } from './parsing'
import type { GetSVGTagName } from './tags'

/**
 * Represents a grouped view of SVG exports
 */
export interface ViewExportSVG {
  /** The number of exports (SVG components) present in the file */
  totalExports: number
  /** The number of SVG components that are not exported */
  totalNoExports: number
  /** The number of SVG elements found in the file */
  totalSVG: number
  /** The SVG components found in the file */
  components: SVGComponent[]
  /** The group kind of the SVG components */
  groupKind: {
    /** Group identifier */
    id: string
    /** Group label */
    label: string
  }
  /** Indicates whether the SVG components that are not exported should be shown */
  isShowNoExports: boolean
  /** This is an array of SVG files that are associated with the group of exports (groupKind) */
  files: FileIdentifier[]
}

/**
 * Represents extracted SVG component exports from parsing
 */
export interface ExtractComponentExports {
  declarations: PendingExtraction[]
  /** SVG component categorization */
  components: {
    /** Components that are exported */
    exported: SVGComponent[]
    /** Components that are not exported */
    noExported: SVGComponent[]
  }
}

/**
 * Represents a pending extraction during parsing
 */
export interface PendingExtraction {
  node: DeclarationType
  isExported: boolean
}

export interface ExtractNodeDeclarations {
  declarations: PendingExtraction[]
  identifiers: Set<string>
}

export interface ProcessComponent extends PendingExtraction {
  file: SVGFile
  identifiers?: Set<string>
  parameters?: Record<string, unknown>
}

/**
 * SVG element information during parsing
 */
export interface SVGElementInfo {
  /** Tag information */
  tag: GetSVGTagName
  /** Element props */
  props: Record<string, unknown>
  /** Child attributes */
  childAttrs: GetChildAttributes
}
