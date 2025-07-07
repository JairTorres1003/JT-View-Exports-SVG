import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import { useLoadFiles } from '@/core/hooks/useLoadFiles'

export const useUpload = () => {
  const { state } = useLocation()
  const { files, updateFiles, removeFile } = useLoadFiles()

  useEffect(() => {
    if (state?.files && Array.isArray(state.files)) {
      updateFiles(state.files)
    }
  }, [state])

  return { files, removeFile }
}
