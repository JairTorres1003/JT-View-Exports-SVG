import { Box, styled } from '@mui/material'

export const BoxSearchBar = styled(Box)(() => ({
  display: 'flex',
  padding: '16px 8px',
  justifyContent: 'center',
  '& .BoxSearchBar__input': {
    maxWidth: 600,
    '& .MuiInputLabel-root.MuiInputLabel-shrink': {
      '& .BoxSearchBar__input-icon': { display: 'none' },
      '& + .MuiInputBase-root fieldset .BoxSearchBar__input-icon': { display: 'none' },
    },
  },
}))
