import Link from '@docusaurus/Link'
import { useThemeConfig } from '@docusaurus/theme-common'
import useBaseUrl from '@docusaurus/useBaseUrl'
import { NavbarBrand } from '@heroui/navbar'
import { cn } from '@site/src/lib/utils'
import Image from '@theme/IdealImage'
import type { ReactNode } from 'react'

import styles from './logo.module.css'

export default function NavbarLogo(): ReactNode {
  const {
    navbar: { title, logo },
  } = useThemeConfig()
  const logoLink = useBaseUrl(logo?.href || '/')

  return (
    <NavbarBrand
      as={Link}
      to={logoLink}
      target={logo?.target}
      className={cn('inline-flex items-center gap-2 min-w-8', styles.navbar_brand)}
    >
      {logo && (
        <picture>
          {logo.srcDark && (
            <>
              <source srcSet={logo.srcDark} media='(prefers-color-scheme: dark)' />
              <source
                srcSet={logo.src}
                media='(prefers-color-scheme: light), (prefers-color-scheme: no-preference)'
              />
            </>
          )}

          <Image
            className={logo.className}
            img={logo.src}
            alt={logo.alt ?? title}
            width={logo.width}
            height={logo.height}
            style={logo.style}
          />
        </picture>
      )}

      {title && (
        <span className={cn('font-bold text-inherit mr-2', styles?.['navbar_brand--label'])}>
          {title}
        </span>
      )}
    </NavbarBrand>
  )
}
