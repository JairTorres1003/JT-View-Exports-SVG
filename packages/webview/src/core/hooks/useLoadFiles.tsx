import { type FileTemporary, SVGPostMessage, SVGReceiveMessage } from '@jt-view-exports-svg/core'
import { List, ListItem, ListItemText, Stack, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { vscode } from '@/services/vscode'
import type { IFile } from '@/types/misc'

import { getFileExtension, getFileName } from '../utils/file'

import { useAlert } from './useAlert'

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
          path: file.replace('file://', ''),
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
              <ListItem key={fileName} disablePadding>
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

  /**
   * Handles file drop events, reading the files and sending their content to the VS Code extension.
   * @param files - The files dropped into the drop zone.
   *
   * @remark
   * Due to VS Code security restrictions, it is currently not possible to directly obtain the file path on the OS for dropped files.
   * As a workaround, the contents of dropped files are read and sent using `postMessage` to create a temporary file.\
   * This approach is not ideal and has certain limitations. For more information, see:
   * - GitHub issue: {@link [#255608](https://github.com/microsoft/vscode/issues/255608)}
   * - Documentation: {@link [Troubleshooting](https://view-exports-svg.vercel.app/docs/guides/troubleshooting#%EF%B8%8F-drag--drop-files-lose-original-path)}
   */
  const onDrop = (files: File[]) => {
    const filePromises = files
      .filter((file) => ALLOWED_EXTENSIONS.includes(`.${getFileExtension(file.name)}`))
      .map(async (file) => {
        return await new Promise<FileTemporary>((resolve, reject) => {
          const reader = new FileReader()

          reader.onload = (loadEvent) => {
            const fileContent = loadEvent.target?.result
            if (fileContent) {
              resolve({ name: file.name, content: fileContent })
            }
          }

          reader.onerror = (errorEvent) => {
            console.error(t('errors.ErrorCreatingTemporaryFile', { name: file.name }), errorEvent)
            reject(new Error(`Error reading file: ${file.name}`))
          }

          reader.readAsArrayBuffer(file)
        })
      })

    Promise.all(filePromises)
      .then((filesData) => {
        vscode.postMessage(SVGReceiveMessage.CreateTempFiles, filesData)
      })
      .catch(console.error)
  }

  /**
   * Handles URI input, typically from a drag-and-drop operation.
   * It processes the URIs to extract file paths and loads the files.
   * @param uriList - List of URIs to be processed.
   */
  const onUri = (uriList: string[]) => {
    loadFiles(uriList)
  }

  useEffect(() => {
    vscode.onMessage(SVGPostMessage.SendOpenFiles, loadFiles)

    return () => {
      vscode.unregisterMessage(SVGPostMessage.SendOpenFiles)
    }
  }, [])

  return {
    loadFiles,
    handleOpenDialog,
    files,
    updateFiles,
    removeFile,
    onSortFiles,
    sorted,
    onDrop,
    onUri,
  }
}
