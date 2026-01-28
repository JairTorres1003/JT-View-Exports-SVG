import { translate } from '@docusaurus/Translate'
import { useThemeConfig } from '@docusaurus/theme-common'
import { useHideableNavbar, useNavbarMobileSidebar } from '@docusaurus/theme-common/internal'
import { Navbar } from '@heroui/navbar'
import { cn } from '@site/src/lib/utils'
import type { Props } from '@theme/Navbar/Layout'
import NavbarMobileSidebar from '@theme/Navbar/MobileSidebar'
import type { ReactNode } from 'react'

export default function NavbarLayout({ children }: Props): ReactNode {
  const {
    navbar: { hideOnScroll },
  } = useThemeConfig()
  const mobileSidebar = useNavbarMobileSidebar()
  const { navbarRef } = useHideableNavbar(hideOnScroll)

  return (
    <Navbar
      ref={navbarRef}
      isMenuOpen={mobileSidebar.shown}
      onMenuOpenChange={mobileSidebar.toggle}
      isBordered
      maxWidth='2xl'
      shouldHideOnScroll={hideOnScroll}
      className={cn('navbar shadow-none', { 'navbar-sidebar--show': mobileSidebar.shown })}
      aria-label={translate({
        id: 'theme.NavBar.navAriaLabel',
        message: 'Main',
        description: 'The ARIA label for the main navigation',
      })}
    >
      {children}
      <NavbarMobileSidebar />
    </Navbar>
  )
}
