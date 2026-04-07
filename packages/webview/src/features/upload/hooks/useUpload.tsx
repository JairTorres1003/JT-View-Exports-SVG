import { pathnames, SVGReceiveMessage } from '@jt-view-exports-svg/core'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'

import { useLoadFiles } from '@/core/hooks/useLoadFiles'
import { vscode } from '@/services/vscode'
import { setRenderPath } from '@/store/features/GlobalSlice'
import type { IFile } from '@/types/misc'

export const useUpload = () => {
  const { state } = useLocation() as { state: { files?: IFile[] } }
  const { files, updateFiles, removeFile, ...restLoadFiles } = useLoadFiles()

  const dispatch = useDispatch()
  const { t } = useTranslation()

  /**
   * Handles the extraction of SVG components from the selected files.
   * Sends a message to VSCode to trigger the extraction process, passing the file paths.
   */
  const onExtractComponents = () => {
    const messageEncoded = encodeURIComponent(t('Processing {0} file(s)...', { '0': files.length }))

    dispatch(setRenderPath({ path: `${pathnames.main}?load-message=${messageEncoded}` }))
    vscode.postMessage(
      SVGReceiveMessage.ProcessUploadedFiles,
      files.map((file) => file.path)
    )
  }

  useEffect(() => {
    if (state?.files && Array.isArray(state.files)) {
      updateFiles(state.files)
    }
  }, [state])

  return { files, removeFile, onExtractComponents, ...restLoadFiles }
}
