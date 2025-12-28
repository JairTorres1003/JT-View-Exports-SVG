import React, { type ReactNode } from 'react'
import { useThemeConfig } from '@docusaurus/theme-common'
import { translate } from '@docusaurus/Translate'
import NavbarMobileSidebar from '@theme/Navbar/MobileSidebar'
import type { Props } from '@theme/Navbar/Layout'

import { Navbar } from '@heroui/navbar'

export default function NavbarLayout({ children }: Props): ReactNode {
  const {
    navbar: { hideOnScroll },
  } = useThemeConfig()

  return (
    <Navbar
      isBordered
      maxWidth='2xl'
      shouldHideOnScroll={hideOnScroll}
      className='navbar shadow-none'
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
