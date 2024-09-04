import { FileModifiedCache } from './FileModifiedCache'

import { type ViewExportSVG, type ExtractSVGExports } from '@/interfaces/ViewExportsSVG'

/**
 * Cache for declaration files.
 */
export const DeclarationFileCache = new FileModifiedCache<ExtractSVGExports['base']>()

/**
 * Cache for SVG.
 */
export const SVGFileCache = new FileModifiedCache<ViewExportSVG>()
