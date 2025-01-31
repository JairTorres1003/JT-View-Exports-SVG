import { type SelectPickerColorProps } from '@home/interfaces/DevTools/SelectPickerColor'
import { Box, ClickAwayListener, Fade, Popper, Tooltip } from '@mui/material'
import { type FC, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { IconButtonPicker } from './SelectPickerColor.style'

import { ColorPicker } from '@/components/vs/ColorPicker'

export const SelectPickerColor: FC<SelectPickerColorProps> = ({
  color = '#fff',
  onChange = () => {},
  title,
  slotProps,
  ...props
}) => {
  const [currentColor, setCurrentColor] = useState(color)
  const [newColor, setNewColor] = useState(color)
  const [open, setOpen] = useState(false)

  const anchorEl = useRef<HTMLButtonElement>(null)

  const { t } = useTranslation(undefined, { keyPrefix: 'labels' })

  const id = open ? 'transition-popper' : undefined

  return (
    <>
      <Tooltip title={title ?? t('Select color')} placement='top'>
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
        {...(slotProps?.popper ?? {})}
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
