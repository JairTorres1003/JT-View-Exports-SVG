import Link from '@docusaurus/Link'
import { useSidebarBreadcrumbs } from '@docusaurus/plugin-content-docs/client'
import { translate } from '@docusaurus/Translate'
import useBaseUrl from '@docusaurus/useBaseUrl'
import { BreadcrumbItem, Breadcrumbs } from '@heroui/breadcrumbs'
import { Link as HeroLink } from '@heroui/link'
import DocBreadcrumbsStructuredData from '@theme/DocBreadcrumbs/StructuredData'
import { House } from 'lucide-react'
import type { ReactNode } from 'react'

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
        aria-label={translate({
          id: 'theme.docs.breadcrumbs.navAriaLabel',
          message: 'Breadcrumbs',
          description: 'The ARIA label for the breadcrumbs',
        })}
      >
        <BreadcrumbItem
          aria-label={translate({
            id: 'theme.docs.breadcrumbs.home',
            message: 'Home page',
            description: 'The ARIA label for the home page in the breadcrumbs',
          })}
        >
          <HeroLink as={Link} to={homeHref} className='text-currentColor' size='sm'>
            <House size='0.9rem' className='mr-1' />
            Home
          </HeroLink>
        </BreadcrumbItem>
        {breadcrumbs.map((item) => {
          const href = item.type === 'category' && item.linkUnlisted ? undefined : item.href

          if (!href) {
            return <BreadcrumbItem key={item.label}>{item.label}</BreadcrumbItem>
          }

          return (
            <BreadcrumbItem key={item.label}>
              <HeroLink as={Link} to={href} className='text-currentColor' size='sm'>
                {item.label}
              </HeroLink>
            </BreadcrumbItem>
          )
        })}
      </Breadcrumbs>
    </>
  )
}
