import {
  useActiveDocContext,
  useLayoutDocsSidebar,
} from '@docusaurus/plugin-content-docs/lib/client/index.js'
import { NavbarItem as HeroNavbarItem } from '@heroui/navbar'
import React, { FC } from 'react'
import { NavbarItemComponentProps } from './types'
import Link from '@docusaurus/Link'

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
