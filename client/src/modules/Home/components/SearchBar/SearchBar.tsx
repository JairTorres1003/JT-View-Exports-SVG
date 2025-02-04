import { IconButton, TextField, Tooltip } from '@mui/material'
import { useTranslation } from 'react-i18next'

import { BoxSearchBar, LabelSearchBar } from './SearchBar.style'

import { IconClose } from '@/assets/icons/functionalities'
import { useSearchBar } from '@/modules/Home/hooks/useSearchBar'

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
        className='Box-SearchBar__input'
        label={<LabelSearchBar label={t('Search')} />}
        slotProps={{
          input: {
            endAdornment: (
              <Tooltip title={t('Clear')}>
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
