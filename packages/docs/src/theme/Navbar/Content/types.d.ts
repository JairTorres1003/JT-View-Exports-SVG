import { type Props as NavbarItemConfig } from '@theme/NavbarItem'

export type NavbarItemComponentProps = Partial<Omit<NavbarItemConfig, 'type'>> & {
  sidebarId?: string
  docsPluginId?: string
  label?: string
  type?: NavbarItemConfig['type'] | 'darkModeToggle' | 'divider'
  value?: string
}
