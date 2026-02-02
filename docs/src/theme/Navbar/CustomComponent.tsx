import { Divider } from '@heroui/divider'
import SocialButton from '@site/src/components/SocialButton'
import NavbarColorModeToggle from '@theme/Navbar/ColorModeToggle'
import { NavbarItemComponentProps } from './Content/types'

const CUSTOM_COMPONENTS = {
  'custom-divider': () => <Divider orientation='vertical' style={{ height: 34 }} />,
  'custom-dark-mode-toggle': NavbarColorModeToggle,
  'custom-social': SocialButton,
}

export const CustomComponent = (props: NavbarItemComponentProps) => {
  const Component = CUSTOM_COMPONENTS[props.type]

  if (!Component) return null

  return <Component config={props} />
}
