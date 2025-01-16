import * as path from 'path'

/**
 * Recursively retrieves all files from a given directory and its subdirectories.
 *
 * @param directory - The path of the directory to read files from.
 * @param arrayOfFiles - An array to accumulate the file paths. Defaults to an empty array.
 * @returns An array containing the paths of all files found in the directory and its subdirectories.
 */
export const getFilesFrontDirectory = (
  directory: string,
  arrayOfFiles: string[] = []
): string[] => {
  const files = Deno.readDirSync(directory)

  for (const dirEntry of files) {
    if (dirEntry.isDirectory) {
      arrayOfFiles = getFilesFrontDirectory(path.join(directory, dirEntry.name), arrayOfFiles)
    } else {
      arrayOfFiles.push(path.join(directory, dirEntry.name))
    }
  }

  return arrayOfFiles
}
