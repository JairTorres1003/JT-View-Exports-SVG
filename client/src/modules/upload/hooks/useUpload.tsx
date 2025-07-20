import { SVGReceiveMessage } from '@api/enums/ViewExportsSVG'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import { useLoadFiles } from '@/core/hooks/useLoadFiles'
import { vscode } from '@/services/vscode'

export const useUpload = () => {
  const { state } = useLocation()
  const { files, updateFiles, removeFile, ...restLoadFiles } = useLoadFiles()

  /**
   * Handles the extraction of SVG components from the selected files.
   * Sends a message to VSCode to trigger the extraction process, passing the file paths.
   */
  const onExtractComponents = () => {
    vscode.postMessage(
      SVGReceiveMessage.ExtractSVGComponentFromFiles,
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
