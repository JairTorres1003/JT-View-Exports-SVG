import { useNavbarMobileSidebar } from '@docusaurus/theme-common/internal'
import { NavbarMenu, NavbarMenuItem } from '@heroui/navbar'
import NavbarMobileSidebarSecondaryMenu from '@theme/Navbar/MobileSidebar/SecondaryMenu'
import type { ReactNode } from 'react'

export default function NavbarMobileSidebar(): ReactNode {
  const mobileSidebar = useNavbarMobileSidebar()

  if (!mobileSidebar.shouldRender) return null

  return (
    <NavbarMenu
      className='bg-background'
      motionProps={{
        exit: { x: '-100%' },
        initial: { x: '-100%' },
        animate: { x: '0%' },
        transition: { type: 'tween', duration: 0.2 },
      }}
    >
      <NavbarMenuItem>
        <NavbarMobileSidebarSecondaryMenu />
      </NavbarMenuItem>
    </NavbarMenu>
  )
}
