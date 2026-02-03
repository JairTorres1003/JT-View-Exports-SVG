import { NavbarContent, type NavbarContentProps } from '@heroui/navbar'
import type { FC } from 'react'

import { CustomComponent } from '../CustomComponent'
import SearchBar from '../SearchBar/SearchBar'
import { NavbarItemLink } from './NavbarItem'
import type { NavbarItemComponentProps } from './types'

interface NavbarContentItemsProps extends Omit<NavbarContentProps, 'children'> {
  items?: NavbarItemComponentProps[]
}

const NavbarContentItems: FC<NavbarContentItemsProps> = ({ items, ...props }) => {
  if (!items || items.length === 0) return null

  return (
    <NavbarContent {...props}>
      {items.map((item) => {
        if (item.type.startsWith('custom-')) {
          return <CustomComponent key={`${item.type}-${item.id}`} {...item} />
        }

        if (item.type === 'search') {
          return <SearchBar key={item.type} />
        }

        if (!item.sidebarId) return null

        return <NavbarItemLink key={`${item.type}-${item.id}`} {...item} />
      })}
    </NavbarContent>
  )
}

export default NavbarContentItems
