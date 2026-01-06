import React, { type ReactNode } from 'react'
import clsx from 'clsx'
import { useBlogPost } from '@docusaurus/plugin-content-blog/client'
import { ThemeClassNames } from '@docusaurus/theme-common'
import EditMetaRow from '@theme/EditMetaRow'
import TagsListInline from '@theme/TagsListInline'
import ReadMoreLink from '@theme/BlogPostItem/Footer/ReadMoreLink'
import { cn } from '@site/src/lib/utils'

export default function BlogPostItemFooter(): ReactNode {
  const { metadata, isBlogPostPage } = useBlogPost()
  const { tags, title, editUrl, hasTruncateMarker, lastUpdatedBy, lastUpdatedAt } = metadata

  // A post is truncated if it's in the "list view" and it has a truncate marker
  const truncatedPost = !isBlogPostPage && hasTruncateMarker

  const tagsExists = tags.length > 0

  const renderFooter = tagsExists || truncatedPost || editUrl

  if (!renderFooter) return null

  const canDisplayEditMetaRow = !!(editUrl || lastUpdatedAt || lastUpdatedBy)

  return (
    <footer
      className={cn('mt-4 mb-3 flex flex-col gap-3', {
        'flex-row justify-between items-center': tagsExists && truncatedPost,
        'flex-row justify-end': !tagsExists && truncatedPost,
      })}
    >
      {tagsExists && (
        <div className={ThemeClassNames.blog.blogFooterTagsRow}>
          <TagsListInline tags={tags} />
        </div>
      )}

      {canDisplayEditMetaRow && isBlogPostPage && (
        <EditMetaRow
          className={ThemeClassNames.blog.blogFooterEditMetaRow}
          editUrl={editUrl}
          lastUpdatedAt={lastUpdatedAt}
          lastUpdatedBy={lastUpdatedBy}
        />
      )}

      {truncatedPost && <ReadMoreLink blogPostTitle={title} to={metadata.permalink} />}
    </footer>
  )
}
