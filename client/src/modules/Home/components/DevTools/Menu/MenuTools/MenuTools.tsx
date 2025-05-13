import { IconButton, Menu, MenuItem, Portal, Tooltip } from '@mui/material'
import type { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { useMenuToolsStyles } from './MenuTools.style'

import { IconKebabHorizontal } from '@/assets/icons/navigation'
import type { TypeEditorRef } from '@/core/interfaces/components/vs/Editor'
import { useMenuTools } from '@/modules/Home/hooks/useMenuTools'

interface MenuToolsProps {
  containerId: string
  editorRef?: React.RefObject<TypeEditorRef>
  resetPlaygroundColor?: VoidFunction
}

export const MenuTools: FC<MenuToolsProps> = ({ containerId, editorRef, resetPlaygroundColor }) => {
  const { t } = useTranslation(undefined, { keyPrefix: 'DevTools' })
  const { classes } = useMenuToolsStyles()

  const { anchorEl, handleClick, handleClose, open, onReloadEditor, onReloadPlayground } =
    useMenuTools({ editorRef, resetPlaygroundColor })

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
        <MenuItem className={classes.menuItem} onClick={onReloadPlayground}>
          {t('Reload playground')}
        </MenuItem>
        {editorRef?.current && (
          <MenuItem className={classes.menuItem} onClick={onReloadEditor}>
            {t('Reload editor')}
          </MenuItem>
        )}
      </Menu>
    </>
  )
}
