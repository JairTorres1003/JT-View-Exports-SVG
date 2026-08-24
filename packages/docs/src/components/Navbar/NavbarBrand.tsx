import { cn } from '@site/src/lib/utils'

type NavbarBrandProps<C extends React.ElementType> = {
  as?: C
} & Omit<React.ComponentPropsWithoutRef<C>, 'as'>

function NavbarBrand<C extends React.ElementType = 'div'>({
  as,
  className,
  children,
  ref,
  ...props
}: NavbarBrandProps<C>) {
  const Component = as || 'div'

  return (
    <Component
      ref={ref}
      className={cn(
        'basis-0 flex-row flex-grow flex-nowrap justify-start bg-transparent no-underline text-medium whitespace-nowrap box-border',
        className
      )}
      {...props}
    >
      {children}
    </Component>
  )
}

export default NavbarBrand
