/**
 * Returns the file extension of the given File object.
 *
 * @param file - The File object whose extension is to be extracted.
 * @returns The file extension as a string, or an empty string if no extension is found.
 */
export const getFileExtension = (file: File): string => {
  const fileName = file.name
  const lastDotIndex = fileName.lastIndexOf('.')

  if (lastDotIndex <= 0) return ''

  return fileName.slice(((fileName.lastIndexOf('.') - 1) >>> 0) + 2)
}
