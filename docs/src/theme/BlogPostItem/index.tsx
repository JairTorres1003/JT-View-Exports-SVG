import React, { type ReactNode } from 'react'
import BlogPostItemContainer from '@theme/BlogPostItem/Container'
import BlogPostItemHeader from '@theme/BlogPostItem/Header'
import BlogPostItemContent from '@theme/BlogPostItem/Content'
import BlogPostItemFooter from '@theme/BlogPostItem/Footer'
import type { Props } from '@theme/BlogPostItem'
import { cn } from '@site/src/lib/utils'

export default function BlogPostItem({ children, className }: Props): ReactNode {
  return (
    <BlogPostItemContainer className={cn(className)}>
      <BlogPostItemHeader />
      <BlogPostItemContent>{children}</BlogPostItemContent>
      <BlogPostItemFooter />
    </BlogPostItemContainer>
  )
}
