import { v4 as uuidv4 } from 'uuid'

import type { IMakeupFile } from '@/types/misc'

/**
 * Returns the file extension of the given File object.
 *
 * @param file - The File object whose extension is to be extracted.
 * @returns The file extension as a string, or an empty string if no extension is found.
 */
const getFileExtension = (file: File): string => {
  const fileName = file.name
  const lastDotIndex = fileName.lastIndexOf('.')

  if (lastDotIndex <= 0) return ''

  return fileName.slice(((fileName.lastIndexOf('.') - 1) >>> 0) + 2)
}

/**
 * Creates a new File object with an additional properties.
 *
 * @param file - The original File object to be extended.
 * @returns A new File object with the new porperties added.
 */
export const createMakeupFile = (file: File): IMakeupFile => {
  const auxFile = file as IMakeupFile

  Object.defineProperty(auxFile, 'extension', {
    get: () => getFileExtension(file),
    enumerable: true,
  })

  Object.defineProperty(auxFile, 'uuid', {
    value: uuidv4(),
    enumerable: true,
  })

  return auxFile
}

/**
 * Generates a unique key for the given file based on its properties.
 *
 * @param file - The file object for which to generate a unique key.
 * @returns A string that uniquely identifies the file.
 */
export const getUniqueKey = (file: IMakeupFile): string => {
  if (file.path) {
    return file.path
  }

  return `${file.name}-${file.size}-${file.lastModified}`
}
