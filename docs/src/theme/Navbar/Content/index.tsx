import { useThemeConfig } from '@docusaurus/theme-common'
import { splitNavbarItems, useNavbarMobileSidebar } from '@docusaurus/theme-common/internal'
import { NavbarContent, NavbarMenuToggle } from '@heroui/navbar'
import { cn } from '@site/src/lib/utils'
import NavbarLogo from '@theme/Navbar/Logo'
import { Menu, XIcon } from 'lucide-react'
import type { ReactNode } from 'react'
import NavbarContentItems from './NavbarContentItems'
import type { NavbarItemComponentProps } from './types'

export default function NavbarContentTheme(): ReactNode {
  const { navbar: { items = [] } = {} } = useThemeConfig()
  const mobileSidebar = useNavbarMobileSidebar()
  const [leftItems, rightItems] = splitNavbarItems(items as NavbarItemComponentProps[])

  return (
    <>
      <NavbarContent style={{ flex: 'initial' }}>
        {!mobileSidebar.disabled && (
          <NavbarMenuToggle
            className='[@media(min-width:997px)]:hidden'
            icon={(isOpen) => (
              <>
                <Menu className={cn('transition-all', { 'rotate-90 opacity-0': isOpen })} />
                <XIcon
                  className={cn('absolute transition-all opacity-0 -rotate-90', {
                    'rotate-0 opacity-100': isOpen,
                  })}
                />
              </>
            )}
          />
        )}
        <NavbarLogo />
      </NavbarContent>

      <NavbarContentItems items={leftItems} className='hidden md:flex gap-4' justify='start' />
      <NavbarContentItems items={rightItems} justify='end' className='gap-1' />
    </>
  )
}
