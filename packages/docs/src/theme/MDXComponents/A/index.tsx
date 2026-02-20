import Link from '@docusaurus/Link'
import { useAnchorTargetClassName } from '@docusaurus/theme-common'
import { Link as HeroLink, type LinkProps } from '@heroui/link'
import { cn } from '@site/src/lib/utils'
import type { Props } from '@theme/MDXComponents/A'
import { type ReactNode, Suspense, useMemo } from 'react'
import { getMetaLink } from './utils/metadata'

interface MDXAProps extends Omit<Props, 'color'> {
  color?: LinkProps['color']
}

export default function MDXA({ className, style, href, ...props }: MDXAProps): ReactNode {
  // MDX Footnotes have ids such as <a id="user-content-fn-1-953011" ...>
  const anchorTargetClassName = useAnchorTargetClassName(props.id)
  const metaLinkData = useMemo(() => getMetaLink(href ?? ''), [href])

  return (
    <HeroLink
      color='foreground'
      {...metaLinkData?.metaLink}
      anchorIcon={
        metaLinkData?.metaLink?.anchorIcon && (
          <Suspense fallback={null}>
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
