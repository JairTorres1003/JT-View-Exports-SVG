import Link from '@docusaurus/Link'
import {
  useActiveDocContext,
  useLayoutDocsSidebar,
} from '@docusaurus/plugin-content-docs/lib/client/index.js'
import { NavbarItem as HeroNavbarItem } from '@heroui/navbar'
import type { FC } from 'react'
import type { NavbarItemComponentProps } from './types'

export const NavbarItemLink: FC<NavbarItemComponentProps> = ({
  label,
  sidebarId = '',
  docsPluginId,
}) => {
  const { activeDoc } = useActiveDocContext(docsPluginId)
  const sidebarLink = useLayoutDocsSidebar(sidebarId, docsPluginId).link

  return (
    <HeroNavbarItem as={Link} to={sidebarLink?.path} isActive={activeDoc?.sidebar === sidebarId}>
      {label ?? sidebarLink?.label}
    </HeroNavbarItem>
  )
}
