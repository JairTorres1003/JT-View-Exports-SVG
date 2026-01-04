import React, { type ReactNode, useEffect, useMemo } from 'react'
import {
  ThemeClassNames,
  useThemeConfig,
  usePrevious,
  Collapsible,
  useCollapsible,
} from '@docusaurus/theme-common'
import { isSamePath } from '@docusaurus/theme-common/internal'
import {
  isActiveSidebarItem,
  findFirstSidebarItemLink,
  useDocSidebarItemsExpandedState,
  useVisibleSidebarItems,
} from '@docusaurus/plugin-content-docs/client'
import Link from '@docusaurus/Link'
import useIsBrowser from '@docusaurus/useIsBrowser'
import DocSidebarItems from '@theme/DocSidebarItems'
import DocSidebarItemLink from '@theme/DocSidebarItem/Link'
import type { Props } from '@theme/DocSidebarItem/Category'

import type { PropSidebarItemCategory, PropSidebarItemLink } from '@docusaurus/plugin-content-docs'
import { cn } from '@site/src/lib/utils'
import { ChevronRight } from 'lucide-react'
import { Link as HeroLink } from '@heroui/link'

// If we navigate to a category and it becomes active, it should automatically
// expand itself
function useAutoExpandActiveCategory({
  isActive,
  collapsed,
  updateCollapsed,
  activePath,
}: {
  isActive: boolean
  collapsed: boolean
  updateCollapsed: (b: boolean) => void
  activePath: string
}) {
  const wasActive = usePrevious(isActive)
  const previousActivePath = usePrevious(activePath)
  useEffect(() => {
    const justBecameActive = isActive && !wasActive
    const stillActiveButPathChanged = isActive && wasActive && activePath !== previousActivePath
    if ((justBecameActive || stillActiveButPathChanged) && collapsed) {
      updateCollapsed(false)
    }
  }, [isActive, wasActive, collapsed, updateCollapsed, activePath, previousActivePath])
}

/**
 * When a collapsible category has no link, we still link it to its first child
 * during SSR as a temporary fallback. This allows to be able to navigate inside
 * the category even when JS fails to load, is delayed or simply disabled
 * React hydration becomes an optional progressive enhancement
 * see https://github.com/facebookincubator/infima/issues/36#issuecomment-772543188
 * see https://github.com/facebook/docusaurus/issues/3030
 */
function useCategoryHrefWithSSRFallback(item: Props['item']): string | undefined {
  const isBrowser = useIsBrowser()
  return useMemo(() => {
    if (item.href && !item.linkUnlisted) {
      return item.href
    }
    // In these cases, it's not necessary to render a fallback
    // We skip the "findFirstCategoryLink" computation
    if (isBrowser || !item.collapsible) {
      return undefined
    }
    return findFirstSidebarItemLink(item)
  }, [item, isBrowser])
}

export default function DocSidebarItemCategory(props: Props): ReactNode {
  const visibleChildren = useVisibleSidebarItems(props.item.items, props.activePath)
  if (visibleChildren.length === 0) {
    return <DocSidebarItemCategoryEmpty {...props} />
  } else {
    return <DocSidebarItemCategoryCollapsible {...props} />
  }
}

function isCategoryWithHref(
  category: PropSidebarItemCategory
): category is PropSidebarItemCategory & { href: string } {
  return typeof category.href === 'string'
}

// If a category doesn't have any visible children, we render it as a link
function DocSidebarItemCategoryEmpty({ item, ...props }: Props): ReactNode {
  // If the category has no link, we don't render anything
  // It's not super useful to render a category you can't open nor click
  if (!isCategoryWithHref(item)) {
    return null
  }
  // We remove props that don't make sense for a link and forward the rest
  const { type, collapsed, collapsible, items, linkUnlisted, ...forwardProps } = item
  const linkItem: PropSidebarItemLink = { type: 'link', ...forwardProps }
  return <DocSidebarItemLink item={linkItem} {...props} />
}

function DocSidebarItemCategoryCollapsible({
  item,
  onItemClick,
  activePath,
  level,
  index,
  ...props
}: Props): ReactNode {
  const { items, label, collapsible, className, href } = item
  const {
    docs: {
      sidebar: { autoCollapseCategories },
    },
  } = useThemeConfig()
  const hrefWithSSRFallback = useCategoryHrefWithSSRFallback(item)

  const isActive = isActiveSidebarItem(item, activePath)
  const isCurrentPage = isSamePath(href, activePath)

  const { collapsed, setCollapsed } = useCollapsible({
    // Active categories are always initialized as expanded. The default
    // (`item.collapsed`) is only used for non-active categories.
    initialState: () => {
      if (!collapsible) {
        return false
      }
      return isActive ? false : item.collapsed
    },
  })

  const { expandedItem, setExpandedItem } = useDocSidebarItemsExpandedState()
  // Use this instead of `setCollapsed`, because it is also reactive
  const updateCollapsed = (toCollapsed: boolean = !collapsed) => {
    setExpandedItem(toCollapsed ? null : index)
    setCollapsed(toCollapsed)
  }
  useAutoExpandActiveCategory({
    isActive,
    collapsed,
    updateCollapsed,
    activePath,
  })
  useEffect(() => {
    if (collapsible && expandedItem != null && expandedItem !== index && autoCollapseCategories) {
      setCollapsed(true)
    }
  }, [collapsible, expandedItem, index, setCollapsed, autoCollapseCategories])

  const handleItemClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    onItemClick?.(item)
    if (collapsible) {
      if (href) {
        // When already on the category's page, we collapse it
        // We don't use "isActive" because it would collapse the
        // category even when we browse a children element
        // See https://github.com/facebook/docusaurus/issues/11213
        if (isCurrentPage) {
          e.preventDefault()
          updateCollapsed()
        } else {
          // When navigating to a new category, we always expand
          // see https://github.com/facebook/docusaurus/issues/10854#issuecomment-2609616182
          updateCollapsed(false)
        }
      } else {
        e.preventDefault()
        updateCollapsed()
      }
    }
  }

  return (
    <li
      key={`sidebar-item-category-${level}-${index}-[${label}]`}
      className={cn(
        ThemeClassNames.docs.docSidebarItemCategory,
        ThemeClassNames.docs.docSidebarItemCategoryLevel(level),
        'menu__list-item [&_>ul]:pl-2',
        { 'menu__list-item--collapsed': collapsed },
        className
      )}
    >
      <div
        role={href ? undefined : 'button'}
        onClick={handleItemClick}
        aria-current={isCurrentPage ? 'page' : undefined}
        aria-expanded={collapsible ? !collapsed : undefined}
        aria-label={label}
        className='w-full px-2 py-1 rounded-md cursor-pointer transition-all flex items-center justify-between gap-2 hover:bg-primary/10 relative'
      >
        {href ? (
          <>
            {isCurrentPage && (
              <span className='absolute top-0 bottom-0 my-1 w-0.5 bg-[#0d59f2] rounded-md -left-2 pointer-events-none'></span>
            )}
            <HeroLink
              as={Link}
              to={collapsible ? (hrefWithSSRFallback ?? '#') : hrefWithSSRFallback}
              color={isCurrentPage ? 'primary' : 'foreground'}
              className={cn('w-full px-2 py-1 -mx-2 -my-1 transition-all ', {
                'text-[#0d59f2]': isCurrentPage,
              })}
              {...props}
              onClick={handleItemClick}
            >
              {label}
            </HeroLink>
          </>
        ) : (
          <p className='m-0 font-medium text-foreground leading-[1.5rem] text-[1rem]'>{label}</p>
        )}
        <ChevronRight
          size='1rem'
          className={cn('transition-transform inline-block', {
            'rotate-0': collapsed,
            'rotate-90': !collapsed,
          })}
        />
      </div>

      <Collapsible lazy as='ul' className='menu__list' collapsed={collapsed}>
        <DocSidebarItems
          items={items}
          tabIndex={collapsed ? -1 : 0}
          onItemClick={onItemClick}
          activePath={activePath}
          level={level + 1}
        />
      </Collapsible>
    </li>
  )
}
