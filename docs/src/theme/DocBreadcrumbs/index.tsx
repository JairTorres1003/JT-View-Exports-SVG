import React, { type ReactNode } from 'react'
import { useSidebarBreadcrumbs } from '@docusaurus/plugin-content-docs/client'
import Link from '@docusaurus/Link'
import { translate } from '@docusaurus/Translate'
import DocBreadcrumbsStructuredData from '@theme/DocBreadcrumbs/StructuredData'

import { BreadcrumbItem, Breadcrumbs } from '@heroui/breadcrumbs'
import { House } from 'lucide-react'
import useBaseUrl from '@docusaurus/useBaseUrl'
import { Link as HeroLink } from '@heroui/link'

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
