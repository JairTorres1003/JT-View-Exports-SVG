import type { PropSidebarItemCategory, PropSidebarItemLink } from '@docusaurus/plugin-content-docs'
import type { Props } from '@theme/BlogLayout'
import { useCallback, useMemo, useState } from 'react'

export const useSidebar = (sidebar: Props['sidebar']) => {
  const [hiddenSidebar, setHiddenSidebar] = useState(false)

  const mapLinkItem = useCallback((item: Props['sidebar']['items'][0]): PropSidebarItemLink => {
    return {
      ...item,
      type: 'link',
      href: item.permalink,
      label: item.title,
      docId: item.permalink,
      unlisted: false,
    }
  }, [])

  const newSidebar = useMemo(() => {
    if (!sidebar || !sidebar.items) return []

    const groupedSidebarItems: Record<number, PropSidebarItemCategory> = sidebar.items?.reduce(
      (acc, item) => {
        const year = new Date(item.date).getFullYear()

        if (!acc[year]) {
          acc[year] = {
            type: 'category',
            label: year.toString(),
            collapsed: false,
            items: [],
            collapsible: true,
          }
        }

        acc[year].items.push(mapLinkItem(item))
        return acc
      },
      {}
    )

    return [
      mapLinkItem({
        title: 'All Posts',
        permalink: `/${sidebar.items[0]?.permalink.split('/')[1]}`,
        date: '',
        unlisted: false,
      }),
      ...Object.values(groupedSidebarItems).sort((a, b) => Number(b.label) - Number(a.label)),
    ]
  }, [sidebar, mapLinkItem])

  return {
    docSidebar: newSidebar,
    hasSidebar: newSidebar.length > 0,
    hiddenSidebar,
    setHiddenSidebar,
  }
}
