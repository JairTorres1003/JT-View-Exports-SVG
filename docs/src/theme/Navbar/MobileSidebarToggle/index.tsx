import { useNavbarMobileSidebar } from '@docusaurus/theme-common/internal'
import { NavbarMenuToggle } from '@heroui/navbar'
import { cn } from '@site/src/lib/utils'
import { Menu, XIcon } from 'lucide-react'

const MobileSidebarToggle = () => {
  const mobileSidebar = useNavbarMobileSidebar()
  const isHomepage = window?.location?.pathname === '/'

  if (mobileSidebar.disabled || isHomepage) return

  return (
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
  )
}

export default MobileSidebarToggle
