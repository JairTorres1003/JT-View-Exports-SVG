import Link from '@docusaurus/Link'
import { useSidebarBreadcrumbs } from '@docusaurus/plugin-content-docs/client'
import { translate } from '@docusaurus/Translate'
import useBaseUrl from '@docusaurus/useBaseUrl'
import { Breadcrumbs } from '@heroui/react'
import { cn } from '@site/src/lib/utils'
import DocBreadcrumbsStructuredData from '@theme/DocBreadcrumbs/StructuredData'
import { ChevronRight, House } from 'lucide-react'
import type { ReactNode } from 'react'

const BreadcrumbsSeparator = () => (
  <ChevronRight size='0.9rem' className='text-muted mx-[0.22rem] mt-[0.1rem]' />
)

export default function DocBreadcrumbs(): ReactNode {
  const breadcrumbs = useSidebarBreadcrumbs()
  const homeHref = useBaseUrl('/')

  if (!breadcrumbs) {
    return null
  }

  return (
    <>
      <DocBreadcrumbsStructuredData breadcrumbs={breadcrumbs} />

      <Breadcrumbs
        className={cn(
          '[&_>li]:p-0 [&_>li]:after:hidden',
          '[&_>li]:[&>span]:no-underline [&_>li]:[&>span]:p-0 [&_>li]:[&>span]:font-normal'
        )}
        aria-label={translate({
          id: 'theme.docs.breadcrumbs.navAriaLabel',
          message: 'Breadcrumbs',
          description: 'The ARIA label for the breadcrumbs',
        })}
        separator={<BreadcrumbsSeparator />}
      >
        <Breadcrumbs.Item
          aria-label={translate({
            id: 'theme.docs.breadcrumbs.home',
            message: 'Home page',
            description: 'The ARIA label for the home page in the breadcrumbs',
          })}
        >
          <Link to={homeHref} className='text-currentColor inline-flex items-center'>
            <House size='0.9rem' className='mr-1' />
            Home
          </Link>
        </Breadcrumbs.Item>
        {breadcrumbs.map((item) => {
          const href = item.type === 'category' && item.linkUnlisted ? undefined : item.href

          if (!href) {
            return (
              <Breadcrumbs.Item key={item.label} className='[&_>span]:cursor-default'>
                {item.label}
              </Breadcrumbs.Item>
            )
          }

          return (
            <Breadcrumbs.Item key={item.label}>
              <Link to={href} className='text-currentColor inline-flex items-center'>
                {item.label}
              </Link>
            </Breadcrumbs.Item>
          )
        })}
      </Breadcrumbs>
    </>
  )
}
