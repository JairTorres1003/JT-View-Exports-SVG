import { useSearchBar } from '@home/hooks/components/useSearchBar'
import { Box, IconButton, TextField, Tooltip, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'

import { BoxSearchBar } from './index.style'

import { IconClose, IconLupe } from '@/assets/icons/functionalities'

function LabelSearchBar({ label }: { label: string }): React.ReactNode {
  return (
    <Box component='span' display='flex' alignItems='center' gap='8px'>
      <IconLupe size={16} className='BoxSearchBar__input-icon' />
      <Typography component='span' variant='inherit'>
        {label}
      </Typography>
    </Box>
  )
}

export const SearchBar = (): React.ReactNode => {
  const { handleClear, handleSearch, search } = useSearchBar()

  const { t } = useTranslation(undefined, { keyPrefix: 'labels' })

  return (
    <BoxSearchBar>
      <TextField
        fullWidth
        variant='outlined'
        type='search'
        value={search}
        onChange={handleSearch}
        className='BoxSearchBar__input'
        label={<LabelSearchBar label={t('search')} />}
        slotProps={{
          input: {
            endAdornment: (
              <Tooltip title={t('clear')}>
                <IconButton onClick={handleClear}>
                  <IconClose size={16} />
                </IconButton>
              </Tooltip>
            ),
          },
        }}
      />
    </BoxSearchBar>
  )
}
