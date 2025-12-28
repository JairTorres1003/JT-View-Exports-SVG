import React, { type ReactNode } from 'react'
import { useThemeConfig } from '@docusaurus/theme-common'
import { splitNavbarItems, useNavbarMobileSidebar } from '@docusaurus/theme-common/internal'
import NavbarLogo from '@theme/Navbar/Logo'

import { NavbarContent, NavbarMenuToggle } from '@heroui/navbar'
import { NavbarItemComponentProps } from './types'
import NavbarContentItems from './NavbarContentItems'

export default function NavbarContentTheme(): ReactNode {
  const { navbar: { items = [] } = {} } = useThemeConfig()
  const mobileSidebar = useNavbarMobileSidebar()
  const [leftItems, rightItems] = splitNavbarItems(items as NavbarItemComponentProps[])

  return (
    <>
      <NavbarContent style={{ flex: 'initial' }}>
        {!mobileSidebar.disabled && <NavbarMenuToggle className='md:hidden' />}
        <NavbarLogo />
      </NavbarContent>

      <NavbarContentItems items={leftItems} className='hidden md:flex gap-4' justify='start' />
      <NavbarContentItems items={rightItems} justify='end' className='gap-1' />
    </>
  )
}
