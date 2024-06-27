import { Box, styled } from '@mui/material'

export const AssetFilesBox = styled(Box)(() => ({
  padding: '0px 40px 24px 40px',
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  '& .AssetFilesBox__actions': {
    display: 'flex',
    gap: '16px',
    alignItems: 'center',
    justifyContent: 'flex-start',
    '& .AssetFilesBox__actions__button': {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      gap: '16px',
      flexWrap: 'wrap',
      '& .MuiButton-root': {
        flex: 1,
        minWidth: '105px',
        maxWidth: '140px',
      },
    },
  },
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
  },
}))
