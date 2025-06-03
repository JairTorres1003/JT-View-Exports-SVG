import { Box, styled } from '@mui/material'

import { loadingPageClasses } from './LoadingPage.classes'

import { loadingCodePad } from '@/styles/keyframes'

export const BoxLoadingPage = styled(Box, {
  name: loadingPageClasses.root,
  target: loadingPageClasses.root,
})(({ theme: { typography, shape, vars } }) => ({
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  fontFamily: typography.fontFamily,
  inset: 0,
  [`& .${loadingPageClasses.codePad}`]: {
    width: '190px',
    height: '190px',
    margin: 'auto',
    color: vars.palette.primary.main,
    borderRadius: `${Number(shape.borderRadius) + 2}px`,
    boxShadow: `inset 0 0 0 1px ${vars.palette.primary.main}`,
    transform: 'rotate(45deg)',
    [`&, &::before, &::after, & .${loadingPageClasses.codePadContent}`]: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
    },
    [`& .${loadingPageClasses.codePadContent}`]: {
      transform: 'rotate(-45deg)',
      width: 'calc(100% + 40px)',
      height: 'calc(100% + 40px)',
      margin: '-20px',
      textAlign: 'center',
      fontSize: typography.fontSize,
      fontWeight: typography.fontWeightMedium,
      fontFamily: typography.fontFamily,
      cursor: 'default',
      clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    '&::before, &::after': {
      content: "''",
      zIndex: -1,
      margin: '-5%',
      boxShadow: 'inset 0 0 0 2px',
      borderRadius: `${Number(shape.borderRadius) + 2}px`,
      animation: `${loadingCodePad} 5s linear infinite`,
    },
    '&::before': {
      animationDelay: '-2.5s',
    },
  },
}))
