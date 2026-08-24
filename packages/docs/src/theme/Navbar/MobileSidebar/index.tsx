import { useNavbarMobileSidebar } from '@docusaurus/theme-common/internal'
import { Portal } from '@site/src/components/Portal/Portal'
import { cn } from '@site/src/lib/utils'
import NavbarMobileSidebarSecondaryMenu from '@theme/Navbar/MobileSidebar/SecondaryMenu'
import { AnimatePresence, domAnimation, LazyMotion, m } from 'framer-motion'

export default function NavbarMobileSidebar() {
  const mobileSidebar = useNavbarMobileSidebar()

  return (
    <AnimatePresence>
      {mobileSidebar.shouldRender && mobileSidebar.shown && (
        <Portal>
          <LazyMotion features={domAnimation}>
            <m.div
              layoutScroll
              data-open={mobileSidebar.shown}
              exit={{ x: '-100%' }}
              initial={{ x: '-100%' }}
              animate={{ x: '0%' }}
              transition={{ type: 'tween', duration: 0.2 }}
              className={cn(
                'z-30 px-6 pt-2 fixed flex max-w-full top-[var(--header-height)] inset-x-0 bottom-0 w-screen',
                'flex-col overflow-y-auto backdrop-blur-xl backdrop-saturate-150 bg-background'
              )}
            >
              <NavbarMobileSidebarSecondaryMenu />
            </m.div>
          </LazyMotion>
        </Portal>
      )}
    </AnimatePresence>
  )
}
