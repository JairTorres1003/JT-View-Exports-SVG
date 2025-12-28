import React, { type ReactNode } from 'react'
import { useThemeConfig } from '@docusaurus/theme-common'
import Link from '@docusaurus/Link'
import useBaseUrl from '@docusaurus/useBaseUrl'
import Image from '@theme/IdealImage'
import { NavbarBrand } from '@heroui/navbar'

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
      className='flex items-center gap-2 mr-2'
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

      {title && <span className='font-bold text-inherit'>{title}</span>}
    </NavbarBrand>
  )
}
