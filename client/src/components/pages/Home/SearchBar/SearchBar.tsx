import { useSearchBar } from '@home/hooks/components/useSearchBar'
import { IconButton, TextField, Tooltip } from '@mui/material'
import { useTranslation } from 'react-i18next'

import { BoxSearchBar, LabelSearchBar } from './index.style'

import { IconClose } from '@/assets/icons/functionalities'

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
