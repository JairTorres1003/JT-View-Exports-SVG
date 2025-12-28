import React, { type ReactNode } from 'react'
import DocSidebarItemCategory from '@theme/DocSidebarItem/Category'
import DocSidebarItemLink from '@theme/DocSidebarItem/Link'
import type { Props } from '@theme/DocSidebarItem'

export default function DocSidebarItem({ item, ...props }: Props): ReactNode {
  if (item.type === 'category') return <DocSidebarItemCategory item={item} {...props} />

  if (item.type === 'link') return <DocSidebarItemLink item={item} {...props} />

  return null
}
