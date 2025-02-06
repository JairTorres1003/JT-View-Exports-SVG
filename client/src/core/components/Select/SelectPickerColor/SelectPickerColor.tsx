import { Box, ClickAwayListener, Fade, Popper, Tooltip } from '@mui/material'
import { type FC, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { ColorPicker } from '../../vs/ColorPicker'

import { IconButtonPicker } from './SelectPickerColor.style'

import type { SelectPickerColorProps } from '@/core/interfaces/components/Select/SelectPickerColor'

export const SelectPickerColor: FC<SelectPickerColorProps> = ({
  initialColor = '#fff',
  onChange = () => null,
  title,
  slotProps = { popper: {} },
  ...props
}) => {
  const [currentColor, setCurrentColor] = useState(initialColor)
  const [newColor, setNewColor] = useState(initialColor)
  const [open, setOpen] = useState(false)

  const anchorEl = useRef<HTMLButtonElement>(null)

  const { t } = useTranslation(undefined, { keyPrefix: 'labels' })

  const id = open ? 'transition-popper' : undefined

  return (
    <>
      <Tooltip title={title ?? t('Select color')}>
        <IconButtonPicker
          id={id}
          {...props}
          ref={anchorEl}
          bgColor={currentColor}
          onClick={() => {
            setOpen((prev) => !prev)
          }}
        />
      </Tooltip>
      <Popper
        sx={({ zIndex }) => ({ zIndex: zIndex.fab })}
        {...slotProps.popper}
        id={id}
        open={open}
        anchorEl={anchorEl.current}
        transition
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Box>
              <ClickAwayListener
                onClickAway={() => {
                  setOpen(false)
                  setCurrentColor(newColor)
                }}
              >
                <ColorPicker
                  currentColor={currentColor}
                  getNewColor={(_, stringColor) => {
                    setNewColor(stringColor)
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
