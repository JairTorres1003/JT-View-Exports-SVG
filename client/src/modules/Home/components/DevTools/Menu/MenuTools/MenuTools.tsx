import { IconButton, Menu, MenuItem, Portal, Tooltip } from '@mui/material'
import { type FC, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { useMenuToolsStyles } from './MenuTools.style'

import { IconKebabHorizontal } from '@/assets/icons/navigation'
import type { TypeEditorRef } from '@/core/interfaces/components/vs/Editor'

interface MenuToolsProps {
  containerId: string
  editorRef?: React.RefObject<TypeEditorRef>
}

export const MenuTools: FC<MenuToolsProps> = ({ containerId, editorRef }) => {
  const { t } = useTranslation(undefined, { keyPrefix: 'DevTools' })
  const { classes } = useMenuToolsStyles()

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <Portal container={document.getElementById(containerId)}>
        <Tooltip title={t('More actions...')} placement='bottom-end'>
          <IconButton
            sx={{ marginRight: '4px' }}
            id='playground-settings-button'
            aria-controls={open ? 'playground-settings-menu' : undefined}
            aria-haspopup='true'
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            <IconKebabHorizontal size={16} />
          </IconButton>
        </Tooltip>
      </Portal>

      <Menu
        id='playground-settings-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        marginThreshold={0}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        slotProps={{
          list: { 'aria-labelledby': 'playground-settings-button', sx: { p: '5px' } },
          paper: { className: classes.paper },
        }}
      >
        {editorRef?.current && (
          <MenuItem
            className={classes.menuItem}
            onClick={() => {
              editorRef?.current?.editor?.reload()
              handleClose()
            }}
          >
            {t('Reload editor')}
          </MenuItem>
        )}
      </Menu>
    </>
  )
}
