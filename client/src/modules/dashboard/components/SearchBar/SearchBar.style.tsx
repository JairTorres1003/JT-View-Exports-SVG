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

import { searchBarClasses } from './SearchBar.classes'

export const BoxSearchBar = styled(Box, {
  name: searchBarClasses.root,
  target: searchBarClasses.root,
})(() => ({
  display: 'flex',
  padding: '16px 8px',
  justifyContent: 'center',
  [`& .${searchBarClasses.input}`]: {
    maxWidth: 600,
  },
}))

export const LabelSearchBar = styled<
  ComponentType<Omit<BoxProps, 'component' | 'children'> & { label: React.ReactNode }>
>(
  ({ label, ...props }) => (
    <Box component='span' display='flex' alignItems='center' gap='8px' {...props}>
      <IconLupe size={16} className={searchBarClasses.labelicon} />
      <Typography component='span' variant='inherit' className={searchBarClasses.label}>
        {label}
      </Typography>
    </Box>
  ),
  {
    name: searchBarClasses.labelContainer,
    target: searchBarClasses.labelContainer,
  }
)(() => ({
  [`.${inputLabelClasses.shrink} & .${searchBarClasses.labelicon}`]: {
    display: 'none',
  },
  [`.${inputBaseClasses.root} fieldset & .${searchBarClasses.labelicon}`]: {
    display: 'none',
  },
}))
