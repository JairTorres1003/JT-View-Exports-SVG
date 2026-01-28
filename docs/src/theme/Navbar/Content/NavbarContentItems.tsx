import { Divider } from '@heroui/divider'
import { NavbarContent, type NavbarContentProps } from '@heroui/navbar'
import SocialButton from '@site/src/components/SocialButton'
import NavbarColorModeToggle from '@theme/Navbar/ColorModeToggle'
import type { FC } from 'react'
import { NavbarItemLink } from './NavbarItem'
import type { NavbarItemComponentProps } from './types'

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
      {items.map((item) => {
        if (item.type.startsWith('custom-')) {
          const CustomComponent = CUSTOM_COMPONENTS[item.type]
          return CustomComponent ? (
            <CustomComponent key={`${item.type}-${item.id}`} config={item} />
          ) : null
        }

        if (!item.sidebarId) return null

        return <NavbarItemLink key={`${item.type}-${item.id}`} {...item} />
      })}
    </NavbarContent>
  )
}

export default NavbarContentItems
