import { Box, styled } from '@mui/material'
import { useTranslation } from 'react-i18next'

import { isEmpty } from '@/utils/misc'

interface LoadingPageProps {
  className?: string
  children?: React.ReactNode
}

export const LoadingPage = styled<React.ComponentType<LoadingPageProps>>(
  ({ className, children }) => {
    const { t } = useTranslation(undefined, { keyPrefix: 'labels' })

    return (
      <Box className={className}>
        <Box className='LoadingPage__codePad'>
          <Box className='LoadingPage__codePad__content'>
            {isEmpty(children) ? t('loading') : children}
          </Box>
        </Box>
      </Box>
    )
  },
  { name: 'LoadingPage', slot: 'Root' }
)(({ theme: { typography, shape, vars } }) => ({
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  fontFamily: typography.fontFamily,
  inset: 0,
  '& .LoadingPage__codePad': {
    width: '190px',
    height: '190px',
    margin: 'auto',
    color: vars.palette.primary.main,
    borderRadius: `${shape.borderRadius + 2}px`,
    boxShadow: `inset 0 0 0 1px ${vars.palette.primary.main}`,
    transform: 'rotate(45deg)',
    '&, &::before, &::after, & .LoadingPage__codePad__content': {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
    },
    '& .LoadingPage__codePad__content': {
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
      borderRadius: `${shape.borderRadius + 2}px`,
      animation: 'load 5s linear infinite',
    },
    '&::before': {
      animationDelay: '-2.5s',
    },
  },

  '@keyframes load': {
    '0%, 100%': {
      clip: 'rect(0px, 210px, 210px, 208px)',
    },
    '25%': {
      clip: 'rect(208px, 210px, 210px, 0px)',
    },
    '50%': {
      clip: 'rect(0px, 2px, 210px, 0px)',
    },
    '75%': {
      clip: 'rect(0px, 210px, 2px, 0px)',
    },
  },
}))
