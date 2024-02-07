import { Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'

import { AssetFilesBox } from './AssetFiles.style'
import { AssetTable } from './AssetTable'

import { useAssetFiles } from '../../hooks/useAssetFiles'

const AssetFiles = () => {
  const { assetFiles, ...useProps } = useAssetFiles()
  const { t } = useTranslation()

  return (
    <AssetFilesBox>
      <Typography component='h1' fontSize={20}>
        {t('AssetFiles.Title.Workspace')}
      </Typography>
      {assetFiles && assetFiles.workspace.length > 0 ? (
        <AssetTable paths={assetFiles.workspace} {...useProps} />
      ) : (
        <Typography variant='h6' component='h2' fontSize={16}>
          {t('AssetFiles.Empty.Workspace')}
        </Typography>
      )}
      {assetFiles && assetFiles.user.length > 0 && (
        <>
          <Typography component='h1' fontSize={20}>
            {t('AssetFiles.Title.Others')}
          </Typography>
          <AssetTable paths={assetFiles.user} {...useProps} />
        </>
      )}
    </AssetFilesBox>
  )
}

export default AssetFiles
