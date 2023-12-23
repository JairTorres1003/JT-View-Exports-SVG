import { FileModifiedCache } from './fileModifiedCache'

export const baseFileCache = new FileModifiedCache<
  Record<string, { declaration: any; params: Record<string, any> }>
>()
