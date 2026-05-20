import { IconButton, TextField, Tooltip } from '@mui/material'
import { useTranslation } from 'react-i18next'

import IconClose from '@/assets/icons/functionalities/close'

import { useSearchBar } from '../../hooks/useSearchBar'

import { searchBarClasses } from './SearchBar.classes'
import { BoxSearchBar, LabelSearchBar } from './SearchBar.style'

const SearchBar = (): React.ReactNode => {
  const { handleClear, handleSearch, search } = useSearchBar()

  const { t } = useTranslation()

  return (
    <BoxSearchBar>
      <TextField
        fullWidth
        variant='outlined'
        type='search'
        value={search}
        onChange={handleSearch}
        className={searchBarClasses.input}
        label={<LabelSearchBar label={t('search')} />}
        slotProps={{
          input: {
            endAdornment: (
              <Tooltip title={t('clear')}>
                <IconButton onClick={handleClear} className={searchBarClasses.clearButton}>
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

export default SearchBar
