import React, { type ReactNode } from 'react'
import { ThemeClassNames } from '@docusaurus/theme-common'
import { isActiveSidebarItem } from '@docusaurus/plugin-content-docs/client'
import Link from '@docusaurus/Link'
import isInternalUrl from '@docusaurus/isInternalUrl'
import type { Props } from '@theme/DocSidebarItem/Link'
import { Link as HeroLink } from '@heroui/link'

import { cn } from '@site/src/lib/utils'

export default function DocSidebarItemLink({
  item,
  onItemClick = () => null,
  activePath,
  level,
  index,
  ...props
}: Props): ReactNode {
  const { href, label, className, autoAddBaseUrl } = item
  const isActive = isActiveSidebarItem(item, activePath)
  const isInternalLink = isInternalUrl(href)
  return (
    <li
      key={`sidebar-item-link-${level}-${index}-[${label}]`}
      onClick={isInternalLink ? () => onItemClick(item) : undefined}
      className={cn(
        ThemeClassNames.docs.docSidebarItemLink,
        ThemeClassNames.docs.docSidebarItemLinkLevel(level),
        `rounded-md cursor-pointer my-1 transition-all ml-${level > 1 ? level : 0} relative`,
        {
          'opacity-70 font-normal hover:bg-primary/10 hover:opacity-100': !isActive,
          'opacity-100 font-medium bg-[#0d59f2]/10': isActive,
        },
        className
      )}
    >
      {isActive && (
        <span
          className={`absolute -left-${(level > 1 ? level : 0) + 2} top-0 bottom-0 my-1 w-0.5 bg-[#0d59f2] rounded-md`}
        ></span>
      )}
      <HeroLink
        as={Link}
        to={href}
        isExternal={!isInternalLink}
        showAnchorIcon={!isInternalLink}
        autoAddBaseUrl={autoAddBaseUrl}
        color={isActive ? 'primary' : 'foreground'}
        aria-current={isActive ? 'page' : undefined}
        className={cn('w-full px-2 py-1 transition-all', { 'text-[#0d59f2]': isActive })}
        {...props}
      >
        {label}
      </HeroLink>
    </li>
  )
}
