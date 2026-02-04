import { useColorMode, useThemeConfig } from '@docusaurus/theme-common'
import ColorModeToggle from '@theme/ColorModeToggle'
import type { Props } from '@theme/Navbar/ColorModeToggle'
import type { ReactNode } from 'react'
import styles from './styles.module.css'

export default function NavbarColorModeToggle({ className, ...props }: Props): ReactNode {
  const navbarStyle = useThemeConfig().navbar.style
  const { disableSwitch, respectPrefersColorScheme } = useThemeConfig().colorMode
  const { colorModeChoice, setColorMode } = useColorMode()

  if (disableSwitch) {
    return null
  }

  return (
    <ColorModeToggle
      {...props}
      className={className}
      buttonClassName={navbarStyle === 'dark' ? styles.darkNavbarColorModeToggle : undefined}
      respectPrefersColorScheme={respectPrefersColorScheme}
      value={colorModeChoice}
      onChange={setColorMode}
    />
  )
}
