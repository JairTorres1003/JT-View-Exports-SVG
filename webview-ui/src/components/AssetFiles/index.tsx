import {
  Button,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Tooltip,
  Typography,
} from '@mui/material'
import { useTranslation } from 'react-i18next'
import MiddleEllipsis from 'react-middle-ellipsis'

import { AssetFilesBox } from './AssetFiles.style'
import { useAssetFiles } from '../../hooks/useAssetFiles'
import { IconFragmentCode } from '../../icons'
import { type FC } from 'react'

const AssetFiles = () => {
  const { assetFiles, handleOpenFile, handleViewAsset } = useAssetFiles()
  const { t } = useTranslation()

  const AssetTable: FC<{ paths: string[] }> = ({ paths }) => {
    return (
      <TableContainer component={Paper} className='assetFiles__table'>
        <Table size='small'>
          <TableBody>
            {paths.map((path, index) => (
              <TableRow key={index} className='assetFiles__tableRow'>
                <TableCell component='th' scope='row' className='assetFiles__tableCell'>
                  <Button
                    fullWidth
                    className='assetFiles__tableCellButton'
                    onClick={() => {
                      handleViewAsset(path)
                    }}
                  >
                    <MiddleEllipsis>
                      <Tooltip title={path} arrow>
                        <span>{path}</span>
                      </Tooltip>
                    </MiddleEllipsis>
                  </Button>
                </TableCell>
                <TableCell align='right' className='assetFiles__tableCell' width={40}>
                  <IconButton
                    size='small'
                    title={t('OpenFile')}
                    className='assetFiles__tableCellIconButton'
                    onClick={() => {
                      handleOpenFile(path)
                    }}
                  >
                    <IconFragmentCode size={18} />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )
  }

  return (
    <AssetFilesBox>
      <Typography component='h1' fontSize={20}>
        {t('AssetFiles.Title.Workspace')}
      </Typography>
      {assetFiles && assetFiles.workspace.length > 0 ? (
        <AssetTable paths={assetFiles.workspace} />
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
          <AssetTable paths={assetFiles.user} />
        </>
      )}
    </AssetFilesBox>
  )
}

export default AssetFiles
