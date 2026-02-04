import { Box, ClickAwayListener, Fade, Popper, Tooltip } from '@mui/material'
import type { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { useSelectPickerColor } from '@/core/hooks/useSelectPickerColor'
import type { SelectPickerColorProps } from '@/core/types/components/Select/SelectPickerColor'

import { ColorPicker } from '../../vs/ColorPicker'

import { IconButtonPicker } from './SelectPickerColor.style'

const SelectPickerColor: FC<SelectPickerColorProps> = ({
  initialColor = '#fff',
  onChange = () => null,
  title,
  onChangeComplete = () => null,
  value,
  slotProps = { popper: {} },
  ...props
}) => {
  const { t } = useTranslation(undefined, { keyPrefix: 'pickers' })
  const {
    open,
    anchorEl,
    currentColor,
    handleToggle,
    handleKeyDown,
    handleClickAway,
    handleChangeColor,
  } = useSelectPickerColor({
    onChangeComplete,
    initialColor,
    value,
  })

  const id = open ? 'transition-popper' : undefined

  return (
    <>
      <Tooltip title={title ?? t('color.title')}>
        <IconButtonPicker
          id={id}
          {...props}
          ref={anchorEl}
          bgColor={currentColor}
          onClick={handleToggle}
          onKeyDown={handleKeyDown}
        />
      </Tooltip>
      <Popper
        sx={({ zIndex }) => ({ zIndex: zIndex.fab })}
        {...slotProps.popper}
        id={id}
        open={open}
        anchorEl={anchorEl.current}
        transition
        onKeyDown={handleKeyDown}
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Box>
              <ClickAwayListener onClickAway={handleClickAway}>
                <ColorPicker
                  currentColor={currentColor}
                  onChange={(_, stringColor) => {
                    handleChangeColor(stringColor)
                    onChange(stringColor)
                  }}
                />
              </ClickAwayListener>
            </Box>
          </Fade>
        )}
      </Popper>
    </>
  )
}

export default SelectPickerColor
