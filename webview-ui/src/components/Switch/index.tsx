import { Box, type BoxProps, Switch, Typography, styled } from '@mui/material'
import { useTranslation } from 'react-i18next'

import { type SwitchDarkModeProps } from '../../interfaces/styled.props'

export const SwitchDarkMode = styled(
  ({ checked = false, onChange, slotsProps, ...props }: SwitchDarkModeProps & BoxProps) => {
    const { t } = useTranslation()

    return (
      <Box {...props} onChange={() => {}}>
        <Switch size='small' {...slotsProps?.switch} onChange={onChange} checked={checked} />
        <Typography {...slotsProps?.typography}>{t(checked ? 'dark' : 'light')}</Typography>
      </Box>
    )
  }
)(({ theme }) => ({
  display: 'flex',
  textAlign: 'center',
  justifyContent: 'center',
  alignItems: 'center',
  width: 'max-content',
  gap: 5,
  '& .MuiSwitch-root': {
    padding: 0,
    '& .MuiSwitch-thumb': { boxSizing: 'border-box' },
    '& .MuiSwitch-track': {
      backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
      opacity: 1,
      transition: theme.transitions.create(['background-color'], {
        duration: 500,
      }),
    },
    '&.MuiSwitch-sizeSmall': {
      width: 34,
      height: 18,
      '& .MuiSwitch-thumb': { width: 14, height: 14 },
      '& .MuiSwitch-track': { borderRadius: 18 / 2 },
    },
    '&.MuiSwitch-sizeMedium': {
      width: 42,
      height: 26,
      '& .MuiSwitch-thumb': { width: 22, height: 22 },
      '& .MuiSwitch-track': { borderRadius: 26 / 2 },
    },
    '& .MuiSwitch-switchBase': {
      padding: 0,
      margin: 2,
      transitionDuration: '300ms',
      '& + .MuiSwitch-track': { backgroundColor: '#b0aeae' },
      '&.Mui-checked': {
        transform: 'translateX(16px)',
        color: 'rgba(0 0 0 / 50%)',
        '& + .MuiSwitch-track': {
          backgroundColor: '#889dae',
          opacity: 1,
          border: 0,
        },
        '&.Mui-disabled + .MuiSwitch-track': { opacity: 0.5 },
      },
      '&.Mui-focusVisible .MuiSwitch-thumb': {
        color: '#33cf4d',
        border: '6px solid #fff',
      },
      '&.Mui-disabled .MuiSwitch-thumb': {
        color: theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[600],
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
      },
    },
  },
  '& .MuiTypography-root': { fontSize: 13 },
}))
