import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import { useLoadFiles } from '@/core/hooks/useLoadFiles'
import { getUniqueKey } from '@/core/utils/file'
import type { IMakeupFile } from '@/types/misc'

export const useUpload = () => {
  const { state } = useLocation()

  const [files, setFiles] = useState<IMakeupFile[]>([])
  const { loadFiles } = useLoadFiles()

  const handleRemoveFile = (file: IMakeupFile) => {
    setFiles((prevFiles) => prevFiles.filter((f) => f.uuid !== file.uuid))
  }

  const onDropZone = (files: File[]) => {
    const validFiles = loadFiles(files)
    updateFiles(validFiles)
  }

  const updateFiles = (newFiles: IMakeupFile[]) => {
    setFiles((prevFiles) => {
      const filteredPrevFiles = prevFiles.filter(
        (prevFile) => !newFiles.some((newFile) => getUniqueKey(prevFile) === getUniqueKey(newFile))
      )

      return [...filteredPrevFiles, ...newFiles]
    })
  }

  useEffect(() => {
    if (state?.files && Array.isArray(state.files)) {
      setFiles(state.files)
    }
  }, [state])

  return { files, handleRemoveFile, onDropZone }
}
