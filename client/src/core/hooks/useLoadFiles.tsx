import { SVGPostMessage, SVGReceiveMessage } from '@api/enums/ViewExportsSVG'
import { List, ListItem, ListItemText, Stack, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { getFileExtension, getFileName } from '../utils/file'

import { useAlert } from './useAlert'

import { vscode } from '@/services/vscode'
import type { IFile } from '@/types/misc'

const ALLOWED_EXTENSIONS = ['.js', '.ts', '.jsx', '.tsx']

export const useLoadFiles = () => {
  const { t } = useTranslation()
  const { onOpen } = useAlert()

  const [files, setFiles] = useState<IFile[]>([])
  const [sorted, setSorted] = useState<false | 'asc' | 'desc'>(false)

  /**
   * Loads files from the provided array, filtering out invalid file types.
   * Displays an alert for unsupported file types and updates the state with valid files.
   * @param files - Array of file paths to be loaded.
   */
  const loadFiles = (files: string[]) => {
    const validFiles: IFile[] = []
    const invalidFiles: string[] = []

    files.forEach((file) => {
      const fileName = getFileName(file)
      const extension = getFileExtension(fileName)
      if (ALLOWED_EXTENSIONS.includes(`.${extension}`)) {
        validFiles.push({
          extension,
          name: fileName,
          path: file,
        })
      } else {
        invalidFiles.push(fileName)
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

    if (validFiles.length > 0) {
      updateFiles(validFiles)
    }
  }

  /**
   * Updates the state with new files, ensuring no duplicates.
   * @param newFiles - Array of new files to be added to the state.
   */
  const updateFiles = (newFiles: IFile[]) => {
    setFiles((prevFiles) => {
      const filteredPrevFiles = prevFiles.filter(
        (prevFile) => !newFiles.some((newFile) => prevFile.path === newFile.path)
      )
      return [...filteredPrevFiles, ...newFiles]
    })
  }

  /**
   * Removes a file from the state based on its path.
   * @param file - The file to be removed.
   */
  const removeFile = (file: IFile) => {
    setFiles((prevFiles) => prevFiles.filter((f) => f.path !== file.path))
  }

  /**
   * Sorts the files in ascending or descending order based on their names.
   * @param sortOrder - The order to sort the files ('asc' for ascending, 'desc' for descending).
   */
  const onSortFiles = (sortOrder: 'asc' | 'desc') => () => {
    setSorted(sortOrder)
    setFiles((prevFiles) => {
      return [...prevFiles].sort((a, b) => {
        const nameA = a.name.toLowerCase()
        const nameB = b.name.toLowerCase()
        if (nameA < nameB) return sortOrder === 'asc' ? -1 : 1
        if (nameA > nameB) return sortOrder === 'asc' ? 1 : -1
        return 0
      })
    })
  }

  /**
   * Opens a file dialog to select files.
   * This function sends a message to the VS Code extension to open the file dialog.
   */
  const handleOpenDialog = () => {
    vscode.postMessage(SVGReceiveMessage.RequestFileOpen)
  }

  useEffect(() => {
    vscode.onMessage(SVGPostMessage.SendOpenFiles, loadFiles)

    return () => {
      vscode.unregisterMessage(SVGPostMessage.SendOpenFiles)
    }
  }, [])

  return { loadFiles, handleOpenDialog, files, updateFiles, removeFile, onSortFiles, sorted }
}
