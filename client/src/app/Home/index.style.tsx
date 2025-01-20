import { Box, styled } from '@mui/material'

export const BoxHomePage = styled(Box)(() => ({
  display: 'flex',
  height: '100%',
  '& .BoxHomePage__content': {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    paddingBottom: '16px',
  },
}))
