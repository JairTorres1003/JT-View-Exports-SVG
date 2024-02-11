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
}) => {
  const { t } = useTranslation()

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
                  title={t('delete')}
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
