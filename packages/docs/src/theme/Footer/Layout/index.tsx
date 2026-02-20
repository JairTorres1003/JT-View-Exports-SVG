import { ThemeClassNames } from '@docusaurus/theme-common'
import type { Props } from '@theme/Footer/Layout'
import clsx from 'clsx'
import type { ReactNode } from 'react'

export default function FooterLayout({ links, logo, copyright }: Props): ReactNode {
  return (
    <footer
      className={clsx(
        ThemeClassNames.layout.footer.container,
        'footer bg-secondary-50 border-divider border-t'
      )}
    >
      <div className='px-4 py-8 md:px-8 container mx-auto max-w-[1112px]'>
        {links}
        {(logo || copyright) && (
          <div className='footer__bottom text--center'>
            {logo && <div className='margin-bottom--sm'>{logo}</div>}
            {copyright}
          </div>
        )}
      </div>
    </footer>
  )
}
