import Link from '@docusaurus/Link'
import { translate } from '@docusaurus/Translate'
import { useAnchorTargetClassName } from '@docusaurus/theme-common'
import useBrokenLinks from '@docusaurus/useBrokenLinks'
import { Link as HeroLink } from '@heroui/link'
import { cn } from '@site/src/lib/utils'
import type { Props } from '@theme/Heading'
import { LinkIcon } from 'lucide-react'
import type { ReactNode } from 'react'

export default function Heading({ as: As, id, className, ...props }: Props): ReactNode {
  const brokenLinks = useBrokenLinks()
  const anchorTargetClassName = useAnchorTargetClassName(id)

  // H1 headings do not need an id because they don't appear in the TOC.
  if (As === 'h1' || !id) {
    return <As {...props} id={undefined} className={cn(`text-${As}`, className)} />
  }

  brokenLinks.collectAnchor(id)

  const anchorTitle = translate(
    {
      id: 'theme.common.headingLinkTitle',
      message: 'Direct link to {heading}',
      description: 'Title for link to heading',
    },
    {
      heading: typeof props.children === 'string' ? props.children : id,
    }
  )

  return (
    <As {...props} className={cn('anchor', anchorTargetClassName, `text-${As}`, className)} id={id}>
      <HeroLink
        as={Link}
        to={`#${id}`}
        aria-label={anchorTitle}
        title={anchorTitle}
        translate='no'
        showAnchorIcon
        className='group'
        color='foreground'
        anchorIcon={
          <LinkIcon
            className='ml-1 mt-1 opacity-0 group-hover:opacity-100 transition-opacity'
            size='0.7em'
          />
        }
        style={{ font: 'inherit' }}
      >
        {props.children}
      </HeroLink>
    </As>
  )
}
