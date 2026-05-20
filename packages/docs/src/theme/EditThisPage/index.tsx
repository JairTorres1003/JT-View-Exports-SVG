import Link from '@docusaurus/Link'
import Translate from '@docusaurus/Translate'
import { ThemeClassNames } from '@docusaurus/theme-common'
import { Link as HeroLink } from '@heroui/link'
import type { Props } from '@theme/EditThisPage'
import { Edit3 } from 'lucide-react'
import type { ReactNode } from 'react'

export default function EditThisPage({ editUrl }: Props): ReactNode {
  return (
    <HeroLink
      as={Link}
      rel='tag'
      to={editUrl}
      color='foreground'
      className={ThemeClassNames.common.editThisPage}
    >
      <Edit3 size='1rem' className='mr-1' />
      <Translate
        id='theme.common.editThisPage'
        description='The link label to edit the current page'
      >
        Edit this page
      </Translate>
    </HeroLink>
  )
}
