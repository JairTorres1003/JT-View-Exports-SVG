import React, { FC } from 'react'
import { NavbarContent, NavbarContentProps } from '@heroui/navbar'
import NavbarColorModeToggle from '@theme/Navbar/ColorModeToggle'

import SocialButton from '@site/src/components/SocialButton'
import { NavbarItemComponentProps } from './types'
import { NavbarItemLink } from './NavbarItem'
import { Divider } from '@heroui/divider'

interface NavbarContentItemsProps extends Omit<NavbarContentProps, 'children'> {
  items?: NavbarItemComponentProps[]
}

const CUSTOM_COMPONENTS = {
  'custom-divider': () => <Divider orientation='vertical' style={{ height: 34 }} />,
  'custom-dark-mode-toggle': NavbarColorModeToggle,
  'custom-social': SocialButton,
}

const NavbarContentItems: FC<NavbarContentItemsProps> = ({ items, ...props }) => {
  if (!items || items.length === 0) return null

  return (
    <NavbarContent {...props}>
      {items.map((item, i) => {
        if (item.type.startsWith('custom-')) {
          const CustomComponent = CUSTOM_COMPONENTS[item.type]
          return CustomComponent ? <CustomComponent key={i} config={item} /> : null
        }

        if (!item.sidebarId) return null

        return <NavbarItemLink key={i} {...item} />
      })}
    </NavbarContent>
  )
}

export default NavbarContentItems
