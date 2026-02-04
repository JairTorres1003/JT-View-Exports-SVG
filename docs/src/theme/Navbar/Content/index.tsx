import { useThemeConfig } from '@docusaurus/theme-common'
import { splitNavbarItems } from '@docusaurus/theme-common/internal'
import { NavbarContent } from '@heroui/navbar'
import NavbarLogo from '@theme/Navbar/Logo'
import type { ReactNode } from 'react'

import MobileSidebarToggle from '../MobileSidebarToggle'
import NavbarContentItems from './NavbarContentItems'
import type { NavbarItemComponentProps } from './types'

export default function NavbarContentTheme(): ReactNode {
  const { navbar: { items = [] } = {} } = useThemeConfig()
  const [leftItems, rightItems] = splitNavbarItems(items as NavbarItemComponentProps[])

  return (
    <>
      <NavbarContent className='min-w-[72px]'>
        <MobileSidebarToggle />
        <NavbarLogo />
      </NavbarContent>

      <NavbarContentItems items={leftItems} className='hidden md:flex gap-4' justify='start' />
      <NavbarContentItems items={rightItems} justify='end' className='gap-1 min-w-[200px]' />
    </>
  )
}
