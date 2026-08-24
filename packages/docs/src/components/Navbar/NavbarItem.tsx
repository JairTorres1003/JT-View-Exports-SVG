import { cn, dataAttr } from '@site/src/lib/utils'

type NavbarItemProps<C extends React.ElementType> = {
  as?: C
  /**
   * Whether the item is active or not.
   * @default false
   */
  isActive?: boolean
} & Omit<React.ComponentPropsWithoutRef<C>, 'as' | 'isActive'>

function NavbarItem<C extends React.ElementType = 'div'>({
  as,
  className,
  children,
  isActive,
  ref,
  ...props
}: NavbarItemProps<C>) {
  const Component = as || 'li'

  return (
    <Component ref={ref} className={cn(className)} data-active={dataAttr(isActive)} {...props}>
      {children}
    </Component>
  )
}

export default NavbarItem
