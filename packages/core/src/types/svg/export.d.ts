import type { SVGFile } from '../common'
import type { SVGComponent } from './component'
import type { DeclarationExport } from './parsing'

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
  files: SVGFile[]
}

/**
 * Represents extracted SVG exports from parsing
 */
export interface ExtractSVGExports {
  /** Base declarations with their metadata */
  base: Record<string, { declaration: DeclarationExport; params: Record<string, unknown> }>
  /** SVG component categorization */
  svg: {
    /** Components that are exported */
    exportComponents: SVGComponent[]
    /** Components that are not exported */
    noExportComponents: SVGComponent[]
  }
}
