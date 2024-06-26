import { Box, IconButton, Typography } from '@mui/material'
import { type FC } from 'react'
import { useTranslation } from 'react-i18next'

import useFinder from '../../hooks/useFinder'
import { IconClose, IconLupe } from '../../icons'
import { type FinderProps } from '../../interfaces/Finder'

import { BoxFinder, TextField } from './Finder.style'

export const Finder: FC<FinderProps> = ({
  isOpenPanel = false,
  refPortalButton,
  handleSvgComponents,
}) => {
  const { handleClearValue, setValue, value } = useFinder({
    handleSvgComponents,
    refPortalButton,
    isOpenPanel,
  })
  const { t } = useTranslation()

  return (
    <Box
      display='flex'
      sx={{
        gap: isOpenPanel ? 0 : '10px',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <BoxFinder>
        <TextField
          fullWidth
          size='small'
          type='search'
          value={value}
          id='finder-svg'
          variant='outlined'
          label={
            <Box className='MuiFormLabel-finder'>
              <IconLupe />
              <Typography>{t('Label.SearchIcons')}</Typography>
            </Box>
          }
          onChange={(val) => {
            setValue(val.target.value.trimStart())
          }}
          InputProps={{
            endAdornment: (
              <IconButton size='small' onClick={handleClearValue} title={t('Label.Clear')}>
                <IconClose />
              </IconButton>
            ),
          }}
        />
      </BoxFinder>
      <div ref={refPortalButton} />
    </Box>
  )
}
