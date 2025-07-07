/**
 * Returns the file extension from a given file name.
 *
 * @param fileName - The name of the file from which to extract the extension.
 * @returns The file extension as a string, or an empty string if no extension is found.
 */
export const getFileExtension = (fileName: string): string => {
  const lastDotIndex = fileName.lastIndexOf('.')

  if (lastDotIndex <= 0) return ''

  return fileName.slice(((fileName.lastIndexOf('.') - 1) >>> 0) + 2)
}

/**
 * Returns the file name from a given file path.
 *
 * @param filePath - The path of the file from which to extract the name.
 * @returns The file name as a string, or the original path if no slashes are found.
 */
export const getFileName = (filePath: string): string => {
  const lastSlashIndex = filePath.lastIndexOf('/')

  if (lastSlashIndex < 0) return filePath

  return filePath.slice(lastSlashIndex + 1)
}
