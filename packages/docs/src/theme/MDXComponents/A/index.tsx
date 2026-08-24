import Link from '@docusaurus/Link'
import { useAnchorTargetClassName } from '@docusaurus/theme-common'
import { LinkIcon } from '@heroui/react'
import { cn } from '@site/src/lib/utils'
import type { Props } from '@theme/MDXComponents/A'
import { type ReactNode, useMemo } from 'react'
import { getMetaLink } from './utils/metadata'

export default function MDXA({ className, style, href, ...props }: Props): ReactNode {
  // MDX Footnotes have ids such as <a id="user-content-fn-1-953011" ...>
  const anchorTargetClassName = useAnchorTargetClassName(props.id)
  const { icon: Icon, ...metaLinkProps } = useMemo(() => getMetaLink(href ?? ''), [href])

  return (
    <Link
      {...props}
      {...metaLinkProps}
      className={cn('no-underline font-medium', anchorTargetClassName, className)}
      style={{ font: 'inherit', ...style }}
    >
      {props.children}

      {Icon && (
        <LinkIcon className='inline-block align-middle'>
          <Icon className='ml-1' size='1rem' />
        </LinkIcon>
      )}
    </Link>
  )
}
