import { SVGReceiveMessage } from '@api/enums/ViewExportsSVG'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router'

import { pathnames } from '@/config/routes/route'
import { useLoadFiles } from '@/core/hooks/useLoadFiles'
import { vscode } from '@/services/vscode'
import { setRenderPath } from '@/store/features/GlobalSlice'
import type { IFile } from '@/types/misc'

export const useUpload = () => {
  const { state } = useLocation() as { state: { files?: IFile[] } }
  const { files, updateFiles, removeFile, ...restLoadFiles } = useLoadFiles()

  const dispatch = useDispatch()

  /**
   * Handles the extraction of SVG components from the selected files.
   * Sends a message to VSCode to trigger the extraction process, passing the file paths.
   */
  const onExtractComponents = () => {
    vscode.postMessage(
      SVGReceiveMessage.ExtractSVGComponentFromFiles,
      files.map((file) => file.path)
    )
    dispatch(setRenderPath({ path: pathnames.dashboard }))
  }

  useEffect(() => {
    if (state?.files && Array.isArray(state.files)) {
      updateFiles(state.files)
    }
  }, [state])

  return { files, removeFile, onExtractComponents, ...restLoadFiles }
}
