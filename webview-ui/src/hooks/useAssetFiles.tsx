import { useEffect, useState } from 'react'

import { vscode } from '../utilities/vscode'

interface AssetFilesHook {
  assetFiles:
    | {
        workspace: string[]
        user: string[]
      }
    | undefined
  handleOpenFile: (path: string) => void
  handleRemoveAsset: (path: string) => void
  handleViewAsset: (path: string) => void
}

/**
 * Custom hook that retrieves a list of asset files from the VS Code extension.
 * @returns An object containing the asset files.
 */
export const useAssetFiles = (): AssetFilesHook => {
  const [assetFiles, setAssetFiles] = useState<{ workspace: string[]; user: string[] }>()

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

  return { assetFiles, handleOpenFile, handleRemoveAsset, handleViewAsset }
}
