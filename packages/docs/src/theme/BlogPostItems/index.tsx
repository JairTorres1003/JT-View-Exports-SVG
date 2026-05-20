import { BlogPostProvider } from '@docusaurus/plugin-content-blog/client'
import { Card, CardBody } from '@heroui/card'
import BlogPostItem from '@theme/BlogPostItem'
import type { Props } from '@theme/BlogPostItems'
import type { ReactNode } from 'react'

export default function BlogPostItems({
  items,
  component: BlogPostItemComponent = BlogPostItem,
}: Props): ReactNode {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
      {items.map(({ content: BlogPostContent }) => {
        return (
          <Card
            shadow='none'
            className='border-2 border-primary/20 p-2 [&_header_h2]:m-0 [&_footer]:m-0'
            key={BlogPostContent.metadata.permalink}
          >
            <CardBody className='p-2'>
              <BlogPostProvider key={BlogPostContent.metadata.permalink} content={BlogPostContent}>
                <BlogPostItemComponent>
                  <BlogPostContent />
                </BlogPostItemComponent>
              </BlogPostProvider>
            </CardBody>
          </Card>
        )
      })}
    </div>
  )
}
