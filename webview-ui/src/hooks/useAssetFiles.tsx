import { useEffect, useState } from 'react'

import { type AssetTableActions } from '../interfaces/AssetTable'
import { vscode } from '../utilities/vscode'

interface AssetFilesHook extends AssetTableActions {
  assetFiles:
    | {
        workspace: string[]
        user: string[]
      }
    | undefined
  handleCheckAllFiles: (event: React.ChangeEvent<HTMLInputElement>) => void
}

/**
 * Custom hook that retrieves a list of asset files from the VS Code extension.
 * @returns An object containing the asset files.
 */
export const useAssetFiles = (): AssetFilesHook => {
  const [assetFiles, setAssetFiles] = useState<{ workspace: string[]; user: string[] }>()
  const [checkedFiles, setCheckedFiles] = useState<string[]>([])

  /**
   * Handles the asset files retrieved from the VS Code extension.
   * @param assetFiles - The asset files.
   */
  const handleAssetFiles = (assetFiles: { workspace: string[]; user: string[] }): void => {
    try {
      setAssetFiles(assetFiles)
    } catch (error) {
      console.error('Failed to set asset files', error)
    }
  }

  /**
   * Handles checking a file.
   * @param path - The path of the file to check.
   */
  const handleCheckFile: AssetFilesHook['handleCheckFile'] = (path) => (event) => {
    const checked = event.target.checked

    if (checked) {
      setCheckedFiles([...checkedFiles, path])
    } else {
      setCheckedFiles(checkedFiles.filter((file) => file !== path))
    }
  }

  const handleCheckAllFiles: AssetFilesHook['handleCheckAllFiles'] = (event): void => {
    const checked = event.target.checked

    if (checked) {
      setCheckedFiles([...(assetFiles?.workspace ?? []), ...(assetFiles?.user ?? [])])
    } else {
      setCheckedFiles([])
    }
  }

  /**
   * Handles opening a file.
   * @param path - The path of the file to open.
   */
  const handleOpenFile = (path: string): void => {
    vscode.postMessage('openFile', path)
  }

  /**
   * Handles the action of viewing an asset.
   * @param path - The path of the asset to view.
   */
  const handleViewAsset = (path: string): void => {
    vscode.postMessage('viewAssets', path)
  }

  /**
   * Handles the removal of an asset file.
   * @param path - The path of the asset file to be removed.
   */
  const handleRemoveAsset = (path: string): void => {
    vscode.postMessage('removeAsset', path)
  }

  useEffect(() => {
    vscode.postMessage('getAssetsPath')
    vscode.onMessage('assetsPath', handleAssetFiles)

    return () => {
      vscode.removeMessageHandler('assetsPath', handleAssetFiles)
    }
  }, [])

  return {
    assetFiles,
    handleCheckAllFiles,
    handleOpenFile,
    handleRemoveAsset,
    handleViewAsset,
    handleCheckFile,
    checkedFiles,
  }
}
