import { FileModifiedCache } from './fileModifiedCache'

export const baseFileCache = new FileModifiedCache<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Record<string, { declaration: any; params: Record<string, any> }>
>()
