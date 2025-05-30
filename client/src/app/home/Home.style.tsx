import { Box, styled } from '@mui/material'

import { homePageClasses } from './Home.classes'

export const BoxHomePage = styled(Box, {
  name: homePageClasses.root,
  target: homePageClasses.root,
})(() => ({
  display: 'flex',
  height: '100%',
  [`& .${homePageClasses.content}`]: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    paddingBottom: '16px',
  },
}))
