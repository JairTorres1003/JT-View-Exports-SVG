import { Box, styled } from '@mui/material'

export const AssetFilesBox = styled(Box)(() => ({
  padding: '0px 40px 24px 40px',
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  '& .assetFiles__table': { backgroundColor: 'transparent', border: '1px solid #e0e0e0' },
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
    },
  },
}))
