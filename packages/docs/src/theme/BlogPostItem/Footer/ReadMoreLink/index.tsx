import Link from '@docusaurus/Link'
import Translate, { translate } from '@docusaurus/Translate'
import { LinkIcon } from '@heroui/react'
import { cn } from '@site/src/lib/utils'
import type { Props } from '@theme/BlogPostItem/Footer/ReadMoreLink'
import { ArrowRight } from 'lucide-react'
import type { ReactNode } from 'react'

export default function BlogPostItemFooterReadMoreLink({
  blogPostTitle,
  ...props
}: Props): ReactNode {
  return (
    <Link
      {...props}
      className={cn('group', props.className)}
      aria-label={translate(
        {
          message: 'Read more about {title}',
          id: 'theme.blog.post.readMoreLabel',
          description: 'The ARIA label for the link to full blog posts from excerpts',
        },
        { title: blogPostTitle }
      )}
    >
      <b>
        <Translate
          id='theme.blog.post.readMore'
          description='The label used in blog post item excerpts to link to full blog posts'
        >
          Read more
        </Translate>
      </b>
      <LinkIcon className='inline-block align-middle'>
        <ArrowRight className='ml-1 group-hover:translate-x-1 transition-transform' size='1rem' />
      </LinkIcon>
    </Link>
  )
}
