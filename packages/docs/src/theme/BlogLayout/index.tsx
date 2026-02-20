import { DocsSidebarProvider } from '@docusaurus/plugin-content-docs/client'
import { useWindowSize } from '@docusaurus/theme-common'
import type { Props } from '@theme/BlogLayout'
import DocSidebar from '@theme/DocRoot/Layout/Sidebar'
import Layout from '@theme/Layout'
import type { ReactNode } from 'react'
import { useSidebar } from './hooks/useSidebar'

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
