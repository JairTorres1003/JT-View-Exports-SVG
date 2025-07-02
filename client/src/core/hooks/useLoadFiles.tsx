import { List, ListItem, ListItemText, Stack, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'

import { getFileExtension } from '../utils/file'

import { useAlert } from './useAlert'

const ALLOWED_EXTENSIONS = ['.js', '.ts', '.jsx', '.tsx']

export const useLoadFiles = () => {
  const { t } = useTranslation()
  const { onOpen } = useAlert()

  /**
   * Validates and loads files based on allowed extensions.
   * @param files - Array of files to be validated and loaded.
   * @returns  - An object containing either an error message or the valid files.
   */
  const loadFiles = (files: File[]) => {
    const validFiles: File[] = []
    const invalidFiles: string[] = []

    files.forEach((file) => {
      const fileExtension = getFileExtension(file)
      if (ALLOWED_EXTENSIONS.includes(`.${fileExtension}`)) {
        validFiles.push(file)
      } else {
        invalidFiles.push(file.name)
      }
    })

    if (invalidFiles.length > 0) {
      onOpen(
        <Stack spacing={1}>
          <Typography variant='body2' color='error'>
            {t('errors.TheFollowingFilesAreNotSupported')}
          </Typography>
          <List dense>
            {invalidFiles.map((fileName) => (
              <ListItem key={fileName}>
                <ListItemText sx={{ m: 0 }} primary={fileName} />
              </ListItem>
            ))}
          </List>
        </Stack>,
        {
          severity: 'error',
          position: { horizontal: 'left', vertical: 'top' },
          maxWidth: 600,
        }
      )
    }

    return validFiles
  }

  /**
   * Handles file selection from an input element.
   * @param event - The change event from the file input.
   * @returns - An array of valid files.
   */
  const handleSelectFiles = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = handleFiles(event.target.files)
    // Reset the input value to allow re-selection of the same file
    event.target.value = ''
    return files
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
