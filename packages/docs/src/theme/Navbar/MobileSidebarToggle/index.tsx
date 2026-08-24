import { useNavbarMobileSidebar } from '@docusaurus/theme-common/internal'
import { Button } from '@heroui/react'
import { cn } from '@site/src/lib/utils'
import { Menu, XIcon } from 'lucide-react'
import { useEffect, useState } from 'react'

const MobileSidebarToggle = () => {
  const mobileSidebar = useNavbarMobileSidebar()
  const [isHomepage, setIsHomepage] = useState(false)

  useEffect(() => {
    setIsHomepage(window.location.pathname === '/')
  }, [])

  if (mobileSidebar.disabled || isHomepage) return

  return (
    <Button
      size='sm'
      isIconOnly
      variant='ghost'
      onClick={mobileSidebar.toggle}
      className='[@media(min-width:997px)]:hidden w-8 h-8'
      aria-label={mobileSidebar.shown ? 'Close menu' : 'Open menu'}
    >
      <Menu
        className={cn('transition-all w-6 h-6', { 'rotate-90 opacity-0': mobileSidebar.shown })}
      />
      <XIcon
        className={cn('absolute transition-all opacity-0 -rotate-90 w-6 h-6', {
          'rotate-0 opacity-100': mobileSidebar.shown,
        })}
      />
    </Button>
  )
}

export default MobileSidebarToggle
