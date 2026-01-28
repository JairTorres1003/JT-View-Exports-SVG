import { cn } from '@site/src/lib/utils'
import type { Props } from '@theme/BlogPostItem'
import BlogPostItemContainer from '@theme/BlogPostItem/Container'
import BlogPostItemContent from '@theme/BlogPostItem/Content'
import BlogPostItemFooter from '@theme/BlogPostItem/Footer'
import BlogPostItemHeader from '@theme/BlogPostItem/Header'
import type { ReactNode } from 'react'

export default function BlogPostItem({ children, className }: Props): ReactNode {
  return (
    <BlogPostItemContainer className={cn(className)}>
      <BlogPostItemHeader />
      <BlogPostItemContent>{children}</BlogPostItemContent>
      <BlogPostItemFooter />
    </BlogPostItemContainer>
  )
}
