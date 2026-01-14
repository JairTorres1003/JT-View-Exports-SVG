import React, { lazy, Suspense, type ReactNode, type ComponentType } from 'react'
import Link from '@docusaurus/Link'
import { Link as HeroLink, LinkProps } from '@heroui/link'

import { useAnchorTargetClassName } from '@docusaurus/theme-common'
import type { Props } from '@theme/MDXComponents/A'
import { cn } from '@site/src/lib/utils'

interface MDXAProps extends Omit<Props, 'color'> {
  color?: LinkProps['color']
}

function getMetaLink(href: string) {
  try {
    const url = new URL(href, href.startsWith('/') ? window.location.origin : undefined)
    const metaLink = url.searchParams.get('meta-props') // example: [isExternal=true;anchorIcon=external-link;showAnchorIcon=true]
    url.searchParams.delete('meta-props')

    const metaLinkObj: Record<string, string | boolean> = {}
    if (metaLink) {
      const cleanedMetaLink = metaLink.replace(/^\[|\]$/g, '') // Remove surrounding brackets
      const pairs = cleanedMetaLink.split(';')
      pairs.forEach((pair) => {
        const [key, value] = pair.split('=')
        if (key && value !== undefined) {
          // Convert 'true'/'false' strings to boolean
          metaLinkObj[key] = value === 'true' ? true : value === 'false' ? false : value
        }
      })
    }

    return {
      href: url.toString(),
      metaLink: {
        ...metaLinkObj,
        anchorIcon: metaLinkObj.anchorIcon
          ? lazy(
              async () =>
                await import('lucide-react')?.then((mod) => ({
                  default: mod[metaLinkObj.anchorIcon as string] as ComponentType<any>,
                }))
            )
          : undefined,
      },
    }
  } catch (_) {
    return { href, metaLink: null }
  }
}

export default function MDXA({ className, style, href, ...props }: MDXAProps): ReactNode {
  // MDX Footnotes have ids such as <a id="user-content-fn-1-953011" ...>
  const anchorTargetClassName = useAnchorTargetClassName(props.id)
  const metaLinkData = getMetaLink(href ?? '')

  return (
    <HeroLink
      color='foreground'
      {...metaLinkData?.metaLink}
      anchorIcon={
        metaLinkData?.metaLink?.anchorIcon && (
          <Suspense>
            <metaLinkData.metaLink.anchorIcon size='1rem' className='mx-1' />
          </Suspense>
        )
      }
      {...props}
      as={Link}
      href={metaLinkData.href}
      className={cn(anchorTargetClassName, className)}
      style={{ font: 'inherit', ...style }}
    >
      {props.children}
    </HeroLink>
  )
}
