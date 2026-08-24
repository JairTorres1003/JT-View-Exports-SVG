import Link from '@docusaurus/Link'
import {
  useActiveDocContext,
  useLayoutDocsSidebar,
} from '@docusaurus/plugin-content-docs/lib/client/index.js'
import NavbarItem from '@site/src/components/Navbar/NavbarItem'

import type { NavbarItemComponentProps } from './types'

export const NavbarItemLink: React.FC<NavbarItemComponentProps> = ({
  label,
  sidebarId = '',
  docsPluginId,
}) => {
  const { activeDoc } = useActiveDocContext(docsPluginId)
  const sidebarLink = useLayoutDocsSidebar(sidebarId, docsPluginId).link

  return (
    <NavbarItem as={Link} to={sidebarLink?.path} isActive={activeDoc?.sidebar === sidebarId}>
      {label ?? sidebarLink?.label}
    </NavbarItem>
  )
}
