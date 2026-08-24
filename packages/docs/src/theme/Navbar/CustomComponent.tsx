import { Separator } from '@heroui/react'
import SocialButton from '@site/src/components/SocialButton'
import NavbarColorModeToggle from '@theme/Navbar/ColorModeToggle'
import type { NavbarItemComponentProps } from './Content/types'

const CUSTOM_COMPONENTS = {
  'custom-divider': () => (
    <Separator orientation='vertical' className='h-8 my-auto bg-separator/15' />
  ),
  'custom-dark-mode-toggle': NavbarColorModeToggle,
  'custom-social': SocialButton,
}

export const CustomComponent = (props: NavbarItemComponentProps) => {
  if (!props.type) return null

  const Component = CUSTOM_COMPONENTS[props.type as keyof typeof CUSTOM_COMPONENTS]

  if (!Component) return null

  // biome-ignore lint/suspicious/noExplicitAny: No need to type this, it's just a wrapper for any component
  return <Component config={props as any} />
}
