import { cn } from '@site/src/lib/utils'

export type NavbarContentProps<C extends React.ElementType = 'ul'> = {
  as?: C
  /**
   * The justify of the content
   * @default start
   */
  justify?: 'start' | 'end' | 'center'
} & Omit<React.ComponentPropsWithoutRef<C>, 'as'>

function NavbarContent<C extends React.ElementType = 'ul'>({
  as,
  className,
  ref,
  children,
  justify = 'start',
  ...props
}: NavbarContentProps<C>) {
  const Component = as || 'ul'

  return (
    <Component
      ref={ref}
      className={cn(
        'flex gap-4 h-full flex-row flex-nowrap items-center',
        'data-[justify=start]:justify-start data-[justify=start]:flex-grow data-[justify=start]:basis-0',
        'data-[justify=center]:justify-center',
        'data-[justify=end]:justify-end data-[justify=end]:flex-grow data-[justify=end]:basis-0',
        className
      )}
      data-justify={justify}
      {...props}
    >
      {children}
    </Component>
  )
}

export default NavbarContent
