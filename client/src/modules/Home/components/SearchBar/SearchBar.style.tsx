import {
  Box,
  type BoxProps,
  inputBaseClasses,
  inputLabelClasses,
  styled,
  Typography,
} from '@mui/material'
import type { ComponentType } from 'react'

import { IconLupe } from '@/assets/icons/functionalities'

export const BoxSearchBar = styled(Box, { name: 'Box-SearchBar' })(() => ({
  display: 'flex',
  padding: '16px 8px',
  justifyContent: 'center',
  '& .Box-SearchBar__input': {
    maxWidth: 600,
  },
}))

export const LabelSearchBar = styled<
  ComponentType<Omit<BoxProps, 'component' | 'children'> & { label: React.ReactNode }>
>(
  ({ label, ...props }) => (
    <Box component='span' display='flex' alignItems='center' gap='8px' {...props}>
      <IconLupe size={16} className='LabelSearchBar__icon' />
      <Typography component='span' variant='inherit' className='LabelSearchBar__text'>
        {label}
      </Typography>
    </Box>
  ),
  { name: 'LabelSearchBar' }
)(() => ({
  [`.${inputLabelClasses.shrink} & .LabelSearchBar__icon`]: {
    display: 'none',
  },
  [`.${inputBaseClasses.root} fieldset & .LabelSearchBar__icon`]: {
    display: 'none',
  },
}))
