import {
  Button,
  Checkbox,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Tooltip,
} from '@mui/material'
import { type FC } from 'react'
import { useTranslation } from 'react-i18next'
import MiddleEllipsis from 'react-middle-ellipsis'

import { IconClose, IconPencilSquare } from '../../icons'
import { type AssetTableProps } from '../../interfaces/AssetTable'

export const AssetTable: FC<AssetTableProps> = ({
  paths,
  handleOpenFile,
  handleRemoveAsset,
  handleViewAsset,
  handleCheckFile,
  checkedFiles,
}) => {
  const { t } = useTranslation()

  return (
    <TableContainer component={Paper} className='assetFiles__table'>
      <Table size='small'>
        <TableBody>
          {paths.map((path, index) => (
            <TableRow key={index} className='assetFiles__tableRow'>
              <TableCell align='right' className='assetFiles__tableCell' width={40}>
                <Checkbox
                  title={t('selectFile')}
                  onChange={handleCheckFile(path)}
                  checked={checkedFiles.includes(path)}
                  className='assetFiles__tableCellCheckbox'
                  inputProps={{ 'aria-label': 'select file' }}
                />
              </TableCell>
              <TableCell component='th' scope='row' className='assetFiles__tableCell'>
                <Button
                  fullWidth
                  title={t('OpenFile')}
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
                  color='success'
                  title={t('EditFile')}
                  className='assetFiles__tableCellIconButton'
                  onClick={() => {
                    handleOpenFile(path)
                  }}
                >
                  <IconPencilSquare size={18} />
                </IconButton>
              </TableCell>
              <TableCell align='right' className='assetFiles__tableCell' width={40}>
                <IconButton
                  size='small'
                  color='error'
                  title={t('deleteFile')}
                  className='assetFiles__tableCellIconButton'
                  onClick={() => {
                    handleRemoveAsset(path)
                  }}
                >
                  <IconClose size={18} color='red' />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
