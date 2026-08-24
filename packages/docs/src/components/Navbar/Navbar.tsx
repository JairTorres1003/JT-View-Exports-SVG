import { cn } from '@site/src/lib/utils'
import { forwardRef } from 'react'

interface NavbarProps extends React.HTMLAttributes<HTMLDivElement> {
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full'
  position?: 'static' | 'sticky' | 'fixed'
  isMenuOpen?: boolean
  isBordered?: boolean
}

const maxWidthClasses: Record<NonNullable<NavbarProps['maxWidth']>, string> = {
  sm: 'max-w-[640px]',
  md: 'max-w-[768px]',
  lg: 'max-w-[1024px]',
  xl: 'max-w-[1280px]',
  '2xl': 'max-w-[1536px]',
  full: 'max-w-full',
}

const Navbar = forwardRef<HTMLDivElement, React.PropsWithChildren<NavbarProps>>(
  (
    { className, maxWidth = 'lg', position = 'sticky', children, isMenuOpen, isBordered, ...props },
    ref
  ) => {
    return (
      <nav
        ref={ref}
        data-menu-open={isMenuOpen}
        className={cn(
          'flex z-40 w-full bg-background/70 backdrop-blur-lg backdrop-saturate-150',
          {
            'sticky top-0': position === 'sticky',
            'fixed top-0': position === 'fixed',
            'border-b border-separator/15': isBordered,
          },
          className
        )}
        {...props}
      >
        <header
          className={cn(
            'z-40 flex px-6 gap-4 w-full flex-row relative flex-nowrap items-center justify-between',
            maxWidth !== 'full' && maxWidthClasses[maxWidth],
            'mx-auto'
          )}
        >
          {children}
        </header>
      </nav>
    )
  }
)

export default Navbar
