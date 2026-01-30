import Translate from '@docusaurus/Translate'
import Tag from '@theme/Tag'
import type { Props } from '@theme/TagsListInline'
import { Tags } from 'lucide-react'
import type { ReactNode } from 'react'

export default function TagsListInline({ tags }: Props): ReactNode {
  return (
    <>
      <b>
        <Tags size='1rem' className='inline mr-1' />
        <Translate id='theme.tags.tagsListLabel' description='The label alongside a tag list'>
          Tags:
        </Translate>
      </b>
      <ul className='inline-flex flex-wrap gap-2 m-0 p-0 list-none ml-2'>
        {tags.map((tag) => (
          <li key={tag.permalink}>
            <Tag {...tag} />
          </li>
        ))}
      </ul>
    </>
  )
}
