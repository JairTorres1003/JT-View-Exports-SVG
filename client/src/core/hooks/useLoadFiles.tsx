const ALLOWED_EXTENSIONS = ['.js', '.ts', '.jsx', '.tsx']

export const useLoadFiles = () => {
  /**
   * Validates and loads files based on allowed extensions.
   * @param files - Array of files to be validated and loaded.
   * @returns  - An object containing either an error message or the valid files.
   */
  const loadFiles = (files: File[]) => {
    const validFiles: File[] = []
    const invalidFiles: string[] = []

    files.forEach((file) => {
      const fileExtension = file.name.slice(((file.name.lastIndexOf('.') - 1) >>> 0) + 2)
      if (ALLOWED_EXTENSIONS.includes(`.${fileExtension}`)) {
        validFiles.push(file)
      } else {
        invalidFiles.push(file.name)
      }
    })

    return validFiles
  }

  /**
   * Handles file selection from an input element.
   * @param event - The change event from the file input.
   * @returns - An array of valid files.
   */
  const handleSelectFiles = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    return handleFiles(files)
  }

  /**
   * Handles files from a FileList object.
   * @param files - The FileList object containing selected files.
   * @returns - An array of valid files.
   */
  const handleFiles = (files: FileList | null) => {
    if (!files) return []

    const fileArray = Array.from(files)
    return loadFiles(fileArray)
  }

  return { loadFiles, handleSelectFiles, handleFiles }
}
