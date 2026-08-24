import Link from '@docusaurus/Link'
import Translate from '@docusaurus/Translate'
import { ThemeClassNames } from '@docusaurus/theme-common'
import { LinkIcon } from '@heroui/react'
import { cn } from '@site/src/lib/utils'
import type { Props } from '@theme/EditThisPage'
import { Edit3 } from 'lucide-react'
import type { ReactNode } from 'react'

export default function EditThisPage({ editUrl }: Props): ReactNode {
  return (
    <Link
      rel='tag'
      to={editUrl}
      color='foreground'
      className={cn(
        ThemeClassNames.common.editThisPage,
        'no-underline hover:opacity-75 transition-opacity font-medium'
      )}
    >
      <LinkIcon className='inline-block align-middle'>
        <Edit3 size='1rem' className='mr-1' />
      </LinkIcon>

      <Translate
        id='theme.common.editThisPage'
        description='The link label to edit the current page'
      >
        Edit this page
      </Translate>
    </Link>
  )
}
