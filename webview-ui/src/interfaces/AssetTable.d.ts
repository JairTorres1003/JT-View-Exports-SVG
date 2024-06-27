export interface AssetTableActions {
  /**
   * Handles the view asset event.
   * @param path - The path of the asset to view.
   */
  handleViewAsset: (path: string) => void
  /**
   * Handles the open file event.
   * @param path - The path of the file to open.
   */
  handleOpenFile: (path: string) => void
  /**
   * Handles the remove asset event.
   * @param path - The path of the asset to remove.
   */
  handleRemoveAsset: (path: string) => void
  /**
   * Handles the check file event.
   * @param path - The path of the file to check.
   */
  handleCheckFile: (path: string) => (event: React.ChangeEvent<HTMLInputElement>) => void
  /**
   * The checked files.
   */
  checkedFiles: string[]
}

/**
 * Represents the props for the AssetTable component.
 */
export interface AssetTableProps extends AssetTableActions {
  /**
   * The paths of the assets.
   */
  paths: string[]
}
