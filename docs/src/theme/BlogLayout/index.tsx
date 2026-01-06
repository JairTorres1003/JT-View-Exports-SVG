import React, { useCallback, useMemo, useState, type ReactNode } from 'react'
import Layout from '@theme/Layout'
import DocSidebar from '@theme/DocRoot/Layout/Sidebar'
import type { PropSidebarItemCategory, PropSidebarItemLink } from '@docusaurus/plugin-content-docs'
import { DocsSidebarProvider } from '@docusaurus/plugin-content-docs/client'

import type { Props } from '@theme/BlogLayout'
import { useWindowSize } from '@docusaurus/theme-common'

const useSidebar = (sidebar: Props['sidebar']) => {
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

    return Object.values(groupedSidebarItems).sort((a, b) => Number(b.label) - Number(a.label))
  }, [sidebar])

  return {
    docSidebar: newSidebar,
    hasSidebar: newSidebar.length > 0,
    hiddenSidebar,
    setHiddenSidebar,
  }
}

export default function BlogLayout({ sidebar, toc, children, ...layoutProps }: Props): ReactNode {
  const { docSidebar, hiddenSidebar, setHiddenSidebar } = useSidebar(sidebar)
  const windowSize = useWindowSize()

  return (
    <Layout {...layoutProps}>
      <div className='w-full col flex'>
        <DocsSidebarProvider items={docSidebar} name='blog-sidebar'>
          <DocSidebar
            sidebar={docSidebar}
            hiddenSidebarContainer={hiddenSidebar}
            setHiddenSidebarContainer={setHiddenSidebar}
          />
        </DocsSidebarProvider>
        <main className='w-full flex-grow py-4 flex'>
          <div className='px-4 container mx-auto max-w-[1112px]'>{children}</div>
          {toc && (windowSize === 'desktop' || windowSize === 'ssr') && (
            <div className='col col--3 [@media(max-width:997px)]:hidden'>{toc}</div>
          )}
        </main>
      </div>
    </Layout>
  )
}
