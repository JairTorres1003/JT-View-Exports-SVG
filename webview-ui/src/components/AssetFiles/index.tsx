import { Box, Button, Checkbox, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'

import { useAssetFiles } from '../../hooks/useAssetFiles'
import { FolderIcon, FolderOpenIcon } from '../../icons'

import { AssetFilesBox } from './AssetFiles.style'
import { AssetTable } from './AssetTable'

const AssetFiles = (): React.JSX.Element => {
  const {
    assetFiles,
    handleCheckAllFiles,
    checkedFiles,
    handleViewAssets,
    handleRemoveAssets,
    ...useProps
  } = useAssetFiles()
  const { t } = useTranslation()

  return (
    <AssetFilesBox>
      <Box className='AssetFilesBox__actions'>
        <Checkbox
          onChange={handleCheckAllFiles}
          title={t('selectAllFiles')}
          inputProps={{ 'aria-label': 'select all files' }}
          checked={
            checkedFiles.length ===
            (assetFiles?.workspace.length ?? 0) + (assetFiles?.user.length ?? 0)
          }
          indeterminate={
            checkedFiles.length > 0 &&
            checkedFiles.length <
              (assetFiles?.workspace.length ?? 0) + (assetFiles?.user.length ?? 0)
          }
        />
        <Box className='AssetFilesBox__actions__button'>
          <Button
            color='success'
            variant='outlined'
            size='small'
            disabled={checkedFiles.length === 0}
            onClick={handleViewAssets}
          >
            {t('OpenFiles')}
          </Button>
          <Button
            color='error'
            variant='outlined'
            size='small'
            disabled={checkedFiles.length === 0}
            onClick={handleRemoveAssets}
          >
            {t('deleteFiles')}
          </Button>
        </Box>
      </Box>
      <Typography component='h1' fontSize={20}>
        <span>
          <FolderOpenIcon size={20} sx={{ margin: '0 8px -2px 0' }} />
        </span>
        {t('AssetFiles.Title.Workspace')}
      </Typography>
      {assetFiles !== undefined && assetFiles.workspace.length > 0 ? (
        <AssetTable paths={assetFiles.workspace} checkedFiles={checkedFiles} {...useProps} />
      ) : (
        <Typography variant='h6' component='h2' fontSize={16}>
          {t('AssetFiles.Empty.Workspace')}
        </Typography>
      )}
      {assetFiles !== undefined && assetFiles.user.length > 0 && (
        <>
          <Typography component='h1' fontSize={20}>
            <span>
              <FolderIcon size={20} sx={{ margin: '0 8px -2px 0' }} />
            </span>
            {t('AssetFiles.Title.Others')}
          </Typography>
          <AssetTable paths={assetFiles.user} checkedFiles={checkedFiles} {...useProps} />
        </>
      )}
    </AssetFilesBox>
  )
}

export default AssetFiles
