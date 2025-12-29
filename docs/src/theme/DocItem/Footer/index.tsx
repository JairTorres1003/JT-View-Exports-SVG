import React, { type ReactNode } from 'react'
import { ThemeClassNames } from '@docusaurus/theme-common'
import { useDoc } from '@docusaurus/plugin-content-docs/client'
import TagsListInline from '@theme/TagsListInline'

import EditMetaRow from '@theme/EditMetaRow'
import { cn } from '@site/src/lib/utils'

export default function DocItemFooter(): ReactNode {
  const { metadata } = useDoc()
  const { editUrl, lastUpdatedAt, lastUpdatedBy, tags } = metadata

  const canDisplayTagsRow = tags.length > 0
  const canDisplayEditMetaRow = !!(editUrl || lastUpdatedAt || lastUpdatedBy)

  const canDisplayFooter = canDisplayTagsRow || canDisplayEditMetaRow

  if (!canDisplayFooter) {
    return null
  }

  return (
    <footer className={cn(ThemeClassNames.docs.docFooter, 'mt-4 mb-3 flex flex-col gap-3')}>
      {canDisplayTagsRow && (
        <div className={ThemeClassNames.docs.docFooterTagsRow}>
          <TagsListInline tags={tags} />
        </div>
      )}
      {canDisplayEditMetaRow && (
        <EditMetaRow
          className={ThemeClassNames.docs.docFooterEditMetaRow}
          editUrl={editUrl}
          lastUpdatedAt={lastUpdatedAt}
          lastUpdatedBy={lastUpdatedBy}
        />
      )}
    </footer>
  )
}
