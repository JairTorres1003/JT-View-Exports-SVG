import { translate } from '@docusaurus/Translate'
import { useThemeConfig } from '@docusaurus/theme-common'
import { useHideableNavbar, useNavbarMobileSidebar } from '@docusaurus/theme-common/internal'
import Navbar from '@site/src/components/Navbar/Navbar'
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
      isBordered
      isMenuOpen={mobileSidebar.shown}
      maxWidth='2xl'
      className={cn('navbar shadow-none overflow-hidden bg-background', {
        'navbar-sidebar--show': mobileSidebar.shown,
      })}
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
