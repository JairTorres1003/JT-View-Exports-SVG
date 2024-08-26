import { FileModifiedCache } from './FileModifiedCache'

import { type ExtractSVGExports } from '@/interfaces/ViewExportsSVG'

/**
 * Cache for declaration files.
 */
export const DeclarationFileCache = new FileModifiedCache<ExtractSVGExports['base']>()
