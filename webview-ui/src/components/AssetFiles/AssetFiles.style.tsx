import { Box, styled } from '@mui/material'

export const AssetFilesBox = styled(Box)(() => ({
  padding: '0px 40px 24px 40px',
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  '& .assetFiles__table': {
    backgroundColor: 'transparent',
    border: '1px solid #e0e0e0',
    table: { tableLayout: 'fixed' },
  },
  '& .assetFiles__tableRow': {
    '&:last-child td, &:last-child th': { border: 0 },
    '& .assetFiles__tableCell': { padding: 0 },
    '& .assetFiles__tableCellButton': {
      textTransform: 'initial',
      textAlign: 'left',
      justifyContent: 'flex-start',
      padding: '6px 16px',
      height: 40,
      borderRadius: 0,
      whiteSpace: 'nowrap',
    },
    '& .assetFiles__tableCellIconButton, & .assetFiles__tableCellCheckbox': {
      padding: 0,
      width: '100%',
      height: 40,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 0,
    },
    '& .assetFiles__tableCellCheckbox': {
      color: 'var(--color-JT-view-export-svg)',
      '&.Mui-checked': { color: 'var(--color-JT-view-export-svg)' },
    },
  },
}))
