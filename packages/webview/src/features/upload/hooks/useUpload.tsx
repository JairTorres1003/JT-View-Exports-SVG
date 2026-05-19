import { pathnames, WebviewMessage } from '@jt-view-exports-svg/core'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'

import { useLoadFiles } from '@/core/hooks/useLoadFiles'
import { vscode } from '@/services/vscode'
import { setRenderRoute } from '@/store/features/global/slice'
import { useAppDispatch } from '@/store/hooks'
import type { IFile } from '@/types/misc'

export const useUpload = () => {
  const { state } = useLocation() as { state: { files?: IFile[] } }
  const { files, updateFiles, removeFile, ...restLoadFiles } = useLoadFiles()

  const dispatch = useAppDispatch()
  const { t } = useTranslation('upload')

  /**
   * Handles the extraction of SVG components from the selected files.
   * Sends a message to VSCode to trigger the extraction process, passing the file paths.
   */
  const onExtractComponents = () => {
    const messageEncoded = encodeURIComponent(t('processing-files', { count: files.length }))

    dispatch(
      setRenderRoute({ path: `${pathnames.main}?load-message=${messageEncoded}`, options: {} })
    )
    vscode.postMessage(
      WebviewMessage.ProcessUploadedFiles,
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
