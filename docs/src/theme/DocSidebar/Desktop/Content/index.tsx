import React, { type ReactNode } from 'react'
import { ThemeClassNames } from '@docusaurus/theme-common'
import { translate } from '@docusaurus/Translate'
import DocSidebarItems from '@theme/DocSidebarItems'
import type { Props } from '@theme/DocSidebar/Desktop/Content'

import { cn } from '@site/src/lib/utils'

export default function DocSidebarDesktopContent({ path, sidebar, className }: Props): ReactNode {
  return (
    <nav
      aria-label={translate({
        id: 'theme.docs.sidebar.navAriaLabel',
        message: 'Docs sidebar',
        description: 'The ARIA label for the sidebar navigation',
      })}
      className={cn('overflow-y-auto overscroll-contain h-full p-4 thin-scrollbar', className)}
    >
      <ul className={cn(ThemeClassNames.docs.docSidebarMenu, 'm-0 p-0 list-none -my-1')}>
        <DocSidebarItems items={sidebar} activePath={path} level={1} />
      </ul>
    </nav>
  )
}
