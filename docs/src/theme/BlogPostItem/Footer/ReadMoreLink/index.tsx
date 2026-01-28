import Link from '@docusaurus/Link'
import Translate, { translate } from '@docusaurus/Translate'
import { Link as HeroLink, type LinkProps } from '@heroui/link'
import type { Props } from '@theme/BlogPostItem/Footer/ReadMoreLink'
import { ArrowRight } from 'lucide-react'
import type { ReactNode } from 'react'

export default function BlogPostItemFooterReadMoreLink({
  blogPostTitle,
  ...linkProps
}: Props): ReactNode {
  return (
    <HeroLink
      aria-label={translate(
        {
          message: 'Read more about {title}',
          id: 'theme.blog.post.readMoreLabel',
          description: 'The ARIA label for the link to full blog posts from excerpts',
        },
        { title: blogPostTitle }
      )}
      {...(linkProps as LinkProps)}
      color='foreground'
      showAnchorIcon
      className='group'
      anchorIcon={
        <ArrowRight size='1rem' className='ml-1 group-hover:translate-x-1 transition-transform' />
      }
      as={Link}
    >
      <b>
        <Translate
          id='theme.blog.post.readMore'
          description='The label used in blog post item excerpts to link to full blog posts'
        >
          Read more
        </Translate>
      </b>
    </HeroLink>
  )
}
