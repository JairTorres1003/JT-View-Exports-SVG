import { Divider, IconButton, Menu, MenuItem, Tooltip } from '@mui/material'
import type { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import IconKebabHorizontal from '@/assets/icons/navigation/kebab-horizontal'
import { useMenu } from '@/core/hooks/useMenu'
import { useSVGActions } from '@/core/hooks/useSVGActions'

interface MenuToolsProps {
  svgRef: React.RefObject<SVGElement | null>
}

const MenuMoreActions: FC<MenuToolsProps> = ({ svgRef }) => {
  const { t } = useTranslation(undefined, { keyPrefix: 'DevTools' })

  const { anchorEl, handleClick, handleClose, open } = useMenu()
  const actions = useSVGActions({ svgRef })

  const recentlySelected = useSelector((state) => state.playground.recentlySelected)

  if (!recentlySelected) return null

  return (
    <>
      <Tooltip title={t('playground.MoreActions')} placement='bottom-end'>
        <IconButton
          id='playground-menu-actions-button'
          aria-controls={open ? 'playground-menu-actions-menu' : undefined}
          aria-haspopup='true'
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          <IconKebabHorizontal size={16} />
        </IconButton>
      </Tooltip>

      <Menu
        id='playground-menu-actions-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        slotProps={{
          list: { 'aria-labelledby': 'playground-menu-actions-button' },
        }}
      >
        {actions.map((action) => {
          if ('isDivider' in action) return <Divider key={action.id} />

          return (
            <MenuItem
              key={action.id}
              onClick={() => {
                action.onClick?.(recentlySelected)
                handleClose()
              }}
            >
              {action.label}
            </MenuItem>
          )
        })}
      </Menu>
    </>
  )
}

export default MenuMoreActions
